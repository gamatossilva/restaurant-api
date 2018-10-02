import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/restaurants'
const INITIAL_STATE = {
    menu: [{}]
}

export function getList() {
    const request = axios.get(BASE_URL)
    return {
        type: 'RESTAURANTS_FETCHED',
        payload: request
    }
}

export function update(values) {
    console.log(values.menu[0])
    return submit(values, 'put')
}

export function create(values) {
    return submit(values, 'post')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/${id}`, values)
            .then(resp => {
                //toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(restaurant) {
    if (!restaurant.menu[0]) { restaurant.menu = [{}] }
    return [
        initialize('RestaurantMenuForm', restaurant)
    ]
}
export function init() {
    return [
        getList()
    ]
}