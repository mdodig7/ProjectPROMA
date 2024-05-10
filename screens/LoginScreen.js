import React, {useState, useEffect} from "react";
import {StyleSheet} from "react-native";
import { RadioButton } from 'react-native-paper';
import { USERS } from '../data/Users';
import {useSelector, useDispatch} from 'react-redux';
import { getUser } from "../store/actions/users";
import Login from '../components/Login'

const LoginScreen = (props) => 
{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(()=> {  
      setPassword('');
      setUsername('');
  }, [])
  
  const [errortextUsername, seterrortextUsername] = useState("");
  const [errortextPassword, seterrortextPassword] = useState("");

  const users = useSelector((store) => store.users.users); 
  const isUserLogin = useSelector((store) => store.userLogin.userLogin);  
  const userForLogin = useSelector((store) => store.user.user);

  const dispatch = useDispatch();
    
  const login = () => {
    seterrortextUsername('');
    seterrortextPassword('');

    if (!username) {
      seterrortextUsername('Please fill Username');
    }

    if (!password) {
      seterrortextPassword('Please fill Password'); 
    }
 
    const user = users.find((user) => username.toUpperCase() === user.username.toUpperCase());
    if(!user && username)
    {
      seterrortextUsername('Failed! Email does not exist!');
    }

    if(user)
    { 
      if(user.password!=password)
      {
        seterrortextPassword('Incorrect password');
      }
      else
      { 
        dispatch(getUser(user, !isUserLogin)) 
        setUsername("")
        setPassword("")
        props.navigation.navigate("Welcome") 
      }
    } 
  }
  
  return (
    <Login
      username={(username) => setUsername(username)}
      usernameValue={username}
      errortextUsername={errortextUsername}
      password={(password) => setPassword(password)}
      passwordValue={password}
      errortextPassword={errortextPassword}
      login={login}
      register={()=> props.navigation.navigate("Register")}
    />
  );
};

const styles = StyleSheet.create({
});

export default LoginScreen;