import styled, {keyframes} from 'styled-components';
import {Promotion} from '../components/Form/types';

export const Main = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 10px;
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  color: #fff;
  margin: 0 10px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }

`;

export const InputWrapper = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    width: 240px;
  }

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

export const StyledButton = styled.button`
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

export const Results = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ResultsText = styled.p<{ promotion: Promotion }>`
  animation: ${FadeIn} 1.5s;
  text-align: center;
  color: ${(props) => props.promotion === 'success' ? '#09BF52' : '#F5443A'};
`;

export const Select = styled.select`
  border: 1px solid #fff;
  transition: all 0.4s;
  border-radius: 4px;
  padding: 5px;
  background: #e4cef0;
  cursor: pointer;
`;
