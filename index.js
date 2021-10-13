const submitBtn = document.getElementById('submit-btn')
const form = document.forms[0]
const tableBody = document.getElementById('tbody')

const categories = {
    1:"Task",
    2:"Random Thought",
    3:"Idea",
    4:"Qoute"
}
const icons = {
    "Task":`<i class="fas fa-tasks"></i>`,
    "Random Thought":`<i class="fas fa-brain"></i>`,
    "Idea":`<i class="fas fa-lightbulb"></i>`,
    "Qoute":`<i class="fas fa-quote-right"></i>`
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addNote(form.elements.name.value,form.elements.category.value,form.elements.content.value)
    clearFields()
})

function addNote(name,category,content){
    const now = new Date().toLocaleDateString().split('.').join('/')
    let dates = content.match(/([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)/gm)
    if(!dates) dates = 'no dates' 
    const categoryName = categories.hasOwnProperty(category)? categories[category] : 'none'
    const icon = icons.hasOwnProperty(categoryName)? icons[categoryName]: `<i class="fas fa-times"></i>`
    tableBody.innerHTML += `<tr class="d-flex ">
    <td class="col-2">${icon} ${name}</td>
    <td class="col-2">${now}</td>
    <td class="col-2">${categoryName}</td>
    <td class="col-3">${content}</td>
    <td class="col-2">${dates}</td>
    <td class="ml-auto">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>
            <i class="fas fa-archive"></i>
          </td>
    </tr>`
}
function clearFields(){
    form.elements.name.value = ''
    form.elements.category.options[0].selected = true
    form.elements.content.value = ''
}