import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #101010;
position: fixed;
z-index: 99;
top: 0;
width: 100vw;
display: flex;
align-items: center;
padding-left: 5vw;
height: 80px;
  
h1{
  font-family: 'Pattaya', sans-serif;
  font-size: 3rem;
  color: firebrick;
  }

@media screen and (max-width: 768px){
text-align: start;
}
`

export default function Header (){
  return (
    <StyledHeader>
      <Link to={"/"}>
      <h1>Tasker</h1></Link>
    </StyledHeader>
  )
}