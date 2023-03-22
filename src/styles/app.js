import styled from "styled-components";

const Container = styled.main`
	display: flex;
	justify-content: space-between;

	width: 100%;
	min-height: calc(100vh - 80px);

	background-color: ${({ theme }) => theme.backgroundColor};
	color: #fff;

	padding: 2rem;

	position: relative;

	z-index: 5;

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

	@media screen and (max-width: 900px) {
		flex-direction: column;
		align-items: center;
		padding: 2rem 2rem;
	}
`;

export default Container;
