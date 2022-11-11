'use strict';

class Room {
    constructor(name) {
        this.roomName = name;
        this.isAvailable = true;
        
    };

    name() {
        return this.roomName;
    };

    isRoomAvailable() {
        return this.isAvailable;
    };

    makeRoomUnavailable() {
        return this.isAvailable = false;
    };

    makeRoomAvailable() {
        return this.isAvailable = true;
    }

    
};