import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
import closeFill from '../images/closeFill.png';
import filterActive from '../images/filter-active.png';
import filterActive2x from '../images/filter-active@2x.png';
import filterActive3x from '../images/filter-active@3x.png';
import filter from '../images/filter.png';
import filter2x from '../images/filter@2x.png';
import filter3x from '../images/filter@3x.png';
import logo from '../images/logo.png';
import logo2x from '../images/logo@2x.png';
import logo3x from '../images/logo@3x.png';
import logoMob from '../images/logoMob.png';
import menu from '../images/menu.png';
import device from '../responsive/Device';

Modal.setAppElement('*');

const AppHeader = styled.div`
    @media ${device.mobile} {
        height: 77px;
        background-color: ${({ isOpenMenu }) => (isOpenMenu ? 'white' : '#7ed321')};
    }
    @media ${device.laptop} {
        height: 116px;
        background-color: #7ed321;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoBear = styled.div`
    margin-left: 37px;
    background-size: cover;
    @media ${device.mobile} {
        height: 45px;
        width: 119px;
        background-image: ${({ isOpenMenu }) => (isOpenMenu ? `url(${logoMob})` : `url(${logo})`)};
    }
    @media ${device.laptop} {
        height: 57px;
        width: 147px;
        background-image: url(${logo2x});
    }
    @media ${device.desktop} {
        height: 77px;
        width: 177px;
        background-image: url(${logo3x});
    }
`;

const NavList = styled.ul`
    display: flex;
    @media ${device.mobile} {
        transform: translate(-50%, -50%);
        left: 50%;
        position: absolute;
        top: 40%;
        flex-direction: column;
        a {
            margin-bottom: 20%;
        }
    }
    @media ${device.laptop} {
        flex-direction: row;
        transform: none;
        position: relative;
        a {
            margin: 0;
        }
        top: 0;
        left: 0;
    }
    list-style: none;
    flex-wrap: wrap;
    text-transform: uppercase;
`; 
const NavItem = styled.li`
    @media ${device.mobile} {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        color: black;
        ${({ active }) => active && `  
            color: #7ed321;
        `}   
    }
    @media ${device.laptop} {
        height: 16px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin-right: 40px;
        color: white;
        ${({ active }) => active && `  
            padding-bottom: 5px;
            border-bottom: solid 2px #ffffff;
        `}   
    }
`;

const FilterActiveImage = styled.div`
    margin-right: 30px;
    background-size: cover;
    object-fit: contain;
    @media ${device.mobile} {
        width: 26px;
        height: 26px;
        background-image: url(${filterActive});
    }
    @media ${device.laptop} {
        width: 39px;
        height: 39px;
        background-image: url(${filterActive2x});
    }
    @media ${device.desktop} {
        height: 50px;
        width: 50px;
        background-image: url(${filterActive3x});
    }
`;

const FilterImage = styled.div`
    margin-right: 30px;
    background-size: cover;
    object-fit: contain;
    @media ${device.mobile} {
        width: 26px;
        height: 26px;
        background-image: url(${filter});
    }
    @media ${device.laptop} {
        width: 39px;
        height: 39px;
        background-image: url(${filter2x});
    }
    @media ${device.desktop} {
        height: 50px;
        width: 50px;
        background-image: url(${filter3x});
    }
`;

const Nav = styled.div`
    @media ${device.mobile} {
        display: none;
    }
    @media ${device.laptop} {
        display: flex;
        justify-content: space-beetwen;
        // align-items: center;
    }
`;

const MenuButton = styled.div`
    @media ${device.mobile} {
        margin-right: 25px;
        cursor: pointer;
        ${({ isOpenMenu }) => (
            isOpenMenu ? `
                height: 24px;
                width: 24px;
                background-image: url(${closeFill});
            ` : `
                width: 28px;
                height: 23px;
                background-image: url(${menu});
            `)};
    }
    @media ${device.laptop} {
        display: none;
    }
`;

const modalStyle = {
    content:{
        background: 'rgb(255, 255, 255)',
        height: '100%',
        width: '100%',
        top: '0px',
        right: '0px',
        left: '0px',
        bottom: '0px',
        padding: '0',
    }
    
}

const styleLink = { textDecoration: 'none' };

const Header = ({history}) => {
    const currentUrl = history.location.pathname;
    const showNav = localStorage.getItem('token') ? true : false;
    const [isOpenMenu, setMenu] = useState(false);
    
    return (
        <>
            <AppHeader isOpenMenu={isOpenMenu}>
                <LogoBear isOpenMenu={isOpenMenu}></LogoBear>
                {showNav && <MenuButton isOpenMenu={isOpenMenu} onClick={()=> setMenu(!isOpenMenu)}></MenuButton>}
                {showNav && <Nav isOpenMenu={isOpenMenu}>
                    <NavList>
                            <Link to="/" style={styleLink}>
                                <NavItem active={currentUrl === '/'}>jogs</NavItem>
                            </Link> 
                            <Link to="/info" style={styleLink}>
                                <NavItem active={currentUrl === '/info'}>info</NavItem>
                            </Link>    
                            <Link to="/contact" style={styleLink}>
                                <NavItem active={currentUrl === '/contact'}>contact us</NavItem>
                            </Link> 
                    </NavList>
                    {currentUrl === '/' ? <FilterActiveImage></FilterActiveImage> : <FilterImage></FilterImage>}         
                </Nav>}
            </AppHeader>
            <Modal isOpen={isOpenMenu} style={modalStyle}>
                <AppHeader isOpenMenu={isOpenMenu}>
                    <LogoBear isOpenMenu={isOpenMenu}></LogoBear>
                    <MenuButton isOpenMenu={isOpenMenu} onClick={()=> setMenu(!isOpenMenu)}></MenuButton>
                </AppHeader>
                <NavList>
                    <Link to="/" style={styleLink}>
                        <NavItem active={currentUrl === '/'}>jogs</NavItem>
                    </Link> 
                    <Link to="/info" style={styleLink}>
                        <NavItem active={currentUrl === '/info'}>info</NavItem>
                    </Link>    
                    <Link to="/contact" style={styleLink}>
                        <NavItem active={currentUrl === '/contact'}>contact us</NavItem>
                    </Link> 
                </NavList>
            </Modal>
       </> 
    );
}

export default withRouter(Header);
