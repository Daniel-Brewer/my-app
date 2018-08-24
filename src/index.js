import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Kennel from './components/Kennel';

// ReactDOM.render(<Kennel />, document.querySelector("#root"));

