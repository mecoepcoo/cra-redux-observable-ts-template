import { ActionsObservable, ofType } from 'redux-observable'
import { delay, map } from 'rxjs/operators'
import { UPDATE_COUNTER, UPDATE_COMPLETE, CounterAction } from '../modules/counter'

export const counterEpic = (action$: ActionsObservable<any>) => {
  return action$.pipe(
    ofType<CounterAction>(UPDATE_COUNTER),
    delay(1000),
    map((action) => ({
      type: UPDATE_COMPLETE,
      payload: action.payload,
    }))
  )
}
