import "./HotBarSlot.css";

type HotBarSlotProps = {
    slotIndex: number
}

const HotBarSlot = ({ slotIndex }: HotBarSlotProps) => {
    return (
        <div className="hot-bar-slot">
            <div className="hot-bar-slot-box">
                <p className="hot-bar-slot-number">{slotIndex}</p>
            </div>
        </div>
    )
}

export default HotBarSlot;