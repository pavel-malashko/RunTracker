import React from 'react';
import styled from 'styled-components';
import device from '../responsive/Device';

const InfoText = styled.div`
    font-family: SFUIText;
    font-size: 14px;
    line-height: 1.71;
    margin-bottom: 30px;
`;

const InfoLabel = styled.div`
    font-family: SFUIText;
    font-size: 36px;
    font-weight: bold;
    color: #7ed321;
    margin-bottom: 15px;
`;

const InfoContainer = styled.div`
    @media ${device.mobile} {
        width: 90%;
    }
    @media ${device.laptop} {
        width: 40%;
    }
    display: flex;
    flex-direction: column;
`;
const RouteContainer = styled.div`
    width: 100%;
    @media ${device.mobile} {
        margin-top: 24px;
    }
    @media ${device.laptop} {
        margin-top: 85px;
    }
    display: flex;
    justify-content: center;
`;

const Info = () => {
    return (
        <RouteContainer>
            <InfoContainer>             
                <InfoLabel>INFO</InfoLabel>
                <InfoText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</InfoText>
                <InfoText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</InfoText>
            </InfoContainer>
        </RouteContainer>
           
    );
}

export default Info;
