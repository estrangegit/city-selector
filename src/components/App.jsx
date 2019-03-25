import React from 'react';
import VisibleForm from '../containers/VisibleForm'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>   <div>
                        <div className="jumbotron">
                            <h1>City selector</h1>
                        </div>
                        <VisibleForm formTitle="Search for a city"/>
                    </div>


export default App;