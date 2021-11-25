const quoteText = document.getElementById("quoteText");
const quoteBtn = document.getElementById("quoteBtn");

const getQuotes = ()=> {
    quoteText.textContent = ""

    fetch("https://api.quotable.io/random?tags=happiness|inspirational")
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then (data => {
        quoteText.textContent = data.content
    })
}
quoteBtn.addEventListener("click", getQuotes)

