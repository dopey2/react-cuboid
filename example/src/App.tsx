import React from 'react'
import { CuboidExample } from './cuboid_example/CuboidExample'
import { CubeExample } from './cube_example/CubeExample'

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="row w-full justify-center">
          <a href="/cuboid">Cuboid example</a>
          <a href="/cube" className="ml-2">Cube example</a>
        </div>

        {(window.location.pathname === "/cuboid" || window.location.pathname === "/") && <CuboidExample />}
        {window.location.pathname === "/cube" && <CubeExample />}
      </div>
    );
  }
}

