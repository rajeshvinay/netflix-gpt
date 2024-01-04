export const ValidateData = (email,password,name) =>{
    const emailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameValidate = /^[A-Za-z]+/.test(name);
    if(!emailValidate) return 'Email ID is not valid'
    if(!passwordValidate) return 'Password is not valid'
    if(!nameValidate) return 'First name is not valid'

    if(emailValidate && passwordValidate && nameValidate) return null;
}