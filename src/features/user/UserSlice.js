import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth: {

    },
    
    load: true,

}

export const userSlice = createSlice({

    name: 'User',

    initialState,


    reducers: {

        authUser: (state, action) => {
            state.auth = action.payload
        },

        isLoad: (state) => {
            state.load = false
        }
    }

})


export const { authUser, isLoad } = userSlice.actions




export default userSlice.reducer