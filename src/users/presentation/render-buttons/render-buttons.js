import usersStore from "../../store/users-store"
import { renderTable } from "../render-table/render-table"
import './render-buttons.css'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {
    const nextButton = document.createElement('button')
    nextButton.innerText = 'Next >'
    const previusButton = document.createElement('button')
    previusButton.innerText = '< Prev'

    const currentPageLabel = document.createElement('span')
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerText = usersStore.getCurrentPage()


    element.append(previusButton,currentPageLabel,nextButton)

    nextButton.addEventListener('click', async()=>{

        await usersStore.loadNextPage()
        currentPageLabel.innerText = usersStore.getCurrentPage()

        renderTable(element)
    })
    

    previusButton.addEventListener('click', async()=>{

        await usersStore.loadPreviousPage()
        currentPageLabel.innerText = usersStore.getCurrentPage()

        renderTable(element)
    })

    
    

    
    
}