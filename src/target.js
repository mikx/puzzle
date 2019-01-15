/* global ReactDnD, PropTypes */

import { ITEM } from './items';

const Target = ({ connectDropTarget, highlighted, id, opacity }) => (
  connectDropTarget(
    <div className='board_target' style={ {opacity: 0.9 * opacity } } />
  )
);

Target.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
}

const target = {
  drop(props) {
    const targetKey = props.id;
    return ({ targetKey });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
});

export default ReactDnD.DropTarget(ITEM, target, collect)(Target);
