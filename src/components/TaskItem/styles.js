import styled from "styled-components";

export const TaskContainer = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: calc(100% - 2rem);
	margin: 0.5rem 0;

	position: relative;

	.task,
	.task-deadline {
		word-break: break-word;

		border-radius: 6px;

		padding: 0.25rem 0.5rem;

		min-height: 40px;
		width: 65%;

		text-align: center;

		background-color: ${({ theme }) => theme.containerColor};
		color: ${({ theme }) => theme.textColor};

		opacity: ${({ done }) => (done ? "0.5" : "1")};

		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.task {
		justify-content: space-between;

		position: relative;
	}

	.task p {
		width: calc(100% - (24px + 0.25rem));
		text-align: left;
	}

	.task-info {
		position: absolute;
		left: 0;
		right: 0;

		border-radius: 6px;

		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;

		opacity: 0;
		pointer-events: none;

		background-color: ${({ theme }) => theme.containerColor};

		transition: all 250ms;
	}

	.task-info h6 {
		color: ${({ theme }) => theme.primaryColor};
		font-size: 1rem;
	}

	.task-info span {
		color: ${({ theme }) => theme.textColor};
		margin-right: 18px;
		margin-left: 6px;
	}

	.task-info.active {
		opacity: 1;
		pointer-events: all;
	}

	.task-info__icon {
		cursor: pointer;

		width: 24px;
		height: 24px;
		position: absolute;

		z-index: 50;
		right: 0.25rem;
	}

	.task-deadline {
		font-weight: bold;
		text-align: center;
		font-size: 1rem;

		width: 15%;
	}

	.task-manager {
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

		.task,
		.task-deadline,
		.task-manager {
			width: 100%;
		}

		.task {
			padding-inline: 0.5rem;
		}

		.task-deadline {
			font-size: 0.8rem;
		}

		.task-info {
			padding-block: 1rem;
			flex-direction: column;
		}
		.task-info span {
			margin-block: 6px;
			margin-right: 0;
			margin-left: 0;
		}

		.task-manager {
			border-radius: 6px 6px 0 0;

			margin-top: 0.5rem;
		}

		.task-deadline {
			order: 1;

			border-radius: 0 0 6px 6px;

			margin-bottom: 0.5rem;
		}
	}
`;
