import React, { Component } from 'react'
import IPopup from 'interfaces/IPopup';
import IStoreInjector from 'interfaces/IStoreInjector';
import { Modal, Button } from 'antd';
import FormItem from 'components/common/FormItem/FormItem';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';
import { Input, Radio, SubmitButton, Form } from "@jbuschke/formik-antd";

@inject('store') @observer
export class RoomCreatePopup extends Component<IStoreInjector>{

    @computed
    get roomCreateStore() {
        return this.props.store.roomCreate;
    }

    handleClose = () => this.roomCreateStore.setVisibilityCreatePopup(false);

    render() {
        return (
            <Modal visible={this.roomCreateStore.isShowCreatePopup} footer={null} onCancel={this.handleClose}>
                <SectionTitle title="Создание комнаты"></SectionTitle>
                <Formik
                    initialValues={{type: "youtube", source: ""}}
                    onSubmit={(values) => console.log(values)}
                    render={() => (
                        <Form>
                            <FormItem label="Тип">
                                <Radio.Group name="type" size="large" buttonStyle="solid">
                                    <Radio.Button value="youtube">Youtube</Radio.Button>
                                    <Radio.Button value="soon" disabled>Magnet (soon)</Radio.Button>
                                </Radio.Group>
                            </FormItem>
                            <FormItem label="Ссылка на источник">
                                <Input name="source" size="large" placeholder="http://"></Input>
                            </FormItem>
                            <FormItem>
                                <SubmitButton type="primary" size="large">Создать</SubmitButton>
                            </FormItem>
                        </Form>
                    )}
                />
            </Modal>
        )
    }
}

export default RoomCreatePopup
