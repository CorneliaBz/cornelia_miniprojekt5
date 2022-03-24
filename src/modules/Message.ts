import { db } from "./firebaseapp";
import { ref, remove, update } from "firebase/database";

export class Message{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly message: string
    ){
        this.displayMsg();
        // console.log(this.displayMsg);
    }

    private displayMsg():void{
        const div = document.querySelector('div');

        const container = document.createElement('section');
        div.append(container);
        container.id = this.id;

        const h4:HTMLHeadElement = document.createElement('h4');
        h4.innerText = this.name;
        container.append(h4);

        const p:HTMLElement = document.createElement('p');
        p.innerText = this.message;
        container.append(p);

        const removeBtn:HTMLButtonElement = document.createElement('button');
        removeBtn.innerText = 'X';
        container.append(removeBtn);

        removeBtn.addEventListener('click', ()=>{
            const name: HTMLInputElement = document.querySelector('#userName');
            console.log('this name', this.name, 'this name value', name.value);

            if(this.name == name.value ){
               const msgRef = ref(db, '/chatt/' + this.id);
                remove(msgRef); 
            }
            
        })
    }

    public clearDOM():void{
        document.querySelector(`#${this.id}`).remove();
    }
}
