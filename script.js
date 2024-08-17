const send = document.querySelector(".submit");
const msg = document.querySelector("#message");

console.log(send);
console.log(msg);


send.addEventListener("click", sendMsg);

function sendMsg(e){
    e.preventDefault();
    var message = msg.value;
    console.log(message);
    
}