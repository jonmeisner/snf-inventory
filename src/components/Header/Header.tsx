import { Weight } from "../../../types/Storage";
import "./Header.css";

import PersonIcon from '@mui/icons-material/Person';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';



type HeaderProps = {
    weight: Weight;
    inventoryType: string;
    inventoryName?: string;
}

const Header = ({ weight, inventoryType, inventoryName }: HeaderProps) => {

    const getHeaderIcon = () => {
        switch (inventoryType) {
            case 'ground':
                return <GrassOutlinedIcon className="icon" />
            case 'storage':
                return <InventoryIcon className="icon" />
            default:
                return <PersonIcon className="icon" />
        }
    }

    return (
        <div className="header-wrapper">
            <div className="header-info">
                <div className="header-info-left">
                    <div className="icon-backer">
                        {getHeaderIcon()}
                    </div>
                    <h5 className="header-text">{inventoryType.toUpperCase()}</h5>
                </div>
                {/* <div className="header-info-right">
                    {weight.current + " lbs / " + weight.max + " lbs"}
                </div> */}
            </div>
            <div className="header-weight-bar">
                <div className="header-weight-bar-back"></div>
                {/* <div className="header-weight-bar-front" style={{
                    width: `${weight.current / weight.max * 100}%`
                }}></div> */}
            </div>
        </div>
    )
}

export default Header