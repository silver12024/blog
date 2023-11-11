import {actGetPost, actGetPostError} from './actPost';
import axios from 'axios';
import { GET_ALLPOST,GET_ALLPOST_ERROR } from "../const/index";
import { useState, useEffect } from 'react';

function getPostsAction() {
    return dispatch => {
        // dispatch(fetchProductsPending());
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(actGetPost(res.data));
            return res.data;
        })
        .catch(error => {
            dispatch(actGetPostError(error));
        })
    }
}


export  default getPostsAction;
