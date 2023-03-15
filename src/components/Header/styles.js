import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: #7d0103;

	height: 80px;
	width: 100vw;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 3vw;

	img {
		width: 100%;
	}

	.logo {
		opacity: 0.7;

		background-color: black;

		padding: 0.5rem;
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
		background-color: #000;
		color: #fff;

		padding: 0.5rem 1rem;

		text-align: center;

		border-radius: 9px;
	}

	@media screen and (max-width: 768px) {
		padding: 0 2vw;

		.logo {
			width: 54px;
		}

		.button-iniciar {
			margin-top: 0.65rem;
			padding: 0.5rem;
		}
	}
`;
