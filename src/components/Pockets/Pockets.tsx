import { Slot } from "../../../types/Inventory";
import { Storage } from "../../../types/Storage";
import ItemSlot from "../ItemSlot/ItemSlot";
import Header from "../Header/Header";
import "./Pockets.css";
import { useSetRecoilState } from "recoil";
import { hoverState } from "../../state/inventory";

type PocketsProps = {
    inventory: Storage;
    handlePopoverClose: () => void;
}

const Pockets = ({ inventory, handlePopoverClose }: PocketsProps) => {

    const setAnchorItem = useSetRecoilState(hoverState.anchorItem);
    const setHoveredItem = useSetRecoilState(hoverState.hoverItem);

    const handlePopoverOpen = async (event: React.MouseEvent<HTMLElement>, index: number) => {
        setAnchorItem(event.currentTarget);
        setHoveredItem(inventory.slots[index]);
    };

    return (
        <div className="pockets-wrapper">
            <Header weight={inventory.weight} inventoryType={inventory.type} />
            <div className="pockets-grid-wrapper">
                <div className="pockets-hotbar"></div>
                <div className="pockets-grid">
                    {inventory.slots.map((slot: Slot, index: number) => {
                        return <ItemSlot
                            handlePopoverOpen={handlePopoverOpen}
                            handlePopoverClose={handlePopoverClose}
                            key={index}
                            slotIndex={index}
                            slot={slot}
                            hotBar={true}
                            invenType="pockets"

                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pockets;