export const isAuth = () => {
    if(!localStorage.getItem('token:JWT'))
        return false
    return true
}