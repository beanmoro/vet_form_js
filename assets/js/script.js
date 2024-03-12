import { Pet } from './pet.module.js';

const form = document.querySelector('form');

const inputOwnerName = document.querySelector('#propietario');
const inputPhoneNumber = document.querySelector('#telefono');
const inputAddress = document.querySelector('#direccion');
const inputPetName = document.querySelector('#nombreMascota');
const selectPetType = document.querySelector('#tipo');
const inputPetIllness = document.querySelector('#enfermedad');

const listResultInfo = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        if( inputOwnerName.value.trim().length <= 0 ||
            inputPhoneNumber.value.trim().length <= 0 ||
            inputAddress.value.trim().length <= 0 ||
            inputPetName.value.trim().length <= 0 ||
            inputPetIllness.value.trim().length <= 0
        ){
            alert('ERROR: Por favor llene todos los campos!');
            return;
        }  

        const ownerName = inputOwnerName.value;
        const ownerPhone = inputPhoneNumber.value;
        const ownerAddress = inputAddress.value;
        const petName = inputPetName.value;
        const petIllness = inputPetIllness.value;

        const petType = selectPetType.value;


        const pet = new Pet(petName, petType, ownerName, ownerAddress, ownerPhone);


        listResultInfo.innerHTML += `<li>
                                        El nombre del dueño es: ${pet.getOwnerData().name}. El domicilio es: ${pet.getOwnerData().address}, y el numero telefonico de contacto es: ${pet.getOwnerData().phone}
                                    </li>
                                    <li>
                                        El tipo de animal es un: ${pet.type}, mientras que el nombre de la mascota es: ${pet.name} y la enfermedad es: ${petIllness}
                                    </li>
                                    <hr>
                                    `;


    });
});