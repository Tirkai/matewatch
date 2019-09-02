import React, { Component } from 'react'
import { inject } from 'mobx-react';
import { Modal, Input, Button } from 'antd';
import FormItem from 'components/common/FormItem/FormItem';
import { computed } from 'mobx';
import { observer } from 'mobx-react'
import IStoreInjector from 'interfaces/IStoreInjector';
import IPopup from 'interfaces/IPopup';

interface IRoomConnectPopupProps extends IStoreInjector{}

@inject('store') @observer
export class RoomConnectPopup extends Component<IRoomConnectPopupProps> {

    @computed
    get roomConnectStore(){
        return this.props.store.roomConnect;
    }

    handleClose = () => this.roomConnectStore.setVisibilityConnectPopup(false);

    render() {
        return (
            <Modal visible={this.roomConnectStore.isShowConnectPopup} footer={null} onCancel={this.handleClose}>
                <FormItem label="Код комнаты">
                    <Input size="large" />
                </FormItem>
                <FormItem>
                    <Button size="large" type="primary">Продолжить</Button>
                </FormItem>
            </Modal>
        )
    }
}

export default RoomConnectPopup
