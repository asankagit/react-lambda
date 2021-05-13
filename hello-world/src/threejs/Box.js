import React, { Component, useRef, useState, PureComponent } from 'react';
import ReactDOM from 'react-dom'
import { Canvas, useFrame, TextGeometry } from 'react-three-fiber'
import  * as Three from 'react-three-fiber'

export class Box extends PureComponent {
    constructor(props) {
        super(props)
        this.meshRef = React.createRef()
        this.state = {
            hovered: false,
            active: false
        }
        console.log("insice constructor", <TextGeometry text='Hello three.js!' parameters={{
            font: "arial",
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        }} />)
    }

    setHover = (val) => {
        this.setState({ hovered: val })
    }

    setActive = (val) => {
        this.setState({ active: val })
    }

    componentDidMount() {
        console.log("component did mount")
    }

    componentDidCatch(error, info){
        console.log("catch", error, info)
    }

    render() {
        try {
            useFrame(() => {
                this.meshRef.current.rotation.x = this.meshRef.current.rotation.y += 0.01
            })
        }
        catch(e){
            console.log(e)
        }
        
        const { active, hovered } = this.state
        return (
            // <mesh
            //     position={[1.2, 0, 0]}
            //     ref={this.meshRef}
            //     scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            //     onClick={e => this.setActive(!active)}
            //     onPointerOver={e => this.setHover(true)}
            //     onPointerOut={e => this.setHover(false)}
            // >
            //     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            //     <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
            // </mesh>
            <div>Box</div>
        )
    }

}