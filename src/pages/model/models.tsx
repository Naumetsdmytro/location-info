export interface PlaceData {
  title: string,
  id: string,
  position: {
    lat: number,
    lng: number
  },
  distance: string,
  vicinity: string,
  address: {
    label: string
  }
}
