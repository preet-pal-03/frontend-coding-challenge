import React from 'react'
import { useContext } from 'react'
import AuthApi from '../AuthApi'
import Cookies from 'js-cookie'
import { Layout, Tabs, Button } from 'antd';
import { Question1 } from './Questions/Question1';
import './style.css'
import { Header } from 'antd/es/layout/layout';


export const Dashboard = () => {
    const Auth = useContext(AuthApi)
    const handleOnClick = () => {
        Auth.setAuth(false)
        Cookies.remove("user")
    }
    return (
        <div style={{ background: '#f5f5f5', height: '100vh' }}>
            <Layout>
                <Header style={{
                    background: '#f5f5f5',
                    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
                }}>
                    Hello, Test
                    <Button type='primary' style={{ margin: '10px 0px 0px 10px', float: 'right', marginBottom: '20px' }} onClick={handleOnClick}>Logout</Button>
                </Header>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={"left"}
                    style={{ height: 220 }}
                    tabBarStyle={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '200px'

                    }}
                    items={[{
                        label: `Does the entity have an <br /> anti-corruption or anti-bribery policy?`,
                        key: "1",
                        children: <Question1 />,
                    }, {
                        label: `Coverage by training and awareness programmes on any of the Principles during the financial year:
            `,
                        key: "2",
                        children: `Content of tab 2`,
                    }, {
                        label: `Details of fines / penalties /punishment/ award/ compounding fees/ settlement amount paid in proceedings 
            (by the entity or by directors / 
            KMPs) with regulators/ law enforcement agencies/ judicial institutions, in the 
            financial year, in the following format (Note: the entity shall make disclosures on 
            the basis of materiality as specified in Regulation 30   of SEBI (Listing Obligations 
            and Disclosure Obligations) Regulations, 2015 and as disclosed on the entity’s website)`,
                        key: "3",
                        children: `Content of tab 3`,
                    }, {
                        label: `Details of fines / penalties /punishment/ award/ compounding fees/ settlement amount paid in proceedings (by the entity or by directors / KMPs) with regulators/ law enforcement agencies/ judicial institutions, in the financial year, in the following format (Note: the entity shall make disclosures on the basis of materiality as specified in Regulation 30   of SEBI (Listing Obligations and Disclosure Obligations) Regulations, 2015 and as disclosed on the entity’s website)`,
                        key: "4",
                        children: `Content of tab 4`,
                    }]
                    }
                />
                {/* <Tabs
      tabPosition={"left"}
      style={{ height: 220, flexWrap: 'wrap', width: 'auto' }}
      items={[{
          label: `Details as at the end of Financial Year`,
          key: "1",
          children: <Question1 />,
        },{
          label: `Products/Services sold by the entity (accounting for 90% of the entity’s Turnover)`,
          key: "2",
          children: `Content of tab 2`,
      }]
      }
    /> */}
            </Layout>
        </div>
    )
}
