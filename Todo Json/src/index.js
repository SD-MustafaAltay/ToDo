import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application';
import axios from 'axios';

var reactContainerDiv=document.getElementById("reactContainer");
var reactRoot=ReactDOM.createRoot(reactContainerDiv);

reactRoot.render(
    <Application/>
);