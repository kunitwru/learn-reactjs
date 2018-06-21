import React, { Component } from 'react'
import './Contact.css';

import { Redirect} from 'react-router-dom'

export default class Contact extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isRedirect : false
    }
  }

submitForm = (event) => {
  event.preventDefault();
  event.target.reset();
  this.setState ({
    isRedirect : true
  });
}

  render() {
    if(this.state.isRedirect) {
       return <Redirect to="/" />;
    }

    return (
          <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <h2 className="page-title">
                  Contact
              </h2>
              <div className="row">
              <div className="col-md-6">
                <div className="google-map">
                  
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="icon-contacts pb-3">
                    <h5 className="align-left mbr-fonts-style display-7">
                      Ready for offers and cooperation
                    </h5>
                    <p className="mbr-text align-left mbr-fonts-style display-7">
                      Phone: +1 (0) 000 0000 001 <br />
                      Email: youremail@mail.com
                    </p>
                  </div>
                </div>
                <div data-form-type="formoid">
                  <div data-form-alert hidden>
                    Thanks for filling out the form!
                  </div>
                  <form className="block mbr-form" action="/" method="post" data-form-title="Mobirise Form">
                    <div className="row">
                      <div className="col-md-6 multi-horizontal" data-for="name">
                        <input type="text" className="form-control input" name="name" data-form-field="Name" placeholder="Your Name" required id="name-form4-2y" />
                      </div>
                      <div className="col-md-6 multi-horizontal" data-for="phone">
                        <input type="text" className="form-control input" name="phone" data-form-field="Phone" placeholder="Phone" required id="phone-form4-2y" />
                      </div>
                      <div className="col-md-12" data-for="email">
                        <input type="text" className="form-control input" name="email" data-form-field="Email" placeholder="Email" required id="email-form4-2y" />
                      </div>
                      <div className="col-md-12" data-for="message">
                        <textarea className="form-control input" name="message" rows={3} data-form-field="Message" placeholder="Message" style={{resize: 'none'}} id="message-form4-2y" defaultValue={""} />
                      </div>
                      <div className="input-group-btn col-md-12" style={{marginTop: 10}}>
                        <button type="submit" className="btn btn-primary btn-form display-4">SEND MESSAGE</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </div>
          </div>
        
          </div>
    )
  }
}
