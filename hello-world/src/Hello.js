import React, { Component, useRef, useState, PureComponent  } from 'react';
import st from './cards.scss';
import { Box } from "./threejs/Box"
import { Animation } from "./threejs/Animation"
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'


  class Hello extends Component {
    constructor(props) {
        super(props)
        this.cardRef = React.createRef()
    }

    render() {
        const { req } = this.props
        // const { IncomingMessage } = req
        // const { params, query} = IncomingMessage
        // console.log(">>>", this.props)
        return (
            <div>
                <Aniamtion />
                 <Canvas>
                        <Box position={[-1.2, 0, 0]}/>
                 </Canvas>
                
                {/* <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[-1.2, 0, 0]}/>
                </Canvas> */}
             {/* {console.log("inisde ello", this.props)} */}

                {/* <div id="card" ref={this.cardRef}>
                    <div className="coverPage">
                        <div className="coverContent"> Invito</div>
                    </div>

                    <div id="card_front" className="contentPage">
                        <div className="invitowraper">
                            <h1 onClick={() =>alert("fff")}>Vesak 2020!</h1>
                            <p  className="phrase">{typeof query.message !== "undefined" ? query.message: ""}</p>
                            <p  className="from">{typeof query.name !== "undefined" ? query.name : ""}</p>
                            <p  className="to">{typeof query.to !== "undefined" ? query.to : ""}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

}

export default Hello