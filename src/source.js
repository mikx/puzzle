/* global ReactDnD, PropTypes */

import { ITEM } from 'items'

const Source = ({ connectDragSource, image, id, isDragging }) => (
  connectDragSource(
    <div
     className='board_source'
     style={{
       backgroundImage: `url(${image})`,
       opacity: isDragging ? 0.25 : 1,
      }}
    />
  )
);

Source.propTypes = {
  image: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

const source = {
  beginDrag(props) {
    const sourceKey = props.id;
    return ({ sourceKey });
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) { return; }
    const { onDrop } = props;
    const { sourceKey }  = monitor.getItem();
    const { targetKey }  = monitor.getDropResult();
    onDrop({sourceKey, targetKey});
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default ReactDnD.DragSource(ITEM, source, collect)(Source);
