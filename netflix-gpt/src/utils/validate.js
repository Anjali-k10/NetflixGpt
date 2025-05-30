export const isValidLogin=(email,password)=>{
    const  isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const  isPasswordValid= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
      if(!isEmailValid) return "email is not valid"
      if(!isPasswordValid) return "password is not valid"
      return null;
   }
   export const isValidSignup=(name,email,password)=>{
   const   isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
    const  isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const  isPasswordValid= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
      if(!isNameValid) return "give appropriate name"
      if(!isEmailValid) return "email is not valid"
      if(!isPasswordValid) return "password is not strong"

      return null;
   }
   
