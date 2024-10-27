// Messaggio di benvenuto
window.addEventListener("load", function() {
    alert("Benvenuto nel sito dedicato al Pensiero Economico di Papa Francesco!");
});

// Bottone "Torna Su" dinamico
let scrollTopButton = document.createElement("button");
scrollTopButton.innerText = "Torna Su";
scrollTopButton.id = "scrollTopButton";
scrollTopButton.style.display = "none"; // Nascondi all'inizio
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

// Effetto hover sul menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#4CAF50";
        link.style.fontWeight = "bold";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "white";
        link.style.fontWeight = "normal";
    });
});
