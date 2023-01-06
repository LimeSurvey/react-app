import React from 'react'
import './SideBarLeft.scss'
import Collapse from 'react-bootstrap/Collapse'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBarLeft() {
    return (
        <Col xs={2} xl={2}>
            <Collapse
                in={true}
                dimension="width"
                onEntered={() => null}
                onExiting={() => null}
            >
                <div
                    className={classNames(
                        'sidebar-l',
                        'align-items-center',
                        'justify-content-start',
                    )}
                    style={{display: false ? 'block' : 'none'}}>
                    left side bar
                </div>
            </Collapse>
        </Col>
    )
}

export default SideBarLeft
