// EditName.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "@/app/store/userSlice";
import { api } from "@/app/api/formLoginApi";
import EditName from "@/components/EditName";
import { setUser } from "@/app/store/userSlice";
import { RootState } from "@/app/store";

// Mock de l'API mutation
jest.mock("../../src/app/api/formLoginApi", () => ({
  usePutProfileNameMutation: jest.fn(),
}));

// Créer un mock pour la mutation
const mockPutProfileName = jest.fn();

describe("EditName Component", () => {
  let store: any;

  beforeEach(() => {
    // Configuration du store mocké
    store = configureStore({
      reducer: {
        user: userSlice.reducer,
        [api.reducerPath]: api.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    });

    // Mock de la mutation API
    (
      require("@/app/api/formLoginApi").usePutProfileNameMutation as jest.Mock
    ).mockReturnValue([mockPutProfileName]);
  });

  it("should render Edit button initially", () => {
    render(
      <Provider store={store}>
        <EditName />
      </Provider>
    );

    // Vérifie que le bouton "Edit Name" est visible au départ
    expect(screen.getByText(/edit name/i)).toBeInTheDocument();
  });

  it("should open the form when Edit button is clicked", () => {
    render(
      <Provider store={store}>
        <EditName />
      </Provider>
    );

    // Trouver et cliquer sur le bouton "Edit Name"
    fireEvent.click(screen.getByText(/edit name/i));

    // Vérifier que le formulaire s'affiche
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
  });

  it("should call putProfileName and dispatch setUser action when form is submitted", async () => {
    const userData = { id: 1, firstName: "John", lastName: "Doe" };

    // Simuler la réponse de l'API après l'envoi du formulaire
    mockPutProfileName.mockResolvedValue({
      data: userData,
    });

    render(
      <Provider store={store}>
        <EditName />
      </Provider>
    );

    // Ouvrir le formulaire
    fireEvent.click(screen.getByText(/edit name/i));

    // Remplir les champs du formulaire
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });

    // Soumettre le formulaire
    fireEvent.submit(screen.getByRole("form"));

    // Attendre que l'appel à l'API soit terminé
    await waitFor(() => {
      expect(mockPutProfileName).toHaveBeenCalledWith({
        token: null, // Ajustez selon la logique de votre store
        body: { firstName: "John", lastName: "Doe" },
      });
    });

    // Vérifier que l'action `setUser` a été dispatchée avec les données correctes
    const state = store.getState() as RootState;
    expect(state.user.user).toEqual(userData);
  });
});
