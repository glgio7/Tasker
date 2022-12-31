import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: max-content;
  margin-top: 80px;
  transition: all 300ms;
  padding-bottom: 1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  .box {
    width: 100vw;
    min-height: calc(100vh - 80px);
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .text-container{
    width: 100%;
    min-height: 20vh;
    text-align: center;
  }
  h2{
    color: #fff;
    font-size: 5rem;
    line-height: 6rem;
    text-shadow: 0px 5px 15px rgba(255,0,0, .75);
    overflow: hidden;
  }
  h3{
    overflow: hidden;
    margin-top: 2rem;
    font-size: 1.75rem;
    line-height: 2rem;
    color: #fff;
    opacity: 0.75;

  }
  .skip{
    color: #fff;
    font-size: 1.25rem;
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    border-radius: 1rem;
    padding: .25rem 2rem;
    transition: all 250ms;
    &:hover{
      background-color: #000;
      cursor: pointer;
    opacity: .75;
  }  
  }
  
  .arrows{
    display: inline-flex;
    width: 100%;
  }

  .start-box{
    padding: 1rem;
  }
  .start{
    cursor: pointer;
    text-align: center;
    border: none;
    color: #fff;
    width: 180px;
    border-radius: 10px;
    background-color: firebrick;
    font-size: 3rem;
    animation: start 3s infinite;
  }
  
  .start:hover{
    opacity: .75;
  }
  
  
  @keyframes start{
    0%{
      transform: translateY(0px);
    }
    15%{
      transform: translateY(-10px);
    }
    25%{
      transform: translateY(0px);
    }
    35%{
      transform: translateY(-10px);
    }
    45%{
      transform: translateY(0px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  
  @media screen and (max-width: 768px){
  .text-container{
    width: 90%;
    text-align: start;
  }
  .box{
    width: 100vw;
    justify-content: space-around;
  }
  h2{
    font-size: 4rem;
    line-height: 4rem;
    text-shadow: 0px 0px 15px rgba(255,0,0, .5);
  }
  .arrows{
    padding-bottom: 1rem;
    width: 90%;
  }
  .skip{
    margin: 0 auto;
    bottom: 0;
    left: initial;
    right: initial;
  } 
  .start{
    font-size: 2rem;
    width: 150px;
  }
}
@media screen and (max-width: 900px) and (max-height: 768px) and (orientation: landscape) {
    .skip{
      margin: 3px auto;
      bottom: 0;
  }
    .text-container{
      width: 90%;
      min-height: 20vh;
  }
}

  `;
