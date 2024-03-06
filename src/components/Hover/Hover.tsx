import { useRecoilValue } from "recoil";
import { hoverState, inventoryState } from '../../state/inventory';
import { Popover } from "@mui/material";
import { CustomTooltip } from './HoverComponents';
import styled from '@emotion/styled';
import { SelectedItem } from "../../../types/Inventory";
import { EmptySelectedItem } from "../../../enums/EmptyItem";
// import { UIState } from "../../state/ui";

type HoverProps = {
    handlePopoverClose: () => void;
}

const Hover = ({ handlePopoverClose }: HoverProps) => {

    const hoveredItem = useRecoilValue(hoverState.hoverItem);
    const anchorItem = useRecoilValue(hoverState.anchorItem);
    const draggedItem = useRecoilValue<SelectedItem>(inventoryState.selectedItem);
    // const selectedItem = useRecoilValue(inventoryState.selectedItem);
    // const toolTipScale = useRecoilValue(UIState.toolTipScale);
    // const showTooltip = useRecoilValue(UIState.showTooltip);

    const CustomPopover = styled(Popover)({
        "& .MuiPopover-root": {
            backgroundColor: "transparent",
            backgorund: "transparent",
            boxSizing: "border-box",
        },
        "& .MuiPaper-root": {
            backgroundColor: "transparent",
            background: "transparent",
            // borderRadius: "5px",
        }
    })

    if (hoveredItem.item && hoveredItem.item.name.length > 0 && anchorItem != null && draggedItem === EmptySelectedItem) {
        return (
            <CustomPopover
                sx={{
                    pointerEvents: "none",
                    boxShadow: "none",
                }}
                open={true}
                onClose={handlePopoverClose}
                anchorEl={anchorItem}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            // transformOrigin={{
            //     vertical: 'top',
            //     horizontal: 'left',
            // }}
            // transitionDuration={0}
            >
                <CustomTooltip hoveredItem={hoveredItem} />
            </CustomPopover>
        )
    }
}

export default Hover