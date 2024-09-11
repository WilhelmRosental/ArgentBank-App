import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/login', async ({ request }) => {
        const body = await request.json();
        console.log('Captured a "POST /login" request with body:', body);

        return HttpResponse.json({
            body: {
                token: 'fake-token',
            },
        }, { status: 200 });
    }),

    http.get('/profile', () => {
        console.log('Captured a "GET /profile" request');

        return HttpResponse.json({
            data: {
                username: 'JohnDoe',
                email: 'john.doe@example.com',
            },
        }, { status: 200 });
    }),
];
