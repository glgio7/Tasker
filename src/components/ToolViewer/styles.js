import styled from "styled-components";

export const ToolContainer = styled.div`
	opacity: 1;

	pointer-events: all;

	z-index: 9;

	position: absolute;
	top: 0;

	width: 100%;
	height: 100%;

	transition: all 300ms;

	iframe {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		transition: all 300ms;
	}

	button {
		cursor: pointer;

		position: absolute;
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
`;
