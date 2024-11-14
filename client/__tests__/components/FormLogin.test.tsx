import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  vi,
} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import { setupServer } from "msw/node";
import FormLogin from "@/components/FormLogin";
import { api } from "@/app/api/formLoginApi";
import userReducer from "@/app/store/userSlice";
import type { UserState } from "@/app/store/userSlice";
import { handlers } from "../../mocks/handlers";

// Mock process.env
vi.mock("process.env", () => ({
  NEXT_PUBLIC_BASE_URL: "http://localhost:3001/api/v1",
}));

const theme = {
  colors: { primary: "#2196f3" },
};

// Mock Next.js router
const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Setup MSW
const server = setupServer(...handlers);

const createTestStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
    preloadedState: {
      user: {
        token: null,
        user: null,
      } as UserState,
    },
  });

describe("FormLogin", () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest: "error",
    });
  });

  afterEach(() => {
    server.resetHandlers();
    vi.clearAllMocks();
  });

  afterAll(() => server.close());

  async function renderAndSubmitForm(credentials: {
    email: string;
    password: string;
  }) {
    const store = createTestStore();
    const user = userEvent.setup();

    const result = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <FormLogin />
        </ThemeProvider>
      </Provider>
    );

    // Remplir et soumettre le formulaire
    await user.type(screen.getByLabelText(/username/i), credentials.email);
    await user.type(screen.getByLabelText(/password/i), credentials.password);
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    return { store, user, ...result };
  }

  it("handles successful login", async () => {
    const { store } = await renderAndSubmitForm({
      email: "steve@rogers.com",
      password: "password456",
    });

    // Attendre que le token soit mis à jour
    await waitFor(
      () => {
        const state = store.getState().user;
        expect(state.token).toBe("fake-token");
      },
      { timeout: 5000 }
    );

    // Attendre que les données du profil soient chargées
    await waitFor(
      () => {
        const state = store.getState().user;
        expect(state.user).toEqual({
          status: 200,
          message: "Successfully got user profile data",
          body: {
            id: "123",
            email: "steve@rogers.com",
            firstName: "Steve",
            lastName: "Rogers",
          },
        });
      },
      { timeout: 5000 }
    );

    // Vérifier la redirection
    expect(mockPush).toHaveBeenCalledWith("/profile");
  }, 10000);

  it("handles failed login attempt", async () => {
    await renderAndSubmitForm({
      email: "wrong@email.com",
      password: "wrongpass",
    });

    await waitFor(
      () => {
        expect(screen.getByText(/login failed/i)).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  }, 10000);
});
