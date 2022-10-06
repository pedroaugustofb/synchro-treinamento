import styled from "styled-components"

/* Method Components */
export const Divider = styled.div`
display: flex;
`
export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
margin: 4rem 6rem;
padding: 4rem 1rem;
width: 35%;
border-radius: 12px;
box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)!important;
background-color: #fff;
`
export const ImageContainer = styled.div`
width: 60%;
height: 100vh;
background-image: url("https://img.freepik.com/fotos-premium/closeup-led-tela-borrada-fundo-de-foco-suave-led-fundo-abstrato-ideal-para-o-projeto_7247-2959.jpg?w=1380");
`

/* Register And Login Components */
export const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 0 2rem ;
height: 100%;
width: 100%;
`

export const FormInputsArea = styled.div`
display: grid;
gap: 1rem;
height: 30%;
width: 90%;
`

export const DoubleColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  /* padding: 0 0 0 5px; */
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FlexCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem;
`
export const FormTitle = styled.h1`
color: #043b7e;
font-size: 2em;
font-weight: normal;
font-family: Roboto;
`

/* Register Components */
/* Login Components */