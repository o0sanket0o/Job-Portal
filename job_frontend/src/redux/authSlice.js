import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth", 
    initialState: {
        loading: false,
        user: null,
        //used in whole project whenever we need to move from one page to another
    },
    reducers: {
        //Actions to be added here. Here we add a type of function
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const {setLoading} = authSlice.actions;
export const {setUser} = authSlice.actions;
export default authSlice.reducer;
//Now we can add the auth slice to our store.