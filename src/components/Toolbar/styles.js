import styled from "styled-components";

export const ToolbarContainer = styled.div`
	border-radius: 0 10px 10px 0;
	border: 2px ${({ theme }) => theme.primaryColor} outset;
	border-left: none;

	width: ${({ open }) => (open ? "20%" : "3rem")};

	margin-left: -2rem;
	height: 80vh;
	padding: ${({ open }) => (open ? "0rem" : "0 2rem")};

	overflow: hidden;

	background-color: ${({ theme }) => theme.containerColor};

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;

	transition: all 500ms;

	position: relative;

	.menu {
		background-color: transparent;
		color: ${({ theme }) => theme.buttonColor};
		opacity: 1;
		pointer-events: all;
	}

	.menu__action-icon {
		width: 42px;
		height: 42px;
	}

	.menu span {
		height: 1rem;
	}

	///////// Options /////////

	.options-button {
		border: 1px solid
			${({ theme }) =>
				theme.containerColor !== "#fff"
					? "rgba(255, 255, 255, 0.2)"
					: "rgba(0, 0, 0, 0.2)"};
		border-radius: 10px;

		display: flex;
		align-items: center;
		justify-content: center;

		margin-block: 0.5rem;

		min-height: 48px;
		height: auto;
		width: 90%;

		font-weight: bold;

		background-color: ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.buttonTextColor};

		&:hover {
			background-color: ${({ theme }) => theme.buttonTextColor};
			color: ${({ theme }) => theme.buttonColor};

			span {
				color: ${({ theme }) => theme.buttonColor};
			}
		}

		&:first-child {
			margin-block: 2rem;
		}
	}

	.options-button.categories {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-inline: 3px;

		background-color: ${({ theme }) => theme.buttonColor};

		&:hover {
			background-color: ${({ theme }) => theme.buttonTextColor};
			color: ${({ theme }) => theme.buttonColor};
		}
	}
	.options-button.categories span {
		display: inline-flex;
		align-items: center;

		height: 100%;
		width: 80%;
	}

	.options-button__icon {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.wrapper {
		background-color: ${({ theme }) => theme.containerColor};

		position: absolute;
		top: 0;

		height: 100%;
		overflow-y: auto;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;

		opacity: 0;

		pointer-events: none;

		transition: all 300ms;
	}

	.wrapper.active {
		opacity: 1;
		pointer-events: all;
	}

	///////// General /////////

	button {
		margin-block: 2rem;
		cursor: pointer;
		background-color: transparent;
		opacity: ${({ open }) => (open ? "1" : "0")};
		color: ${({ theme }) => theme.primaryColor};
		transition: all 300ms;
	}

	span {
		display: block;
		color: ${({ theme }) => theme.textColor};
	}

	.action-icon {
		width: 42px;
		height: 42px;
	}

	@media screen and (max-width: 900px) {
		width: 90%;
		border-left: 2px outset ${({ theme }) => theme.primaryColor};
		border-top: none;
		border-radius: 0 0 10px 10px;
		margin-left: 0;

		position: absolute;
		z-index: 90;
		top: 0;

		height: ${({ open }) => (open ? "100%" : "54px")};
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-bottom: 0.5rem;

		button {
			width: 100%;
			height: auto;
			margin-block: 2 rem;
			cursor: pointer;
		}

		.menu {
			margin-block: 0rem;
		}

		.wrapper {
			justify-content: flex-start;
		}

		.menu span {
			display: none;
		}
	}
`;
