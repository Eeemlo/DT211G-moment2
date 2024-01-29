"use strict";

async function loadCourses() {

//Läs in ramschema
    try {
        const response = await fetch("https://dahlgren.miun.se/ramschema_ht23.php");
        const data = await response.json(); 

        console.table(data);
    } catch {
        console.log("något gick fel");
    }
}

loadCourses();