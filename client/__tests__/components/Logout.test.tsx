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

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    localStorage.setItem("Token", "fake-token");
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("should remove token from localStorage, dispatch clearUser, and redirect to home page", () => {
    render(<Logout>Sign Out</Logout>);

    expect(localStorage.getItem("Token")).toBe("fake-token");

    fireEvent.click(screen.getByText(/sign out/i));

    expect(localStorage.getItem("Token")).toBeNull();

    expect(mockDispatch).toHaveBeenCalledWith(clearUser());

    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
