import React, {Fragment} from 'react';
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'
import './config/reactotron'
import {GlobalStyle} from "./styles/global";
import {Wrapper, Container} from './styles/components'

function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <BrowserRouter>
                <Wrapper>
                    <Container>
                        <Provider store={store}>
                            <Routes/>
                        </Provider>
                    </Container>
                </Wrapper>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
