import { GET_DATA, GET_DATA_BY_ID } from "../actions";

const initialState = {
    data: {},
    linkVideo: '',
    transcripcion: '',
    preguntas: [],
    escenario: ''
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type){
        case GET_DATA:
            
            return {
                ...state,
                data: action.payload.info
        }
        case GET_DATA_BY_ID:
            console.log(action.payload ? action.payload : 'Undefined che')
            return {
                ...state,
                data: action.payload ? action.payload : '',
                linkVideo: action.payload ? action.payload.linkVideo : '',
                transcripcion: action.payload ? action.payload.transcripcion : '',
                preguntas: action.payload ? action.payload.preguntas : '',
                escenario: action.payload ? action.payload.escenario : ''
            }
        default:
            return state
    }
}

export default rootReducer;