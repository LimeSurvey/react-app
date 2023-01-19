import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from './top-bar/TopBar'
import SideBarLeft from './side-bar-left/SideBarLeft'
import SideBarRight from './side-bar-right/SideBarRight'
import Survey from 'components/Survey'
import useAuth from 'hooks/useAuth'
import config from 'config'
import './index.scss'

function Editor() {
    const {
        isLoggedIn,
        isPending,
        login,
        loginMutation
    } = useAuth()

    useEffect(function(){
        if (!isLoggedIn && !isPending) {
            login()
        }
    }, [isLoggedIn])

    const authenticationStatus = (
        loginMutation.isError ? (
            <Container fluid>
                Authentication failed
            </Container>
        ) : (
            <Container fluid>
                Authenticating
            </Container>
        )
    )

    return loginMutation.isSuccess ? (
        <Container fluid>
            <TopBar siteName={config.siteName} />
            <Row id="content">
                <SideBarLeft />
                <Survey />
                <SideBarRight />
            </Row>
        </Container>
    ) : (
        authenticationStatus
    )
}

export default Editor
