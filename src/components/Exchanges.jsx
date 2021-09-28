import React, { useState } from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import { Collapse, Row, Typography, Avatar } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';

const { Text } = Typography;
const { Panel } = Collapse;


const Exchanges = () => {
  return (
    <div>
      Exchanges
    </div>
  )
}

export default Exchanges;