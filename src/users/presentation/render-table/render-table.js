import usersStore from "../../store/users-store";
import  "./render-table.css";

const createTable = () => {
    const table = document.createElement('table')
    table.classList.add('table-users')
    const tableHeaders = document.createElement('thead')
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LasstName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `

    const tableBody = document.createElement('tbody')
    table.append(tableHeaders, tableBody)

    return table 
}


let table
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {
    const users = usersStore.getUsers()
 
    if(!table){
        table = createTable()
        element.append(table)

        // TODO: Listener a la table
    }
    let tableHtml = ''
    users.forEach((user)=>{
        tableHtml += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#/" data-id="${ user.id }">Select</a>
                    |
                    <a href="#/" data-id="${ user.id }">Select</a>
                </td>
            </tr>
        `
    })

    table.querySelector('tbody').innerHTML = tableHtml
    
}