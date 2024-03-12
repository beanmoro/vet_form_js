import { Animal } from './animal.module.js';

export class Pet extends Animal {
    constructor(pet_name, type, owner_name, owner_address, owner_phone){
        super(owner_name, owner_address, owner_phone, type);
        this._name = pet_name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

}