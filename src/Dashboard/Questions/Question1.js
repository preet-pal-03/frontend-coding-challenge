import React from 'react'
import { Alert, Layout, Row, Select, Space, Col, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { Footer } from 'antd/es/layout/layout';

export const Question1 = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div style={{ padding: '55px' }}>
            <Layout>

                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Alert message="Does the entity have an anti-corruption or anti-bribery policy? If yes, provide detials in
        brief and if available, provide a web-link to the policy." type="info" />
                    Business Conduct

                    Does the entity have an anti-corruption or anti-bribery policy?

                    <Select
                        defaultValue="yes"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'yes',
                                label: 'Yes',
                            },
                            {
                                value: 'no',
                                label: 'No',
                            },
                        ]}
                    />

                    If yes, provide details in brief.

                    <TextArea />
                </Space>
                <Footer>
                    <Button>Previous</Button>
                    <Button style={{ float: 'right' }} type="primary">Next</Button>
                </Footer>
            </Layout>
        </div>
    )
}
