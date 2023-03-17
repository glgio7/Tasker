import styled from "styled-components";

export const ToolbarContainer = styled.div`
	border-radius: 0 10px 10px 0;
	border: 2px outset #b22222;
	border-left: none;

	width: ${({ open }) => (open ? "20%" : "3rem")};

	margin-left: -2rem;
	min-height: 80vh;
	padding: 0 2rem;

	overflow: hidden;

	background-color: #101010;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;

	transition: all 500ms;

	button {
		margin-block: 2rem;
		cursor: pointer;
		background-color: transparent;
		opacity: ${({ open }) => (open ? "1" : "0")};
		pointer-events: ${({ open }) => (open ? "all" : "none")};
		color: #fff;
		transition: all 300ms;
	}

	span {
		display: block;
		color: #fff;
	}

	.action-icon__menu {
		color: #b22222;
		min-width: 42px;
		min-height: 42px;
		opacity: 1;
		pointer-events: all;
	}

	.action-icon {
		width: 42px;
		height: 42px;
	}

	.live-date {
		opacity: ${({ open }) => (open ? "1" : "0")};
		pointer-events: ${({ open }) => (open ? "all" : "none")};
	}

	@media screen and (max-width: 768px) {
		width: 90vw;
		border-left: 2px outset #b22222;
		border-top: none;
		border-radius: 0 0 10px 10px;
		margin-left: 0;

		min-height: 54px;

		position: absolute;
		z-index: 90;
		top: 0;

		height: ${({ open }) => (open ? "100%" : "54px")};
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		margin-bottom: 0.5rem;

		button {
			width: 100%;
			height: auto;
			margin-block: 0rem;
			cursor: pointer;
		}

		.action-icon__menu span {
			display: none;
		}
	}
`;
