import { Row, Col } from "reactstrap";


const Copyright = () => {
    const thisyear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (



        <footer className="Footer">

            <div className="inner">
                <div className="top_footer">
                    ddd
                </div>
            </div>







            <Row>
                <Col>
                    <p>
                        copyrigth &copy; <span>{thisyear()}</span>
                    </p>
                </Col>
            </Row>


        </footer >
    )














};




export default Copyright; 