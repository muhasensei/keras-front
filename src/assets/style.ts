import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    gap: 50px;
`;

export const Container = styled.div`
    background: #fff;
    width: 100%;
`;

export const Welcome = styled.h3`
    text-align: center;
`;
export const Form = styled.form`
    padding: 20px;
    background: #fff;
    box-shadow: 0px 0px 8px 4px rgba(68, 74, 79, 0.1);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  
`;

export const InputWrapper = styled.div`
    width: 240px;
    label {
        display: block;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #1E1E1E;
    }

    display: flex;
    flex-direction: column;
    gap: 5px;
    
    input {
        border-radius: 4px;
        background: none;
        border: 1px solid #fff;
        transition: all 0.4s;
        padding: 5px;
        outline: none;
        outline-offset: 0px;
        background: #e4cef0;


        :focus, :focus-within, :focus-visible {
            color: #fff;
            background: #8338AA;
            -moz-border: none;
            -webkit-border: none;
        }
    }
`;

export const SubmitButton = styled.button`
    padding: 10px;
    border: none;
    background: #8338AA;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    border-radius: 4px;
    transition: all 0.4s;
    cursor: pointer;

    :hover, :focus, :focus-within {
        background: #4c1569;
    }
`;
