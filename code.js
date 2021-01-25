let inp1 = document.querySelector('#input1')
let inp2 = document.querySelector('#input2')
let btn = document.querySelector('#btn')
let res = document.querySelector('.result')
let title = document.querySelector('.form_title')

// Function
let changeValue ='km';

inp1.addEventListener('input', function() {
    res.innerHTML = inp1.value * 0.621 + ' mile(s)'
})

inp2.addEventListener('input', function() {
    res.innerHTML =  inp2.value / 0.621 + ' km(s)'
})

btn.addEventListener('click',function(event) {
    event.preventDefault()
    if(changeValue === 'km'){
        changeValue = 'm';
        inp1.value = ''
        res.innerHTML = '0 km(s)' 
        title.innerHTML = 'Change miles to km'
        inp2.disabled = false
        inp1.disabled = true
    }
    else if(changeValue === 'm'){
        changeValue = 'km';
        inp2.value = ''
        res.innerHTML = '0 mile(s)' 
        title.innerHTML = 'Change km to miles'
        inp1.disabled = false
        inp2.disabled = true
    }
})