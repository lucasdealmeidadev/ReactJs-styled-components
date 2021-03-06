import React from 'react';
import GlobalStyle from './theme/global';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <Header/>
            <Content/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
