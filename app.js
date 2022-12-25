let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//add btn disabled

input.addEventListener('keyup', () => {

    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
});

//add new item to list

addBtn.addEventListener('click', () => {

    if(input.value.trim() != 0){
        var newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `            
        <div class="content">
        <input type="text" class="edit-item" value="${input.value}" readonly>
    </div>
    
    <div class="item-btn">
    <button class="editBtnClass" id="editBtn">Edit</button>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-rectangle-xmark"></i>
</div>
        `
        tasks.appendChild(newItem);
        input.value = '';
        }else{
            alert('Please enter a task');
    }
});

//delete item from list

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-rectangle-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})



tasks.addEventListener('click', (e) => {

    
    var parent = e.target.parentElement.parentElement;
    var message = parent.querySelector('input');


    if(e.target.classList.contains('editBtnClass')){
        console.log("editBtn Works");
        if(editBtn.innerText.toLowerCase() == 'edit'){ 
            message.removeAttribute('readonly');
            message.focus();
            editBtn.innerText = "Save";
        }else{
            message.setAttribute('readonly','readonly');
            editBtn.innerText = "Edit";
        }
    }else{
        console.log("error");
    }


});

/*
tasks.addEventListener('click', (e) => {
    
    console.log(editBtn);
    var parent = e.target.parentElement.parentElement;
   // console.log(parent);
    var message = parent.querySelector('input');

    if(e.target.classList.contains('fa-pen-to-square')){

       // console.log(message);

        message.removeAttribute('readonly');
    }else{
        message.setAttribute('readonly','readonly');
    }
})
*/