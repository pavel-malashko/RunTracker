import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import add from '../images/add.png';
import add2x from '../images/add@2x.png';
import add3x from '../images/add@3x.png';
import icon from '../images/icon.png';
import icon2x from '../images/icon@2x.png';
import icon3x from '../images/icon@3x.png';
import device from '../responsive/Device';

const FilterContainer = styled.div`
    height: 10%;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 700px) {
        height: 15%;
        flex-direction: column;
        align-items: center;
    }
`;

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 700px) {
        margin: 5px;
    }
`;

const LabelForInput = styled.div`
    font-family: SFUIText;
    font-size: 13px;
    margin-right: 15px;
    color: gray;
`;

const DateInput = styled.input`
    border-radius: 11px;
    border: solid 1px #979797;
    background-color: #ffffff;
    width: 10%;
    height: 31px;
    min-width: 100px;
    outline: none;
    text-align: center;
`;

const JogsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    height: 67%;
    overflow: auto;
    flex-direction: column;
`;

const JogData = styled.div`
    margin-bottom: 3%;
    display: ${({ hide }) => (hide ? 'none' : 'flex')};
    @media ${device.mobile} and (max-width: 1024px) {
        border-bottom: 1px solid #d6d6d6;
        width: 100%;
        justify-content: center;
    }
    @media ${device.laptop} {
        width: 235px;
        justify-content: space-between;
    }

`;

const JogImage = styled.div`
    background-size: cover;
    @media ${device.mobile} {
        height: 87px;
        width: 87px;
        background-image: url(${icon});
        margin-right: 10%;
    }
    @media ${device.laptop} {
        width: 87px;
        height: 87px;
        background-image: url(${icon2x});
    }
    @media ${device.desktop} {
        height: 100px;
        width: 100px;
        background-image: url(${icon3x});
    }
`;

const JogParamTitle = styled.div`
    font-family: SFUIText;
    font-size: 14px;
    font-weight: 500;
    margin-right: 4px;
`;
const JogParamData = styled.div`
    font-family: SFUIText;
    font-size: 14px;
    font-weight: 500;
    color: gray;
`;

const JogParamDate = styled.div`
    font-family: SFUIText;
    font-size: 14px;
    color: gray;
`;

const JogParamContainer = styled.div`
    margin-bottom: 12px;
    display: flex;
`;

const JogDateContainer = styled.div`
    margin-bottom: 9px;
    display: flex;
`;

const AllParamJogContainer = styled.div`
    width: 100px;
`;

const ButtonAddJog = styled.div`
    background-size: cover;
    position: absolute;
    cursor: pointer;
    right: 2%;
    bottom: 2%;
    @media ${device.mobile} {
        height: 40px;
        width: 40px;
        background-image: url(${add});
    }
    @media ${device.laptop} {
        width: 60px;
        height: 60px;
        background-image: url(${add2x});
    }
    @media ${device.desktop} {
        height: 80px;
        width: 80px;
        background-image: url(${add3x});
    }
`;


const ListJogs = (props) => {
    const [jogs, SetJogs] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isFiltered, setFilter] = useState(false);
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        if(!jogs) {
            fetchData();
        }
        if (isFiltered && jogs) {
            FilterJogsByDate();
        }
    });
    
    const FilterJogsByDate = () => {
        let filterJogs;
        if (startDate && endDate) {
            filterJogs = jogs.map(jog => ({
                ...jog,
                hide: !(new Date(jog.date.replace(/\./g, "/")) > new Date(startDate) && new Date(endDate) > new Date(jog.date.replace(/\./g, "/")))
            }));       
        } else if (startDate && !endDate) {
            filterJogs = jogs.map(jog => ({
                ...jog,
                hide: !(new Date(jog.date.replace(/\./g, "/")) > new Date(startDate))
            }));
        } else if (endDate && !startDate) {
            filterJogs = jogs.map(jog => ({
                ...jog,
                hide: !(new Date(endDate) > new Date(jog.date.replace(/\./g, "/")))
            }));
        } else {
            SetJogs(null);
            setFilter(false);
            return;
        }
        SetJogs(filterJogs);
        setFilter(false);
    }

    const fetchData = () => {
        fetch('https://jogtracker.herokuapp.com/api/v1/data/sync', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(resp => resp.json())
        .then(data => {
            if(data && !data.response.jogs.length) {
                props.history.push('./empty-list');                    
            } else {
                SetJogs(ParseData(data.response.jogs));
            }
        })
        .catch(e => { throw e; });
    }
    

    const ParseData = jogs => {
        return jogs.map(jog => (
            {
                id: jog.id,
                date: new Date(1000 * jog.date).toLocaleDateString(),
                distance: jog.distance,
                time: jog.time,
                hide: false
            }
        ));
    }

    const onChangeStartDate = (date) => {
        setStartDate(date);
        setFilter(true);
    }

    const onChangeEndDate = (date) => {
        setEndDate(date);
        setFilter(true);
    }

    return (
        <>
            <FilterContainer>
                <FormContainer>
                    <LabelForInput>Date from</LabelForInput>
                    <DatePicker
                        dateFormat="dd.MM.yyyy"
                        selected={startDate}
                        onChange={onChangeStartDate} 
                        customInput={<DateInput />}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </FormContainer>
                <FormContainer>
                    <LabelForInput>Date to</LabelForInput>
                    <DatePicker
                        dateFormat="dd.MM.yyyy"
                        selected={endDate}
                        onChange={onChangeEndDate} 
                        customInput={<DateInput />}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </FormContainer>
            </FilterContainer>
            <JogsContainer>
                {jogs && jogs.map(jog => (
                    <JogData key={jog.id} hide={jog.hide}>
                        <JogImage></JogImage>
                        <AllParamJogContainer>
                            <JogDateContainer>
                                <JogParamDate>{jog.date}</JogParamDate>
                            </JogDateContainer>
                            <JogParamContainer>
                                <JogParamTitle>Speed:</JogParamTitle><JogParamData>15</JogParamData>
                            </JogParamContainer>
                            <JogParamContainer>
                                <JogParamTitle>Distance:</JogParamTitle><JogParamData>{jog.distance} km</JogParamData>
                            </JogParamContainer>
                            <JogParamContainer>
                                <JogParamTitle>Time:</JogParamTitle><JogParamData>{jog.time} min</JogParamData>
                            </JogParamContainer>
                        </AllParamJogContainer>
                    </JogData>
                ))}
            </JogsContainer>
            <Link to="/post-jog"><ButtonAddJog></ButtonAddJog></Link> 
        </>
    );
}

export default ListJogs;
