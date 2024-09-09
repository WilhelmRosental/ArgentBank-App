// Logout.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Logout from "@/components/Logout";
import { useRouter } from "next/navigation";

// Mock du router de Next.js
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Logout Component", () => {
  let mockReplace: jest.Mock;

  beforeEach(() => {
    // Mock de la fonction replace du router de Next.js
    mockReplace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });

    // Mock du localStorage
    global.localStorage.setItem("Token", "mockToken");
  });

  afterEach(() => {
    // Nettoyage du localStorage après chaque test
    global.localStorage.removeItem("Token");
  });

  it("should remove token from localStorage and redirect to /login when clicked", () => {
    render(<Logout />);

    // Vérifier que le token est bien dans le localStorage au début
    expect(global.localStorage.getItem("Token")).toEqual("mockToken");

    // Simuler le clic sur "Sign Out"
    fireEvent.click(screen.getByText(/sign out/i));

    // Vérifier que le token a été supprimé du localStorage
    expect(global.localStorage.getItem("Token")).toBeNull();

    // Vérifier que la redirection vers "/login" a eu lieu
    expect(mockReplace).toHaveBeenCalledWith("/login");
  });
});
