import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.primaryColor};

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
		background-color: rgba(0, 0, 0, 0.25);
		box-shadow: 3px 0px 5px rgba(255, 255, 255, 0.5);

		padding: 0.25rem;
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

		color: ${({ theme }) => theme.textColor};
		font-family: "Pattaya", sans-serif;
		font-size: 3rem;
	}

	.button-iniciar {
		background-color: ${({ theme }) => theme.backgroundColor};
		color: ${({ theme }) => theme.textColor};

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
