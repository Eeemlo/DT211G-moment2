"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";
const tBody = document.getElementById('tbody');
const searchBar = document.getElementById('searchbar');
let data = [];

//Filtrera efter vad som skrivs i searchbar
searchBar.addEventListener('keyup', (e) => {
const searchString = e.target.value.toLowerCase();
const filteredData = data.filter(course => {
    return course.coursename.toLowerCase().includes(searchString) || 
    course.code.toLowerCase().includes(searchString) || 
    course.progression.includes(searchString);
    
});

emptyTable();

dataToTable(filteredData);
});

//Asynkron funktion innehållandes fetch-antop med try/catch
async function loadCourses() {
  try {
    //Fetch-anrop
    const response = await fetch(url);
    data = await response.json();

    dataToTable(data);

    //Hämta in element som ska vara klickbara
    const thCodeEl = document.getElementById('th-code');
    const thNameEl = document.getElementById('th-name');
    const thProgressionEl = document.getElementById('th-progression')

    //Eventlisteners
    thCodeEl.addEventListener("click", function() {
        emptyTable();
        data.sort((a, b) => (a.code > b.code) ? 1 : -1);
        dataToTable(data);
    });


    thNameEl.addEventListener("click", function() {
        emptyTable();
        data.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
        dataToTable(data);
    });

    thProgressionEl.addEventListener("click", function() {
        emptyTable();
        data.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
        dataToTable(data);
    });

  } catch {
    document.getElementById("error").innerHTML =
      "<p>Kunde inte ladda tabell...</p>";
  }
}

loadCourses();


function dataToTable(data) {

    //Loopa igenom och skriv ut kurser till DOM
    for (let i = 0; i < data.length; i++) {
      let row = `
      <tr>
            <td>${data[i].code}</td>
            <td>${data[i].coursename}</td>
            <td>${data[i].progression}</td>
    </tr>
    `;

      tBody.innerHTML += row;
    }
}

function emptyTable() {
    tBody.innerHTML = "";
}

