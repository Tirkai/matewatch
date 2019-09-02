import React, { Component } from 'react'
import style from './AppContainer.module.scss'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainPage from 'components/page/MainPage/MainPage';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
import IStoreInjector from 'interfaces/IStoreInjector';
import RoomConnectPopup from 'components/popup/RoomConnectPopup/RoomConnectPopup';
import RoomCreatePopup from 'components/popup/RoomCreatePopup/RoomCreatePopup';

const history = createBrowserHistory();

export default class AppContainer extends Component<IStoreInjector> {
    render() {
        return (
            <div className={style.AppContainer}>
                <Router history={history}>
                    <Route path="/" exact component={MainPage}></Route>
                </Router>
                <RoomConnectPopup/>
                <RoomCreatePopup/>
            </div>
        )
    }
}
