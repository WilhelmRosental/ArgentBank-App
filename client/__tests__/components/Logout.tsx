import { describe, it, expect, beforeEach } from "vitest";
import { setToken, setUser, clearUser } from "@/app/store/userSlice";
import { store } from "@/app/store/index";

describe("userSlice actions", () => {
  // Reset le store avant chaque test
  beforeEach(() => {
    store.dispatch(clearUser());
  });

  it("should set the token", () => {
    // Arrange
    const token = "myTestToken";

    // Act
    store.dispatch(setToken(token));

    // Assert
    const state = store.getState().user;
    expect(state.token).toBe(token);
  });

  it("should set the user data", () => {
    // Arrange
    const userData = {
      id: 1,
      name: "John Doe",
    };

    // Act
    store.dispatch(setUser(userData));

    // Assert
    const state = store.getState().user;
    expect(state.user).toEqual(userData);
  });

  it("should clear the user data", () => {
    // Arrange - Set some initial data
    const token = "testToken";
    const userData = { id: 1, name: "John Doe" };
    store.dispatch(setToken(token));
    store.dispatch(setUser(userData));

    // Act
    store.dispatch(clearUser());

    // Assert
    const state = store.getState().user;
    expect(state.token).toBeNull();
    expect(state.user).toBeNull();
  });

  it("should maintain other state properties when setting token", () => {
    // Arrange
    const userData = { id: 1, name: "John Doe" };
    const token = "newToken";
    store.dispatch(setUser(userData));

    // Act
    store.dispatch(setToken(token));

    // Assert
    const state = store.getState().user;
    expect(state.token).toBe(token);
    expect(state.user).toEqual(userData);
  });

  it("should maintain other state properties when setting user", () => {
    // Arrange
    const token = "myToken";
    const userData = { id: 1, name: "John Doe" };
    store.dispatch(setToken(token));

    // Act
    store.dispatch(setUser(userData));

    // Assert
    const state = store.getState().user;
    expect(state.token).toBe(token);
    expect(state.user).toEqual(userData);
  });
});
