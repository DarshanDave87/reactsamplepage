import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <section className="form-wrap container-fluid mt-4 pt-4">
        <div className='shadow form mx-auto card col-sm-10 col-md-10 col-lg-8 col-xl-6 text-center mb-4 rounded-lg'>
          <h2 className="pt-4">Have any project in mind?</h2>
          <div className="why-cnt-sub mb-4">Get in touch and let us know how we can help</div>
          <form>
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name Here" required />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Skype ID / Phone" required />
              </div>
            </div>
            <div className="form-row mt-4">
              <div className="col">
                <input type="email" className="form-control" placeholder="Email ID" required />
              </div>
              <div class="col">
                <input type="text" className="form-control" placeholder="City / County" required />
              </div>
            </div>
            <div className="form-row mt-4 mb-4">
              <div className="col">
                <textarea className="form-control" placeholder="Your Message" id="exampleFormControlTextarea1" rows="3"  ></textarea>
              </div>
            </div>
            <button type="submit" className="form-btn rounded-pill pr-4 pl-4 mt-4 btn btn-primary mb-2">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Form
