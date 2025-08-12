/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number[]
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
    const employeesStack = employees.filter(employee => employee.id === id)
    let totalImportance = 0;

    while (employeesStack.length) {
        const selectedEployee = employeesStack.pop()

        if (selectedEployee.id === id || totalImportance) {
            totalImportance += selectedEployee.importance;
        }

        const subordinates = employees.filter(
            employee => selectedEployee.subordinates.includes(employee.id)
        )

        if(subordinates.length){
            employeesStack.push(...subordinates)
        }

    }

    return totalImportance;
};