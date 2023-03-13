import React, { useState } from 'react'
import classNames from 'classnames'
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'

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
        ? <ChevronDown color="black"/>
        : <ChevronRight color="black" />
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
            <div
                className="sidebar-row"
                style={{
                    marginLeft: 10,
                    display: 'flex',
                    flexDirection:'row',
                    ...style
                }} >
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
            </div>
            {content}
        </>
    )
}

export default Row
