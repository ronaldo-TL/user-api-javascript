import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { loadUsersByPage } from "./user-cases/load-users-by-page";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersAppComponent = async(element) => {

    element.innerHTML = 'loading...'
    // loadUsersByPage()
    element.innerHTML = ''
    
    await usersStore.loadNextPage()
    
    // console.log(usersStore.getUsers() );
    renderTable(element)
    renderButtons(element)
    renderAddButton(element, ()=>{console.log('volver desde el padre');})
    renderModal(element)
}