import { Owner } from './owner.module.js';

export class Animal extends Owner{

    constructor(owner_name, owner_address, owner_phone, type){
        super(owner_name, owner_address, owner_phone);
        this._type = type;
    }

    get type(){
        return this._type;
    }

}