import ADD_FLASH_MESSAGE from '../types.js';
//create the add flash messages
export function addFlashMessage(message) {
    console.log('addFlashMessages')
return dispatch => { 
        type: ADD_FLASH_MESSAGE,
        message
    };
   
}