import styled from "styled-components";

export const StyledToolbar = styled.div`
	border-radius: 0 10px 10px 0;
	border: 2px outset #b22222;
	border-left: none;

	width: ${({ open }) => (open ? "20%" : "3rem")};

	z-index: 5;
	margin-left: -2rem;
	min-height: 75vh;

	overflow: hidden;

	background-color: #101010;

	transition: all 500ms;

	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: space-between; */

	.action-icon__menu {
		width: 42px;
		color: #b22222;
		height: 42px;
	}

	button {
		margin-block: 2rem;
		cursor: pointer;
	}

	.widget-icon {
		opacity: ${({ open }) => (open ? "1" : "0")};
		pointer-events: ${({ open }) => (open ? "all" : "none")};

		color: firebrick;
		width: 42px;
		color: #fff;
		height: 42px;
		transition: all 500ms;
	}

	.calendar {
		/* display: flex; */
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		height: 100%;
		/* width: 100%; */
		transform: scaleX(0);
		transition: all 250ms;
	}
	.calendar.active {
		transform: scaleX(1);
	}
	h3 {
		overflow: hidden;
		color: firebrick;
		font-size: 1rem;
	}
	p {
		overflow: hidden;
		color: #fff;
		font-weight: bold;
		font-size: 1.2rem;
	}
	button {
		height: 25%;
		background-color: transparent;
		/* display: flex; */
		/* flex-direction: column; */
		overflow: hidden;
		align-items: center;
		justify-content: flex-end;
	}

	@media screen and (max-width: 768px) {
		width: 90vw;
		height: 48px;
		min-height: inherit;
		margin-bottom: 0.5rem;
		flex-direction: row;

		.actions,
		.calendar {
			display: flex;
			align-items: center;
			flex-direction: row;
			overflow: hidden;
		}
		.calendar {
			flex-direction: row;
			justify-content: space-around;
			width: 75%;
		}
		button {
			height: 100%;
			p {
				font-size: 0.75rem;
			}
		}
		.widget-icon {
			height: 24px;
			width: 36px;
		}
		p {
			font-size: 1rem;
			margin-inline: 0.25rem;
		}
	}
`;
