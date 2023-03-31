import { IoMenu, IoPartlySunnyOutline } from "react-icons/io5";
import {
	VscAdd,
	VscClearAll,
	VscClose,
	VscNewFile,
	VscNewFolder,
	VscSymbolOperator,
} from "react-icons/vsc";
import { useContext, useState } from "react";
import { ToolbarContainer } from "./styles";
import { ListContext } from "../../contexts/ListContext";
import { useEffect } from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const lastDay = JSON.stringify(new Date(year, month, 0)).slice(9, 11);

export const remainingDays = parseInt(lastDay) - parseInt(day) + 1;

export const Toolbar = ({ toggleWeather, clearList }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [toolsOpen, setToolsOpen] = useState(false);
	const [categoriesOpen, setCategoriesOpen] = useState(false);

	const { categories, setCategories, filterCategory } = useContext(ListContext);

	const saveCategories = (item, value) =>
		localStorage.setItem(item, JSON.stringify(value));

	const closeOptions = () => {
		setToolsOpen(false);
		setCategoriesOpen(false);
	};

	useEffect(() => {
		const savedCategories = JSON.parse(localStorage.getItem("categories"));

		if (savedCategories) {
			setCategories(savedCategories);
		}
	}, [setCategories]);

	const addCategory = () => {
		const newCategory = window.prompt("Insira o nome da categoria");
		setCategories([...categories, newCategory]);
		saveCategories("categories", [...categories, newCategory]);
	};

	const removeCategory = (value) => {
		const newCategories = categories.filter((item) => item !== value);
		setCategories(newCategories);
		saveCategories("categories", newCategories);
	};

	return (
		<>
			<ToolbarContainer open={isOpen}>
				<button
					className="menu"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<IoMenu className="menu__action-icon" />
					<span>Menu</span>
				</button>
				<button className="options-button" onClick={() => setToolsOpen(true)}>
					Ferramentas
				</button>
				<button
					className="options-button"
					onClick={() => setCategoriesOpen(true)}
				>
					Categorias
				</button>

				<div
					className={toolsOpen || categoriesOpen ? "wrapper active" : "wrapper"}
				>
					<button className="options-button" onClick={closeOptions}>
						Voltar
					</button>

					<button className="options-button" onClick={addCategory}>
						<VscNewFolder className="options-button__icon" />
						<span>Nova categoria</span>
					</button>

					{/* // Tools */}
					{toolsOpen && (
						<>
							<button
								onClick={() => {
									toggleWeather();
									closeOptions();
									setIsOpen(false);
								}}
							>
								<IoPartlySunnyOutline className="action-icon" />
								<span>Clima</span>
							</button>

							<button
								onClick={() => {
									setIsOpen(false);
									closeOptions();
								}}
							>
								<VscSymbolOperator className="action-icon" />
								<span>Calculadora</span>
							</button>
							<button
								onClick={() => {
									clearList();
									setIsOpen(false);
									closeOptions();
								}}
							>
								<VscClearAll className="action-icon" />
								<span>Limpar lista</span>
							</button>
						</>
					)}

					{/* // Categories */}

					{categoriesOpen &&
						categories.map((item) => (
							<button key={item} className="options-button categories">
								<span
									onClick={() => {
										setIsOpen(false);
										closeOptions();
										filterCategory(item);
									}}
								>
									{item}
								</span>
								<VscClose
									className="options-button__icon"
									onClick={() => {
										removeCategory(item);
									}}
								/>
							</button>
						))}
				</div>
			</ToolbarContainer>
		</>
	);
};
