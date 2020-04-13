import React from 'react';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Layout, Navigation, Drawer, Header, Content} from 'react-mdl';

import './App.css';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
       <Header className="header-color" title="Christopher's Portfolio" scroll>
            <Navigation>
                <Link className ="link" to="/">Home</Link>
                <Link className ="link" to="/contacts">Contacts</Link>
                <Link className ="link" to="/chats">Chats</Link>
            </Navigation>
        </Header>
        <Drawer className="menu-drawer" title="Portfolio Pages">
            <Navigation>
                <Link className ="link" to="/resume">Resume</Link>
                <Link className ="link" to="/about">About</Link>
                <Link className ="link" to="/projects">Projects</Link>
                <Link className ="link" to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />>
        </Content>
    </Layout>
</div>
  );
}

export default App;
