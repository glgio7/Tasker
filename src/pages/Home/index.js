import MasterContainer from "../../components/MasterContainer";
import { GuideSection, TextSection } from "./styles";

export default function Home() {
	return (
		<>
			<MasterContainer>
				<TextSection>
					<p>
						Manter suas ideias, tarefas e informações importantes organizadas e
						com tanta segurança nunca foi tão fácil!
					</p>
					<p>
						Interface simples e intuitiva, crie e edite anotações rapidamente,
						sem distrações.
					</p>
					<p>
						Integração direta com o Climaki, confira a previsão do tempo antes
						de marcar seus compromissos sem sair da plataforma.
					</p>
					<p>
						Suas anotações salvas apenas no seu navegador do celular! Totalmente
						seguro e confiável!
					</p>
				</TextSection>
				<GuideSection>
					<h2>
						Anote, organize e domine suas idéias: descubra como tornar isso
						simples com nosso app.
					</h2>
					<div className="item">
						<span></span>
						<p>Organize suas notas com etiquetas personalizadas.</p>
					</div>
					<div className="item">
						<span></span>
						<p>Separe por categorias e tenha tudo sob seu controle.</p>
					</div>
					<div className="item">
						<span></span>
						<p>Defina os prazos e mantenha-se em ordem!</p>
					</div>
				</GuideSection>
			</MasterContainer>
		</>
	);
}
