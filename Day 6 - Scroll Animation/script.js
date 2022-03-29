//Get the list of boxes
const boxes = document.querySelectorAll('.box');

//Listen if there is scroll event in the UI
window.addEventListener('scroll', checkBoxes)

checkBoxes()


//check if the box is within the range of entry and append   the class 'show' to the each of the box
function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8
    
    boxes.forEach(box => {
        //check if the top of the box is within the range of entry
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }else { box.classList.remove("show")}
    })
}


