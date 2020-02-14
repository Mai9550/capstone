const submit=document.getElementById('generate').addEventListener("click",handleSubmit);
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('generate').value
    Client.validate(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test',{
    method: 'POST',
    body: formText
 }
    )
    .then(res => res.json())
    .then(function(res) {
        console.log(res); 
        document.getElementById('results').innerHTML = res.message;
    })
}





export { submit };
