import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/lib/redux/authSlice'
import themeReducer from '@/lib/redux/themeSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
