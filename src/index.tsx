import * as React from 'react';

interface Props {
  size?: number
  width?: number
  height?: number
  depth?: number
  perspective?: number;
  perspectiveX?: number;
  perspectiveY?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  skewX?: number;
  skewY?: number;
  sideStyle?: Object;
}

const transformCrossBrowser = (style: string) => {
  return {
    WebkitTransform: style,
    MozTransform: style,
    msTransform: style,
    OTransform: style,
    transform: style
  };
};

const transformOriginCrossBrowser = (style: string) => {
  return {
    WebkitTransformOrigin: style,
    MozTransformOrigin: style,
    msTransformOrigin: style,
    OTransformOrigin: style,
    transformOrigin: style
  };
};

export default class Cuboid extends React.PureComponent<Props> {
  get size() {
    return this.props.size !== undefined ? this.props.size : 100;
  }

  get width() {
    return this.props.width !== undefined ? this.props.width : this.size;
  }

  get height() {
    return this.props.height !== undefined ? this.props.height : this.size;
  }

  get depth() {
    return this.props.depth !== undefined ? this.props.depth : this.size;
  }

  get perspective() {
    return this.props.perspective !== undefined ? this.props.perspective : 1000;
  }

  get perspectiveX() {
    return this.props.perspectiveX !== undefined ? this.props.perspectiveX : 50;
  }

  get perspectiveY() {
    return this.props.perspectiveY !== undefined ? this.props.perspectiveY : 50;
  }

  get rotateX() {
    return this.props.rotateX !== undefined ? this.props.rotateX : 0;
  }

  get rotateY() {
    return this.props.rotateY !== undefined ? this.props.rotateY : 0;
  }

  get rotateZ() {
    return this.props.rotateZ !== undefined ? this.props.rotateZ : 0;
  }

  get skewX() {
    return this.props.skewX !== undefined ? this.props.skewX : 0;
  }

  get skewY() {
    return this.props.skewY !== undefined ? this.props.skewY : 0;
  }

  get sideStyle() {
    return this.props.sideStyle !== undefined ? this.props.sideStyle : {};
  }

  getChildren = (name: string) => {
    if (this.props.children && Array.isArray(this.props.children)) {
      return this.props.children.filter((c: any) => {
        return c.type.displayName === name;
      });
    } else {
      return this.props.children;
    }
  };

  render() {
    const container = {
      WebkitPerspective: this.perspective,
      perspective: this.perspective,
      WebkitPerspectiveOrigin: `${this.perspectiveX}% ${this.perspectiveY}%`,
      perspectiveOrigin: `${this.perspectiveX}% ${this.perspectiveY}%`
    };

    const cube = {
      width: this.width,
      height: this.height,
      transformStyle: 'preserve-3d',
      ...transformCrossBrowser(`rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg) skew(${this.skewX}deg, ${this.skewY}deg)`)
    };

    const bottom = {
      position: 'absolute',
      width: this.width,
      height: this.depth,
      backgroundColor: '#ff666688',
      ...transformOriginCrossBrowser('center'),
      ...transformCrossBrowser(`rotateX(90deg) translateZ(${-(this.height - this.depth / 2)}px)`)
    };

    const top = {
      position: 'absolute',
      width: this.width,
      height: this.depth,
      backgroundColor: '#E13FF488',
      ...transformOriginCrossBrowser('center'),
      ...transformCrossBrowser(`rotateX(90deg) translateZ(${this.depth / 2}px)`)
    };

    const back = {
      position: 'absolute',
      width: this.width,
      height: this.height,
      backgroundColor: '#944dff88',
      ...transformOriginCrossBrowser('center'),
      ...transformCrossBrowser(`scaleX(-1) translateZ(${-(this.depth / 2)}px)`)
    };

    const front = {
      position: 'absolute',
      width: this.width,
      height: this.height,
      backgroundColor: '#E9F43F88',
      ...transformOriginCrossBrowser('center'),
      ...transformCrossBrowser(`translateZ(${this.depth / 2}px)`)
    };

    const left = {
      position: 'absolute',
      width: this.depth,
      height: this.height,
      backgroundColor: '#81F43F88',
      ...transformOriginCrossBrowser('center'),
      ...transformCrossBrowser(`rotateY(270deg) translateZ(${this.depth / 2}px)`)
    };

    const right = {
      position: 'absolute',
      width: this.depth,
      height: this.height,
      backgroundColor: '#3FF4D388',
      ...transformOriginCrossBrowser('center'),
      ...transformCrossBrowser(`scaleZ(-1) rotateY(270deg) translateZ(${-(this.width - this.depth / 2)}px)`)
    };

    return (
      <div style={container}>
        {/** @ts-ignore */}
        <div style={cube}>
          {/** @ts-ignore */}
          <div style={{ ...this.sideStyle, ...bottom }}>{this.getChildren(Bottom.displayName)}</div>
          {/** @ts-ignore */}
          <div style={{ ...this.sideStyle, ...top }}>{this.getChildren(Top.displayName)}</div>
          {/** @ts-ignore */}
          <div style={{ ...this.sideStyle, ...back }}>{this.getChildren(Back.displayName)}</div>
          {/** @ts-ignore */}
          <div style={{ ...this.sideStyle, ...front }}>{this.getChildren(Front.displayName)}</div>
          {/** @ts-ignore */}
          <div style={{ ...this.sideStyle, ...left }}>{this.getChildren(Left.displayName)}</div>
          {/** @ts-ignore */}
          <div style={{ ...this.sideStyle, ...right }}>{this.getChildren(Right.displayName)}</div>
        </div>
      </div>
    );
  }
}

const Front = (props: any) => props.children;
Front.displayName = 'react-cuboid-front';

const Back = (props: any) => props.children;
Back.displayName = 'react-cuboid-3d-back';

const Top = (props: any) => props.children;
Top.displayName = 'react-cuboid-3d-top';

const Bottom = (props: any) => props.children;
Bottom.displayName = 'react-cuboid-3d-bottom';

const Left = (props: any) => props.children;
Left.displayName = 'react-cuboid-3d-left';

const Right = (props: any) => props.children;
Right.displayName = 'react-cuboid-3d-right';

export { Front, Back, Top, Bottom, Left, Right };
