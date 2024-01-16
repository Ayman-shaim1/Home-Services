import { SHOW_TOAST,HIDE_TOAST } from "./toastTypes";


export const showToast = (info) => {
    return { type:SHOW_TOAST,payload:info };
}

export const hideToast = (info) => {
    return { type:HIDE_TOAST }
}