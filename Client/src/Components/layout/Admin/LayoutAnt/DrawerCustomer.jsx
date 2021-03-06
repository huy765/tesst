import React, { useState, useContext, useEffect } from "react";
import { Upload } from "antd";
import moment from "moment";
import { UserContext } from "../../../../Store/Context/UserContext";
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
} from "antd";

const { Option, OptGroup } = Select;

const ShowDrawer = ({ input, visible, onClose, onUpdate }) => {
    const [fileList, setFileList] = useState([]);
    const { getAdmin } = useContext(UserContext);
    useEffect(() => {
        setFileList([
            {
                uid: "-1",
                name: "Avata",
                status: "done",
                url: `http://localhost:8080/image/${input.nameAvata}`,
            },
        ]);
    }, [input]);

    const onFinish = (values) => {
        const userUpdate = {
            id: input.id,
            fullname: values.fullname,
            email: values.email,
            phone: values.phone,
            address: values.address,
            sex: values.sex,
            dateOfBirth: values.ngaysinh.format("YYYY/MM/DD"),
        };
        onUpdate(userUpdate);
    };

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        getAdmin();
    };

    return (
        <Drawer
            destroyOnClose
            title={input.fullname}
            visible={visible}
            width={500}
            onClose={onClose}
        >
            <Form
                layout='vertical'
                hideRequiredMark
                onFinish={onFinish}
                initialValues={{
                    ["username"]: input.username,
                    ["fullname"]: input.fullname,
                    ["sex"]: input.sex,
                    ["email"]: input.email,
                    ["phone"]: input.phone,
                    ["address"]: input.address,
                    ["ngaysinh"]: moment(input.ngaysinh),
                }}
            >
                <Row gutter={16}>
                    <Col span={9}></Col>
                    <Col span={9}>
                        <Upload
                            action={`http://localhost:8080/api/upload/image/user/${input.id}`}
                            listType='picture-card'
                            fileList={fileList}
                            onChange={onChange}
                            name='photo'
                        >
                            {fileList.length < 1 && "+ Upload"}
                        </Upload>
                    </Col>
                    <Col span={9}></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label='T??n ????ng nh???p'>
                            <Input disabled placeholder={input.username} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='H??? v?? t??n'
                            name='fullname'
                            rules={[
                                {
                                    required: true,
                                    message: "H??? t??n kh??ng ???????c ????? tr???ng",
                                },
                            ]}
                        >
                            <Input placeholder={input.fullname} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name='sex'
                            label='Gi???i t??nh'
                            rules={[
                                {
                                    required: true,
                                    message: "B???n ch??a ch???n gi???i t??nh",
                                },
                            ]}
                        >
                            <Select style={{ width: 200 }}>
                                <OptGroup label='Gi???i t??nh'>
                                    <Option value='Nam'>Nam</Option>
                                    <Option value='N???'>N???</Option>
                                </OptGroup>
                                <OptGroup label='Kh??c'>
                                    <Option value='Kh??c'>Kh??c</Option>
                                </OptGroup>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name='ngaysinh' label='Ng??y sinh'>
                            <DatePicker
                                format='DD-MM-YYYY'
                                placeholder='DD-MM-YYYY'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name='email'
                            label='Email'
                            rules={[
                                {
                                    required: true,
                                    message: "Email kh??ng ???????c ????? tr???ng",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name='phone'
                            label='S??? ??i???n tho???i'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "S??? ??i???n tho???i kh??ng ???????c ????? tr???ng",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={19}>
                    <Col span={20}>
                        <Form.Item
                            name='address'
                            label='?????a ch??? nh???n h??ng'
                            width={600}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        C???p nh???t
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default ShowDrawer;
