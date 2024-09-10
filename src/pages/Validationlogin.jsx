const Validationlogin =(values)=>{
    let errors ={}

    if(!values.name){
        errors.name ='name Required'
    }
    else if(values.name.length < 5){
        errors.name ='Name must be more than 5 char'
    }

    if(!values.password){
        errors.Password ='name Required'
    }
    else if(values.password.length < 9){
        errors.name ='password must be more than 5 char and one charector'
    }
    return errors;
}
export default Validationlogin