// FormLogin.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "@/app/store/userSlice";
import { api } from "@/app/api/formLoginApi";
import FormLogin from "../../src/components/FormLogin";
import { server } from "../../mocks/server"; // Le serveur MSW
import { http, HttpResponse } from "msw";

// Configurer le store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

describe("FormLogin Component with MSW", () => {
  server.events.on("request:start", ({ request }) => {
    console.log("MSW intercepted:", request.method, request.url);
  });

  // it("should successfully login and redirect to the profile page", async () => {
  //   render(
  //     <Provider store={store}>
  //       <FormLogin />
  //     </Provider>
  //   );

  //   // Simuler la saisie du formulaire
  //   fireEvent.change(screen.getByLabelText(/username/i), {
  //     target: { value: "test@example.com" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/password/i), {
  //     target: { value: "password123" },
  //   });

  //   // Soumettre le formulaire
  //   fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

  //   // Attendre que l'API retourne le token et les données de profil
  //   await waitFor(() => {
  //     expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  //   });
  // });

  // it("should handle login failure", async () => {
  //   // Redéfinir le handler pour retourner une erreur de login
  //   server.use(
  //     http.post("/api/login", () => {
  //       // Respond with 401 status and JSON message
  //       return HttpResponse.json(
  //         { message: "Invalid credentials" },
  //         { status: 401 } // Set the status code to 401 (Unauthorized)
  //       );
  //     })
  //   );

  //   render(
  //     <Provider store={store}>
  //       <FormLogin />
  //     </Provider>
  //   );

  //   // Simuler la saisie du formulaire
  //   fireEvent.change(screen.getByLabelText(/username/i), {
  //     target: { value: "wrong@example.com" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/password/i), {
  //     target: { value: "wrongpassword" },
  //   });

  //   // Soumettre le formulaire
  //   fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

  //   // Attendre que l'erreur soit affichée
  //   await waitFor(() => {
  //     expect(
  //       screen.getByText(/login failed, please try again/i)
  //     ).toBeInTheDocument();
  //   });
  // });
});
