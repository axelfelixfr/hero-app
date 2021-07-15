import { types } from "../types/types";

// Se crea un reducer para la autentificación
export const authReducer = (state = {}, action) => {
    // Solo se tendrán dos tipos de action, para el login (Iniciar sesión) y logout (Cerrar sesión)
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}