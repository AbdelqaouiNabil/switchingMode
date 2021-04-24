const model = ()=>{
    /* select the icon mode and  body*/
    const button = document.querySelector('.mode');
    const body = document.querySelector('body');

    /*add event to the mode icon on click*/ 
    button.addEventListener('click',()=>{
        body.classList.toggle('light');
    })

}
/* call model function*/ 
model();