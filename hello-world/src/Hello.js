import React, { Component } from 'react';
import st from './cards.scss';

class Hello extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={st.top}>
                <div className="card">
                    <img src="https://img.freepik.com/free-vector/buddha-lotus-happy-vesak-day-background-with-bodhi-tree_45981-221.jpg?size=626&ext=jpg" alt="Avatar" style={{width:"100%"}}/>
                        <div className="container">
                            <h4><b>Vesak day 2020</b></h4>
                            <p>Sample greeting card</p>
                        </div>
                   
                </div>
                </div>
        )
    }
     
}

export default Hello