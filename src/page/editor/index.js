import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopBar from './top-bar/TopBar'
import SideBarLeft from './side-bar-left/SideBarLeft'
import SideBarRight from './side-bar-right/SideBarRight'
import Survey from 'components/Survey'
import config from 'config'
import './index.scss'

function Editor() {
    return (
        <Container fluid>
            <TopBar siteName={config.siteName} />
            <Row id="content">
                <SideBarLeft />
                <Survey />
                <SideBarRight />
            </Row>
        </Container>
    )
}

export default Editor
