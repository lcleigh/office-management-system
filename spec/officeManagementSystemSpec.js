'use strict';

describe('OfficeManagementSystem', () => {
    let officeManagementSystem;

    beforeEach(() => {
        officeManagementSystem = new OfficeManagementSystem();

    });

    it ('starts with no meeting rooms', () => {
        expect(officeManagementSystem.listAllMeetingRooms()).toEqual([]);
    });

    it ('adds a meeting room called "The Penthouse" to the office', () => {
        let room = new Room('The Penthouse');
        officeManagementSystem.addMeetingRoom(room);
        let currentMeetingRoomList = officeManagementSystem.listAllMeetingRooms();
        expect(currentMeetingRoomList.length).toEqual(1);
        expect(officeManagementSystem.listAllMeetingRooms()[0].name()).toEqual('The Penthouse');
    });

    it ('lists all the meeting rooms in the office', () => {
        let room1 = new Room('The Penthouse');
        let room2 = new Room('Small Meeting Room');
        let room3 = new Room('Funhouse');
        officeManagementSystem.addMeetingRoom(room1);
        officeManagementSystem.addMeetingRoom(room2);
        officeManagementSystem.addMeetingRoom(room3);
        let currentMeetingRoomList = officeManagementSystem.listAllMeetingRooms();
        expect(currentMeetingRoomList.at(-1).name()).toEqual('Funhouse');
        expect(currentMeetingRoomList.at(1).name()).toEqual('Small Meeting Room');
    });

    it ('a meeting room is available by default', () => {
        let room1 = new Room('The Penthouse');
        let room2 = new Room('Small Meeting Room');
        officeManagementSystem.addMeetingRoom(room1);
        officeManagementSystem.addMeetingRoom(room2);
        let currentMeetingRoomList = officeManagementSystem.listAllMeetingRooms();
        let secondMeetingRoom = currentMeetingRoomList.at(-1);
        expect(secondMeetingRoom.isRoomAvailable()).toBe(true);

    });

    it ('makes room unavailable when someone enters the room', () => {
        let room1 = new Room('The Penthouse');
        officeManagementSystem.addMeetingRoom(room1);
        officeManagementSystem.peopleEnterRoom(room1)
        expect(room1.isRoomAvailable()).toBe(false);
    });

    it ('makes room available when everyone leaves the room', () => {
        let room1 = new Room('The Penthouse');
        officeManagementSystem.addMeetingRoom(room1);
        officeManagementSystem.peopleEnterRoom(room1);
        expect(room1.isRoomAvailable()).toBe(false);
        officeManagementSystem.peopleLeaveRoom(room1);
        expect(room1.isRoomAvailable()).toBe(true);
    });

    it ('lists available rooms only', () => {
        let room1 = new Room('The Penthouse');
        let room2 = new Room('Small Meeting Room');
        let room3 = new Room('Funhouse');
        let room4 = new Room('The Cupboard');

        officeManagementSystem.addMeetingRoom(room1);
        officeManagementSystem.addMeetingRoom(room2);
        officeManagementSystem.addMeetingRoom(room3);
        officeManagementSystem.addMeetingRoom(room4);
        
        officeManagementSystem.peopleEnterRoom(room1);
        officeManagementSystem.peopleEnterRoom(room3);
        expect(officeManagementSystem.listAvailableRooms()).toEqual([room2, room4]);
    })
});