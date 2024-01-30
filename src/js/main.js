"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";


async function loadCourses() {
  try {
    //Fetch-anrop
    const response = await fetch(url);
    const data = await response.json();

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
    const tBody = document.getElementById("tbody");

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
    const tBody = document.getElementById("tbody");
    tBody.innerHTML = "";
}





//Vid klick på kurskod, sortera tabell

//Vid klick på Namn, sortera namn

//Vid klick på progression, sortera progression
