import { Row, Col } from "reactstrap";

const Footer = () => {
    const thisyear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <Footer className="Footer">
            <Row>
                <Col>
                    <p>
                        copyrigth &copy; <span>{thisyear()}</span>
                    </p>
                </Col>
            </Row>
        </Footer>
    )














};




export default Footer; 