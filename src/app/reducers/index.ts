import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {routerReducer} from "@ngrx/router-store";
import {isDevMode} from "@angular/core";

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.debug('state before: ', state);
    console.debug('action: ', action);

    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] =
  !isDevMode() ? [] : [
    logger,
  ];
