import { Selection } from "../../features/hotelResult/hotelResultSlice"

interface selectionNeedle {
  roomNo: string;
  roomClassId: string;
  sampleId: string;
  isSampleSelected?: boolean;
}

const findSelection = (selectionHaystack: Array<Selection>, selectionNeedle: selectionNeedle) => {
  
  const selection = selectionHaystack.find(selection =>
    selection.roomNo === selectionNeedle.roomNo &&
    selection.roomClassId === selectionNeedle.roomClassId &&
    selection.sampleId === selectionNeedle.sampleId
  ) as Selection

  return selection
}


export default findSelection