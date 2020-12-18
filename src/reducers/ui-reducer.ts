import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export interface State {
  app: string
  page: string
  loading: boolean
}

const INITIAL_STATE = {
  app: '',
  page: '',
  loading: false,
};

export const ui = (state: State = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return { ...state, ...action.payload };
    case "APP":
      return { ...state, app: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    case 'FORM_SUCCESS':
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};