import React from 'react';
import styled from 'styled-components';
import bearFace2x from '../images/bear-face@2x.png';
import bearFace3x from '../images/bear-face@3x.png';
import bearFacePink from '../images/bearFacePink.png';
import device from '../responsive/Device';

const Reactangle = styled.div` 
    @media ${device.mobile} {
        height: 70%;
    }
    @media ${device.laptop} {
        border-radius: 44px;
        background-color: #e990f9;
        height: 50%;
    }
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Button = styled.div`
    @media ${device.mobile} {
        width: 80%;
        height: 10%;
        border: solid 2px #e990f9;
    }
    @media ${device.laptop} {
        width: 151px;
        height: 60px;
        border: solid 3px #ffffff;
    }
    border-radius: 36px;
    position: fixed;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    cursor: pointer;
`;

const Text = styled.div`
    height: 21px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    height: 100%;
    line-height: 56px;
    @media ${device.mobile} {
        color: #e990f9;
    }
    @media ${device.laptop} {
        color: white;
    }
`;

const BearFace = styled.div`
    background-size: cover;
    top: 35%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    @media ${device.mobile} {
        height: 150px;
        width: 160px;
        background-image: url(${bearFacePink});
    }
    @media ${device.laptop} {
        height: 150px;
        width: 160px;
        background-image: url(${bearFace2x});
    }
    @media ${device.desktop} {
        height: 77px;
        width: 177px;
        background-image: url(${bearFace3x});
    }
`;

const LogIn = (props) => {
    if (localStorage.getItem('token')) {
        props.history.push('./')
    }

    const handleLogIn = () => {
        fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin?uuid=hello', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem('token', JSON.stringify(data.response.access_token));
            props.history.push('./');
        })
        .catch(e => { throw e; });    
    }

    return (
        <Reactangle>
            <BearFace></BearFace>
            <Button onClick={handleLogIn}>
                <Text>Let me in</Text>
            </Button>
        </Reactangle>
    );
}

export default LogIn;
