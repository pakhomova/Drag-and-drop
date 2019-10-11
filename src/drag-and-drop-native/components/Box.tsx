import React, {Component} from 'react';
import Item from './Item';
import DraggableItem from './DraggableItem';
import IBox from '../abstractions/components/IBox';

const boxStyle = {
    display: 'grid',
    margin: 'auto',
    width: 400,
    height: 400,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    border: '1px solid black'
};

export default class Box extends Component<IBox> {

    render() {
        return(
            <div style={boxStyle}>
                <DraggableItem
                    draggableItemCenter={this.props.draggableItemCenter}
                    setDraggableItemCenter={this.props.setDraggableItemCenter}
                    droppableItemCenter={this.props.droppableItemCenter}
                    pointerPosition={this.props.pointerPosition}
                    setPointerPosition={this.props.setPointerPosition}
                    isDragging={this.props.itemIsDragging}
                    handleDragging={this.props.handleDragging}/>
                {this.props.itemsId.map((id) => {
                    return(
                    <Item
                        key={id}
                        id={id}
                        draggableItemCenter={this.props.draggableItemCenter}
                        droppableItemCenter={this.props.droppableItemCenter}
                        setDroppableItemCenter={this.props.setDroppableItemCenter}/>
                    );
                })}
            </div>
        );
    }
}