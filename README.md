# react-cuboid

> A cuboid component for react

[![NPM](https://img.shields.io/npm/v/react-cuboid.svg)](https://www.npmjs.com/package/react-cuboid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cuboid
```
or 

```bash
yarn add react-cuboid
``` 

## Demo
![cube](https://user-images.githubusercontent.com/22329040/141131481-f58023a2-56dc-4bf7-8464-3fec9851275b.gif)

## Usage

### Cuboid example
```tsx
import React from 'react'
import Cuboid, { Front, Back, Top, Bottom, Left, Right } from 'react-cuboid'

const App = () => {
  return (
    <div style={{ marginLeft: 200, marginTop: 200 }}>
      <Cuboid
        width={150}
        height={200}
        depth={250}
        sideStyle={{borderStyle: 'solid'}}
        rotateX={10}
        rotateY={20}
        >
          <Front> {/** front side */} </Front>
          <Back> {/** back side */} </Back>
          <Top> {/** top side */} </Top>
          <Bottom> {/** bottom side */} </Bottom>
          <Left> {/** left side */} </Left>
          <Right> {/** right side */} </Right>
        </Cuboid>
      </div>
  );
}
```

### Cube example
```tsx
import React from 'react'
import Cuboid, { Front, Back, Top, Bottom, Left, Right } from 'react-cuboid'

const App = () => {
  return (
    <div style={{ marginLeft: 200, marginTop: 200 }}>
      <Cuboid
        size={100}
        sideStyle={{borderStyle: 'solid'}}
        rotateX={10}
        rotateY={20}
        >
          <Front> {/** front side */} </Front>
          <Back> {/** back side */} </Back>
          <Top> {/** top side */} </Top>
          <Bottom> {/** bottom side */} </Bottom>
          <Left> {/** left side */} </Left>
          <Right> {/** right side */} </Right>
        </Cuboid>
      </div>
  );
}
```

## Props

| **name**            | **type**        | **default** |
|---------------------|-----------------|-------------|
| size                | ?number         | 100         |
| width               | ?number         | props.size  |
| height              | ?number         | props.size  |
| depth               | ?number         | props.size  |
| perspective         | ?number         | 1000        |
| perspectiveX        | ?number         | 50          |
| perspectiveY        | ?number         | 50          |
| rotateX             | ?number         | 0           |
| rotateY             | ?number         | 0           |
| rotateZ             | ?number         | 0           |
| skewX               | ?number         | 0           |
| skewY               | ?number         | 0           |
| sideStyle           | ?number         | {}          |

## License

MIT © [dopey2](https://github.com/dopey2)
