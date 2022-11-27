import model from '../../model/index'

export const GET_DATA = 'GET_DATA'
export const GET_DATA_BY_ID = 'GET_DATA_BY_ID'

export function get_data(){
    return function(dispatch){
        return dispatch({
            type: GET_DATA,
            payload: model
        })
    }
}

export function get_data_by_id(id){
    return function(dispatch){
        
        let data
        
        data = model.info[id-1]
        
        return dispatch({
            type: GET_DATA_BY_ID,
            payload: data
        })
    }
}