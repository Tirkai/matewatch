import { observable, action } from "mobx";

export default class RoomConnect{
    
    @observable
    isShowConnectPopup: boolean = false;

    @action
    setVisibilityConnectPopup(value: boolean){
        this.isShowConnectPopup = value;
    }
    
}