import * as S from "./styles";

const ToolViewer = ({ tool, title, src, onClick }) => {
	return (
		<S.ToolContainer tool={tool}>
			<iframe src={src} title={title} />
			<button onClick={onClick}>Voltar para Notas</button>
		</S.ToolContainer>
	);
};

export default ToolViewer;
