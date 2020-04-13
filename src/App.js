import React from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Layout, Navigation, Drawer, Header, Content} from 'react-mdl';

import './App.css';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
       <Header className="header-color" title="BTWG Phone App" scroll>
            <Navigation>
                <Link className ="link" to="/">Home</Link>
                <Link className ="link" to="/contacts">Contacts</Link>
                <Link className ="link" to="/chats">Chats</Link>
            </Navigation>
        </Header>
        <Drawer className="menu-drawer" title="BTWG Phone App">
            <Navigation>
                <Link className ="link" to="/">Home</Link>
                <Link className ="link" to="/contacts">Contacts</Link>
                <Link className ="link" to="/chats">Chats</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
