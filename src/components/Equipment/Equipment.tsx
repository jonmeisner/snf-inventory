import "./Equipment.css";
import ItemSlot from "../ItemSlot/ItemSlot";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import MemoryIcon from '@mui/icons-material/Memory';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SettingsRemoteOutlinedIcon from '@mui/icons-material/SettingsRemoteOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

const Equipment = () => {
    return (
        <div className="equipment-backer">
            <div className="equipment-header">
                <div className="icon-backer">
                    <HomeRepairServiceIcon className="icon" />
                </div>
                <h5 className="header-text">EQUIPMENT</h5>
            </div>
            <div className="equipment-grid">
                <div className="equipment-slot">
                    {/* <ItemSlot /> */}
                    <h5 className="equipment-slot-empty">Empty</h5>
                </div>
                <div className="equipment-slot">
                    {/* <ItemSlot /> */}
                    <h5 className="equipment-slot-empty">Empty</h5>
                </div>
                <div className="equipment-slot">
                    {/* <ItemSlot /> */}
                    <h5 className="equipment-slot-empty">Empty</h5>
                </div>
                <div className="equipment-slot">
                    {/* <ItemSlot /> */}
                    <h5 className="equipment-slot-empty">Empty</h5>
                </div>
                <div className="equipment-slot">
                    {/* <ItemSlot /> */}
                    <h5 className="equipment-slot-empty">Empty</h5>
                </div>
            </div>
            <div className="skillsets">
                <h5 className="skillsets-title">Skillsets</h5>
                <div className="skill">
                    <div className="skill-header">
                        <MemoryIcon className="skill-icon" />
                        <h5 className="skill-name">Electronics</h5>
                    </div>
                    <div className="skill-rank">
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box"></div>
                        <div className="skill-box"></div>
                        <div className="skill-box"></div>
                        <div className="skill-box"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-header">
                        <ScienceOutlinedIcon className="skill-icon" />
                        <h5 className="skill-name">Chemistry</h5>
                    </div>
                    <div className="skill-rank">
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-header">
                        <SettingsRemoteOutlinedIcon className="skill-icon" />
                        <h5 className="skill-name">Hacking</h5>
                    </div>
                    <div className="skill-rank">
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box"></div>
                        <div className="skill-box"></div>
                        <div className="skill-box"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-header">
                        <ShieldOutlinedIcon className="skill-icon" />
                        <h5 className="skill-name">Armorer</h5>
                    </div>
                    <div className="skill-rank">
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-header">
                        <PlumbingOutlinedIcon className="skill-icon" />
                        <h5 className="skill-name">Mechanics</h5>
                    </div>
                    <div className="skill-rank">
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-header">
                        <HandymanOutlinedIcon className="skill-icon" />
                        <h5 className="skill-name">Weapon Smithing</h5>
                    </div>
                    <div className="skill-rank">
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                        <div className="skill-box-empty"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Equipment