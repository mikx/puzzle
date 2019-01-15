/* global React, ReactDnD, ReactDnDHTML5Backend, makeRandom */

import Source from './source';
import Target from './target';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.image = 'https://cdn.pbrd.co/images/HWu1T1v.jpg'
    this.doDrop = (o) => this.handleDrop(o)
    this.random = makeRandom(8)
    this.state = {
      image: this.image,
      targets: Array(8).fill(1),
      tile: this.random.next().value
    }
  }

  handleDrop({sourceKey, targetKey}) {
    const { targets } = this.state
    targets[targetKey] = 0
    this.setState({
      targets: targets,
      tile: this.random.next().value
    })
  }

  render() {
    const { image, targets, tile } = this.state;
    return (
      <div id="board">
        <div id='board_target_container'
          style={{
            backgroundImage: `url(${this.image})`
          }}>
          {targets.map((e,i) => <Target key={i} id={i} opacity={e} shape="circle" />)}
        </div>
        <div id="board_source_container">
          <Source image={image} id={tile} onDrop={this.doDrop} />
        </div>
      </div>
    );
  }
}

export default ReactDnD.DragDropContext(ReactDnDHTML5Backend.default)(Board);
