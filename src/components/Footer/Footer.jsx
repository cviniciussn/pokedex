import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${props => props.colorBackground};
padding: 16px 120px;


`

const Footer = (props) => {
    return (
        <FooterComponent
            colorBackground="#F2B807" >
            <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>

            <p>Ours Team</p>
        </FooterComponent>
    )
}

export default Footer;
