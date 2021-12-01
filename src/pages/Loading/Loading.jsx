import React from 'react'
import loading from '../../img/loading.gif'
import { LoadingPage } from './loading-style'

export default function Loading() {
    return (
        <LoadingPage>
            <img src={loading} alt="loading" />
        </LoadingPage>
    )
}
