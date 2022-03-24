import { onValue, ref, push, update, remove } from "firebase/database";
import { db } from "./modules/firebaseapp";
import { Message } from "./modules/Message";

console.log(db);
const dbRef = ref(db, '/chatt');
let messages:Message[] = [];

onValue(dbRef, snapshot=>{
    const messageData = snapshot.val();
    console.log(messageData); 

    for(const message of messages){
        message.clearDOM();
    }

    messages = [];
    for(const key in messageData){
        messages.push(new Message(
            key,
            messageData[key].name,
            messageData[key].message
        ))
    }
    divdown();
    function remove26():void{
        const messageArray = Object.values(messageData);
        const index0 = Object.keys(messageData)[0];
        console.log(messageArray);
        for(let i=0; i<messageArray.length; i++){
            
        }if(messageArray.length>25){
            console.log('över 25', messageArray.length)
            const test = ref(db, '/chatt/'+index0);
            remove(test);
            
        }else{
            console.log(messageArray.length);
        }
    }
    remove26();
})

document.querySelector('#send').addEventListener('click', e=>{
    e.preventDefault();
    const name: HTMLInputElement = document.querySelector('#userName');
    const message: HTMLInputElement = document.querySelector('#userMessage');

    console.log(name.value, message.value)
    const messageToAdd = {
        name: name.value,
        message: message.value,
    }

    const newKey:string = push(dbRef).key;
    const newMessage = {};
    newMessage[newKey] = messageToAdd;

    update(dbRef, newMessage);
})

function divdown():void{
    const element:HTMLElement = document.getElementById('test');
    element.scrollTop = element.scrollHeight;
};

