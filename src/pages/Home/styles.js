import styled from "styled-components";

export const TextSection = styled.div`
	padding: 2rem 0;
	width: 45%;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		color: #fff;
		font-size: 1.75rem;
		margin-bottom: 1.25rem;
		width: 90%;
		&:first-child {
			font-size: 2rem;
			font-weight: bold;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;

		p {
			width: 100%;
		}
	}
`;

export const GuideSection = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 35%;
	border-radius: 2rem;
	background-color: #151515;

	div {
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
		width: 100%;
	}
`;
