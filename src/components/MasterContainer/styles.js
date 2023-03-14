import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	min-height: calc(100vh - 80px);
	color: #fff;
	padding: 2rem;

	position: relative;
	z-index: 5;

	.background {
		position: absolute;

		opacity: 0.2;

		background-image: url("/background-tasker.jpg");

		z-index: -1;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	img {
		width: 100%;
	}

	///////////////////////////////////////////////////////////// HOME BELOW

	.container-text,
	.container-demo {
		padding: 2rem 0;
		width: 45%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container-text p {
		color: #fff;
		font-size: 1.75rem;
		margin-bottom: 1.25rem;
		width: 90%;
		&:first-child {
			font-size: 2rem;
			font-weight: bold;
		}
	}

	.container-demo {
		width: 35%;
		border-radius: 2rem;
		background-color: #151515;
		/* background-image: url("/exemplo.jpg"); */
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	.container-demo div {
		padding: 1rem;
		border-radius: 2rem;
		background-color: #101010;
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
			background-color: #f22222;
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
		flex-direction: column;
		padding: 0 2rem;
	}
`;
