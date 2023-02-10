/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code
*/

const mortgageApplicants = [
    { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" },
    { id: 2, name: "Fannie Swaniawski", monthlyExpenses: 783.82, salary: 119255.48, mortgage: {}, address: "3350 McDermott Bridge", city: "Amaliaborough" },
    { id: 3, name: "Patsy Jaskolski", monthlyExpenses: 803.34, salary: 103376.76, mortgage: {}, address: "585 Kassulke River", city: "New Hattieport" },
    { id: 4, name: "Rufus Moore", monthlyExpenses: 845, salary: 88269.54, mortgage: {}, address: "46332 O'Hara Mountain", city: "North Idell" },
    { id: 5, name: "Philip Abshire", monthlyExpenses: 781.34, salary: 65333.78, mortgage: {}, address: "633 Thiel Ville", city: "Uliseston" },
    { id: 6, name: "Wendy Kiehn", monthlyExpenses: 537.32, salary: 59702.6, mortgage: {}, address: "82441 Mills Turnpike", city: "Port Libbieberg" },
    { id: 7, name: "Ray Lubowitz", monthlyExpenses: 550.15, salary: 181362.87, mortgage: {}, address: "855 Isabel Forge", city: "Hesseltown" },
    { id: 8, name: "Lawrence Hirthe MD", monthlyExpenses: 940.74, salary: 100269.15, mortgage: {}, address: "68459 Jordon Crossing", city: "Boview" },
    { id: 9, name: "Mario Beahan I", monthlyExpenses: 618.11, salary: 122226.79, mortgage: {}, address: "71521 Walter Drive", city: "Rosannaton" },
    { id: 10, name: "Rosa Hauck", monthlyExpenses: 763.82, salary: 89335.68, mortgage: {}, address: "33954 Reba Motorway", city: "Port Lesly" },
    { id: 11, name: "Becky Wiegand", monthlyExpenses: 212.27, salary: 76137.45, mortgage: {}, address: "3972 Stroman Parks", city: "West Clotildeport" },
]
//calculate yearly expenses by accessing the correct property in mortgageApplicants
const calculateYearlyExpenses = (buyerMonthlyExpenses) => { 
    let yearlyExpenses = buyerMonthlyExpenses * 12 

    return yearlyExpenses
}

//calculate the Expenses percentage of salary by 

const calculateExpensesPercentage = (yearlyExpenses, salary) => { 
    // can I do math this way?? if not, declare a new variable to multiply 
    let expensePercentage = (yearlyExpenses / salary) * 100

    return expensePercentage
    
}

const isQualified = (applicant, calculateExpensesPercentage) => {
    // const qualifiedArray = []
    // for (const applicant of mortgageApplicants) {
    if (calculateExpensesPercentage > 10) {
        applicant.qualified = true
        applicant.amount = applicant.salary * 5;
        // qualifiedArray.push(applicant)
        return applicant
    } else {
            applicant.qualified = false
            applicant.amount = 0;
            // qualifiedArray.push(applicant)
            return applicant
        }
    }
//  }
//  return qualifiedArray


/*
    Iterate the array of mortgage applicants and use your
    functions to determine if they are qualified for a mortgage
*/


const anotherVariable = () => {
    const emptyArray = []
    for ( const thisApplicant of mortgageApplicants) {
        let morgageesApproved = calculateYearlyExpenses(thisApplicant.monthlyExpenses)
        let thisVariable = calculateExpensesPercentage(morgageesApproved, thisApplicant.salary)
        emptyArray.push(isQualified(thisApplicant, thisVariable))
    }
    return emptyArray
}

const qualifiedApplicants = anotherVariable()
    for (const anythingIWant of qualifiedApplicants) {
        if (anythingIWant.qualified === true ) {
            console.log(`${anythingIWant.name} is qualified for a maximum mortage of $${anythingIWant.amount}`)
    }
}

// const anotherVariable = mortgageApplicants.map(applicant => {
//         let morgageesApproved = calculateYearlyExpenses(applicant.monthlyExpenses)
//         let thisVariable = calculateExpensesPercentage(morgageesApproved, applicant.salary)
//         isQualified(applicant, thisVariable)
//         }
//     )



// Becky Wiegand is qualified for a maximum mortage of $380,687.25 





























// **********  Do not touch this code  **********
module.exports = {
    calculateYearlyExpenses, calculateExpensesPercentage, isQualified
}
// **********  Do not touch this code  **********