import React from 'react'
import './TopBar.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover';
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import SettingsForm from '../../editor/settings-form/SettingsForm'
import Logo from 'asset/image/logo.png'

export function TopBar(props) {

    const settingsForm = (
        <Popover id="settings-popover">
            <Popover.Header as="h3">Settings</Popover.Header>
            <Popover.Body>
                <SettingsForm/>
            </Popover.Body>
        </Popover>
    )

    return (
        <Row className={classNames('top-bar', 'border', 'mb-1')}>
            <Col xs={5} xl={3} className={classNames(
                'd-flex', 'align-items-center', 'justify-content-between'
            )}>
                <img src={Logo} style={{height: 60, marginLeft: 20}}/>
                <span>
                    <Button variant="primary" className={classNames('m-1')}>
                        <Icon.PlusLg />
                    </Button>
                    <Button
                        variant={false ? 'secondary' : 'primary'}
                        onClick={() => null}
                    >
                        <Icon.ListNested />
                    </Button>
                    <OverlayTrigger trigger="click" overlay={settingsForm} rootClose>
                        <Button variant="primary" className={classNames('m-1')}>
                            <Icon.Gear />
                        </Button>
                    </OverlayTrigger>
                </span>
            </Col>
            <Col className={classNames(
                'd-flex', 'align-items-center', 'justify-content-between'
            )}>
                <Form.Select
                    aria-label="Default select example"
                    className={classNames('text-align-center')}
                    style={{border: 0, backgroundColor: 'transparent'}}>
                    <option value="1">My Survey One</option>
                    <option value="2">My Survey Two</option>
                    <option value="3">My Survey Three</option>
                </Form.Select>
            </Col>
            <Col xs={3} xl={3} className={classNames(
                'd-flex', 'align-items-center', 'justify-content-end'
            )}>
                <Button variant="light" className={classNames('d-flex', 'ml-auto', 'm-1')}>
                    {'Preview'}
                </Button>
                <Button variant="primary" className={classNames('d-flex', 'ml-auto', 'm-1')}>
                    {'Publish'}
                </Button>
                <OverlayTrigger trigger="click" placement="left" overlay={settingsForm} rootClose>
                    <Button variant="primary" className={classNames('d-flex', 'ml-auto', 'm-1')}>
                        <Icon.MenuButton />
                    </Button>
                </OverlayTrigger>
            </Col>
        </Row>
    )
}

export default TopBar
