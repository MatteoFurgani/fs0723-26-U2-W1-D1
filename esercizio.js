//ESERCIZIO 1

// CREO LA CLASSE
class User {
  // INSERISCO I PARAMETRI DA RICHIMARE
  constructor(_firstName, _lastName, _age, _location) {
    //  INSERISCO IL VALORE DI DEFAUL AL PARAMETRO
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  // METODO PER FARE IL CONFRONTO DELL'ETà
  verificaEtà(persone) {
    if (this.age > persone.age) {
      return `${this.firstName} è più vecchio di ${persone.firstName}`;
    } else if (this.age < persone.age) {
      return `${this.firstName} è più giovane di ${persone.firstName}`;
    }
  }
}

// CON  *NEW USER* RICHIAMO LA CLASSE, OSSIA L'OGGETTO
const matteo = new User("Matteo", "Furgani", 33, "Roma");
console.log("Matteo", matteo);

const claudia = new User("Claudia", "Renganeschi", 31, "Roma");
console.log("Claudia", claudia);

const x = new User("Matteo", "Furgani", 33, "Roma");
const y = new User("Claudia", "Reganeschi", 31, "Roma");

const controlloEtà = y.verificaEtà(x);
console.log(controlloEtà);

// ESERCIZIO 2
const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const animali = [];

class Animale {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  stessoPadrone(altroAnimale) {
    return this.ownerName === altroAnimale.ownerName;
  }
}

const fillRowWithCards = function () {
  const row = document.getElementById("contacts");
  row.innerHTML = "";
  animali.forEach((animale) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${animale.petName}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${animale.ownerName}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${animale.species}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${animale.breed}</h6>
                  
              </div>
          </div>
          `;

    row.appendChild(newCol);
  });

  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const animale = new Animale(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );

  const duplicati = animali.filter((animaleEsistente) =>
    animale.stessoPadrone(animaleEsistente)
  );

  console.log("Numero di animali con lo stesso padrone:", duplicati.length);

  console.log("Animale domestico", animale);
  animali.push(animale);
  fillRowWithCards();
});
