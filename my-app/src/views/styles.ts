import styled from "styled-components";


export const UsersContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 360px);
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding: 15px;
    @media (max-width: 700px) {
 
        grid-template-columns: repeat(auto-fit, 115px);
    }
}
`;

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    transition: all 0.5s ease 0s;
    width: 100%;
    height: 15rem;
    background: #fff;
    border: 0.0625rem solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    @media (max-width: 700px) {
        width: 100px;
        height: 150px;
    }
    :hover {
        border: 2px solid #75A0BD;
        /* box-shadow: 0px 8px 32px 0 rgba(0,0,0,0.3);
        transform: scale3d(1.1,1.1,1.1) */
    }
    img{
        width: 60%;
    }
    p{
        font-size: 0.875rem;
        font-family: 'Roboto';
        font-weight: bold;
        color: #505565;
        @media (max-width: 700px) {
            font-size: 0.7rem;
    }
    }
`;