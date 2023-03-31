import styled from "styled-components";

export const Notepad = styled.section`
	position: relative;

	height: 80vh;
	width: 100%;

	overflow-y: auto;

	border-radius: 10px;
	border: 2px ${({ theme }) => theme.primaryColor} solid;

	padding: 0.25rem 0.5rem;
	margin-left: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	text-align: center;

	background-color: ${({ theme }) => theme.backgroundColor};

	h2,
	h4 {
		background-color: ${({ theme }) => theme.backgroundColor};
		color: ${({ theme }) => theme.textColor};

		width: 100%;
	}

	h2.list-title {
		background-color: ${({ theme }) => theme.containerColor};
		color: ${({ theme }) => theme.primaryColor};

		margin-block: 0.5rem;
		padding-block: 0.5rem;

		border-radius: 10px;
	}

	span:first-child {
		color: ${({ theme }) => theme.primaryColor};
	}

	iframe {
		opacity: 0;

		pointer-events: none;

		position: absolute;
		top: 0;

		width: 100%;
		height: 100%;

		transition: all 300ms;
	}
	iframe.active {
		z-index: 9;

		opacity: 1;

		pointer-events: all;
	}

	.close-iframe {
		opacity: 0;

		cursor: pointer;
		pointer-events: none;

		position: absolute;
		bottom: 0;

		z-index: 10;

		width: 100%;
		height: 3rem;

		background-color: ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.buttonTextColor};

		font-weight: bold;

		transition: all 300ms;
	}

	.close-iframe.active {
		opacity: 1;
		pointer-events: all;
	}

	ul {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;

		width: 100%;
	}

	@media screen and (max-width: 900px) {
		width: 95%;

		margin-top: 36px;
		margin-left: 0;
	}
`;

export const CreateTask = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	width: 100%;

	padding: 1rem;
	margin: 1rem 0;

	border-radius: 5px;

	background-color: ${({ theme }) => theme.containerColor};

	input {
		width: 65%;

		font-size: 1rem;

		color: ${({ theme }) => theme.textColor};

		padding: 3px 0.5rem;

		border-radius: 5px;
		border: none;
		outline: none;

		background-color: ${({ theme }) => theme.containerColor};
		border: 2px ${({ theme }) => theme.primaryColor} outset;
	}

	select {
		border: none;
		border-radius: 5px;
		outline: none;

		background-color: ${({ theme }) => theme.backgroundColor};
		color: ${({ theme }) => theme.textColor};

		font-size: 1rem;
		text-align: center;

		width: 15%;

		cursor: pointer;

		padding: 0 0.5rem;
	}

	.categories-selector {
		appearance: none;

		width: 100%;
		height: 40px;

		margin-top: 0.5rem;

		font-weight: bold;

		color: ${({ theme }) => theme.buttonTextColor};

		background-color: ${({ theme }) => theme.buttonColor};
	}

	button {
		width: 15%;
		height: 40px;

		border-radius: 5px;
		border: none;

		cursor: pointer;

		font-weight: bold;

		display: flex;
		justify-content: center;
		align-items: center;

		color: ${({ theme }) => theme.buttonTextColor};

		background-color: ${({ theme }) => theme.primaryColor};

		transition: all 300ms;

		&:hover {
			opacity: 0.8;
		}
	}
	@media screen and (max-width: 900px) {
		button,
		select {
			margin-top: 0.5rem;
		}

		input {
			width: 100%;
			height: 40px;
		}

		select {
			width: 60%;
		}

		button {
			width: 35%;
		}
	}
`;
