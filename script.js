const links = document.querySelectorAll("nav > ul > li")

const S1 = document.querySelector("#Section1")
const S2 = document.querySelector("#Section2")
const S3 = document.querySelector("#Section3")

links.forEach(element => {
    element.querySelector("a").addEventListener("click", () => {

        links.forEach(listItem => {
            listItem.setAttribute("data-section-selected", "false");
        });

        const section = element.querySelector("a").getAttribute("data-section");

        element.setAttribute("data-section-selected", "true")

        if (section == "1") {

            S1.setAttribute("data-on-top", "true");
            S2.setAttribute("data-on-top", "false");
            S3.setAttribute("data-on-top", "false");
        } 

        if (section == "2") {
            S1.setAttribute("data-on-top", "false");
            S2.setAttribute("data-on-top", "true");
            S3.setAttribute("data-on-top", "false");
        } 

        if (section == "3") {
            S1.setAttribute("data-on-top", "false");
            S2.setAttribute("data-on-top", "false");
            S3.setAttribute("data-on-top", "true");
        } 
    });
});