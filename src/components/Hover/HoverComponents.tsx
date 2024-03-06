// import { ISetBonus, ISetItem, IStat, Item } from '../../../types/Item';
import { Item, Slot } from '../../../types/Inventory';
import "./hover.styles.css";
import ItemRating from './Rating/ItemRating';

export const OrangeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 0L17.6603 15H0.339746L9 0Z" fill="#FF9900" />
        </svg>
    )
}

export const GreenIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 0L17.6603 15H0.339746L9 0Z" fill="#33CC33" />
        </svg>
    )
}

// const getTypeName = (hoveredItem: Slot | null) => {
//     switch (typeof hoveredItem?.item!) {
//         case "item_normal":
//             return "Item"
//         case "item_part":
//             return "Part"
//         case "item_equipment":
//             return "Equipment"
//         case "item_food":
//             return "Food"
//         default:
//             return "Normal"
//     }
// }

const getRarityName = (hoveredItem: Item | null) => {
    switch (hoveredItem?.rarity) {
        case 0:
            return "Normal"
        case 1:
            return "Common"
        case 2:
            return "Uncommon"
        case 3:
            return "Rare"
        case 4:
            return "Epic"
        case 5:
            return "Legendary"
        case 6:
            return "Mythical"
        default:
            return ".."
    }
}

// const getRarityNameByNumber = (rarity: number) => {
//     switch (rarity) {
//         case 0:
//             return "Normal"
//         case 1:
//             return "Common"
//         case 2:
//             return "Uncommon"
//         case 3:
//             return "Rare"
//         case 4:
//             return "Epic"
//         case 5:
//             return "Legendary"
//         case 6:
//             return "Mythical"
//         default:
//             return ".."
//     }
// }

const getTotalWeight = (weight: number, count: number) => {
    return ((weight * count).toPrecision(3));
}

type TooltipProps = {
    hoveredItem: Slot;
}

export const CustomTooltip = ({ hoveredItem }: TooltipProps) => {
    return (
        <div
            className="tooltip"
            data-border={getRarityName(hoveredItem.item)}
        >
            <div className="title" data-title={getRarityName(hoveredItem.item)}>{hoveredItem.item!.label}</div>
            <div className="info">
                <div className="col">
                    <p className="info-rarity" style={hoveredItem.item!.rarity > 1 ? { color: "yellow" } : {}}>
                        {getRarityName(hoveredItem.item) !== "Normal" ? getRarityName(hoveredItem.item) : ""}
                    </p>
                    {/* <p className="info-type">
                        {getTypeName(hoveredItem.item)}
                    </p> */}
                </div>
                <div className='col right'>
                    <ItemRating value={hoveredItem.item!.rank !== undefined ? hoveredItem.item!.rank! : 0} />
                    {/* <p style={{ marginTop: 3 }}>{hoveredItem.slotType}</p> */}
                </div>
            </div>
            {/* {hoveredItem.primaryStat || hoveredItem.stats ?
                <div className="stats">
                    <strong>
                        +{hoveredItem.primaryStat?.value}
                        {hoveredItem.primaryStat?.prefix}
                        &nbsp;
                        {hoveredItem.primaryStat?.name}
                    </strong>
                    {hoveredItem.stats?.map((stat: IStat, index: number) => {
                        return (
                            <p key={index}>+{stat.numeric}&nbsp;{stat.statName}</p>
                        )
                    })}
                </div>
                : <></>}
            {hoveredItem.equipBonus ?
                <div className="crafting-bonus">
                    Equip: Grants "{hoveredItem.equipBonus.bonusName}" crafting recipe
                </div>
                : <></>} */}
            {hoveredItem.item?.description ? <div className="description">{hoveredItem.item?.description}</div> : <></>}
            {/* 
                    This is where there will need to be some way to check
                    how much of a set the player has equipped
                */}
            {/* {hoveredItem.set ? <div className="set">
                <p className="set-name">{hoveredItem.set?.name}&nbsp;(0/{hoveredItem.set.numItems})</p>
                <ul className="set-list">
                    {hoveredItem.set?.setItems?.map((item: ISetItem, index: number) => {
                        return (
                            <li key={index} className="set-item" data-title={getRarityNameByNumber(item.rarity)}>{item.name}</li>
                        )
                    })}
                </ul>
                {hoveredItem.set?.setBonuses.map((bonus: ISetBonus, index: number) => {
                    return (
                        <p className='set-bonus' key={index}>({bonus.setCount})&nbsp;{bonus.setBonus}</p>
                    )
                })}
            </div> : <></>} */}
            <div className="util">
                <div>
                    {(hoveredItem.item!.durability && hoveredItem.item!.durability >= 0) ?
                        <p className='util-durability'>Durability {hoveredItem.item!.durability} / 100</p>
                        :
                        <></>
                    }
                    {/* <p className='util-market'>Market Value &nbsp; <p style={{ color: "var(--moneyColor)" }}>120</p></p> */}
                </div>
                <div>
                    <p>{hoveredItem.count} | {getTotalWeight(hoveredItem.item!.weight, hoveredItem.count)}</p>
                </div>
            </div>
        </div>
    )
}

// export const NormalTooltip = ({ hoveredItem }: TooltipProps) => {
//     return (
//         <div className='tooltip normal'>
//             <div className='title'>{hoveredItem?.label}</div>
//             <div className="info">
//                 <p className="info-rarity">
//                     {getRarityName(hoveredItem)}
//                 </p>
//                 {/* <Typography>{getRarityName(hoveredItem)}</Typography> */}
//                 <p className="info-type">
//                     {getTypeName(hoveredItem)}
//                 </p>
//                 {/* <Typography>{getTypeName(hoveredItem)}</Typography> */}
//             </div>
//             <div className="util">
//                 <div>
//                     <p className='util-durability'>Durability {hoveredItem?.durability} / 50</p>
//                     <p className='util-market'>Market Value <p style={{ color: "green" }}>120</p></p>
//                 </div>
//                 <div>
//                     <Typography>{hoveredItem?.quantity} | {hoveredItem?.weight.toPrecision(3)}</Typography>
//                 </div>
//             </div>
//         </div>
//     )
// }

// <div style={{
//     width: 450,
//     border: "solid 3px var(--rarityCommon)",
//     padding: 4,
//     flexShrink: 0,
//     background: "rgba(0, 0, 0, 0.4) url('http://localhost:3005/v1/image/tooltip_bg.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "15% 90%",
//     backgroundBlendMode: "overlay"
// }}>
//     <div style={{
//         display: "flex",
//         position: "relative"
//     }}>
//         <div style={{
//             height: 100, width: 100, border: 'solid 1px var(--rarityCommon)',
//             background: "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, var(--rarityNormal) 100%)",
//             marginRight: 15
//         }}>
//             <img style={{ userSelect: "none", height: 100, width: 100 }} src={`http://localhost:3005/v1/image/${hoveredItem?.name}.png`} alt="image" />
//         </div>
//         <div style={{
//             width: 230,
//         }}>
//             <Typography
//                 fontSize={"2.3em"}
//                 fontStyle={"normal"}
//                 fontWeight={400}
//                 sx={{ color: "white" }}
//             >{hoveredItem?.label}</Typography>
//             <Typography
//                 fontSize={14}
//                 fontStyle={"normal"}
//                 fontWeight={400}
//                 letterSpacing={0.5}
//                 sx={{
//                     color: "white"
//                 }}
//             >{hoveredItem?.description}</Typography>
//         </div>
//         {/* <div style={{ position: "absolute", textAlign: "right", top: 11, right: 14 }}>
//             <Typography
//                 fontSize={18}
//                 fontStyle={"normal"}
//                 fontWeight={400}
//                 sx={{
//                     color: "white"
//                 }}
//             >
//                 {getRarityName(hoveredItem)}
//             </Typography>
//         </div> */}
//     </div>
//     <div style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         marginTop: 15,
//         textAlign: "right"
//     }}>
//         {/* Line */}
//         <div style={{
//             width: "95%",
//             height: 2,
//             background: "white",
//         }}></div>
//         <div style={{
//             paddingTop: 3,
//         }}>
//             <Typography
//                 fontSize={15}
//                 fontStyle={""}
//                 fontWeight={500}
//                 sx={{ color: "white" }}>
//                 Value:  ${hoveredItem?.value !== undefined ? hoveredItem?.value : "Market Offline"}
//             </Typography>
//         </div>
//     </div>
// </div>

// export const CommonTooltip = ({ hoveredItem }: TooltipProps) => {
//     return (
//         <div style={{
//             width: 450,
//             // height: 225,
//             border: "solid 3px black",
//             padding: 4,
//             flexShrink: 0,
//             // background: "rgba(0, 0, 0, 0.4) url('http://localhost:3005/v1/image/tooltip_bg.png')",
//             background: "linear-gradient(180deg, rgba(180, 180, 180, 0.10) 0%, rgba(255, 255, 255, 0.8) 80.73%, rgba(255, 255, 255, 1.0) 100%), url('http://localhost:3005/v1/image/tooltip_bg.png')",
//             // backgroundImage: "",
//             // backdropFilter: "overlay",
//             backgroundSize: "cover",
//             backgroundPosition: "15% 90%",
//             // backgroundBlendMode: "overlay"
//         }}>
//             <div style={{
//                 display: "flex",
//                 // justifyContent: "space-evenly",
//                 position: "relative"
//             }}>
//                 <div style={{
//                     height: 100, width: 100, border: 'solid 1px var(--rarityCommon)',
//                     background: "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #FFF 100%)",
//                     marginRight: 15
//                 }}>
//                     <img style={{ userSelect: "none", height: 100, width: 100 }} src={`http://localhost:3005/v1/image/${hoveredItem?.name}.png`} alt="image" />
//                 </div>
//                 <div style={{
//                     // marginRight: 25,
//                     // width: "100%"
//                     width: 230,
//                 }}>
//                     <Typography
//                         fontSize={"2.3em"}
//                         fontStyle={"normal"}
//                         fontWeight={400}
//                         sx={{ color: "black" }}
//                     >{hoveredItem?.label}</Typography>
//                     <Typography
//                         fontSize={12}
//                         fontStyle={"normal"}
//                         fontWeight={500}
//                         sx={{
//                             color: "black"
//                         }}
//                     >{hoveredItem?.description}</Typography>
//                 </div>
//                 <div style={{ position: "absolute", textAlign: "right", top: 11, right: 14 }}>
//                     <Typography
//                         fontSize={18}
//                         fontStyle={"normal"}
//                         fontWeight={400}
//                         sx={{
//                             color: "black"
//                         }}
//                     >
//                         {getRarityName(hoveredItem)}
//                     </Typography>
//                 </div>
//             </div>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 // alignItems: "center",
//                 marginTop: 15,
//             }}>
//                 {/* Alert Notice */}
//                 {hoveredItem?.type === ItemTypes.PART ?
//                     <div style={{
//                         display: "flex",
//                         justifyContent: "flex-start",
//                         alignItems: "flex-start",
//                         flexDirection: "row",
//                         marginLeft: 11,
//                         marginBottom: 15,
//                         gap: 5,
//                         // alignItems: "center"
//                     }}>
//                         <OrangeIcon />
//                         {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                             <path d="M9 0L17.6603 15H0.339746L9 0Z" fill="#FF9900" />
//                         </svg> */}
//                         <Typography
//                             fontSize={13}
//                             fontStyle={""}
//                             fontWeight={600}
//                             sx={{ color: "black" }}>
//                             This part can only be applied to a specific class of vehicle
//                         </Typography>
//                     </div> : <></>
//                 }

//                 {/* Line */}
//                 <div style={{
//                     width: "100%",
//                     height: 2,
//                     background: "black",
//                 }}></div>
//                 <div style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "auto 11px auto 11px",
//                     paddingTop: 3,
//                 }}>
//                     <Typography
//                         fontSize={15}
//                         fontStyle={""}
//                         fontWeight={500}
//                         sx={{ color: "black" }}>
//                         {hoveredItem?.requirement}
//                     </Typography>
//                     <Typography
//                         fontSize={15}
//                         fontStyle={""}
//                         fontWeight={500}
//                         sx={{ color: "black" }}>
//                         Value:  ${hoveredItem?.value !== undefined ? hoveredItem?.value : "Market Offline"}
//                     </Typography>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export const UncommonTooltip = ({ hoveredItem }: TooltipProps) => {
//     return (
//         <div style={{
//             width: 450,
//             border: "solid 3px var(--rarityUncommon)",
//             padding: 4,
//             flexShrink: 0,
//             // background: "var(--rarityUncommon) url('http://localhost:3005/v1/image/tooltip_bg.png')",
//             background: "linear-gradient(180deg, var(--uncommonTooltip0), var(--uncommonTooltip30) 30%, var(--uncommonTooltip100) 100%), url('http://localhost:3005/v1/image/tooltip_bg.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "15% 90%",
//             // backgroundBlendMode: "overlay"
//         }}>
//             <div style={{
//                 display: "flex",
//                 position: "relative"
//             }}>
//                 <div style={{
//                     height: 100, width: 100, border: 'solid 1px var(--rarityUncommon)',
//                     background: "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, var(--rarityUncommon) 100%)",
//                     marginRight: 15
//                 }}>
//                     <img style={{ userSelect: "none", height: 100, width: 100 }} src={`http://localhost:3005/v1/image/${hoveredItem?.name}.png`} alt="image" />
//                 </div>
//                 <div style={{
//                     width: 230,
//                 }}>
//                     <Typography
//                         fontSize={"2.3em"}
//                         fontStyle={"normal"}
//                         fontWeight={400}
//                         sx={{ color: "var(--rarityUncommon)" }}
//                         style={{ textShadow: "0px 1px 6px black" }}
//                     >{hoveredItem?.label}</Typography>
//                     <Typography
//                         fontSize={12}
//                         fontStyle={"normal"}
//                         fontWeight={500}
//                         sx={{
//                             color: "black"
//                         }}
//                     >{hoveredItem?.description}</Typography>
//                 </div>
//                 <div style={{ position: "absolute", textAlign: "right", top: 11, right: 14 }}>
//                     <Typography
//                         fontSize={18}
//                         fontStyle={"normal"}
//                         fontWeight={400}
//                         sx={{ color: "var(--rarityUncommon)" }}
//                         style={{ textShadow: "0px 1px 6px black" }}
//                     >
//                         {getRarityName(hoveredItem)}
//                     </Typography>
//                 </div>
//             </div>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 marginTop: 15,
//             }}>
//                 {/* Alert Notice */}
//                 {hoveredItem?.type === ItemTypes.PART ?
//                     <div style={{
//                         display: "flex",
//                         justifyContent: "flex-start",
//                         alignItems: "flex-start",
//                         flexDirection: "row",
//                         marginLeft: 11,
//                         marginBottom: 15,
//                         gap: 5,
//                     }}>
//                         <OrangeIcon />
//                         <Typography
//                             fontSize={13}
//                             fontStyle={""}
//                             fontWeight={400}
//                             sx={{ color: "white" }}>
//                             This part can only be applied to a specific class of vehicle
//                         </Typography>
//                     </div> : <></>
//                 }

//                 {/* Line */}
//                 <div style={{
//                     width: "100%",
//                     height: 2,
//                     background: "var(--rarityUncommon)",
//                 }}></div>
//                 <div style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "auto 11px auto 11px",
//                     paddingTop: 3,
//                 }}>
//                     <Typography
//                         fontSize={15}
//                         fontStyle={""}
//                         fontWeight={500}
//                         sx={{ color: "white" }}>
//                         {hoveredItem?.requirement}
//                     </Typography>
//                     <Typography
//                         fontSize={15}
//                         fontStyle={""}
//                         fontWeight={500}
//                         sx={{ color: "white" }}>
//                         Value:  ${hoveredItem?.value !== undefined ? hoveredItem?.value : "Market Offline"}
//                     </Typography>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export const RareTooltip = ({ hoveredItem }: TooltipProps) => {
//     return (
//         <div className='tooltip rare'>
//             <div className='title'>{hoveredItem?.label}</div>
//             <div className="info">
//                 <Typography fontWeight={500} fontSize={13} lineHeight={"normal"}>{getRarityName(hoveredItem)}</Typography>
//                 <Typography fontWeight={500} fontSize={13} lineHeight={"normal"}>{getTypeName(hoveredItem)}</Typography>
//             </div>
//             <div className="util">
//                 <div>
//                     <Typography>Durability {hoveredItem?.durability} / 50</Typography>
//                     <Typography>Market Value 120</Typography>
//                 </div>
//                 <div>
//                     <Typography>{hoveredItem?.quantity} | {hoveredItem?.weight.toPrecision(3)}</Typography>
//                 </div>
//             </div>
//         </div>
//     )
// return (
//     <div style={{
//         width: 450,
//         border: "solid 3px #0099FF",
//         padding: 4,
//         flexShrink: 0,
//         // background: "var(--rarityUncommon) url('http://localhost:3005/v1/image/tooltip_bg.png')",
//         background: "linear-gradient(180deg, var(--rareTooltip0), var(--rareTooltip30) 30%, var(--rareTooltip100) 100%), url('http://localhost:3005/v1/image/tooltip_bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "15% 90%",
//         // backgroundBlendMode: "overlay"
//     }}>
//         <div style={{
//             display: "flex",
//             position: "relative"
//         }}>
//             <div style={{
//                 height: 100, width: 100, border: 'solid 1px #0099FF',
//                 background: "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, var(--rarityRare) 100%)",
//                 marginRight: 15
//             }}>
//                 <img style={{ userSelect: "none", height: 100, width: 100 }} src={`http://localhost:3005/v1/image/${hoveredItem?.name}.png`} alt="image" />
//             </div>
//             <div style={{
//                 width: 230,
//             }}>
//                 <Typography
//                     fontSize={"2.3em"}
//                     fontStyle={"normal"}
//                     fontWeight={400}
//                     sx={{ color: "#0099FF" }}
//                     style={{ textShadow: "0px 1px 6px black" }}
//                 >{hoveredItem?.label}</Typography>
//                 <Typography
//                     fontSize={12}
//                     fontStyle={"normal"}
//                     fontWeight={500}
//                     sx={{
//                         color: "white"
//                     }}
//                 >{hoveredItem?.description}</Typography>
//             </div>
//             <div style={{ position: "absolute", textAlign: "right", top: 11, right: 14 }}>
//                 <Typography
//                     fontSize={18}
//                     fontStyle={"normal"}
//                     fontWeight={400}
//                     sx={{ color: "#0099FF" }}
//                     style={{ textShadow: "0px 1px 6px black" }}
//                 >
//                     {getRarityName(hoveredItem)}
//                 </Typography>
//             </div>
//         </div>
//         <div style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             marginTop: 15,
//         }}>
//             {/* Alert Notice */}
//             {hoveredItem?.type === ItemTypes.PART ?
//                 <div style={{
//                     display: "flex",
//                     justifyContent: "flex-start",
//                     alignItems: "flex-start",
//                     flexDirection: "row",
//                     marginLeft: 11,
//                     marginBottom: 15,
//                     gap: 5,
//                 }}>
//                     <OrangeIcon />
//                     <Typography
//                         fontSize={13}
//                         fontStyle={""}
//                         fontWeight={400}
//                         sx={{ color: "white" }}>
//                         This part can only be applied to a specific class of vehicle
//                     </Typography>
//                 </div> : <></>
//             }

//             {/* Line */}
//             <div style={{
//                 width: "100%",
//                 height: 2,
//                 background: "#0099FF",
//             }}></div>
//             <div style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 margin: "auto 11px auto 11px",
//                 paddingTop: 3,
//             }}>
//                 <Typography
//                     fontSize={15}
//                     fontStyle={""}
//                     fontWeight={500}
//                     sx={{ color: "white" }}>
//                     {hoveredItem?.requirement}
//                 </Typography>
//                 <Typography
//                     fontSize={15}
//                     fontStyle={""}
//                     fontWeight={500}
//                     sx={{ color: "white" }}>
//                     Value:  ${hoveredItem?.value !== undefined ? hoveredItem?.value : "Market Offline"}
//                 </Typography>
//             </div>
//         </div>
//     </div>
// )
// }