//1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpel. Skolan ska innehålla egenskaperna: name, address, zipcode, city, students med värdet av en tom array och teachers som en tom array.
    let teknikhogskolan = {
    name: "Teknikhögskolan",
    students: [],
    teachers: [],
    address: "Kalkstensvägen 3",  
    zipcode: "224 78", 
    city: "Lund"
  }

//2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet. Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt.  
let matematik = {
    name: "matematik",
    students: ["Lisa"],
    teachers: []
  }
let language = {
    name: "language",
    students: [],
    teachers: []
}
let history = {
    name: "history",
    students: [],
    teachers: []
}

//3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. Egenskaperna ska vara name, age, gender och subjects som en tom array.
const lisa = {
    name: "Lisa",
    age: 23, 
    gender: "female",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    
    }
}

const sara = {
    name: "Sara",
    age: 27,
    gender: "female",
    subjects: []
}

const dennis = {
    name: "Dennis",
    age: 25,
    gender: "male",
    subjects: []
}

const elias = {
    name: "Elias",
    age: 20, 
    gender: "male",
    subjects: []
}

const anna = {
    name: "Anna",
    age: 22,
    gender: "female",
    subjects: []
}

//4. Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.
const hanna = {
    name: "Hanna",
    subjects: []
}

const helen = {
    name: "Helen",
    subjects: []
}

//5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem. Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas?
hanna.subjects.unshift("matematik");
console.log(hanna.name + " " + hanna.subjects);

//Svar: Skillnad mellan push() och unshift(), är att push() lägger till en element i slutet av en array, medan unshift lägger till elementen i början av arrayen. Man kan använda datan ur ett admins perspektiv genom att man kan få ut en lista på/ ta reda på vilken ämne som läraren undervisa i. 

//6. Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen.
console.log(matematik.students);

//7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall lägga till kopplingen i båda objekten. Alltså vi börjar med att lägga till ett ämne i en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren. Då har vi en referens på båda sidorna. Egentligen är detta något som kallas för en cirkulär referens vilket vi helst vill undvika när vi programmerar, då kan orsaka krashar i vissa fall, men i syftet för uppgiften så är det ingen fara. 
//Skapa nu en funktion som heter addSubjectToTeacher som tar emot ett ämne och en lärare, och parar ihop dessa. Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.

// function addSubjectToTeacher(subject, teachers){
//     teachers.subjects.push(subject); 
//     return teachers; 
 
// }

//8. 


//9. Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika objekt med olika logik) och lägg in de i rätt typ av objekt: addTeacher, enlistToSubject, addStudent, addSubject
// function addSubject(subject){
//     this.subjects.push(subject);
// }

// addSubject: function (subject){
//     this.subjects.push(subject);

// }

//10. 










