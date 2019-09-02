import React, { Component } from 'react'
import IPopup from 'interfaces/IPopup';
import IStoreInjector from 'interfaces/IStoreInjector';
import { Modal, Input, Button, Form, Radio } from 'antd';
import FormItem from 'components/common/FormItem/FormItem';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export class RoomCreatePopup extends Component<IStoreInjector>{
    
    @computed
    get roomCreateStore(){
        return this.props.store.roomCreate;
    }

    handleClose = () => this.roomCreateStore.setVisibilityCreatePopup(false);

    render() {
        return (
            <Modal visible={this.roomCreateStore.isShowCreatePopup} footer={null} onCancel={this.handleClose}>
                <SectionTitle title="Создание комнаты"></SectionTitle>
                <Form>
                    <FormItem label="Тип">
                        <Radio.Group size="large" defaultValue="youtube" buttonStyle="solid">
                            <Radio.Button value="youtube">Youtube</Radio.Button>
                            <Radio.Button value="soon" disabled>Magnet (soon)</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                    <FormItem label="Ссылка на источник">
                        <Input size="large" placeholder="http://"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="large">Создать</Button>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default RoomCreatePopup
