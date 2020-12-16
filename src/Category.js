import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Category = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <div>
                <Tabs value={0}>

                    <Link to={`${match.url}/frutas`}> <Tab label="frutas"></Tab></Link>
                    <Link to={`${match.url}/verduras`}> <Tab label="verduras"></Tab></Link>

                </Tabs>
                <Switch >
                    <Route path={`${match.url}/frutas`}>
                        <Box>
                            <Typography>Estas en la pagina de frutas</Typography>
                        </Box>
                    </Route>
                    <Route path={`${match.url}/verduras`}>
                        <Box>
                            <Typography>Estas en la pagina de verduras</Typography>
                        </Box>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
