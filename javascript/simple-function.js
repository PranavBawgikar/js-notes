// #1 Accepting user input professionally
let userName
document.getElementById('myButton').onclick = function() {
    userName = document.getElementById('myText').value
    document.getElementById('myH1').textContent = `Hello, ${userName}`
}
// #1 end