export interface IAddUpdateHouseRequestModel {
    id: number,
    userId: string,
    houseName: string,
    houseNo: string,
    latitude: number,
    longitude: number,
    zipCode: number,
    countryId: number,
    stateId: number,
    city: string,
    address: string
}