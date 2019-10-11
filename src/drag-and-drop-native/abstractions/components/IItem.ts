export default interface IItem {
    id: number,

    draggableItemCenter: {X: number, Y: number},

    droppableItemCenter: {X: number, Y: number},
    setDroppableItemCenter: (newPosition: {
        X: number;
        Y: number;
    }) => void,
}