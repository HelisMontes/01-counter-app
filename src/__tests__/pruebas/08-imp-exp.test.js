import { getHeroeById, getHeroesByOwner } from '../../pruebas/08-imp-exp'
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Heores', () => {
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        const heroData = heroes.find( h => h.id === id );
        expect( hero) .toEqual( heroData );
    })

    test('Si el heroe no existe, return undefined', () => {
        const id = 10;
        const hero = getHeroeById(id);
        expect ( hero ).toBe( undefined );
    })
    
    test('Retornar un arrelgo de los heroes de  DC', () => {
        const owner = 'DC';
        const heroDC = getHeroesByOwner(owner);
        const dataHeroDC = heroes.filter (h => h.owner === owner);
        expect ( heroDC ).toEqual( dataHeroDC );
    })

    test('Retornar la longitud de un array con los heores de Marvel', () => {
        const owner = 'Marvel'
        const heroDC = getHeroesByOwner(owner);
        expect ( heroDC.length) .toBe( 2 );
    })
    
})
