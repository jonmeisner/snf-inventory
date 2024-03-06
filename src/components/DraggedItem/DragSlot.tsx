import { useRecoilValue } from "recoil";
// import { SelectedItem } from "../../../types/Item";
import { SelectedItem } from "../../../types/Inventory";
import { inventoryState, mouseState } from "../../state/inventory";
import "./DragSlot.css";
import { Mouse } from "../../../types/Mouse";
import ItemRating from "../ItemRating/ItemRating";
// import { useUIState } from "../../hooks/useUIState";

const DragSlot = () => {
    const draggedItem = useRecoilValue<SelectedItem>(inventoryState.selectedItem);
    const mouse: Mouse = useRecoilValue(mouseState.mouse);
    // const { inventoryScale } = useUIState();




    if (draggedItem && draggedItem.slot.item && draggedItem.slot.item.name.length > 0 && mouse.mousePosition.x !== undefined) {
        return (
            <div
                className='dragged-slot'
                style={{
                    flexShrink: 0,
                    left: mouse.mousePosition.x! - 40,
                    top: mouse.mousePosition.y! - 40,
                    // transform: `scale(${inventoryScale})`,
                    pointerEvents: "none",
                    // background: `radial-gradient(${getRarityColor()} 10%, transparent 70%)`
                }}
            >
                <div className="dragged-body">
                    <div className="count-box">
                        {draggedItem.slot.count > 1 ? draggedItem.slot.count : <></>}
                    </div>
                    <div className="slot-img-wrapper">
                        <img
                            src={`./src/assets/${draggedItem.slot.item?.name}.png`}
                            alt={draggedItem.slot.item?.name}
                            className="slot-img"
                        />
                    </div>
                </div>
                {/* {(draggedItem.item.type != ItemTypes.EQUIPMENT && draggedItem.item.type != ItemTypes.PART && draggedItem.item.type != ItemTypes.BUSINESS && !draggedItem.item.durability) ?
                    <p className="slot-quantity">{draggedItem.item.quantity}</p>
                    : <></>}
                 */}
                <div className="slot-rank">
                    {draggedItem.slot.item.rank ?
                        <ItemRating value={draggedItem.slot.item.rank} />
                        : <></>}
                </div>
                {/* {draggedItem.item.durability && draggedItem.item.maxDurability ?
                    <div
                        className="durability-bar"
                        style={{ width: `${(draggedItem.item.durability / draggedItem.item.maxDurability) * 100}%` }}
                    ></div>
                    : <></>
                } */}
            </div>
        )
    }
}

export default DragSlot