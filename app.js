
function pause(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate() {
    while(true) {
        await pause(1000);
        let ceJour = new Date();
        let options = {
            weekday: 'long',
            year: "numeric",
            month: "long",
            day: "2-digit"
        }
        let date = ceJour.toLocaleDateString("fr-FR");
        let heure = ("0" + ceJour.getHours()).slice(-2) + ":" + ("0" + ceJour.getMinutes()).slice(-2) + ":" + ("0" + ceJour.getSeconds()).slice(-2);
        /*let dateHeure = date + " " + heure;*/
        let dateHeure = heure;
        /*let dateheure = dateHeure.replace(/(^\w{1}) | (\s+\w{1})/g, lettre => lettre.toUpperCase());*/

        document.getElementById('date').innerHTML = dateHeure;
        /*span.setAttribute("style", "color: blue");*/
    }
}

afficherDate();

