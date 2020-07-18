import React from 'react';
import {combineReducers} from 'redux';
import sessionReducer from './sessionReducer';

export const allReducers = combineReducers({
    session:sessionReducer
})
