import styled from "styled-components";

export const Notepad = styled.section`
	position: relative;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-height: 80vh;
	background-color: #101010;
	border: 2px firebrick solid;
	margin-inline: 1rem;
	padding: 0.25rem 0.5rem;

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

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	h2 {
		text-align: center;
	}

	p {
		font-weight: normal;
		font-size: 1rem;
		line-height: 1rem;
	}

	@media screen and (max-width: 768px) {
		width: 90vw;
		min-height: 60vh;
	}
`;

export const CreateTask = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	min-height: 40px;
	color: #fff;
	margin: 1rem 0;

	input {
		font-size: 1.5rem;
		padding: 3px 0.5rem;
		width: 65%;
		font-weight: bold;
		background-color: #303030;
		height: 100%;
		border-radius: 5px;
		border: none;
		outline: none;
		color: #fff;
		&:focus {
			border: firebrick solid thin;
		}
	}

	select {
		border: none;
		outline: none;
		background-color: #303030;
		border-radius: 5px;
		font-size: 1rem;
		text-align: center;
		color: #fff;
		height: 100%;
		width: 15%;
	}

	button {
		overflow: hidden;
		width: 15%;
		height: 100%;
		min-height: 40px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		background-color: firebrick;
		border: none;
		transition: all 300ms;
		&:hover {
			opacity: 0.8;
		}
	}
	@media screen and (max-width: 768px) {
		button,
		input,
		select {
			font-size: 1rem;
			height: 100%;
			min-height: inherit;
			padding: 6px 0.5rem;
		}

		input {
			width: 50%;
		}

		select {
			width: 23%;
		}

		button {
			width: 23%;
		}
	}
`;
