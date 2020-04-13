import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './home';
import Contacts from './contacts';
import Chats from './chats';





const Main = () => (

<Switch>
<Route exact path="/btwgphoneapp2/" component={Home} />
<Route path ="/btwgphoneapp2/contacts" component={Contacts} />
<Route path ="/btwgphoneapp2/chats" component={Chats} />
</Switch>


)

export default Main;