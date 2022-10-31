export const isLogged = () => {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) return true;
    
    return false;
};

export const logout = () => {
    localStorage.removeItem("user")
    window.location.replace('/')
};
