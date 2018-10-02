import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/TabActions'

const BASE_URL = 'http://localhost:3003/restaurants'
const INITIAL_STATE = {
    menu: [{}]
}

export function getList() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'RESTAURANTS_FETCHED',
        payload: request
    }
}

export function create(values) {
    console.log(values)
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(restaurant) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('RestaurantForm', restaurant)
    ]
}

export function showDelete(restaurant) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('RestaurantForm', restaurant)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('RestaurantForm', INITIAL_STATE)
    ]
}