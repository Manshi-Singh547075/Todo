const todo=document.querySelector('.todo')
const inputT=document.querySelector('.inputT')

function addList(){
    const listP=document.createElement('div')
    const listT=document.createElement('p')
    const deletebtn=document.createElement('button')

    listT.textContent=inputT.value
    deletebtn.textContent="Delete"

    listP.classList.add('listP')
    listT.classList.add('listT')
    deletebtn.classList.add('deletebtn')

    if(listT.textContent!=""){
        listP.appendChild(listT)
    listP.appendChild(deletebtn)
    todo.appendChild(listP)

    }

    deletebtn.addEventListener('click',()=>{
        todo.removeChild(listP)

    })

    listP.addEventListener('click',()=>{
        
        listP.classList.toggle('completed')

     })

     inputT.value = ''

   
}