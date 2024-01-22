import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AuthState } from './types';
import { RootState } from '../../store';

interface User {
    username: string;
    email: string;
}

interface AuthState {
    token: string;
    user: User | null;
}

const initialState: AuthState = {
    token: '',
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
    },
});

export const { setToken, setUser } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export const selectUser = (state: RootState) => state.auth.user;