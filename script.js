
const questionTitle = document.querySelector('.question')
const optionsElement = document.querySelector('.options')
const submitBtn = document.querySelector('.submit')

let selectedBtn = [null]

const data = {
    question: 'Select a mapach',
    options: ['munach', 'pashta', 'mapach', 'karnei para'],
    correct: 2
}

function loadButtons() {
    questionTitle.innerHTML = data.question
    data.options.forEach(option => {
        const btn = document.createElement('button')
        btn.classList.add('option-button')
        btn.innerHTML = option
        btn.onclick = () => { selected(btn) }
        optionsElement.appendChild(btn)

    })
    shuffleChildElements(optionsElement)
}

function selected(target) {
    if (submitBtn.disabled) { submitBtn.disabled = false }

    if (selectedBtn[0] != target) {
        if (selectedBtn[0] == null) {
            selectedBtn = [target]
            selectedBtn[0].classList.add('selected')
            return
        }
        selectedBtn[0].classList.remove('selected')
        selectedBtn = [target]
        selectedBtn[0].classList.add('selected')
    } else {
        selectedBtn[0].classList.remove('selected')
        selectedBtn = [null]
        submitBtn.disabled = true
    }
}

submitBtn.onclick = () => {
    if (selectedBtn[0].innerHTML == data.options[data.correct]) {
        alert('correct')
    } else {
        alert('incorrect')
    }
    location.reload()
}

loadButtons()


// functions to shuffle that I got from the mam project to shuffle elements
function shuffleChildElements(parentElement) {
    let childrenArray = [...parentElement.children];
    childrenArray = shuffleArray(childrenArray);

    parentElement.innerHTML = '';
    childrenArray.forEach(child => {
        parentElement.appendChild(child);
    });
}
function shuffleArray(array) { // Uses the Fisher-Yates Method
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}