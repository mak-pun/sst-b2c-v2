import { Selection } from "../../features/hotelResult/hotelResultSlice"
import { HotelResult, Sample, Room, RoomClassResult } from "../../api/types"


const findSelection = (result: HotelResult, selection: Selection) => {

    const room = result.room.find(room => room.index === selection.roomNo) as Room
    const roomClass = room.room_classes.find(roomClass => roomClass.room_class_id === selection.roomClassId) as RoomClassResult
    const sample = roomClass.samples.find(sample => sample.sample_id === selection.sampleId) as Sample

    return sample
}


export default findSelection