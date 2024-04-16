
const addButton=document.getElementById('add-button');

addButton.addEventListener('click', ()=>{
    const input = document.getElementById('input'); //사용자 입력
    const text = input.value.trim(); // trim()매서드는 문자열 양 끝 공백 제거함

    if (text !== ''){

        addToList(text);
        input.value='';
        input.focus();
            
    }
});

function addToList(text){
    console.log("a");
    const list= document.getElementById('list');
    const newListItem=document.createElement('li');

    const button= document.createElement("button");

    button.onclick=function(){
        newListItem.remove();
    }


    newListItem.innerHTML=text;
    
    button.innerText="x";
    newListItem.appendChild(button);

    list.appendChild(newListItem);
}