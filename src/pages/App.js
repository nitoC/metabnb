
import { useState } from 'react';
import Modal from '../components/modal';
import '../styles/App.css';
import Home from './home/home';
import PlaceToStay from './placeToStay/PlaceToStay';
function App() {
  const [modal, setmodal] = useState(false);
  const [page, setpage] = useState('home');
  const handleModal = ()=>{
    console.log('modal')
          if(modal===true) setmodal(false)
          if(modal===false)setmodal(true)
  }
  const handlepage = (page)=>{
    console.log('modal')
          setpage(page)
  }
  return (
    <div className="App">
      {
        (page==='home')?<Home handlepage={handlepage} handleModal={handleModal}/>: <PlaceToStay handlepage={handlepage} handleModal={handleModal}/>
      }
     
    
      <Modal modal={modal} handleModal={handleModal}/>
    </div>
  );
}

export default App;
