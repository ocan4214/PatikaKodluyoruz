deleteElement();
checkElement();

window.addEventListener('load',function(){
    if(localStorage.getItem('loadData')==null)
    {
        console.log("no data")
    }
    else{
    let li  = document.getElementById("list");
    li.innerHTML=localStorage.getItem('loadData')
    deleteElement();
    }
})



function newElement()
{
    let li  = document.getElementById("list");
    let todo = document.getElementById("task").value;
    
    if(todo==="") 
    {
        $('#liveToastError').toast('show');
        return 0;
    }
    else{
        let listItem = document.createElement("li");
        listItem.innerHTML=todo;
        li.appendChild(listItem);
        listItem.insertAdjacentHTML('beforeend','<button type="button"  class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>')
        $('#liveToastSuccess').toast('show');        
    }
    deleteElement();


    localStorage.setItem('loadData', document.getElementById("list").innerHTML)

}

function deleteElement()
{
    let buttons = document.querySelectorAll('li > button')
    
    buttons.forEach(btn => { btn.addEventListener('click',function(){
        var li = this.parentNode;
        li.remove();
    })})

    localStorage.setItem('loadData', document.getElementById("list").innerHTML)
    
}

function checkElement()
{
    let list = document.getElementById("list");  
    list.addEventListener("click",(event)=>{
        event.target.classList.toggle("checked")
    })

}
