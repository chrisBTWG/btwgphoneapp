import React, { Component } from 'react';
import { Grid, Cell, Button, Card, CardTitle, CardText, CardActions, Tabs, Tab } from 'react-mdl'
import Logo from '../btwglogo.png';
import {Link} from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {

            return(
            
        <div>
            <div className="tabs-heading">
                <center><h1>Make a Call</h1></center>
            </div>
            <div style={{width: '100%', margin: 'auto'}}>
                       
            </div>
        </div>

            );

        } else if(this.state.activeTab === 1) {

            return(

                <div>
                    <div className="tabs-heading">
                        <center><h1>Send a Text</h1></center>
                    </div>
                    <div style={{width: '100%', margin: 'auto'}}>
                
                    </div>
                </div>


            );

        } else if(this.state.activeTab === 2) {

            return(
            <div>
                <div className="tabs-heading">
                <center><h1>See Open Chats</h1></center>
                    </div>
                <div style={{width: '100%', margin: 'auto'}}>
                
                </div>
            </div>

            );
        }
    }


render() {

    return(
    <div>
        <div style ={{width: '100%', margin: 'auto'}}> 
        <Grid className="landing-grid">
            <Cell col={12}>
                <center><img src={Logo} alt="logo" className="logo" /></center>
                   
            <div className="banner-text">

                <center><h1>Send a Phone Call or Text Message to Anyone From Anywhere.</h1></center>


            </div>
            </Cell>
        </Grid>
        <div className="project-tabs"> 
                <Tabs activeTab={this.state.active} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Make a Call</Tab>
                    <Tab>Send a Text</Tab>
                    <Tab>See Open Chats</Tab>
                </Tabs>
            <section className="tabs-content">{this.toggleCategories()}</section>
            
        </div>
    </div>
</div>

    );

    }

}


export default Home;