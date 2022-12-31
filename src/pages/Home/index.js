import { Container } from "./styles";
import { MoveButton } from "../../components/MoveButton";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";


export default function Home() {
  const container = useRef();
  let x = 0;

  const nextPage = () => {
    x += window.innerWidth;
    container.current.style.transform = `translateX(${-x}px)`
  }
  const previousPage = () => {
    x -= window.innerWidth;
    container.current.style.transform = `translateX(${-x}px)`
  }
  const skip = () => {
    x = window.innerWidth * 3
    container.current.style.transform = `translateX(${-x}px)`
  }
  return (
    <>
    <Header />
      <Container ref={container}>
        <div className="box"><div className="text-container">
          <h2>Getting started to the best To Do app.</h2></div>
          <div className="arrows">
            <MoveButton onClick={nextPage}>
              <TiArrowRightThick className="next" />
            </MoveButton></div>
          <h4 className="skip" onClick={skip}>Skip</h4>
        </div>
        <div className="box"><div className="text-container">
          <h2>Is it an Indoor or Outdoor task?</h2>
            <h3>Check weather forecast quickly!</h3></div>
          <div className="arrows">
            <MoveButton onClick={previousPage}>
              <TiArrowLeftThick className="back" />
            </MoveButton>
            <MoveButton onClick={nextPage}>
              <TiArrowRightThick className="next" />
            </MoveButton>
          </div>
        </div>
        <div className="box">
          <div className="text-container">
            <h2>What is the deadline?</h2>
            <h3>Get everything in control!</h3></div>
          <div className="arrows">
            <MoveButton onClick={previousPage}>
              <TiArrowLeftThick className="back" />
            </MoveButton>
            <MoveButton onClick={nextPage}>
              <TiArrowRightThick className="next" />
            </MoveButton>
          </div>
        </div>
        <div className="box">

          <div className="text-container">
            <h2>All these <strong style={{ color: 'firebrick' }}>features</strong> and more <strong style={{ color: 'firebrick' }}>coming</strong> in 2023...</h2></div>
          <div className="start-box">
            <Link to="/notepad" className="link">
              <button className="start">Start</button></Link></div>
              <div className="arrows">
            <MoveButton onClick={previousPage}>
              <TiArrowLeftThick className="back" />
            </MoveButton>
          </div>
        </div>
      </Container>
    </>
  );
}
