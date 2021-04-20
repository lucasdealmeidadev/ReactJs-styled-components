import React from 'react';
import Styled from 'styled-components';

const Footer = Styled.footer `
    position: relative;
    bottom: 0;
    left: 0;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const Item = Styled.p `
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;

function footer() {
  return (
      <React.Fragment>
          <Footer>
              <Item>Desenvolvido por Lucas de Almeida Monteiro (:</Item>
          </Footer>
      </React.Fragment>
  );
}

export default footer;