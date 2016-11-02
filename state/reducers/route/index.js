import { globalNav } from '../../../app';

import {
    ROUTE_POP,
    ROUTE_PUSH_NEW
} from '../../action-types';

const initialState = {
    routes: ['articleList']
}

export default function route( state = initialState, action ){

    switch( action.type ) {

        case ROUTE_PUSH_NEW:
            globalNav.navigator.push({ id: action.route });
            return {
                routes: [...state.routes, action.route],
            };

        case ROUTE_POP:

            globalNav.navigator.pop();
            const routes = state.routes;
            routes.pop();
            return {
                routes,
            };

        default:
            return state;

    }

}