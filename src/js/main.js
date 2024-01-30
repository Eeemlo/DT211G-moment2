"use strict";

async function loadCourses() {
    try {
        const response = await fetch("https://dahlgren.miun.se/ramschema_ht23.php");
        const data = await response.json();
        const tbody = document.getElementById('tbody');

       //Loopa igenom och skriv ut till DOM

        for (let i = 0; i < data.length; i++){
            let row = `<tr>
            <td>${data[i].code}</td>
            <td>${data[i].coursename}</td>
            <td>${data[i].progression}</td>
            </tr>`

            tbody.innerHTML += row
        }

    } catch {
        document.getElementById("table").innerHTML = "<p>Kunde inte ladda tabell...</p>"
    }
}


loadCourses();



//För varje kurs/objekt skriv ut till tabell

//Vid klick på kurskod, sortera tabell

//Vid klick på Namn, sortera namn

//Vid klick på progression, sortera progression

