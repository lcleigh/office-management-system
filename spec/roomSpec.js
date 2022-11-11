'use strict;'

describe('Room', () => {
    let room;

    beforeEach(() => {
        room = new Room('The Penthouse');

    });

    it ('creates a room with a name', () => {
        expect(room.name()).toEqual('The Penthouse');
    });

    it ('a meeting room is available by default', () => {
        expect(room.isRoomAvailable()).toBe(true);
    });

    it ('makes room unavailble', () => {
        room.makeRoomUnavailable();
        expect(room.isRoomAvailable()).toBe(false);
    });

    it ('makes room available', () => {
        room.makeRoomUnavailable();
        expect(room.isRoomAvailable()).toBe(false);
        room.makeRoomAvailable();
        expect(room.isRoomAvailable()).toBe(true);
    });


});