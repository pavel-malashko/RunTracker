import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import cancel from '../images/cancel.png';
import cancel2x from '../images/cancel@2x.png';
import cancel3x from '../images/cancel@3x.png';
import device from '../responsive/Device';


const Input = styled.input`
    height: 31px;
    border-radius: 7px;
    border: solid 1px #979797;
    background-color: #ffffff;
    outline: none;
    @media ${device.mobile} {
        width: 100%;
        margin-bottom: 20px;
    }
    @media ${device.laptop} {
        width: 235px;
        margin-bottom: 0px;
    }
`;

const LabelForInput = styled.div`
    font-family: SFUIText;
    font-size: 16px;
    margin-right: 20px;
    @media ${device.mobile} {
        margin-bottom: 6px;
    }
`;

const FormContainer = styled.div`
    @media ${device.mobile} {
        width: 80%;
        top: 55%;
        height: 65%;
       
    }
    @media ${device.laptop} {
        width: 40%;
        top: 46%;
        height: 43%;
    }
    flex-direction: column;
    justify-content: center;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 44px;
    background-color: #7ed321;
`;

const ContainerInput = styled.div`
    display: flex;
    margin: 0 auto;
    @media ${device.mobile} {
        flex-direction: column;
        width: 80%;
    }
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
        width: 65%;
        align-items: center;
        margin: 0 auto;
        margin-top: 25px;
    }
`;

const ButtonSubmit = styled.div`
    width: 55%;
    height: 10%;
    border-radius: 25px;
    border: solid 2px #ffffff;
    margin: 0 auto;
    margin-top: 30px;
    cursor: pointer;
`;

const TextButton = styled.div`
    font-family: SFUIText;
    font-size: 13px;
    color: white;
    text-align: center;
    line-height: 40px;
`;
const CancelButton = styled.div`
    background-size: cover;
    position: absolute;
    top: 6%;
    right: 7%;
    cursor: pointer;
    @media ${device.mobile} {
        height: 19px;
        width: 20px;
        background-image: url(${cancel});
    }
    @media ${device.laptop} {
        height: 26px;
        width: 27px;
        background-image: url(${cancel2x});
    }
    @media ${device.desktop} {
        height: 77px;
        width: 77px;
        background-image: url(${cancel3x});
    }
`;

const CreateForm = (props) => {
    const [values, setValues] = useState({distance: '', time: '', date: ''});
    const token = JSON.parse(localStorage.getItem('token'));

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleInputChangeDate = date => {
        setValues({...values, date: date});
    }

    const createJog = () => {
        const {distance, time, date} = values;
        if(distance && time && date) {
            fetch('https://jogtracker.herokuapp.com/api/v1/data/jog', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(values)
            })
            .then(() => props.history.push('./'))
            .catch(e => { throw e; });    
        }
    }

    return (
        <FormContainer>
            <Link to="/"><CancelButton></CancelButton></Link> 
            <ContainerInput>
                <LabelForInput>Distance</LabelForInput>
                <Input type="text" name="distance" value={values.distance} onChange={handleInputChange}  />
            </ContainerInput>  
            <ContainerInput>
                <LabelForInput>Time</LabelForInput>
                <Input type="text" name="time" value={values.time} onChange={handleInputChange}  />
            </ContainerInput> 
            <ContainerInput>
                <LabelForInput>Date</LabelForInput>
                    <DatePicker
                        selected={values.date}
                        onChange={handleInputChangeDate} 
                        customInput={<Input />}
                    />
            </ContainerInput>
            <ButtonSubmit onClick={createJog}><TextButton>Save</TextButton></ButtonSubmit>
        </FormContainer>   
    );
}

export default CreateForm;
