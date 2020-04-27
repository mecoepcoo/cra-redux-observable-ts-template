import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { counter } from './modules/counter'
import { counterEpic } from './epics/counterEpic'

export const rootReducer = combineReducers({
  counter,
})

export const rootEpic = combineEpics(counterEpic)

export type RootState = ReturnType<typeof rootReducer>
