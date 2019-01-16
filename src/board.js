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
    // check if source matches target
    if (sourceKey != targetKey) return;
    const { targets } = this.state
    const next = this.random.next().value
    targets[targetKey] = 0
    this.setState({
      targets: targets,
      tile: next || 0,
      done: next === undefined
    })
  }

  createContent({targets, done}) {
    if (done) return (<div id='board_congrats'>Congratulations!</div>)
    else return (targets.map((e,i) => <Target key={i} id={i} opacity={e} />))
  }

  render() {
    const { image, tile } = this.state;
    return (
      <div id="board">
        <div id='board_target_container'
          style={{
            backgroundImage: `url(${this.image})`
          }}>
          {this.createContent(this.state)}
        </div>
        <div id="board_source_container">
          <Source image={image} id={tile} onDrop={this.doDrop} />
        </div>
      </div>
    );
  }
}

export default ReactDnD.DragDropContext(ReactDnDHTML5Backend.default)(Board);
