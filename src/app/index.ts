import {store} from './store'
import App from './App'
import {asyncActions, slice as appSlice} from './appSlice';

const appAction = {
    ...appSlice.actions,
}

export {
    store,
    App,
    appAction,
    asyncActions
}
