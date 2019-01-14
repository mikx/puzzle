/* global React, ReactDnD, ReactDnDHTML5Backend */

import Drop   from './drop';
import Source from './source';
import Target from './target';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      drops: [],
    };
  }

  handleDrop(color, shape) {
    const { drops } = this.state;
    const nextDrops = [...drops, {
      color,
      shape,
    }];
    this.setState({ drops: nextDrops, });
  }

  render() {
    const { drops } = this.state;
    return (
      <div id="board">
        <div id="board__sources">
          <Source color="red" onDrop={this.handleDrop} />
          <Source color="green" onDrop={this.handleDrop} />
          <Source color="blue" onDrop={this.handleDrop} />
        </div>
        <div id="board__targets">
          <Target shape="circle" />
          <Target shape="square" />
        </div>
        <div id="board__drops">
          {drops.map((drop, i) => (
            <Drop
              color={drop.color}
              key={i}
              shape={drop.shape}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ReactDnD.DragDropContext(ReactDnDHTML5Backend.default)(Board);
