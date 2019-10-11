export default interface IBox {
    itemsId: Array<number>,

    draggableItemCenter: {X: number, Y: number},
    setDraggableItemCenter: (newPosition: {
        X: number;
        Y: number;
    }) => void,

    droppableItemCenter: {X: number, Y: number},
    setDroppableItemCenter: (newPosition: {
        X: number;
        Y: number;
    }) => void,

    pointerPosition: {shiftX: number, shiftY: number},
    setPointerPosition: (newPosition: {
        shiftX: number;
        shiftY: number;
    }) => void,

    itemIsDragging: boolean,
    handleDragging: () => void
}