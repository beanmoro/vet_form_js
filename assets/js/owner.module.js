export class Owner {

    constructor(owner_name, owner_address, owner_phone){
        this._oName = owner_name;
        this._oAddress = owner_address;
        this._oPhone = owner_phone;
    }

    getOwnerData(){
        return { name: this._oName, address: this._oAddress, phone: this._oPhone};
    }

}