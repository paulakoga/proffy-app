//search button
//when click, execute action
//select fields
//clear fields
//duplicate fields
//define where
//place in page

//to show in debugger, console.log(<variable>)

document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newfieldContainer.querySelectorAll('input')
    //If done individually: 
    // fields[0].value = ""
    // fields[1].value = ""

    //using iteration:
    fields.forEach(function(field) {
        field.value = ""
    })


    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}