import React from 'react';
import { Provider } from 'mobx-react';
import { store } from 'classes/RootStore';
import AppContainer from '../AppContainer/AppContainer';
import 'antd/dist/antd.less'
import './App.scss'
import './ant-override.scss'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
}

export default App;
