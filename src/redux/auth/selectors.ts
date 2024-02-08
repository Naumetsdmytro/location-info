import { RootState } from "../store";


export const selectIsLogedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUserName = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectError = (state: RootState) => state.auth.error;