import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import setting5 from '../../assets/setting-5.png';
import Card from '../../components/card';
import {dashImage} from '../../utils/dashcard'
function PlaceToStay({handleModal,handlepage}) {
    return (  
        <div className="places">
            <Header handlepage={handlepage} handleModal={handleModal}/>
            <div className="places__wrapper">
                <div className="places__filter-wrapper">
                    <div className="places__filter">
                        Resturant
                    </div>
                    <div className="places__filter">
                        Cottage
                    </div>
                    <div className="places__filter">
                        Castle
                    </div>
                    <div className="places__filter">
                        fantasy city
                    </div>
                    <div className="places__filter">
                        beach
                    </div>
                    <div className="places__filter">
                        Cabins
                    </div>
                    <div className="places__filter">
                        off-grid
                    </div>
                    <div className="places__filter">
                        Farm
                    </div>
                    <div className="location">
                        <div className="location__txt">
                            location
                        </div>
                        <div className="location__icon-wrapper">
                            <img src={setting5} alt="" className="location__icon" />
                        </div>
                    </div>
                </div>
                <div className="places__cards-wrapper">
                    {
                        dashImage.map((a,b)=>{
                            return <Card key={b} image={a}/>
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PlaceToStay;