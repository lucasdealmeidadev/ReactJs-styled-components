import React from 'react';
import Styled from 'styled-components';

const Item = Styled.p `
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bolder;
`;

function header() {
    return(
        <Item>Lista de Filmes</Item>
    );
}

export default header;