// store/userSlice.test.ts
import { setToken, setUser, clearUser } from '@/app/store/userSlice';
import { store } from '@/app/store/index';

describe('userSlice actions', () => {
    it('should set the token', () => {
        const token = 'myTestToken';

        store.dispatch(setToken(token));

        const state = store.getState().user;

        expect(state.token).toBe(token);
    });

    it('should set the user data', () => {
        const userData = { id: 1, name: 'John Doe' };

        store.dispatch(setUser(userData));

        const state = store.getState().user;

        expect(state.user).toEqual(userData);
    });

    it('should clear the user data', () => {
        store.dispatch(clearUser());

        const state = store.getState().user;

        expect(state.token).toBeNull();
        expect(state.user).toBeNull();
    });
});
