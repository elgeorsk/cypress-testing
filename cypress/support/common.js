//contain general commands

Cypress.Commands.add('dateFormat', (date) => {

    const mydate = new Date(date)

    let day = mydate.getDate()
    let month = mydate.getMonth()
    let year = mydate.getFullYear()

    if (day < 10) {
        day = `0${day}`
    }
    
    if (month < 10) {
        month = `0${month}`
    }
    
    return `${year}-${month}-${day}`
})