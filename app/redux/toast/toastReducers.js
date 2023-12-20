import { SHOW_TOAST, HIDE_TOAST } from "./toastTypes";

export const toastReducer = (state = {  }, action) => {
  const { payload, type } = action;
  switch (type) {
    case SHOW_TOAST:
      return { show: true, ...payload };
    case HIDE_TOAST:
      return { show: false };
    default:
      return state;
  }
};
;