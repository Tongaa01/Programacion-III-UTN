import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGif } from "../../types/gif"

interface IInitialState {
    gif: IGif[]
}

// Define the initial state using that type
const initialState: IInitialState = {
    gif: []
}

const gifSlice = createSlice({
    name: 'gifStates',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setGifs: (state, action: PayloadAction<IGif[]>) => {
            state.gif = action.payload
        },
        resetGifs: (state) =>{
            state.gif = []
        }
    },
})

export const {setGifs, resetGifs} = gifSlice.actions
export default gifSlice.reducer