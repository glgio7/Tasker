import styled from "styled-components";

export const TaskContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	margin: 0.5rem 0;

	p,
	span {
		word-break: break-word;

		border-radius: 6px;

		padding: 0.25rem;

		min-height: 40px;
		width: 65%;

		text-align: center;

		background-color: ${({ theme }) => theme.containerColor};
		opacity: ${({ done }) => (done ? "0.5" : "1")};

		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: ${({ theme }) => theme.textColor};
	}

	span {
		font-weight: bold;
		text-align: center;
		font-size: 1rem;
		width: 15%;
	}

	.edit-box {
		width: 15%;
		height: 40px;

		border-radius: 5px;

		background-color: ${({ theme }) => theme.containerColor};

		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	button {
		margin: 0rem 0.5rem;

		border-radius: 6px;
		border: none;

		font-size: 1.5rem;

		cursor: pointer;

		background-color: ${({ theme }) => theme.buttonColor};
		color: ${({ theme }) => theme.buttonTextColor};

		width: 100%;

		display: inline-flex;
		justify-content: center;

		transition: all 300ms;

		&:hover {
			background-color: ${({ theme }) => theme.textColor};
			color: ${({ theme }) => theme.buttonColor};
		}
	}

	@media screen and (max-width: 900px) {
		flex-wrap: wrap;
		flex-direction: column;

		span {
			font-size: 0.8rem;
		}

		p,
		span,
		.edit-box {
			width: 100%;
		}

		.edit-box {
			border-radius: 6px 6px 0 0;

			margin-top: 0.5rem;
		}

		span {
			order: 1;

			border-radius: 0 0 6px 6px;

			margin-bottom: 0.5rem;
		}
	}
`;
