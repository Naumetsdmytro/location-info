import { RootState } from '../store'

export const selectIsLogedIn = (state: RootState) => state.auth.isLoggedIn

export const selectUser = (state: RootState) => state.auth.user

export const selectIsLoading = (state: RootState) => state.auth.isLoading

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing

export const selectError = (state: RootState) => state.auth.error
