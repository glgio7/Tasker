import styled from "styled-components";

const Container = styled.main`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100vw;
	min-height: calc(100vh - 80px);
	color: #fff;
	padding: 2rem;

	position: relative;
	z-index: 5;

	background-color: ${({ theme }) => theme.backgroundColor};

	.background {
		position: absolute;

		opacity: 0.2;

		background-image: url("/img/background-tasker.jpg");

		z-index: -1;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	img {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		justify-content: center;
		flex-direction: column;
		padding: 2rem 1rem;
	}
`;

export default Container;
