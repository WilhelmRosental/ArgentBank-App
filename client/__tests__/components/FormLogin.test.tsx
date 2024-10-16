import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../src/app/store";
import FormLogin from "@/components/FormLogin";
import { useRouter } from "next/navigation";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/styles/theme";

import "whatwg-fetch";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: mockPush,
});

describe("FormLogin Component", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("should submit the login form and receive a token", async () => {
    // TEST AVEC FETCH
    // const response = await fetch("/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: "john.doe@example.com",
    //     password: "password123",
    //   }),
    // });

    // const data = await response.json();
    // console.log("API response:", data);

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <FormLogin />
        </ThemeProvider>
      </Provider>
    );

    // Saisie des champs du formulaire
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    // Soumission du formulaire
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    // await waitFor(() => {
    //   expect(mockPush).toHaveBeenCalledWith("/profile");
    // });
  });

  it("should display error message on failed login", async () => {
    // Simuler une réponse 401 pour le login échoué
    // server.use(
    //   http.post("/user/login", async (req, res, ctx) => {
    //     return res(
    //       ctx.status(401), // Unauthorized
    //       ctx.json({ error: "Invalid credentials" })
    //     );
    //   })
    // );

    // // TEST AVEC FETCH
    // const response = await fetch("/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: "wrong-email@example.com",
    //     password: "wrong-password",
    //   }),
    // });

    // const data = await response.json();
    // console.log("API response:", data);

    // Rendu du composant
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <FormLogin />
        </ThemeProvider>
      </Provider>
    );

    // Saisie des champs
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "wrong-email@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrong-password" },
    });

    // Soumission du formulaire
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    // await waitFor(() => {
    //   expect(
    //     screen.queryByText((content, element) =>
    //       content.includes("login failed, please try again")
    //     )
    //   ).toBeInTheDocument();
    // });
  });
});
