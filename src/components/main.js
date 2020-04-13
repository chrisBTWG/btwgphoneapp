import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './home';
import Contacts from './contacts';
import Chats from './chats';





const Main = () => (

<Switch>
<Route exact path="/" component={Home} />
<Route path ="/about" component={Contacts} />
<Route path ="/projects" component={Chats} />
</Switch>


)

export default Main;