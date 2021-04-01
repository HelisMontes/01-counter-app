import {getUser} from '../../pruebas/05-funciones'

describe('Prueba en 05-funciones', () => {
    test('getUser debe de retornar un Obj ', () => {
        const testUser  = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect( testUser ).toEqual( user );
    });
})
