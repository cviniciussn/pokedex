import React from 'react';

import { Background, ModalComponent } from './modal-style.js';
import modalClose from '../../img/Modal/modal-close.svg';
import { useData } from '../../contexts/GeneralContexts.jsx';

const Modal = (props) => {

	const { modal, setModal } = useData()
	const closeModal = () => {
		modal && setModal(false)
	}
	return (
		<Background
			onClick={closeModal}
		>
			<ModalComponent
				imageLinearFirst='#D93E30'
				imageLinearSecond='#B33327'
				colorTypeFirst='#70A83B'
				colorTypeSecond='#A974BC'
				contentLinearFirst='#732119'
				contentLinearSecond='#D93E30'
			>

				<div className='modal-card'>
					<div className="modal-close" onClick={_ => { closeModal() }}>
						<img src={modalClose} alt="Fechar" />
					</div>

					<div className="modal-image">
						<img src={modal.pic} alt="Avatar" />
						<div className="types-container">
							<p className='type' id="type-1">{modal.type_first}</p>
							<p className='type' id="type-2">{modal.type_second}</p>
						</div>
					</div>

					<div className="modal-content">
						<div className="modal-pokemon-primary">
							<h1 className="title">{modal.name}</h1>

							<div className="modal-pokemon-generation">
								<p>Geração 1</p>
								<span id="pokemon-gerenation-id">{modal.id}</span>
							</div>
						</div>

						<div className="modal-info">
							<div className="pokemon-abilities">
								<h3>Habilidades</h3>
								<p>{modal.abilities}</p>
							</div>

							<div className="pokemon-vitalities">
								<div className="pokemon-vitalities-info">
									<h3>Pontos saudáveis</h3>
									<div id="life-points">
										<span>{modal.healthPoints}</span>
										<progress value="70" max="100">20 %</progress>
									</div>
								</div>
								<div className="pokemon-vitalities-info">
									<h3>Experiência</h3>
									<div id="experience">
										<span>{modal.experience}</span>
										<progress value="70" max="100">70 %</progress>
									</div>
								</div>
							</div>

							<div className="pokemon-properties">
								<div className="card-property">
									<div className="property-number" id="defense">
									{modal.defense}
									</div>
									<p>Defesa</p>
								</div>
								<div className="card-property">
									<div className="property-number" id="attack">
									{modal.attack}
									</div>
									<p>Ataque</p>
								</div>
								<div className="card-property">
									<div className="property-number" id="sp-attack">
										{modal.specialAttack}
									</div>
									<p>Sp Ataque</p>
								</div>
								<div className="card-property">
									<div className="property-number" id="sp-defense">
										{modal.specialDefense}
									</div>
									<p>Sp Defesa</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</ModalComponent>
		</Background>
	)
};

export default Modal;
