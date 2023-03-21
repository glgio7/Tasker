import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.containerColor};

	height: 80px;
	width: 100%;

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

	.color-picker {
		cursor: pointer;

		height: 2rem;
		width: 8rem;

		padding: 0 0.25rem;

		background-color: ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.buttonTextColor};

		text-align: center;

		border-radius: 9px;

		font-weight: bold;
	}

	option {
		font-weight: normal;
		color: ${({ theme }) => theme.textColor};
		background-color: ${({ theme }) => theme.backgroundColor};
	}

	@media screen and (max-width: 900px) {
		padding: 0.5rem;

		.logo {
			width: 48px;
		}

		span {
			font-size: 2.5rem;

			margin-left: 0.5rem;
		}

		.color-picker {
			font-size: 0.7rem;

			width: 6rem;
		}
	}
`;
