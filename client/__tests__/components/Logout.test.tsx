import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { clearUser } from "@/app/store/userSlice"; // Mocked action
import Logout from "@/components/Logout";
import { useRouter } from "next/navigation";

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

    // mock de `useRouter` pour simuler la redirection
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    // mock de `useDispatch` pour simuler l'action Redux
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    // mock du localStorage
    localStorage.setItem("Token", "fake-token");
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("should remove token from localStorage, dispatch clearUser, and redirect to home page", () => {
    render(<Logout>Sign Out</Logout>);

    // vérifie que le token
    expect(localStorage.getItem("Token")).toBe("fake-token");

    // clic sur le bouton de déconnexion
    fireEvent.click(screen.getByText(/sign out/i));

    // vérifie que le token est supprimé du localStorage
    expect(localStorage.getItem("Token")).toBeNull();

    // vérifie que l'action `clearUser` est dispatchée
    expect(mockDispatch).toHaveBeenCalledWith(clearUser());

    // vérifie que la redirection
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
