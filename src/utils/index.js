import Store from "../redux/Store"

export const getAuthToken=()=>{
    const {token}=Store.getState().GlobalReducer
    return token
}