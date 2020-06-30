import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sadFace from '../images/sad-rounded-square-emoticon.png';
import sadFace2x from '../images/sad-rounded-square-emoticon@2x.png';
import sadFace3x from '../images/sad-rounded-square-emoticon@3x.png';
import device from '../responsive/Device';

const Reactangle = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    width: 15%;
    height: 5%;
    cursor: pointer;
    transform: translate(-50%, -50%);
    border-radius: 36px;
    border: solid 3px #e990f9;
    min-width: 200px;
`;

const ButtonText = styled.div`
    font-family: SFUIText;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #e990f9;
    text-align: center;
    line-height: 47px;
`;

const Text = styled.div`
    width: 182px;
    height: 58px;
    font-family: SFUIText;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: #b0b0b0;
    top: 55%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SadFace = styled.div`
    background-size: cover;
    top: 35%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    @media ${device.mobile} {
        height: 120px;
        width: 120px;
        background-image: url(${sadFace});
    }
    @media ${device.laptop} {
        width: 152px;
        height: 151px;
        background-image: url(${sadFace2x});
    }
    @media ${device.desktop} {
        height: 200px;
        width: 200px;
        background-image: url(${sadFace3x});
    }
`;

const NotFound = () => {
    return (
        <>
            <SadFace></SadFace>
            <Text>Nothing is there</Text>
            <Link to="/post-jog">
                <Reactangle>
                    <ButtonText>Create your jog first</ButtonText>
                </Reactangle>
            </Link> 
        </>    
    );
}

export default NotFound;
