import React from 'react'
import './SideBarRight.scss'
import Collapse from 'react-bootstrap/Collapse'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'

function SideBarRight() {
    return (
        <Col xs={3} xl={3} style={{padding: 0}}>
             <Collapse
                in={false}
                dimension="width"
                onEntered={() => null}
                onExiting={() => null}
            >
                <div
                    className={classNames(
                        'sidebar',
                        'sidebar-right',
                        'p-1',
                        'align-items-center',
                        'justify-content-start'
                    )}
                >
                    right side bar
                </div>
            </Collapse>
        </Col>
    )
}

export default SideBarRight
