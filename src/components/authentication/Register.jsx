import React, { useContext } from 'react'
import { ValidationForm, ValidInput, HAVE_VALID_EMAIL,
   MINIMUM_LENGTH_8, HAVE_VALID_URL } from '@aleksasdev/validation-form'
import { Fetcher } from '@aleksasdev/json-api'
import { DATABASE_URL, USERS_ROUTE } from '@/constants/general';
import { nanoid } from 'nanoid'
import { UserContext } from '@/contexts/UserProvider';
import { useNavigate } from 'react-router';

export const Register = () => {

   const { loginUser, setUsers } = useContext(UserContext);
   const navigator = useNavigate();

   const doRegistration = async (values) =>{

      const [email, username, password, repeatPassword, avatarUrl] = values;

      if(password !== repeatPassword){
         window.alert("Passwords don't match");
         return;
      }

      const allUsers = await new Fetcher(DATABASE_URL+USERS_ROUTE).get();

      const isEmailAlreadyInUse = Array.isArray(allUsers) && allUsers.find(user => user.email === email);
      if(isEmailAlreadyInUse){
         window.alert("Email is already taken");
         return;
      }

      const isUsernameAlreadyInUse = Array.isArray(allUsers) && allUsers.find(user => user.username === username);
      if(isUsernameAlreadyInUse){
         window.alert("Username is already taken");
         return;
      }

      const userObject = {
         id: nanoid(),
         email,
         username,
         password,
         avatarUrl
      }

      await new Fetcher(DATABASE_URL+USERS_ROUTE).post(userObject);
      
      setUsers(current => [...current, userObject]);
      loginUser(userObject);
      navigator("/");
   }

   return (
      <section id="authentication">
         <ValidationForm onCompleted={doRegistration} label="Register" >
            <p>Email</p>
            <ValidInput name="email" requirements={[HAVE_VALID_EMAIL]} />
            <p>Username</p>
            <ValidInput name="username" required />
            <p>Password</p>
            <ValidInput name="password" requirements={[MINIMUM_LENGTH_8]} type="password" />
            <p>Repeat Password</p>
            <ValidInput name="repeatPassword" requirements={[MINIMUM_LENGTH_8]} type="password" />
            <p>Avatar Url</p>
            <ValidInput name="avatarUrl" requirements={[HAVE_VALID_URL]} />
         </ValidationForm>
      </section>
   )
}
