const socket=io();
var name='';
var txt=document.querySelector('#textarea');
var messageArea=document.querySelector('.message_area');
do{
    name=prompt("Enter your Name");
}while(!name);

txt.addEventListener('keyup',(e)=>{
    if(e.key==='Enter')
    {
        sendMessage(e.target.value);
    }
})
function sendMessage(message)
{
    let msg={
        user:name,
        message:message.trim()
    }
    showMessage(msg,'outgoing');
    txt.value='';
    socket.emit('message',msg);
}
function showMessage(msg,type)
{
    var mainDiv = document.createElement('div');
    mainDiv.classList.add(type);
    var x="<h4>"+msg.user+"</h4><p>"+msg.message+"</p>";
    mainDiv.innerHTML=x;
    messageArea.appendChild(mainDiv);
}
//Receiving Message
socket.on('message',(msg)=>{
    showMessage(msg,'incoming');
});