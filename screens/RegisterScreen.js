import React, {useState,useEffect} from 'react';
import {StyleSheet} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from "../store/actions/users";
import {USERS} from "../data/Users"
import User from '../models/User'
import Register from '../components/Register'

const RegisterScreen = (props) => 
{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errortextUsername, seterrortextUsername] = useState();
  const [errortextEmail, seterrortextEmail] = useState();
  const [errortextPassword, seterrortextPassword] = useState();
  const [errortextConfirmPassowrd, seterrortextConfirmPassowrd] = useState();
  const [valid, setValid] = useState(true);

  useEffect(()=> {
    setValid(true);
  },[])

  const users = useSelector((store) => store.users.users); 
  const dispatch = useDispatch();

  const register = () => {
    seterrortextUsername("")
    seterrortextEmail("")
    seterrortextPassword("")
    seterrortextConfirmPassowrd("")

    let ok = true;
   const userUsername = users.find((user) => user.username.toUpperCase() === username.toUpperCase());
    if (!username) {
      seterrortextUsername('Please fill Username'); 
      ok= false;
    }
    if(userUsername){
      seterrortextUsername("Failed! Username is allready in use!")
      ok = false;
    }

    const userEmail = users.find((user) => user.email.toUpperCase() === email.toUpperCase());
    if (!email) {
      seterrortextEmail('Please fill Email');
      ok = false;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email)
    {
      seterrortextEmail("You have entered an invalid email address!");
      ok = false;
    }
    else if(userEmail){
      seterrortextEmail("Failed! Email is allready in use!");
      ok = false;
    }
    
    if (!password) {
      seterrortextPassword('Please fill Password');
      ok = false;
    }

    if (!confirmPassword) {
      seterrortextConfirmPassowrd('Please fill Confirm Password');
      ok = false;
    }
    if(password!=confirmPassword){
      seterrortextConfirmPassowrd('The password confirmation does not match');
      ok = false;
    }
    setValid(ok);

    var user = {
      id:users.length,
      username: username,
      email: email,
      password: password,
      role: "user"
    };

    if(ok)
    {
      dispatch(addUser(user))
      USERS.push(new User(parseInt(users.length),username,email,password,"user")) // mici ovo
      console.log("users",USERS) 
      alert("Registration Successful. Please Login to proceed!")
      props.navigation.navigate('Login')   
    } 
}
  return (
    <Register
      username={(username) => setUsername(username)}
      errortextUsername={errortextUsername}
      email={(email) => setEmail(email)}
      errortextEmail={errortextEmail}
      password={(password) => setPassword(password)}
      errortextPassword={errortextPassword}
      confirmPassword={(confirmPassword) => setConfirmPassword(confirmPassword)}
      errortextConfirmPassowrd={errortextConfirmPassowrd}
      register={register}
    />
  );
};
export default RegisterScreen;
 
const styles = StyleSheet.create({
  
});