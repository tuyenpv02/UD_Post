import { Button, Card, Col, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../../services/PostService";
import InteractPostService from "../../services/InteractPostService";
import { CalendarOutlined, LikeOutlined, UserOutlined } from "@ant-design/icons";

const DetailPost = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [post, setPost] = useState();
    const [likes, setLikes] = useState();

    const fetchDetail = async () => {
        // console.log("param ", params);
        let res = await PostService.getById(params.id);
        let resLike = await InteractPostService.getTotalLikeByPostId(params.id);
        setPost({ ...res.data });
        setLikes(resLike);
        // console.log(res);
        // console.log("resLike", resLike.length);
    };

    useEffect(() => {
        fetchDetail();
    }, []);
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card style={{ height: "100%", width: "100%", padding: "50px" }}>
                <Row justify="center" align="middle" style={{ textAlign: "center", width: "100%" }}>
                    <Typography.Title style={{ margin: "0" }}>{post?.title}</Typography.Title>
                </Row>
                <Row justify="start" align="middle">
                    <Button icon={<CalendarOutlined />} type="text" iconPosition={"start"}>
                        {post?.createAt}
                    </Button>
                </Row>
                <Row justify="start" align="middle" style={{ textAlign: "center", width: "100%" }}>
                    <Button icon={<LikeOutlined />} type="text" iconPosition={"start"}>
                        {likes}
                    </Button>
                </Row>
                <Row justify="start" align="middle" style={{ textAlign: "center", width: "100%" }}>
                    <Button
                        onClick={() => {
                            navigate("/user/view/" + post?.userId);
                        }}
                        icon={<UserOutlined />}
                        type="text"
                        iconPosition={"start"}
                    >
                        {post?.userId}
                    </Button>
                </Row>
                <hr className="border  border-2 opacity-50" />
                <Row justify="center" style={{ flex: 1 }}>
                    <Col span={24}>
                        <p>{post?.content}</p>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default DetailPost;
