import './App.css';
import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
import { IoIosCalculator } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaFileSignature , FaAddressCard , FaWallet } from "react-icons/fa";

import { AccountingCarousel } from 'carousels/AccountingCarousel';
import {Tabs} from "./components/Tabs"

const GlobalStyle = createGlobalStyle`
  ${reset}
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  } 
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <Tabs>
          <TabWrapper>
            <Tabs.Tab label="accounting">
              <div>
                <DiGoogleAnalytics size={30} color={"#D0D0D0"}/>
                <p>経理</p>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="invoice">
              <div>
                <FaFileSignature  size={30} color={"#D0D0D0"} />
                <p>請求書作成</p>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="expense">
              <div>
                <FaWallet  size={30} color={"#D0D0D0"} />
                <p>経費精算</p>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="payroll">
              <div>
                <IoIosCalculator  size={30} color={"#D0D0D0"} />
                <p>給与計算</p>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="mynumber">
              <div>
                <FaAddressCard  size={30} color={"#D0D0D0"} />
                <p>マイナンバー収集</p>
              </div>
            </Tabs.Tab>
          </TabWrapper>
          <Tabs.Panel label="accounting">
            <AccountingCarousel/>
          </Tabs.Panel>
          <Tabs.Panel label="invoice">
            invoice
          </Tabs.Panel>
          <Tabs.Panel label="expense">
            expense
          </Tabs.Panel>
          <Tabs.Panel label="payroll">
            payroll
          </Tabs.Panel>
          <Tabs.Panel label="mynumber">
            mynumber
          </Tabs.Panel>
        </Tabs>
      </div>
    </Fragment>
  );
}

export default App;

const TabWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #F2F2F2;
`