/* Your Code Here */
function createEmployeeRecord(row){
    let employeeRecord = {}
    return employeeRecord = {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(array){
    return array.map(row => createEmployeeRecord(row))
}
function createTimeInEvent(date){
     this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    })
    return this
}
function createTimeOutEvent(date){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    })
    return this
}
function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(elem => elem.date === date)
    let timeOut = this.timeOutEvents.find(elem => elem.date === date)
    return (timeOut.hour - timeIn.hour)/100
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this,date) * this.payPerHour
}
function findEmployeeByFirstName(srcArray, firstName){
    //check if given name === name of employee from the collection of employees
    return srcArray.find(elem => elem.firstName === firstName)
}
function calculatePayroll(array){
    return array.reduce((total, record)=> total + allWagesFor.call(record),0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

