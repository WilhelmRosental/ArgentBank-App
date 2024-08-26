import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../api/formLoginApi';
import userReducer from './userSlice';

function saveToLocalStorage(state: any) {
    try {
        if (typeof window !== "undefined") {
            const serializedState = JSON.stringify(state);
            localStorage.setItem("Token", serializedState);
        }
    } catch (e) {
        console.warn('Could not save state', e);
    }
}

function loadFromLocalStorage() {
    try {
        if (typeof window !== "undefined") {
            const serializedState = localStorage.getItem("Token");
            if (serializedState === null) return undefined;
            return JSON.parse(serializedState);
        }
        return undefined;
    } catch (e) {
        console.warn('Could not load state', e);
        return undefined;
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    [api.reducerPath]: api.reducer,
});

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
    preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;