// types
export const UPDATE_COUNTER = 'counter/UPDATE_COUNTER'
export const UPDATE_COMPLETE = 'counter/UPDATE_COMPLETE'

export type UPDATE_COUNTER = typeof UPDATE_COUNTER
export type UPDATE_COMPLETE = typeof UPDATE_COMPLETE

export interface IUpdateCounter {
  type: UPDATE_COUNTER
  payload: number
}

export interface IUpdateComplete {
  type: UPDATE_COMPLETE
  payload: number
}
export type ModifyAction = IUpdateCounter | IUpdateComplete

// reducer
const initialState = {
  count: 0,
}

export interface ICounterState {
  readonly count: number
}

export function counter(state = initialState, action: ModifyAction): ICounterState {
  switch (action.type) {
    case UPDATE_COUNTER:
      return state
    case UPDATE_COMPLETE:
      return { count: state.count + action.payload }
    default:
      return state
  }
}

// action
export function updateCounter(countStep: number) {
  return {
    type: UPDATE_COUNTER,
    payload: countStep,
  }
}
