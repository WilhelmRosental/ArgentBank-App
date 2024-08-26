import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

export interface IResponseFetch<T> {
    data?: {
        body: T
        message: string
        status: number
    }
    error?: FetchBaseQueryError | SerializedError
}

export interface IResponseProfile {
    id: string
    email: string
    firstName: string
    lastName: string
    createdAt: string
    updatedAt: string
}

export interface IChildrenProps {
    children: React.ReactNode;
}

export interface IDataUser {
    token?: string
    user?: IUser
}

export interface IUser {
    body?: {
        id: string
        email: string
        firstName: string
        lastName: string
        createdAt: string
        updatedAt: string
    }
    message: string
    status: number
}
