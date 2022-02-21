import React from 'react'
import { Typography , Row,Col,Statistic } from 'antd'
import {Link}   from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import milify from 'millify'
import {Cryptocurrencies ,News} from '../components'
import Loader from './Loader'



const {Title}=Typography

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data)
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader/>;


  return (
   <>

  <Title level={2} className='heading' >Global Crypto Stats</Title>
   <Row>
     <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total}/></Col>
     <Col span={12}><Statistic title='Total Exchanges' value={milify(globalStats.totalExchanges)}/></Col>
     <Col span={12}><Statistic title='Total Market Cap' value={milify(globalStats.totalMarketCap) }/></Col>
     <Col span={12}><Statistic title='Total 24 Volume' value={milify(globalStats.total24hVolume) }/></Col>
     <Col span={12}><Statistic title='Total Markets' value={milify(globalStats.totalMarkets )}/></Col>   
     </Row>
     <div className="home-heading-container">
       <Title level={2} className='home-title'> Top 10 Cryptocurrencies in the world</Title>
       <Title level={3} className='show-more'> <Link to='/cryptocurrencies'>Show more</Link></Title>
     </div>
     <Cryptocurrencies simplified/>
     <div className="home-heading-container">
       <Title level={2} className='home-title'> Latest Crypto News</Title>
       <Title level={3} className='show-more'> <Link to='/news'>Show more</Link></Title>
     </div>
     <News simplified/>
   </>
  )
}

export default Homepage