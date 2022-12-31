import styled from "styled-components"

const StyledFooter = styled.footer`
background-color: #000;
width: 100vw;
min-height: 30px;
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: center;


p{
    color: #fff;
    width: 50%;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
}
`

export function Footer() {
    return (
        <>
            <StyledFooter>
                <p>Developed by Dev Giovane Lucas (Follow me on GitHub @glgio7) </p>
            </StyledFooter>
        </>
    )
}