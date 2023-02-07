import React, { useContext, useState } from 'react'
import { ValidationForm, ValidInput, HAVE_VALID_EMAIL,
   MINIMUM_LENGTH_8 } from '@aleksasdev/validation-form'
import { Fetcher } from '@aleksasdev/json-api'
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';
import { UserContext } from '@/contexts/UserProvider';
import { useNavigate } from 'react-router';
import { RememberMe } from './RememberMe';

export const Login = () => {

   const { loginUser } = useContext(UserContext);
   const navigator = useNavigate();
	const [shouldSaveDetails, setShouldSaveDetails] = useState(false);

   const doRememberMe = (email, password) =>{
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
   }

   const doLogin = async (values) =>{
      const [email, password] = values;

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();

      const matchingUser = Array.isArray(allUsers) && allUsers.find(user => user.email === email);
      if(!matchingUser){
         window.alert("Wrong email");
         return;
      }

      const isPasswordValid = matchingUser.password === password;
      if(!isPasswordValid){
         window.alert("Wrong password");
         return;
      }

      if(shouldSaveDetails) doRememberMe(email, password);
      loginUser(matchingUser);
      navigator("/");
   }

   return (
      <section>
         <ValidationForm onCompleted={doLogin} label="Login" >
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_VALID_EMAIL]} />
            <p>Password</p>
            <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} type="password" />
            <RememberMe setShouldSaveDetails={setShouldSaveDetails} />
         </ValidationForm>
      </section>
   )
}
