import {validateAccount,validateEmail} from "./../src/assets/js/validation.js"

describe("validateAccount",()=>{
    it('deberia retornar false, si el usuario no ingresa correo y email',()=>{
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