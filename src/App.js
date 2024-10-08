import React from "react";
import Index from "pages/index";
import Resources from "pages/resources";
import AiAssistants from "pages/aiAssistants";
import AiAgents from "pages/aiAgents";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/resources' component={Resources}/>
			<Route exact path='/ai-assistants' component={AiAssistants}/>
			<Route exact path='/ai-agents' component={AiAgents}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
