import React, {Component} from 'react';
import IItem from '../abstractions/components/IItem';

const itemStyle = {
 border: '1px solid black'
};

export default class Item extends Component <IItem> {

    private itemRef: React.RefObject<HTMLDivElement>;
    private itemCenter: {X: number, Y: number} = {X: 0, Y: 0};

    constructor(props: any) {
        super(props);

        this.itemRef = React.createRef();
    }

    componentDidMount = () => {
        this.itemCenter = {
            X: this.itemRef.current!.getBoundingClientRect().left + this.itemRef.current!.offsetWidth/2,
            Y: this.itemRef.current!.getBoundingClientRect().top + this.itemRef.current!.offsetHeight/2
        };
    }

    componentDidUpdate = () => {
        let top = this.itemRef.current!.getBoundingClientRect().top;
        let bottom = this.itemRef.current!.getBoundingClientRect().bottom;
        let right = this.itemRef.current!.getBoundingClientRect().right;
        let left = this.itemRef.current!.getBoundingClientRect().left;
        if(this.isDraggableInside(this.props.draggableItemCenter, left, right, top, bottom)) {
            if(!this.isCurrentItemDroppable()) {
                this.makeCurrentItemDroppable();
            }
        } 
        else this.handleBorderColor();
    }

    render() {
        return(
            <div style={itemStyle} ref={this.itemRef}></div>
        );
    }

    isDraggableInside = (draggableItemCenter: {X: number, Y: number},
                                left: number,
                                right: number,
                                top: number,
                                bottom: number) => {
        return (draggableItemCenter.X > left &&
                draggableItemCenter.X < right &&
                draggableItemCenter.Y > top &&
                draggableItemCenter.Y < bottom);
    }

    isCurrentItemDroppable = () => {
        return (this.itemCenter.X === this.props.droppableItemCenter.X && this.itemCenter.Y === this.props.droppableItemCenter.Y);
    }

    makeCurrentItemDroppable = () => {
        this.itemRef.current!.style.border = '5px solid #9ed7f2';
        this.props.setDroppableItemCenter(this.itemCenter);
    }

    handleBorderColor = () => {
        if(this.itemRef.current!.style.border !== '1px solid black' &&
            !this.isCurrentItemDroppable()){
            this.itemRef.current!.style.border = '1px solid black';
        }
    }
}