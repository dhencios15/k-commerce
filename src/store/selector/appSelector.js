import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

export const appStatus = createSelector([selectApp], (app) => {
  return {
    isLoading: app.isLoading,
    error: app.error,
  };
});
