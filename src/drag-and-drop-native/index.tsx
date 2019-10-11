import React, {Component} from 'react';
import Box from './components/Box';
import IDragAndDropState from './abstractions/IDragAndDropState';

const itemsId: Array<number> = [0, 1, 2, 3];

export default class DragAndDrop extends Component <{}, IDragAndDropState> {

    constructor(props: any) {
        super(props);

        this.state = {
            draggableItemCenter: {X: 0, Y: 0},
            droppableItemCenter: {X: 0, Y: 0},
            pointerPosition: {shiftX: 0, shiftY: 0},
            itemIsDragging: false
        }
    }

    render() {
        return(
            <div>
                <Box
                    itemsId={itemsId}
                    draggableItemCenter={this.state.draggableItemCenter}
                    setDraggableItemCenter={this.setDraggableItemCenter}
                    droppableItemCenter={this.state.droppableItemCenter}
                    setDroppableItemCenter={this.setDroppableItemCenter}
                    pointerPosition={this.state.pointerPosition}
                    setPointerPosition={this.setPointerPosition}
                    itemIsDragging={this.state.itemIsDragging}
                    handleDragging={this.handleDragging}/>
            </div>
        );
    }

    setDraggableItemCenter = (newPosition: {X: number, Y: number}) => {
        this.setState({
            draggableItemCenter: newPosition
        });
    }

    setDroppableItemCenter = (newPosition: {X: number, Y: number}) => {
        this.setState({
            droppableItemCenter: newPosition
        })
    }

    setPointerPosition = (newPosition: {shiftX: number, shiftY: number}) => {
        this.setState({
            pointerPosition: newPosition
        })
    }

    handleDragging = () => {
        let itemIsDragging: boolean = !this.state.itemIsDragging;
        this.setState({
            itemIsDragging: itemIsDragging
        })
    }
}