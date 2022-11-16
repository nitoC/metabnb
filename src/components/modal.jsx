import React, { useEffect, useState } from 'react';
import right from '../assets/rightchev.png';
import meta from '../assets/metamask.png';
import connect from '../assets/walletconnect.png'
import cancel from '../assets/cancel.png'


function Modal({modal, handleModal}) {
    const [zindex, setzindex] = useState(-12);
    useEffect(() => {
        console.log(modal)
      if(modal===false){
        setzindex(-12)
      }else{
        setzindex(10)
      }
    }, [modal])
    
    return ( 
        <div className="modal__wrapper" style={{zIndex:zindex}}>
            <div className="modal__overlay" onClick={handleModal}>
                <div className="modal">
                    <div className="modal__header">
                        <div className="modal__heading">
                            Connect Wallet
                        </div>
                   <div className="cancel" onClick={handleModal}>
                    <img src={cancel} alt="" className="modal__cancel" />
                   </div>
                    </div>
                    <div className="modal__subheading">
                        Choose preferred wallet:
                    </div>
                    <div className="modal__wallet">
                        <div className="modal__img-wrapper">
                           <img src={meta} alt="" className="modal__img" />
                           <div className="modal__img-txt">Metamask</div>
                        </div>
                        <div className="modal__icon-wrapper">
                            <img src={right} alt="" className="modal__img" />
                        </div>
                    </div>
                    <div className="modal__wallet">
                        <div className="modal__img-wrapper">
                           <img src={connect} alt="" className="modal__img" />
                           <div className="modal__img-txt">WalletConnect</div>
                        </div>
                        <div className="modal__icon-wrapper">
                            <img src={right} alt="" className="modal__img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Modal;