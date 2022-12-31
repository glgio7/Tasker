import styled from "styled-components";

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
min-height: 40px;
color: #fff;
margin: .5rem 0;
background-color: #303030;
border-radius: 5px;
overflow: hidden;

p{
    font-size: 1.5rem;
    word-break: break-word;
    padding: .5rem;
    width: 65%;
    overflow: hidden;
    font-weight: bold;
    opacity: ${props => props.checked ? '0.25' : '1'};
} 

p:last-child{
    width: 100%;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
}

.edit{
    width: 15%;
    border-radius: 5px;
    height: 42px;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.done{
    color: ${props => props.checked ? 'firebrick' : ''};
}
button{
    margin: 0rem .5rem;
    display: inline-flex;
    font-size: 30px;
    cursor: pointer;
    color: #fff;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    transition: all 300ms;
    &:hover{
        color: firebrick;
    }
}
@media screen and (max-width: 768px){
    padding: 0 0rem;
    min-height: 48px;
        p {
            width: 50%;
            padding-inline: .25rem;
            font-size: 1.25rem;
            line-height: 1.25rem;
        }
    
    button{
        margin: 0px;
    }
  
    .edit{
        overflow: hidden;
        width: 23%;
        height: 36px;
    }
}
`
