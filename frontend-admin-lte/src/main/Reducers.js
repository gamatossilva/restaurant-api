import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/TabReducer'

import RestaurantReducer from '../restaurant/RestaurantReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    restaurant: RestaurantReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer