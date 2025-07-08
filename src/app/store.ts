import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import weatherReducer from '@/features/weather/weatherSlice'
import historyReducer from '@/features/history/historySlice'
import suggestionReducer from '@/features/suggestion/suggestionSlice'
import rootSaga from './rootSaga'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    history: historyReducer,
    suggestion: suggestionReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
