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
        room.makeRoomUnavailable();
        
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