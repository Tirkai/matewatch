import { observable, action } from "mobx";

export default class RoomCreate{
    
    @observable
    isShowCreatePopup: boolean = false;

    @action
    setVisibilityCreatePopup(value: boolean){
        this.isShowCreatePopup = value;
    }

}