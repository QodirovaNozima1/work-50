export const initialState ={
    count:0,
    wishlist:[]
}


export const reducer = (state,{type,payload}) =>{
    switch(type){
        case "TOGGLE_LIKE":
            return {...state,wishlist: [...state.wishlist,payload]}
            default:
                return state
    }
}