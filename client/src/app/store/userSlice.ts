import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
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
            console.log('setToken action dispatched:', action.payload);
            state.token = action.payload;
            console.log('New state after setToken:', state);
        },
        setUser(state, action: PayloadAction<Record<string, any>>) {
            console.log('setUser action dispatched:', action.payload);
            state.user = action.payload;
            console.log('New state after setUser:', state);
        },
        clearUser(state) {
            console.log('clearUser action dispatched');
            state.token = null;
            state.user = null;
            console.log('New state after clearUser:', state);
        },
    },
});

export const { setToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
