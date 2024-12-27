import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    token: string | null;
    user: Record<string, any> | null;
}

const initialState: UserState = {
    token: null,
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setUser(state, action: PayloadAction<Record<string, any>>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
