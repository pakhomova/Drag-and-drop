export default interface IDragAndDropState {
    draggableItemCenter: {X: number, Y: number},
    droppableItemCenter: {X: number, Y: number},
    pointerPosition: {shiftX: number, shiftY: number},
    itemIsDragging: boolean
}