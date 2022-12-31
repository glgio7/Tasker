import styled from "styled-components";

export const MoveButton = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
overflow: hidden;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

@keyframes flash{
    0%{
        opacity: 1;
    transform: translateX(10px);
    }
    50%{
        opacity: .5;
    transform: translateX(0px);
    }
    100%{
        opacity: 1;
    transform: translateX(10px);
    }
}

.back, .next{
    border-radius: 50%;
    background-color: firebrick;
    width: 60px;
    height: 60px;
    color: #fff;
}
.next{animation: flash 2.5s infinite;}
@media screen and (max-width: 768px){
    height: 100%;
    .back, .next{
        width: 48px;
        height: 48px;
    }

}

` 