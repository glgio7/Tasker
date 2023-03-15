import styled from "styled-components";

export const Notepad = styled.section`
	position: relative;

	min-height: 80vh;
	width: 100%;

	border-radius: 10px;
	border: 2px firebrick solid;

	padding: 0.25rem 0.5rem;

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
		button,
		select {
			width: 20%;
		}

		input {
			width: 55%;
		}
	}
`;

export const Item = styled.li`
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

		text-align: left;

		background-color: #151515;
		opacity: ${(props) => (props.checked ? "0.25" : "1")};

		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	span {
		font-weight: bold;
		font-size: 1rem;

		width: 15%;
	}

	.edit-box {
		width: 15%;
		height: 40px;

		border-radius: 5px;

		background-color: #111;

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

		background-color: #b22222;
		color: #fff;

		width: 100%;

		display: inline-flex;
		justify-content: center;

		transition: all 300ms;

		&:hover {
			background-color: #fff;
			color: firebrick;
		}
	}

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		flex-direction: column;

		span {
			font-size: 0.8rem;
			text-align: center;
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
