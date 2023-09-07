import {useState} from 'react'
import Header from '../../Components/Common/Header/Header.jsx'
import Footer from '../../Components/Common/Footer/Footer.jsx'
import TabOptions from '../../Components/Common/TabOptions/TabOptions.jsx'
import DiningOut from '../../Components/DiningOut/DiningOut.jsx'
import Nightlife from '../../Components/Nightlife/Nightlife.jsx'
import Delivery from '../../Components/Delivery/Delivery.jsx'

const HomePage = () => {
const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreen=(tab)=>{
  switch (tab) {
    case 'Dining Out':
      return <DiningOut />
    case 'Nightlife':
      return <Nightlife />
    default:
      return <Delivery />

  }
}

export default HomePage