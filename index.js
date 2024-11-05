//1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla egenskaperna: name, address, zipcode, city, students med värdet av en tom array och teachers som en tom array.
    let teknikhogskolan = {
    name: "Teknikhögskolan",
    students: [],
    teachers: [],
    address: "Kalkstensvägen 3",  
    zipcode: "224 78", 
    city: "Lund",
  }

//2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet. Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt.  
let matematik = {
    name: "matematik",
    students: [],
    teachers: [],
  }
let language = {
    name: "language",
    students: [],
    teachers: [],
}
let history = {
    name: "history",
    students: [],
    teachers: [],
}

//3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. Egenskaperna ska vara name, age, gender och subjects som en tom array.
const lisa = {
    name: "Lisa",
    age: 23, 
    gender: "female",
    subjects: [],
}

const sara = {
    name: "Sara",
    age: 27,
    gender: "female",
    subjects: [],
}

const dennis = {
    name: "Dennis",
    age: 25,
    gender: "male",
    subjects: [],
}

const elias = {
    name: "Elias",
    age: 20, 
    gender: "male",
    subjects: [],
}

const anna = {
    name: "Anna",
    age: 22,
    gender: "female",
    subjects: [],
}

//4. Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.
const hanna = {
    name: "Hanna",
    subjects: [],
}

const helen = {
    name: "Helen",
    subjects: [],
}

//5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas?
hanna.subjects.unshift("matematik");
console.log(hanna.name + " " + hanna.subjects);
//Svar: Bra om man vill veta vilken ämne som en lärare undervisa i. 

//6. 




