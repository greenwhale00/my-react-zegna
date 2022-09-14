import {Row, Col} from "reactstrap"; 

const Footer = () => {
const thisyear = () => {
    const year = new Date().getFullYear();
    return year 
};

return (
    <div>
        <Row>
            <Col>
            <p>
                copyrigth &copy; <span>{thisyear()}</span>
            </p>
            </Col>
        </Row>
    </div>
)














};
 



export default Footer; 