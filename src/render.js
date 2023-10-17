const input = document.getElementById("inputText")
const submit = document.getElementById("inputSubmit")
const form = document.getElementById("submitForm")
const items = document.getElementById("item-list")
const log = document.getElementById("values")

function prepareApp() {
    input.addEventListener("input", updateValue)
    submit.addEventListener("submit", addValue)
    form.addEventListener("submit", addValue)
}

const courses = []
let currentText = ""

function updateValue(event) {
    console.log(event)
    log.textContent = event.target.value
    currentText = event.target.value
}

function addValue(event) {
    event.preventDefault();
    courses.push(currentText)
    currentText = ""
    input.value = ""
    console.log(courses)
    log.textContent = ""
    const HTML = courses.map(item => `<li>${item}</li> ` ).join('');
    items.innerHTML = '<ul>' +HTML+ '</ul>'
}

console.log("in renderer")
prepareApp()
