import React from 'react';
import styled from 'styled-components';
import gitHub from '../images/icons8-github-48.png';
import skype from '../images/icons8-skype-48.png';
import telegram from '../images/icons8-telegram-app-48.png';
import device from '../responsive/Device';

const ContactLabel = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: #7ed321;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    @media ${device.mobile} {
        margin-bottom: 20px;
    }
    @media ${device.laptop} {
        margin-bottom: 40px;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    width: 30%;
    margin: 0 auto;
    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;    
    }
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-around;  
    }
`;

const ContactItem = styled.div`
    font-size: 14px;
    margin-bottom: 30px;
`;
const ContactLink = styled.a`
    text-decoratin: none;
`;

const ContactImage = styled.img`
    height: 48px:
    width: 48px;
`;

const RouteContainer = styled.div`
    width: 100%;
    @media ${device.mobile} {
        margin-top: 24px;
    }
    @media ${device.laptop} {
        margin-top: 85px;
    }
`;

const Contact = () => {
    return (
        <RouteContainer>
            <ContactLabel>Contacts</ContactLabel>
            <ContactContainer>             
                <ContactItem>
                    <ContactLink href="https://github.com/pavel-malashko">
                            <ContactImage src={gitHub} alt="gitHub"/>
                    </ContactLink>
            </ContactItem>
                <ContactItem>
                    <ContactLink href="skype:pavelmalashko333555?userinfo">
                        <ContactImage src={skype} alt="skype"/>
                    </ContactLink>
                </ContactItem>
                <ContactItem>
                    <ContactLink href="tg://resolve?domain=pavelMalashka">
                            <ContactImage src={telegram} alt="telegram"/>
                    </ContactLink>
                </ContactItem>
            </ContactContainer>  
        </RouteContainer>
       
    );
}

export default Contact;
