import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/user/login', async ({ request }) => {
        const body = await request.json();
        console.log('Captured a "POST /user/login" request with body:', body);

        return HttpResponse.json({
            token: 'fake-token',  // Retourner directement le token sans body
        }, { status: 200 });
    }),

    // Handler pour obtenir le profil utilisateur
    http.get('/user/profile', () => {
        console.log('Captured a "GET /user/profile" request');

        return HttpResponse.json({
            data: {
                email: "john.doe@example.com",
                password: 'password123',
            },
        }, { status: 200 });
    }),
];