import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import Wrapper from '../../shared/components/Wrapper'
import Loading from './cpmponents/Loading';
import Login from './cpmponents/Login';
import Reset from './cpmponents/Reset';
import Row from './cpmponents/Row';

import logo from '../../shared/assets/images/logo.svg';


const Auth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login : {user}} = useSelector( store => store);

  const visebleHandler = (e) => {    
    isVisible ? setIsVisible(false) : setIsVisible(true)     
  }

  useEffect(() => {
    if(!user.userName){
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  },[user])

  if(isLoading){
    return (
      <Wrapper className="auth-inner">
        <div className="card">
          <Row 
            className="row" 
            text="Корпоративная информационная система"
            image={logo}
          />
          <Loading />
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper className="auth-inner">
       <div className="card">
         <Row 
          className="row" 
          text="Корпоративная информационная система"
          image={logo}
         />
        <div className={`form-group ${isVisible ? 'height-max' : 'height-min'}`}>
          <Login onClick={visebleHandler} visible={isVisible}/>
          <Reset onClick={visebleHandler} visible={isVisible}/> 
        </div>
       </div>
    </Wrapper>      
  )
}

export default Auth