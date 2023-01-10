import React, { useState } from 'react'
import classNames from 'classnames'
import * as Icon from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import SideBar from 'components/SideBar'

const indentSize = 50

function Row({
    icon = null,
    title = null,
    button = null,
    button2 = null,
    children = null,
    className = '',
    style = {}
}) {
    const [ isOpen, setOpen ] = useState(false)
    const openCloseIcon = isOpen
        ? <Icon.ChevronDown color="black"/>
        : <Icon.ChevronRight color="black" />
    const openCloseButton = children
        ? <Button
            variant="link"
            onClick={() => setOpen(!isOpen)}
            style={{marginRight: 10}}>{openCloseIcon}</Button>
        :  null
    const content = isOpen ? (
        <div style={{marginLeft: indentSize}}>
            {children}
        </div>
    ) : null;
    return (
        <>
            <SideBar.Row style={{marginLeft: 10, ...style}}>
                <div>
                    {openCloseButton}
                    {icon}
                    <span style={{marginLeft: 14}}>{title}</span>
                </div>
                <div className={classNames(
                    'd-flex',
                    'flex-grow-1',
                    'align-items-center',
                    'justify-content-end'
                )}>
                    {button2}
                    {button}
                </div>
            </SideBar.Row>
            {content}
        </>
    )
}

export default Row
