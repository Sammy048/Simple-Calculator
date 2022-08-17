const operators = document.querySelector('#operators')
const button = document.querySelector('.calculate')
const result = document.querySelector('.result')

button.addEventListener('click', (e)=>{
    e.preventDefault()

    const opValue = document.querySelector('#operators').value
    const value1 = document.querySelector('.value1').value
    const value2 = document.querySelector('.value2').value

    if(opValue === '+'){
        const operation = Number(value1) + Number(value2)
        result.innerHTML = `The result is ${operation}`
    }
    else if(opValue === '-'){
        const operation = Number(value1) - Number(value2)
        result.innerHTML = `The result is ${operation}`
    }
    else if(opValue === '*'){
        const operation = Number(value1) * Number(value2)
        result.innerHTML = `The result is ${operation}`
    }
    else if(opValue === '/'){
        const operation = Number(value1) / Number(value2)
        result.innerHTML = `The result is ${operation}`
    }
    document.querySelector('.value1').value =''
    document.querySelector('.value2').value =''
    
})
