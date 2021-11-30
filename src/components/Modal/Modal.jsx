import React from 'react';

// style
import { ModalComponent } from './modal-style.js';

// images
import pokemonImage from '../../img/Modal/modal-pokemon-image.svg';
import modalClose from '../../img/Modal/modal-close.svg';

const Modal = (props) => {
	return (
		<ModalComponent
			imageLinearFirst='#D93E30'
			imageLinearSecond='#B33327'
			colorTypeFirst='#70A83B'
			colorTypeSecond='#A974BC'
			contentLinearFirst='#732119'
			contentLinearSecond='#D93E30'>

			<div className='modal-card'>
				<div className="modal-close">
					<img src={modalClose} alt="Fechar" />
				</div>

				<div className="modal-image">
					<img src={pokemonImage} alt="Avatar" />
					<div className="types-container">
						<p className='type' id="type-1">Grass</p>
						<p className='type' id="type-2">Poison</p>
					</div>
				</div>

				<div className="modal-content">
					<div className="modal-pokemon-primary">
						<h1 className="title">Charizard</h1>

						<div className="modal-pokemon-generation">
							<p>Geração 1</p>
							<span id="pokemon-gerenation-id">578</span>
						</div>
					</div>

					<div className="modal-info">
						<div className="pokemon-abilities">
							<h3>Habilidades</h3>
							<p>Overgrow - Chlorophyll</p>
						</div>

						<div className="pokemon-vitalities">
							<div className="pokemon-vitalities-info">
								<h3>Pontos saudáveis</h3>
								<div id="life-points">
									<span>1 000 000</span>
									<progress value="70" max="100">70 %</progress>
								</div>
							</div>
							<div className="pokemon-vitalities-info">
								<h3>Experiência</h3>
								<div id="experience">
									<span>1 000 000</span>
									<progress value="70" max="100">70 %</progress>
								</div>
							</div>
						</div>

						<div className="pokemon-properties">
							<div className="card-property">
								<div className="property-number" id="defense">
									49
								</div>
								<p>Defesa</p>
							</div>
							<div className="card-property">
								<div className="property-number" id="attack">
									235
								</div>
								<p>Ataque</p>
							</div>
							<div className="card-property">
								<div className="property-number" id="sp-attack">
									4
								</div>
								<p>Sp Ataque</p>
							</div>
							<div className="card-property">
								<div className="property-number" id="sp-defense">
									1000
								</div>
								<p>Sp Defesa</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</ModalComponent>
	)
};

export default Modal;
