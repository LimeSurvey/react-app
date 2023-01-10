import React from 'react'
import SideBar from 'components/SideBar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import './SurveySettings.scss'
import useAppState from 'hooks/useAppState'

const iconSize = 24

function SurveySettings() {
    const [
        editorSettingsPanelOpen,
        setEditorSettingsPanelOpen
    ] = useAppState('editorSettingsPanelOpen', false);

    return editorSettingsPanelOpen ? (
        <>
            <SideBar.Header>
                Settings
                <Button
                    variant="link"
                    className={classNames('m-1')}
                    style={{padding: 0}}
                    onClick={() => setEditorSettingsPanelOpen(false)}>
                    <Icon.XLg color='black' size={20} />
                </Button>
            </SideBar.Header>
            <SideBar.Section>
                <SideBar.SectionHeader>
                    Language
                </SideBar.SectionHeader>
                <Form.Select aria-label="Language">
                    <option value="1">English</option>
                    <option value="2">German</option>
                    <option value="3">Spanish</option>
                </Form.Select>
            </SideBar.Section>
            <SideBar.Section>
                <SideBar.SectionHeader>
                    Lorem Ipsum
                </SideBar.SectionHeader>
                <Button variant="outline-dark" active>Optional</Button>
                <Button variant="outline-dark" className={classNames('m-2')}>Mandatory</Button>
            </SideBar.Section>
            <SideBar.Section>
                <SideBar.SectionHeader>
                    Lorem Ipsum
                </SideBar.SectionHeader>
                <Button variant="outline-dark">Fixed order</Button>
                <Button variant="outline-dark" className={classNames('m-2')} active>Randomized</Button>
            </SideBar.Section>
        </>
    ) : null
}

export default SurveySettings
