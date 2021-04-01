import {getSaludo} from '../../pruebas/02-template-string'

describe('Pruebas en el archivo 02-template-string.test', () => {
    test('getSaludo debe retornar hola fernando', () => {
        const nombre = 'Fernando';
        const result = getSaludo(nombre);
        expect(result).toBe(`Hola ${nombre}`);
    })
    
})
