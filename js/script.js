function talk() {
    var know ={
        "hi": "hello developer community here",
        "how are you": "good",
        "what can i do for you": "Please Give us a Subscribe",
        "ok": "Thanks",
        "Bye": "Have a nice day"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br> ";


    } else{

    }
}