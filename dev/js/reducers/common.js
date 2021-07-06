import { SET_MENUBAR_STATE } from '@constants/types';

const defaultState = {
    activeWidget: 'dashboard'
}

export default function (state = defaultState, action) {

    switch (action.type) {
        
        case SET_MENUBAR_STATE:{
            let newState = { ...state}
            const { activeWidget } = action.payload
            newState.activeWidget = activeWidget;
            return newState
        }

    }
    return state
}