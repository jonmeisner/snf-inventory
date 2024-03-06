import { Slot } from "../../../types/Inventory";
import useDrag from "../../hooks/useDrag";
import ItemRating from "../ItemRating/ItemRating";
import "./ItemSlot.css";

type ItemSlotProps = {
    slotIndex: number,
    slot: Slot,
    hotBar: boolean,
    handlePopoverOpen: (e: any, index: number) => void;
    handlePopoverClose: () => void;
    invenType: string,
}

const ItemSlot = ({ slotIndex, slot, hotBar, handlePopoverOpen, handlePopoverClose, invenType }: ItemSlotProps) => {

    const { mouseDownHandler } = useDrag();
    const { mouseUpHandler } = useDrag();

    const getItemQuantity = () => {
        if (slot.count > 1) {
            return (
                <div className="count-box">
                    {slot.count}
                </div>
            )
        } else {
            return <></>
        }
    }

    const getItemImg = () => {
        if (slot.count > 0 && slot.item) {
            return (
                <img src={`./src/assets/${slot.item?.name}.png`}
                    alt={slot.item?.label}
                    draggable="false"
                    className="slot-img" />
            )
        } else {
            return <></>
        }
    }

    const handleDoubleClick = () => {
        console.log(typeof slot.item);
    }

    return (
        <div
            onMouseEnter={(e) => handlePopoverOpen(e, slotIndex)}
            onMouseDown={(e) => mouseDownHandler(e, slot, slotIndex, invenType, false)}
            onMouseUp={(e) => mouseUpHandler(e, slotIndex, invenType)}
            onMouseLeave={() => handlePopoverClose()}
            className={slot.item?.durability === 0 ? "slot-broken" : "slot"}
            data-rarity={slot.item?.rarity}
            onDoubleClick={() => handleDoubleClick()}
        >
            {slotIndex < 6 && hotBar ?
                <div className="slot-box">
                    <p className="slot-number">{slotIndex + 1}</p>
                </div>
                : <></>}
            {getItemQuantity()}
            <div className="slot-img-wrapper">
                {getItemImg()}
            </div>
            {slot.item?.durability! >= 0 ?
                <div className="slot-durability-backer">
                    <div className="durability-bar" style={{ width: `${slot.item?.durability}%` }}></div>
                </div>
                : <></>}
            <div className="slot-rank">
                {slot.item?.rank ?
                    <ItemRating value={slot.item.rank} />
                    : <></>}
            </div>
        </div>
    )
}

export default ItemSlot;