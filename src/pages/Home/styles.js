import styled from "styled-components";

export const TextSection = styled.div`
	padding: 2rem 0;
	width: 45%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.textColor};

	p {
		font-size: 1.75rem;
		margin-bottom: 1.25rem;
		width: 90%;
		&:first-child {
			font-size: 2rem;
			font-weight: bold;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;

		p {
			width: 100%;
			font-size: 1.5rem;

			&:first-child {
				font-size: 1.75rem;
			}
		}
	}
`;

export const GuideSection = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 35%;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.containerColor};
	color: ${({ theme }) => theme.textColor};

	.button-iniciar {
		cursor: pointer;

		width: 90%;

		background-color: ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.buttonTextColor};

		opacity: 1;

		padding: 1rem;
		margin-bottom: 1rem;

		text-align: center;
		font-weight: bold;

		border-radius: 9px;
	}

	div {
		padding: 1rem;
		border-radius: 2rem;
		background-color: ${({ theme }) => theme.backgroundColor};
		display: flex;
		align-items: center;
		margin-block: 1rem;
	}

	h2 {
		width: 90%;
		margin-bottom: 1rem;
		text-align: center;
	}

	.item {
		width: 90%;

		span {
			background-color: ${({ theme }) => theme.buttonColor};
			width: 2rem;
			border-radius: 50%;
			text-align: center;
			height: 2rem;
			padding: 1rem;
			margin-inline: 1rem;
		}

		p {
			text-align: left;
			font-size: 1rem;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
