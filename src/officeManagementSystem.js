'use strict';

class OfficeManagementSystem {
    constructor() {
        this.meetingRooms = [];
        // this.availableMeetingRooms = [];
        
        
    };

    listAllMeetingRooms() {
        return this.meetingRooms;
    };

    addMeetingRoom(room) {
        this.meetingRooms.push(room);
        
    };

    peopleEnterRoom(room) { 
        if (room.isRoomAvailable() === true) {
            room.makeRoomUnavailable();
        };
        return 'This room is not available. You cannot enter.'
        
    };

    peopleLeaveRoom(room) { 
        room.makeRoomAvailable();
    };

    listAvailableRooms() {
        let roomsAvailable = this.meetingRooms.filter(function(room) {
            return room.isRoomAvailable();
        });
        return roomsAvailable;
    };

    // checkAvailability(room) {
    //     if (room.isRoomAvailable() === true) {
    //         this.availableMeetingRooms.push(room);
    //     };
    //     return this.availableMeetingRooms
    // };


};