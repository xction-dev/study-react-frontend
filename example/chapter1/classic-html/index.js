const chatContainer = document.querySelector("#chat-container");
//const chatHTML = "<div class='chat'>채팅 1</div>"
//chatContainer.innerHTML = chatHTML + chatHTML + chatHTML+ chatHTML+ chatHTML;


for (let i =0; i < 5; i++) {
    const chatElement = document.createElement("div")
    chatElement.innerText="채팅3"
    chatContainer.appendChild(chatElement)
}

const wantToChange = document.querySelector("#wantToChange");
wantToChange.innerText = "바뀐 후"