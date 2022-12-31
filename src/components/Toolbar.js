import styled from "styled-components";
import { IoPartlySunnyOutline } from "react-icons/io5"
import { VscCalendar, VscClearAll } from "react-icons/vsc"
import { useState } from "react";

export const StyledToolbar = styled.div`
border-radius: 10px;
border: 2px outset #fff;
width: 5vw;
min-width: 80px;
min-height: 70vh;
overflow: hidden;
background-color: #101010;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.actions{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
}
.widget-icon{
    cursor: pointer;
    color: firebrick;
    width: 42px;
    height: 42px;
    transition: all 500ms;
    &:hover{
        opacity: .8;
    }
}

.calendar{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transition: all 250ms;
}
.calendar.active{
    transform: scaleX(1);
}
h3{
    overflow: hidden;
    color: firebrick;
    font-size: 1rem;
}
p{
    overflow: hidden;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
}
button{
    height: 25%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: flex-end;
}

@media screen and (max-width: 768px){
width: 90vw;
height: 48px;
min-height: inherit;
margin-bottom: .5rem;
flex-direction: row;

.actions, .calendar{
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
}
.calendar{
    flex-direction: row;
    justify-content: space-around;
    width: 75%;
}
button {
    height: 100%;
    p {
        font-size: .75rem;
    }
}
.widget-icon{
    height: 24px;
    width: 36px;
}
p{
    font-size: 1rem;
    margin-inline: .25rem;
}}
`

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const lastDay = JSON.stringify(new Date(year, month, 0)).slice(9, 11)

export const remainingDays = parseInt(lastDay) - parseInt(day) + 1;

export function Toolbar({ toggleWeather, clearList }) {

    const [shownDate, setShownDate] = useState(false)
    const toggleDate = () => setShownDate(!shownDate)
    return (
        <>
            <StyledToolbar >
                <div className="actions">
                    <button><IoPartlySunnyOutline className="widget-icon" onClick={toggleWeather}/><p>Weather</p></button>
                    <button><VscCalendar className="widget-icon" onClick={toggleDate} /><p>Today</p></button>
                    <div className={shownDate ? 'calendar active' : 'calendar'}>
                        <h3>Month</h3>
                        <p>{month}</p>
                        <h3>Day</h3>
                        <p>{day}</p>
                        <h3>Year</h3>
                        <p>{year}</p>
                    </div>
                    <button><VscClearAll className="widget-icon" onClick={clearList}/><p>Clear</p></button>
                </div>
            </StyledToolbar>
        </>
    )
}