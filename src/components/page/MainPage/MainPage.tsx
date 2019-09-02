import React, { Component } from 'react'
import style from './MainPage.module.scss'
import PageWrapper from 'components/common/PageWrapper/PageWrapper'
import { Button, Modal, Input } from 'antd';
import images from 'assets/images';
import { Link } from 'react-router-dom';
import FormItem from 'components/common/FormItem/FormItem';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
import IStoreInjector from 'interfaces/IStoreInjector';

@inject('store') @observer
export class MainPage extends Component<IStoreInjector> {

    @computed
    get roomConnectStore() {
        return this.props.store.roomConnect;
    }

    @computed
    get roomCreateStore(){
        return this.props.store.roomCreate;
    }

    handleShowRoomCreatePopup = () => this.roomCreateStore.setVisibilityCreatePopup(true);

    handleShowRoomConnectPopup = () => this.roomConnectStore.setVisibilityConnectPopup(true);

    render() {
        return (
            <PageWrapper>
                <div className={style.Container}>
                    <div className={style.Thinking}>
                        <img src={images.thinking} />
                    </div>
                    <div className={style.Text}>
                        Однажды теплым осенним вечером я задался вопросом
                    </div>
                    <div className={style.Actions}>
                        <div className={style.ActionItem}>
                            <Button type="primary" size="large" onClick={this.handleShowRoomCreatePopup}>Создать комнату</Button>
                        </div>
                        <div className={style.ActionSeparator}>
                            или же
                        </div>
                        <div className={style.ActionItem} onClick={this.handleShowRoomConnectPopup}>
                            <Button type="ghost" size="large">Присоединиться</Button>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        )
    }
}

export default MainPage
