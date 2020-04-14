import React, { Component } from 'react';
import { Grid, Cell, Button, Card, CardTitle, CardText, CardActions, Tabs, Tab, List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl'



class Contacts extends Component {


render() {

    return(

        <div style ={{width: '100%', margin: 'auto'}}>
            <Grid>
                <Cell col={2}>
            <List>
                <ListItem>
                    <ListItemContent icon="person">Brian Evans</ListItemContent>
                    <ListItemAction>
                        <a href="#"><Icon name="phone" /></a>
                    </ListItemAction>
                    <ListItemAction>
                        <a href="#"><Icon name="message" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="person">Shane Shuford</ListItemContent>
                    <ListItemAction>
                        <a href="#"><Icon name="phone" /></a>
                    </ListItemAction>
                    <ListItemAction>
                        <a href="#"><Icon name="message" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="person">Chris Blair</ListItemContent>
                    <ListItemAction>
                        <a href="#"><Icon name="phone" /></a>
                    </ListItemAction>
                    <ListItemAction>
                        <a href="#"><Icon name="message" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="person">Kellie Shuford</ListItemContent>
                    <ListItemAction>
                        <a href="#"><Icon name="phone" /></a>
                    </ListItemAction><ListItemAction>
                        <a href="#"><Icon name="message" /></a>
                    </ListItemAction>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="person">Emily Stringer</ListItemContent>
                    <ListItemAction>
                        <a href="#"><Icon name="phone" /></a>
                    </ListItemAction><ListItemAction>
                        <a href="#"><Icon name="message" /></a>
                    </ListItemAction>
                </ListItem>
            </List>
             </Cell>
            </Grid>

        </div>

    );

    }

}


export default Contacts;