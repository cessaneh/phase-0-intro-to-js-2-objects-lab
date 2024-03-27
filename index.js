// Write your solution in this file!

const employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue (employee,key,value){
    let employee1 ={...employee}
    employee1[key] = value
    return employee1
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value){
    let employee2 ={...employee}
    employee2[key] = value
    employee.streetAddress = "12 Broadway"
    return employee2
}
function deleteFromEmployeeByKey (employee,key){
    let employee3 ={...employee}
    delete employee3.name
    return employee3
}
function destructivelyDeleteFromEmployeeByKey (employee){ 
    delete employee.name
    return employee
}