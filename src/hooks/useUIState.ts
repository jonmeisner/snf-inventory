import { useRecoilState } from "recoil"
import { UIState } from "../state/ui"

export const useUIState = () => {
    const [showPersonal, setShowPersonal] = useRecoilState(UIState.showPersonal);
    const [inventoryScale, setInventoryScale] = useRecoilState(UIState.inventoryScale);
    const [toolTipScale, setToolTipScale] = useRecoilState(UIState.toolTipScale);
    const [showSettings, setShowSettings] = useRecoilState(UIState.showSettings);
    const [showTooltip, setShowTooltip] = useRecoilState(UIState.showTooltip);
    const [showSplitter, setShowSplitter] = useRecoilState(UIState.showSplitter);

    // const handleOpenPersonal = () => setShowPersonal(true);
    // const handleClosePersonal = () => setShowPersonal(false);

    return {
        showPersonal, setShowPersonal,
        inventoryScale, setInventoryScale,
        toolTipScale, setToolTipScale,
        showSettings, setShowSettings,
        showTooltip, setShowTooltip,
        showSplitter, setShowSplitter
    };
}