describe ('Pruebas en el archivo demo.test', ()=>{
    const cadena1 = 'Hola Mundo'
    const cadena2 = 'Hola Mundo'
    test('Validar si son iguales', () => {
        expect(cadena1).toBe(cadena2);
    }); 
});