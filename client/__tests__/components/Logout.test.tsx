import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { clearUser } from "@/app/store/userSlice"; // Mocked action
import Logout from "@/components/Logout";
import { useRouter } from "next/navigation";

// Mock de `useDispatch` et `useRouter`
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Logout component", () => {
  let mockPush: jest.Mock;
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    mockDispatch = jest.fn();

    // Mock de `useRouter` pour simuler la redirection
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    // Mock de `useDispatch` pour simuler l'action Redux
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    // Mock du localStorage
    localStorage.setItem("Token", "fake-token");
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test("should remove token from localStorage, dispatch clearUser, and redirect to home page", () => {
    render(<Logout>Sign Out</Logout>);

    // Vérifie que le token est bien présent avant l'action
    expect(localStorage.getItem("Token")).toBe("fake-token");

    // Simule un clic sur le bouton de déconnexion
    fireEvent.click(screen.getByText(/sign out/i));

    // Vérifie que le token est supprimé du localStorage
    expect(localStorage.getItem("Token")).toBeNull();

    // Vérifie que l'action `clearUser` est dispatchée
    expect(mockDispatch).toHaveBeenCalledWith(clearUser());

    // Vérifie que la redirection vers la page d'accueil est effectuée
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
