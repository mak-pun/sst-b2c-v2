import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppThunk } from '../../app/store'
import type { LoginResponsePayload } from '../../api/accessControl'

import { AccessControl } from '../../api'
import { string } from 'yup'

interface AccessControlState {
  isAuthenticated: boolean;
  token: string;
  loginInfo: LoginResponsePayload | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: AccessControlState = {
  isAuthenticated: false,
  token: '',
  loginInfo: null,
  error: null,
  isLoading: false
}

const repoDetails = createSlice({
  name: 'accessControl',
  initialState,
  reducers: {
    loginStart(state: AccessControlState) {
      state.isLoading = true
    },
    loginSuccess(state: AccessControlState, action: PayloadAction<LoginResponsePayload>) {
      state.isAuthenticated = true
      state.loginInfo = action.payload
      state.token = action.payload.token
      state.isLoading = false
    },
    loginFailed(state: AccessControlState, action: PayloadAction<string>) {
      state.isLoading = false
      state.isAuthenticated = false
      state.loginInfo = null
      state.token = ''
      state.error = action.payload
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailed,
} = repoDetails.actions

export default repoDetails.reducer

export const login = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  try {
    dispatch(loginStart())
    const res = await AccessControl.login(email, password)
    dispatch(loginSuccess(res))
  } catch (err) {
    dispatch(loginFailed(err.toString()))
  }
}