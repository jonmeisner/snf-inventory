import { useRecoilValue, useSetRecoilState } from 'recoil';
import './Controller.css'
import { useUIState } from './hooks/useUIState'
import { motion } from "framer-motion";
import { hoverState, inventoryState, mouseState } from './state/inventory';
import Hover from './components/Hover/Hover';
import { useInventory } from './hooks/useInventory';
import DragSlot from './components/DraggedItem/DragSlot';
import { useEffect } from 'react';
import Exit from './components/Exit/Exit';
import Pockets from './components/Pockets/Pockets';
import Ground from './components/Ground/Ground';
import Equipment from './components/Equipment/Equipment';
import Storage from './components/Storage/Container';
import useWindowDimensions from './components/WindowWidth/WindowWidth';
import { EmptySlot } from '../enums/EmptyItem';

const show = {
  opacity: 1,
  display: "",
  x: 0,
  y: 0,
};

const hide = {
  opacity: 0,
  display: "",
  x: 0,
  y: 0,
};

const hide1 = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  },
  x: -100,
};

const hide2 = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  },
  y: 100,
};

const hide3 = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  },
  x: 100,
};

const Controller = () => {
  const {
    showPersonal,
    setShowPersonal,
    showSettings,
    setShowSettings,
    setShowTooltip
  } = useUIState();
  const { inventory, setShiftKey, setControlKey } = useInventory();
  const { width } = useWindowDimensions();

  const setAnchorItem = useSetRecoilState(hoverState.anchorItem);
  const setHoveredItem = useSetRecoilState(hoverState.hoverItem);

  const setMouse = useSetRecoilState(mouseState.mouse);
  const selectedItem = useRecoilValue(inventoryState.selectedItem);

  const handlePopoverClose = () => {
    setShowTooltip(false);
    setAnchorItem(null);
    setTimeout(() => {
      if (setAnchorItem == null) setHoveredItem(EmptySlot);
    }, 1000);
  };

  const renderSecondInventory = () => {
    switch (inventory.second.type) {
      case "storage":
        return (
          <Storage handlePopoverClose={handlePopoverClose} inventory={inventory.second} />
        )
      default:
        return (
          <></>
        )
    }
  }

  const keyDownHandler = (key: string) => {
    if (key === "Shift") {
      setShiftKey(true);
    } else if (key === "Control") {
      setControlKey(true);
    }
  }

  const keyUpHandler = (key: string) => {
    if (key === "Shift") {
      setShiftKey(false);
    } else if (key === "Control") {
      setControlKey(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => keyDownHandler(e.key));
    window.addEventListener('keyup', (e) => keyUpHandler(e.key));
    return () => {
      window.removeEventListener('keydown', (e) => keyDownHandler(e.key));
      window.removeEventListener('keyup', (e) => keyUpHandler(e.key));
    };
  }, []);

  useEffect(() => {
    const updateMousePosition = (event: any) => {
      setMouse((state: any) => ({ ...state, mousePosition: { x: event.clientX, y: event.clientY } }));
    };

    if (selectedItem) {
      document.addEventListener("mousemove", updateMousePosition);
      return () => document.removeEventListener("mousemove", updateMousePosition);
    }
  }, [selectedItem]);


  return (
    <div>
      <button style={{ position: "absolute", bottom: 5, left: 5, zIndex: 5 }} onClick={() => setShowSettings(!showSettings)}>SETTINGS</button>
      <button style={{ position: 'absolute', top: 5, left: 5, zIndex: 5 }} onClick={() => setShowPersonal(!showPersonal)}>TOGGLE</button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={showPersonal ? show : hide}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className='backer'
      // style={width > 1920 ? { scale: 1.1 } : { scale: 1.0 }}
      >
        <DragSlot />
        <motion.div
          initial={{ opacity: 0 }}
          animate={showPersonal ? show : hide1}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className='box'
          style={width > 1920 ? { scale: 1.1, transformOrigin: "top middle" } : { scale: 1.0 }}
        >
          <Equipment />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={showPersonal ? show : hide2}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className='box2'
          style={width > 1920 ? { scale: 1.1 } : { scale: 1.0 }}
        >
          <Hover handlePopoverClose={handlePopoverClose} />
          <Pockets handlePopoverClose={handlePopoverClose} inventory={inventory.personal} />
          <Ground handlePopoverClose={handlePopoverClose} inventory={inventory.tertiary} />

        </motion.div>
        {/* Right Inventory (Trunk/Storage/) */}
        {inventory.second.type !== '' ?
          <motion.div
            initial={{ opacity: 0 }}
            animate={showPersonal ? show : hide3}
            transition={{
              duration: 0.6,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className='box'
            style={width > 1920 ? { scale: 1.1 } : { scale: 1.0 }}
          >
            {renderSecondInventory()}
          </motion.div>
          : <></>}
        <Exit />
      </motion.div>
    </div>
  )
}

export default Controller
