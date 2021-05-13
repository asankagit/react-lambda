import React, { PureComponent } from  "react"


export class Animation extends PuerComponent {
  constructor(props){
    super(props)
    console.log("Animatuion constructor is calling")
  }

  render(){
    return(
      <div>
        Animation class is rendering
      </div>
    )
  }
}