import { combineReducers } from "redux";
import CakeReducer from './Cakes/CakeReducer'
import IceReducer from './IceCream/IceReducer'
import  UserReducer  from './User/UserReducer'

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream : IceReducer,
    user: UserReducer
})
export default rootReducer  