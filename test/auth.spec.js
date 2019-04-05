import {validateAccount,validateEmail, validateSignIn,validateEmailSignIn} 
from "./../src/assets/js/validation.js"


/*1) Validaciones de las funciones que chequean createAccount()*/
describe("validateAccount",()=>{
    it('deberia retornar false, si el usuario no ingresa correo y contraseña',()=>{
        expect(validateAccount("Fabiola","Orellana","","")).toBe(false);
    })
})

describe("validateAccount",()=>{
    it('deberia retornar true, si el usuario ingresa todos los campos',()=>{
        expect(validateAccount("Fabiola","Orellana","fabiola.orellana.g@gmail.com","clavecita"))
        .toBe(true);
    })
})

describe("validateAccount",()=>{
    it('deberia retornar false, si el usuario no completa ningun campo solicitado',()=>{
        expect(validateAccount("","","","")).toBe(false);
    })
})

describe("validateEmail",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmail("correomalo")).toBe(false);
    })
})

describe("validateEmail",()=>{
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmail("correobueno@gmail.com")).toBe(true);
    })
})

/*2) Validaciones de las funciones que chequean signIn() */
describe("validateSignIn",()=>{
    it('deberia retornar true, si el usuario ingresa todos los campos',()=>{
        expect(validateSignIn("fabiola.orellana.g@gmail.com","clavecita"))
        .toBe(true);
    })
})

describe("validateSignIn",()=>{
    it('deberia retornar false, si el usuario no ingresa ningún cambio',()=>{
        expect(validateSignIn("",""))
        .toBe(false);
    })
})

describe("validateEmailSignIn",()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect(validateEmailSignIn("correomalo")).toBe(false);
    })
})

describe("validateEmailSignIn",()=>{
    it('deberia retornar true, si el correo es valido',()=>{
        expect(validateEmailSignIn("correobueno@gmail.com")).toBe(true);
    })
})
