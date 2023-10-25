import {configureStore} from "@reduxjs/toolkit"
import Slice from "./components/Slice"

const store = configureStore({
    reducer:Slice
})

export default store;