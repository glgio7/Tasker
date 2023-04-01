import * as S from "./styles";

const ToolViewer = ({ tool, title, src, onClick }) => {
	if (tool)
		return (
			<S.ToolContainer>
				<iframe src={src} title={title} />
				<button onClick={onClick}>Voltar para Notas</button>
			</S.ToolContainer>
		);
};

export default ToolViewer;
