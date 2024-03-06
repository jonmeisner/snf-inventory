import { useUIState } from "../../hooks/useUIState";
import "./Exit.css";

import CloseIcon from '@mui/icons-material/Close';

const Exit = () => {

    const {
        setShowPersonal,
        showPersonal
    } = useUIState();

    return (
        <div className="exit-button-wrapper" onClick={() => setShowPersonal(!showPersonal)}>
            <p className="exit-button-text">EXIT</p>
            <div className="icon-backer">
                <CloseIcon className="icon" />
            </div>
        </div>
    )
}

export default Exit;