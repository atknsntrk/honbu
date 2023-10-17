function prepareApp() {
    const input = document.getElementById("inputText")

    input.addEventListener("input", updateValue)

}

function updateValue(event) {
    console.log(event)
    const log = document.getElementById("values")
    log.textContent = event.target.value
}

console.log("in renderer")
prepareApp()
