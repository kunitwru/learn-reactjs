import React, { Component } from 'react'
import './Home.css'
import Jumbotron from '../Jumbotron/Jumbotron';
import Product from '../Product/Product';

export default class Home extends Component {

  render() {
    return (
      <div>
       <Jumbotron />
       <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <Product name = "Hạ Long 2018 " summary = "This is a wider card with supporting text" image = "https://travel.com.vn/Images/destination/tf_160709_Nang-ha-tren-Vinh-Ha-Long_4a.jpg" />
            <Product name = "Sapa 2017 " summary = "This is a wider card with supporting text" image = "https://travel.com.vn/Images/destination/tf_160905050651_358438.jpg" />
            <Product name = "Mộc châu 2009" summary = "This is a wider card with supporting text" image = "http://dulichvn.org.vn/nhaptin/uploads/images/trainghiethienduongmocchau.jpg" />
            <Product name = "Sơn La 2017" summary = "This is a wider card with supporting text" image = "http://www.dangcongsan.vn/DATA/0/2017/07/s%C6%A1n_la-14_52_05_157.jpeg" />
            <Product name = "Hòa Bình 2016 " summary = "This is a wider card with supporting text" image = "http://taybacsensetravel.com/view/at_tinh-hoa-binh_e5da5ea93e45824e77173475c8edac3e.jpg" />
            <Product name = "hà Giang 2000 " summary = "This is a wider card with supporting text" image = "http://hagiangsensetravel.com/view/at_kham-pha-ve-dep-thien-nhien-va-con-nguoi-ha-giang_9e6a0a2b70e31607d33da123e0c836c4.jpg" />
          </div>
        </div>
       </div>
      </div>
    )
  }
}
