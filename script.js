const form=document.querySelector('form');
const input=document.querySelector('input');
const list=document.querySelector('ul');
const button=document.querySelector('ul button');

const removeTask=(event)=>{
    event.target.parentNode.remove();
}

const addTask=(event)=>{

    event.preventDefault();
    if(input.value==='') 
        {
            return alert('Wpisz zadanie!');
        }
    const text=input.value;
    const task=document.createElement('li');
    task.innerHTML=text+" <button>Usuń</button>";
    list.appendChild(task);
    input.value="";

    task.querySelector('button').addEventListener('click',removeTask);
}

form.addEventListener('submit',addTask);




