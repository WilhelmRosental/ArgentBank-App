import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001/api/v1";

import "whatwg-fetch";

export const api = createApi({
    reducerPath: 'formLoginApi',
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: API_BASE_URL,
            prepareHeaders: (headers) => {
                headers.set('Content-Type', 'application/json');
                return headers;
            }
        })(args, api, extraOptions);
        return result;
    },
    endpoints: (builder) => ({
        getLoginToken: builder.mutation({
            query: ({ body }) => ({
                url: `/user/login`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }),
        }),
        getProfilData: builder.mutation({
            query: ({ token }) => ({
                url: '/user/profile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        putProfileName: builder.mutation({
            query: ({ token, body }) => ({
                url: '/user/profile',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            }),
        }),
    }),
});

export const {
    useGetLoginTokenMutation,
    useGetProfilDataMutation,
    usePutProfileNameMutation,
} = api;