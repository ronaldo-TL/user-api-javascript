import { loadUsersByPage } from "../user-cases/load-users-by-page"

const state = {
    currenPage: 0,
    users: []
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currenPage + 1)
    if(users.length === 0) return

    state.currenPage += 1
    state.users = users

    // console.log(state.users);
}

const loadPreviousPage = async() => {
    if(state.currenPage === 1) return

    const users = await loadUsersByPage(state.currenPage - 1)
    
    state.users = users
    state.currenPage -= 1
    
  
}

const onUserChanged = () => {
    throw new Error('Not implemented')
    
}

const reloadPage = async() => {
    throw new Error('Not implemented')

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currenPage
}