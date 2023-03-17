import styled from "styled-components";

export const Notepad = styled.section`
	position: relative;

	min-height: 80vh;
	width: 100%;

	border-radius: 10px;
	border: 2px firebrick solid;

	padding: 0.25rem 0.5rem;
	margin-left: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	text-align: center;

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

	.close-weather {
		opacity: 0;

		cursor: pointer;
		pointer-events: none;

		position: absolute;
		bottom: 0;

		z-index: 10;

		width: 100%;
		height: 2rem;

		background-color: #b22222;
		color: #fff;

		transition: all 300ms;
	}

	.close-weather.active {
		opacity: 1;
		pointer-events: all;
	}

	ul {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;

		width: 100%;
	}

	@media screen and (max-width: 768px) {
		width: 95vw;
		min-height: 60vh;

		margin-top: calc(54px + 2rem);
		margin-left: 0;
	}
`;

export const CreateTask = styled.div`
	display: flex;
	justify-content: space-between;

	width: 100%;

	margin: 1rem 0;

	input {
		width: 65%;

		font-size: 1rem;

		color: #fff;

		padding: 3px 0.5rem;

		border-radius: 5px;
		border: none;
		outline: none;

		background-color: #151515;
		&:focus {
			border: firebrick solid thin;
		}
	}

	select {
		border: none;
		border-radius: 5px;
		outline: none;

		background-color: #151515;

		color: #fff;

		font-size: 1rem;
		text-align: center;

		width: 15%;

		padding: 0 0.5rem;
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

		color: #fff;

		background-color: #b22222;

		transition: all 300ms;

		&:hover {
			opacity: 0.8;
		}
	}
	@media screen and (max-width: 768px) {
		flex-wrap: wrap;

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
