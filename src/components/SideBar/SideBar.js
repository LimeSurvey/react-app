import React from 'react'
import './SideBar.scss'
import Header from './Header'
import Row from './Row'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Fade from 'react-bootstrap/Fade'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBar({visible = false, className = '', children = null}) {
    return (
        <Col xl={3} lg={12} style={{padding: 0}}>
            <Fade
                in={visible}
                dimension="width"
                onEntered={() => null}
                onExiting={() => null}
            >
                <div
                    className={className + classNames(
                        'sidebar'
                    )}>
                    {children}
                </div>
            </Fade>
        </Col>
    )
}
SideBar.Header = Header
SideBar.Row = Row
SideBar.Section = Section
SideBar.SectionHeader = SectionHeader

export default SideBar
