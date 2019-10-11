export default interface IDraggableItem {
    draggableItemCenter: {X: number, Y: number},
    setDraggableItemCenter: (newPosition: {
        X: number;
        Y: number;
    }) => void,

    
    droppableItemCenter: {X: number, Y: number},

    pointerPosition: {shiftX: number, shiftY: number},
    setPointerPosition: (newPosition: {
        shiftX: number;
        shiftY: number;
    }) => void,

    isDragging: boolean,
    handleDragging: () => void
}