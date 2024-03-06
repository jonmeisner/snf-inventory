import { Storage } from "../../../types/Storage";
import Header from "../Header/Header";
import ItemSlot from "../ItemSlot/ItemSlot";
import "./Container.css";

import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import GroupsIcon from '@mui/icons-material/Groups';
import { Slot } from "../../../types/Inventory";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { hoverState, inventoryState, mouseState } from "../../state/inventory";
import { EmptySlot } from "../../../enums/EmptyItem";

type ContainerProps = {
    handlePopoverClose: () => void;
    inventory: Storage;
}

const Container = ({ inventory, handlePopoverClose }: ContainerProps) => {

    const setAnchorItem = useSetRecoilState(hoverState.anchorItem);
    const setHoveredItem = useSetRecoilState(hoverState.hoverItem);

    const handlePopoverOpen = async (event: React.MouseEvent<HTMLElement>, index: number) => {
        setAnchorItem(event.currentTarget);
        setHoveredItem(inventory.slots[index]);
    };

    return (
        <div className="container-backer">
            <Header weight={inventory.weight} inventoryType={inventory.type} />
            <div className="container-grid-wrapper">
                <div className="container-grid">
                    {inventory.slots.map((slot: Slot, index: number) => {
                        return <ItemSlot invenType="container" handlePopoverOpen={handlePopoverOpen} handlePopoverClose={handlePopoverClose} key={index} slotIndex={index} slot={slot} hotBar={false} />
                    })}
                </div>
            </div>
            <div className="container-stats">
                <h5 className="stats-title">Storage Information</h5>
                <div className="stat">
                    <div className="stat-header">
                        <PersonIcon className="stat-icon" />
                        <h5 className="stat-name">Owner</h5>
                    </div>
                    <div className="stat-data">Mike November</div>
                </div>
                <div className="stat">
                    <div className="stat-header">
                        <FlagIcon className="stat-icon" />
                        <h5 className="stat-name">Type</h5>
                    </div>
                    <div className="stat-data">Personal Storage Crate</div>
                </div>
                <div className="stat">
                    <div className="stat-header">
                        <GroupsIcon className="stat-icon" />
                        <h5 className="stat-name">Permissions</h5>
                    </div>
                    <div className="stat-data">Private</div>
                </div>
            </div>
        </div>
    )
}

export default Container;