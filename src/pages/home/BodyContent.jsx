import { Avatar, Button, Col, List, Row, Typography } from "antd";
import BodyLeft from "./Posts";
import BodyRight from "./Ranks";
 
function BodyContent() {
     
    return (
        <>
            <Row gutter={16}>
                <Col span={18} style={{ backgroundColor: "#f0f2f5", padding: "5px" }}>
                     <BodyLeft />
                </Col>
                <Col span={6} style={{ backgroundColor: "#f0f2f5", padding: "5px" }}>
                     <BodyRight />
                </Col>
            </Row>
        </>
    );
}

export default BodyContent;
