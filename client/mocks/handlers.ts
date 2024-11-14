import { http, HttpResponse } from 'msw'

interface LoginRequest {
    email: string;
    password: string;
}

export const handlers = [
    // Handler pour la version complète de l'URL
    http.post("http://localhost:3001/api/v1/user/login", async ({ request }) => {
        const body = await request.json() as LoginRequest
        console.log('MSW: Login request received (full URL):', body)

        if (body && body.email === "steve@rogers.com" && body.password === "password456") {
            return HttpResponse.json({
                status: 200,
                message: "User successfully logged in",
                body: {
                    token: "fake-token"
                }
            })
        }

        return HttpResponse.json({
            message: "Error: User not found!",
            status: 400
        }, { status: 400 })
    }),

    // Handler pour l'URL relative
    http.post("/user/login", async ({ request }) => {
        const body = await request.json() as LoginRequest
        console.log('MSW: Login request received (relative URL):', body)

        if (body && body.email === "steve@rogers.com" && body.password === "password456") {
            return HttpResponse.json({
                status: 200,
                message: "User successfully logged in",
                body: {
                    token: "fake-token"
                }
            })
        }

        return HttpResponse.json({
            message: "Error: User not found!",
            status: 400
        }, { status: 400 })
    }),

    // Handler pour la version complète de l'URL du profil
    http.post("http://localhost:3001/api/v1/user/profile", async ({ request }) => {
        const authHeader = request.headers.get('Authorization')
        console.log('MSW: Profile request received (full URL):', { authHeader })

        if (authHeader === 'Bearer fake-token') {
            return HttpResponse.json({
                status: 200,
                message: "Successfully got user profile data",
                body: {
                    id: '123',
                    email: 'steve@rogers.com',
                    firstName: 'Steve',
                    lastName: 'Rogers'
                }
            })
        }

        return HttpResponse.json({
            status: 401,
            message: "Unauthorized"
        }, { status: 401 })
    }),

    // Handler pour l'URL relative du profil
    http.post("/user/profile", async ({ request }) => {
        const authHeader = request.headers.get('Authorization')
        console.log('MSW: Profile request received (relative URL):', { authHeader })

        if (authHeader === 'Bearer fake-token') {
            return HttpResponse.json({
                status: 200,
                message: "Successfully got user profile data",
                body: {
                    id: '123',
                    email: 'steve@rogers.com',
                    firstName: 'Steve',
                    lastName: 'Rogers'
                }
            })
        }

        return HttpResponse.json({
            status: 401,
            message: "Unauthorized"
        }, { status: 401 })
    })
]