import React from 'react'
import {Provider} from 'react-redux'
import {store} from '../store'
import { ConnectedDashboard, Dashboard } from './Dashboard'

export const Main = () => (
    <Provider store={store}>
        <div>
            <ConnectedDashboard />
        </div>
    </Provider>
)