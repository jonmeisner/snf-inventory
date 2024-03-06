export enum InvEvents {
    LOAD_PLAYER_INVENTORY = "snf-inventory:loadPlayerInventory",
    ADD_INVENTORY_ITEM = "snf-inventory:AddInventoryItem",
    REFRESH_PLAYER_INVENTORY = "snf-inventory:refreshPlayerInventory",
    REFRESH_INVENTORIES = "snf-inventory:refreshInventories",

    SHOW_INVENTORY_DISPLAY = "snf-inventory:showInventoryDisplay",
    OPEN = "snf-inventory:openInventory",
    CLOSE = "snf-inventory:closeInventory",
    JUST_SHOW = "snf-inventory:justShowInventory",

    MOVE_ITEM = "snf-inventory:moveIventoryItem",
    MOVE_ITEM_PERSONAL = "snf-inventory:moveIventoryItemPersonal",
    SPLIT_ITEM = "snf-inventory:splitIventoryItem",
    SERVER_PLAYER_SPLIT_ITEM = "snf-inventory:serverSplitPlayerInventoryItem",
    SERVER_PLAYER_UPDATE_INVENTORY = "snf-inventory:serverUpdatePlayerInventory",
    USE_ITEM = "snf-inventory:useItem",
}

export enum Ground {
    OPEN = "snf-inventory:ground:openInventory",
    SET_STORAGE_LOCATION = "snf-inventory:ground:setLocation",
    UNATTACH = "snf-inventory:ground:unattach",
    ADD_ITEM = "snf-inventory:ground:addItem",
    REMOVE_ITEM = "snf-inventory:ground:removeItem",
    SORT_ITEM = "snf-inventory:ground:sortItem",
    CLOSE = "snf-inventory:ground:closeInventory",

    INITIAL_LOAD = "snf-inventory:ground:initialLoad",

    CHECK_OCCUPIED = "snf-inventory:groundOccupied",
    CHECK_GROUND_OCCUPIED = "snf-inventory:checkGroundOccupied",
    GROUND_LOCATOR = "snf-inventory:groundLocator",
    GET_STORAGE = "snf-inventory:getGroundStorage",
    UPDATE_STORAGE = "snf-inventory:updateGroundStorage",
    DESTROY_STORAGE = "snf-inventory:destroyGroundStorage",
}