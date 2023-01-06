import React from 'react'
import './index.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from './top-bar/TopBar'
import SideBarLeft from './side-bar-left/SideBarLeft'
import SideBarRight from './side-bar-right/SideBarRight'
import classNames from 'classnames'

import Survey from 'components/Survey'

function Editor() {
  const siteConfig = {
    name: 'LimeSurvey 2',
  }

  return (
    <div id="container">
      <TopBar siteName={siteConfig.name} />
      <Row id="content">
        <SideBarLeft />
        <Survey />
        <SideBarRight />
      </Row>
    </div>
  )
}

export default Editor
