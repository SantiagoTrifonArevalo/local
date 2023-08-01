// ejercicio.1
const name = "Santy";
const age = 42;
const city = "Barcelona";
localStorage.setItem("name",name);
localStorage.setItem("age",age);
localStorage.setItem("city",city);

// Ejercicio.2
const student = {
    firstname:"",
    lastname:"",
    age:"",
    country:"",
    courses:""
  };
    
  localStorage.setItem("student",student);

// Ejercicio.3//

let form = document.createElement("form");
document.body.appendChild(form);
console.log(document.body);

function students(first_name, last_name, ages, country, courses,) {
    const newUser = {
        first_name: first_name,        
        last_name: last_name,    
        ages: ages,                
        country: country,
        courses: courses       
    };
    return newUser
}

console.log(students("firstname", "lastname", "age", "country","courses"));


localStorage.setItem("students",students);



// Ejercicio.4