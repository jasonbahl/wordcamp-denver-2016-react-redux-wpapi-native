import {
    ROUTE_POP,
    ROUTE_PUSH_NEW
} from '../../action-types';

export function pushNewRoute( route ) {
    return {
        type: ROUTE_PUSH_NEW,
        route,
    };
}

export function popRoute() {
    return {
        type: ROUTE_POP
    };
}