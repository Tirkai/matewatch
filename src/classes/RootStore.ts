import { observable, action } from 'mobx'
import RoomConnect from './RoomConnect';
import RoomCreate from './RoomCreate';

export default class RootStore{
    public roomConnect: RoomConnect;
    public roomCreate: RoomCreate;
    constructor(){
        this.roomConnect = new RoomConnect();
        this.roomCreate = new RoomCreate();
        console.log(this);
    }
}
const store = new RootStore();
export { store };