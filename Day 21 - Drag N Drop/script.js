const fill = document.querySelector('.fill')
const emptycontainers = document.querySelectorAll('.empty')


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of emptycontainers)
{
    empty.addEventListener('dragover', dragEnd)
    empty.addEventListener('dragenter', dragEnd)
    empty.addEventListener('dragleave', dragEnd)
    empty.addEventListener('drop', dragDrop)
}


function dragStart()
{
    this.className += ' hold'
    setTimeout(() =>  this.className = 'invisible', 0 )
   
    // console.log('Drag start');
}
function dragEnd()
{
    this.className += ' fill'
}
function dragOver(e)
{ e.preventDefault()
  
}
function dragEnter(e)
{
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave()
{
    this.className += 'empty'
}
function dragDrop()
{
    this.className += ' empty'
    this.append('fill')
}
