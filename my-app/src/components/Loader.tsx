import { CircularProgress } from '@mui/material';
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const Animation = keyframes`
  0% {
    margin-top: calc(-100% - 200px);
  }
  100% {
    margin-top: 0px;
  }
`;

const TextLoading = styled.p`
    color: gray;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;
    opacity: 1;
    animation: loadingText 2s linear 0s infinite normal;
    @keyframes loadingText {
        0%  {opacity: 1}
        20% {opacity: 1}
        50% {opacity: 0}
        100%{opacity: 1}
    }
`;

const Overlay = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ children}) => 
    children && 
        css`
            animation: 0.6s ${Animation} ease-in-out forwards;
        `}
`;

const EfectCardContainer = styled.div`
    padding: 16px;
    border: 0.0625rem solid rgba(0, 0, 0, 0.125);
    background: #FFF;
`;

const CardLoading = styled(EfectCardContainer)`
    padding: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
`;


const Loader = ({ text, onClose, children }: any) => {
    return (

        <Overlay>
            <CardLoading>
                <CircularProgress />
                <TextLoading>{text || 'Carregando...'}</TextLoading>
                {!!children && children}
            </CardLoading>
        </Overlay>
    );
}

export default Loader