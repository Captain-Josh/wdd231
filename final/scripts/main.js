import { fetchDrugs } from './api.js'

const hamburger = document.getElementById("ham-menu");
const navBar = document.getElementById("nav-mobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navBar.classList.toggle("show");

})

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementsByTagName("body")[0].id === "drug-page") {

        const cards = document.querySelector("#drugContainer");

        async function loadDrugs() {
            const drugs = await fetchDrugs();
            displayDrugs(drugs);
        }

        loadDrugs();



        function displayDrugs(drugs) {
            const container = document.getElementById('drugContainer');

            drugs.forEach(drug => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
      <h3>${drug.name}</h3>
      <p><strong>Use:</strong> ${drug.use}</p>
      <p><strong>Side Effect:</strong> ${drug.sideEffect}</p>
      <p><strong>Warning:</strong> ${drug.warning}</p>
    `;


                card.addEventListener("click", () => {
                    openModal(drug);
                });


                container.appendChild(card);
            });
        }


        function openModal(drug) {
            modal.style.display = "block";

            modalData.innerHTML = `
            <h2>${drug.name}</h2>
            <p><strong>Use:</strong> ${drug.use}</p>
            <p><strong>Side Effect:</strong> ${drug.sideEffect}</p>
            <p><strong>Warning:</strong> ${drug.warning}</p>
          `;
            localStorage.setItem("lastDrug", drug.name);
        }

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";

        });


        const lastDrug = localStorage.getItem("lastDrug");

        if (lastDrug) {
            document.getElementById("lastViewed").textContent =
                "Last viewed drug: " + lastDrug;
        }




    }
});


document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementsByTagName("body")[0].id === "thankyou-page") {


        const params = new URLSearchParams(window.location.search);


        const name = `${params.get("first")} ${params.get("last")}`;
        const email = params.get("email");
        const phone = params.get("phone");
        const message = params.get("message");



        if (name && email && phone && message) {
            document.getElementById("result").innerHTML = `
            Thank you, ${name}! <br><br>
            Your message: "${message}" <br><br>
            We will contact you at: ${email} <br>
            Phone: ${phone}
            `;
        }



    }
});
