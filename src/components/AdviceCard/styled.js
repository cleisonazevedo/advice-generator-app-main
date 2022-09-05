import styled from "styled-components";

export const Container = styled.div`
    display: flex;  
    flex-direction: column;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    width: 375px;
    background-color: hsl(217, 19%, 24%);
    padding: 24px;
    position: relative;
`;

export const Title = styled.h1`

    display: flex;     
    width: 375px;
    justify-content: center;
    color: hsl(150, 100%, 66%);
    margin: 16px 0px;
    font-size: 12px;
    letter-spacing: 0.2rem;
`;

export const Description = styled.p`
    font-size: 28px;
    color: hsl(193, 38%, 86%);
    font-weight: 800;
    
    img {
        width: 32px;
    }
`;

export const Divider = styled.div`
    img {
        width: 100%;
    }
    width: auto;
    margin: 16px 0px 32px;
`;

export const DiceButton = styled.button`
    background-color: hsl(150, 100%, 66%);
    border-radius: 50%;
    width: 64px;
    height: 64px;
    border: none; 
    position: absolute;
    top: calc(100% - 32px);
    right: calc(50% - 32px);

    :hover {
        cursor: pointer;
        animation-name: effectbutton;
        animation-fill-mode: forwards;
        animation-duration: 0.1s;
        animation-timing-function: ease-in-out;
        
        @keyframes effectbutton {
            from {
                opacity: 1;
            }
            to {
                opacity: 0.8;
            }
        }
    }
`;