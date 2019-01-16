/* global ReactDnD, PropTypes */

import { ITEM } from 'items'

const Source = ({ connectDragSource, image, id, done, isDragging }) => {
  return connectDragSource(
    <div
     className='board_source'
     style={makeStyle(image, id, done, isDragging)}
    />
  )
}

const makeStyle = (image, id, done, isDragging) => {
  if (!done) {
    const x = (id % 4) * -200
    const y = Math.trunc(id / 4) * -200
    return ({
      backgroundImage: `url(${image})`,
      backgroundPosition: `${x} ${y}`,
      opacity: isDragging ? 0.25 : 1,
    })
  } else return ({})
}

Source.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

const source = {
  beginDrag(props) {
    const sourceKey = props.id;
    return ({ sourceKey });
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) { return; }
    const { onDrop } = props
    const { sourceKey }  = monitor.getItem()
    const { targetKey }  = monitor.getDropResult()
    onDrop({sourceKey, targetKey})
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default ReactDnD.DragSource(ITEM, source, collect)(Source);
