import React from 'react'
import './SideBar.scss'
import Header from './Header'
import Row from './Row'
import Fade from 'react-bootstrap/Fade'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBar({visible = false, className = '', children = null}) {
    return (
        <Col xs={3} xl={3} style={{padding: 0}}>
            <Fade
                in={visible}
                dimension="width"
                onEntered={() => null}
                onExiting={() => null}
            >
                <div
                    className={className + classNames(
                        'sidebar',
                        'sidebar-left'
                    )}>
                    {children}
                </div>
            </Fade>
        </Col>
    )
}
SideBar.Header = Header
SideBar.Row = Row

export default SideBar
