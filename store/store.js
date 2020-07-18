import React from 'react';
import {createStore} from 'redux';
import {allReducers} from '../reducers/globalReducer';

export const store = createStore(allReducers);

