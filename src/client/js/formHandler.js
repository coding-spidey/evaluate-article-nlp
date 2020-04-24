function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('link').value
    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8081/api',
    {
        method: 'POST',
        mode:'cors',
        body: stringify({formText}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `<br/>Subjectivity: ${res.subjectivity} <br> Polarity: ${res.polarity} <br>`
    })
}
function stringify(data = {}) {
    return(JSON.stringify(data))
}
export { handleSubmit }
export { stringify }