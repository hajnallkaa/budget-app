import React, {useState} from 'react';
import styled from '@emotion/styled'
import { Typography } from 'antd';
import Login from './Auth/Login';
import Register from './Auth/Register';
import './Auth/style.css';


const Button = styled.button`
    margin-top:20px;
  color: #ffffff;
  background-color: #34626C;
  border-style:none;
  padding: 10px;

`
const { Title } = Typography;

const Home: React.FC = () => { 

    const [showLogin, setShowLogin] = useState<boolean>(false);

  const loginClicked = () => {
    setShowLogin(!showLogin)
  } 

    return (
        <div className="homediv">
           <Title level={3}> Welcome to EveryDollar home page!</Title>
           <Typography>This is a budget app that helps you track your spending and plan for purcheses. It's tailored for zero-waist budgeting. Get Started now, it's totally free! </Typography>
        
        <Button>Get Started</Button>
            <div>
            {!showLogin? <>
            <Register />
                <p onClick={loginClicked}>You already have an account?</p>
            </>: ''}
            {showLogin? 
            <>
            <Login/>
            <p onClick={loginClicked}>You don't have an account yet?</p>
            </> : ''}
            </div>
        </div>
    )
}

export default Home
