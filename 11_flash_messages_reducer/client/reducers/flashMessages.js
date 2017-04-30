// Let define the reducer which take the state as message of array and action as
// a object and return new state.
import ADD_FLASH_MESSAGE from '../types';
import shortid from 'shortid';
export default (state = [], action = {})=>{
    console.log('type:', action.type)
    console.log('action:',action)
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            // you have to return new state that is going to be array with the state that we
            // had before and then we add another object to this collection
            return [
                ...state, {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ];

        default:
            return state;
    }
}