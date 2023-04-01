import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: #000;

	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 1rem;

	p {
		color: #fff;

		text-align: center;
		font-weight: bold;
		font-size: 1rem;
		line-height: 1.25rem;
	}

	@media screen and (max-width: 900px) {
		height: 4rem;
		p {
			font-size: 0.8rem;
		}
	}
`;
