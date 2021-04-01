import { retornaArreglo } from "../../pruebas/07-deses-arr";

describe('Prueba en destructuración', () => {
    test('debe retornar un string y un numero', () => {
        const result = retornaArreglo();
        expect( result ).toEqual(['ABC', 123]); 
    })

    test('debe retornar un string y un numero 2', () => {
        const [ string, number ] = retornaArreglo();
        
        expect( string ).toBe('ABC'); 
        expect( typeof string ).toBe('string'); 
        
        expect( number ).toBe(123); 
        expect( typeof number ).toBe('number'); 

    })
    
});
