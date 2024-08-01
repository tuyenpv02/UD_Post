import { Avatar, List, Typography } from "antd";
import { useEffect, useState } from "react";
import RankService from "./../../services/RankService";
import { useNavigate } from "react-router-dom";

const BodyRight = () => {
    const navigate = useNavigate();
    const [ranks, setRanks] = useState([]);
    const getALlRanks = async () => {
        const res = await RankService.getRanks();
        setRanks([...res.data]);
    };

    useEffect(() => {
        getALlRanks();
    }, []);
    return (
        <>
            <List
                style={{
                    backgroundColor: "#ffffff", // Màu nền trắng
                    borderRadius: "5px", // Bo viền
                }}
                header={<div>Hạng</div>}
                bordered
                itemLayout="horizontal"
                dataSource={ranks}
                renderItem={(item, index) => (
                    <List.Item
                        style={
                            {
                                // backgroundColor: "#ffffff", // Màu nền trắng
                                // borderRadius: "10px", // Bo viền
                            }
                        }
                    >
                        <List.Item.Meta
                            avatar={<Typography.Title level={4}>0{index + 1}</Typography.Title>}
                            title={
                                <span
                                    style={{
                                        display: "inline-block",
                                        maxWidth: "100%", // Đặt chiều rộng tối đa theo nhu cầu của bạn
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    <a
                                        onClick={() => {
                                            navigate("/user/view/" + item.id);
                                        }}
                                    >
                                        {item.id}
                                    </a>
                                </span>
                            }
                            description={"point " + item.totalPoint}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default BodyRight;
