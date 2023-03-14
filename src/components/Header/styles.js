import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: #7d0103;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 3vw;
	height: 80px;

	img {
		width: 100%;
	}

	.logo {
		opacity: 0.7;
		background-color: black;
		padding: 1rem;
		border-radius: 10px;

		width: 60px;
	}

	h1 {
		display: inline-flex;
		align-items: center;
	}

	span {
		margin-top: 0.65rem;
		margin-left: 1rem;

		color: #fff;
		font-family: "Pattaya", sans-serif;
		font-size: 3rem;
	}

	.button-iniciar {
		color: #fff;
		/* width: 5rem; */
		padding: 0.5rem 1rem;
		text-align: center;
		border-radius: 9px;
		background-color: #000;
	}

	@media screen and (max-width: 768px) {
		.logo {
			width: 54px;
		}

		.button-iniciar {
			margin-top: 0.65rem;
		}
	}
`;
