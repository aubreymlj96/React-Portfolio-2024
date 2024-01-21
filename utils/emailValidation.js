export function letterValidation(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function emailValidation(email){
    const mailFormat = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    return mailFormat.test(String(email).toLowerCase());
}