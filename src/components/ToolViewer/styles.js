import styled from "styled-components";

export const ToolContainer = styled.div`
	opacity: ${({ tool }) => (tool ? "1" : "0")};

	pointer-events: ${({ tool }) => (tool ? "all" : "none")};

	z-index: 9;

	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	transition: all 300ms;

	iframe {
		position: absolute;
		top: 0;
		bottom: 0;

		width: 100%;
		height: 100%;

		transition: all 300ms;
	}

	button {
		cursor: pointer;

		position: fixed;
		left: 0;
		bottom: 0;

		z-index: 10;

		width: 100%;
		height: 3rem;

		background-color: ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.buttonTextColor};

		font-weight: bold;

		transition: all 300ms;
	}

	@media screen and (max-width: 900px) {
		button {
			height: 4rem;
		}
	}
`;
