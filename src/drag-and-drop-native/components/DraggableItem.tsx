import React, {Component} from 'react';
import IDraggableItem from '../abstractions/components/IDraggableItem';

const itemStyle = {
    position: 'absolute',
    border: '1px solid black',
    background: 'pink',
    width: 198,
    height: 198,
   } as React.CSSProperties;;

export default class DragableItem extends Component <IDraggableItem> {

    private itemRef: React.RefObject<HTMLDivElement>;
    private itemSize: {width: number, height: number} = {width: 0, height: 0};

    constructor(props: any) {
        super(props);

        this.itemRef = React.createRef();
    }

    componentDidMount = () => {
        this.itemSize = {width: this.itemRef.current!.offsetWidth, height: this.itemRef.current!.offsetHeight};
        this.itemRef.current!.addEventListener('mousedown', this.onMouseDown);
        document.addEventListener('mousemove', this.onMouseMove);
        this.itemRef.current!.addEventListener('mouseup', this.onMouseUp);
    }

    componentDidUpdate = () => {
        this.itemRef.current!.style.left = this.props.draggableItemCenter.X - this.itemSize.width/2 + 'px';
        this.itemRef.current!.style.top = this.props.draggableItemCenter.Y - this.itemSize.height/2 + 'px';
    }

    componentWillUnmount = () => {
        this.itemRef.current!.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('mousemove', this.onMouseMove);
        this.itemRef.current!.removeEventListener('mouseup', this.onMouseUp);
    }

    render() {
        return(
            <div style={itemStyle} ref={this.itemRef}></div>
        );
    }

    moveAt = (mouseX: number, mouseY: number) => {
        let newItemCenterX = mouseX - this.props.pointerPosition.shiftX + this.itemSize.width/2;
        let newItemCenterY = mouseY - this.props.pointerPosition.shiftY + this.itemSize.height/2;
        this.props.setDraggableItemCenter({
            X: newItemCenterX,
            Y: newItemCenterY
        });
    }

    onMouseDown = (ev: MouseEvent) => {
        let shiftX = ev.clientX - this.itemRef.current!.getBoundingClientRect().left;
        let shiftY = ev.clientY - this.itemRef.current!.getBoundingClientRect().top;
        this.props.setPointerPosition({shiftX: shiftX, shiftY: shiftY});
        this.moveAt(ev.clientX, ev.clientY);
        this.props.handleDragging();
    }

    onMouseMove = (ev: MouseEvent) => {
        if(this.props.isDragging){
            this.moveAt(ev.clientX, ev.clientY);
        }
    }

    onMouseUp = (ev: MouseEvent) => {
        this.props.handleDragging();
        this.props.setDraggableItemCenter(this.props.droppableItemCenter);
    }
}