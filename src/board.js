/* global React, ReactDnD, ReactDnDHTML5Backend */

import Source from './source';
import Target from './target';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.image = 'https://cdn.pbrd.co/images/HWu1T1v.jpg'
    this.doDrop = (o) => this.handleDrop(o)
    this.state = {
      targets: Array(8).fill(1),
    }
  }

  handleDrop({sourceKey, targetKey}) {
    const { targets } = this.state
    const next = targets.slice()
    next[targetKey] = 0
    this.setState({ targets: next })
  }

  render() {
    const { drops, targets } = this.state;
    return (
      <div id="board">
        <div id='board_target_container'
          style={{
            backgroundImage: `url(${this.image})`
          }}>
          {targets.map((e,i) => <Target key={i} id={i} opacity={e} shape="circle" />)}
        </div>
        <div id="board_source_container">
          <Source color="blue" id={99} onDrop={this.doDrop} />
        </div>
      </div>
    );
  }
}

export default ReactDnD.DragDropContext(ReactDnDHTML5Backend.default)(Board);
