import React from 'react'
import Cuboid, { Front, Back, Top, Bottom, Left, Right } from 'react-cuboid'

import '../index.css'

export class CubeExample extends React.PureComponent {

  state = {
    rotateX: 0,
    rotateY: 0,
  }

  componentDidMount(): void {
    document.onmousemove = (e: any) => {
      const rotateY = -200 + ((e.pageX || 1) / window.innerWidth) * 400;
      const rotateX = -200 + ((e.pageY || 1) / window.innerHeight) * 400;

      this.setState({
        rotateY,
        rotateX
      });
    };
  }

  render() {
    return (
      <div style={{ marginLeft: 200, marginTop: 200 }}>
        <Cuboid
          size={100}
          sideStyle={{borderStyle: 'solid'}}
          rotateX={this.state.rotateX}
          rotateY={this.state.rotateY}
        >
          <Front>
            <div className="full-center">Front</div>
          </Front>
          <Back>
            <div className="full-center">Back</div>
          </Back>
          <Top>
            <div className="full-center">Top</div>
          </Top>
          <Bottom>
            <div className="full-center">Bottom</div>
          </Bottom>
          <Left>
            <div className="full-center">Left</div>
          </Left>
          <Right>
            <div className="full-center">Right</div>
          </Right>
        </Cuboid>
      </div>
    );
  }
}

