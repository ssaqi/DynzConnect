import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Side from '../../Components/Assests/slider.png'
import QR from '../../Components/Assests/Qrcode.jpg'
import icon from '../../Components/Assests/iconPartner.png'
import CARD from '../../Components/Assests/2.png'
import IMG from '../../Components/Assests/7.png'
import IMG1 from '../../Components/Assests/4.png'
import './Style.css'
function Home() {
  return (
    <>
      <Header />
      <div className='fullMain'>
        { /* First PART START HERE */}
        <div className='bgpic'>
          <div className='container MainCon' >
            <div className="row">
              <div className="col-sm-7 mb-3 mb-sm-0 main" >

                <div className="card-body">
                  <h3 className="card-title tile">
                    THE EASIEST WAY TO SHARE YOUR DEATAILS
                  </h3>

                  <h1 className="card-title tile1">
                    Connect Instantly
                  </h1>

                  <h1 className="card-title tile1">
                    with a Digital
                  </h1>

                  <h1 className="card-title tile2">
                    Business card
                  </h1>

                  <p className="card-text pra" >
                    A Connect allows you to instantly share
                    <p className='pra'>who you are, with anyone, where ever you go.</p>
                  </p>


                  <button type="button" className="btn btn-danger btnn" >Create your card</button>
                  <button type="button" className="btn btn-outline-secondary mx-4 btnn" style={{ color: "black" }}>For Teams</button>
                </div>

              </div>
              {/* <div className="col-sm-6 my-2">

              <div className="card-body">

                <img src={Side}
               
                 className='img'

                />
              </div>
            </div> */}
            </div>

          </div>



        </div>
        { /* First PART End HERE */}




        { /* SECOND PART START HERE */}

        <div className='bgpic1'>
          <div className='container main' >
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0 main1" >

                <div className="card-body">

                  <img src={QR}

                    className='img1'

                  />
                </div>
              </div>
              <div className="col-sm-6  ">

                <div className="card-body " >


                  <h3 className="card-title tile1">
                    The Professional
                  </h3>

                  <h1 className="card-title tile1">
                    Way To <span style={{ color: "#e68989" }}>Connect</span>
                  </h1>



                  <div className="row">
                    <div className="col-sm-6 my-5">

                      <div className="card-body crd ">
                        <button type="button" className="btn btn-outline-primary btnnicon"  >

                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16" style={{ color: "#e68989" }}>
                            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                          </svg>
                        </button>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to additional content.
                        </p>

                      </div>
                    </div>
                    <div className="col-sm-6 my-5">

                      <div className="card-body crd ">
                        <button type="button" className="btn btn-outline-primary btnnicon"  >

                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16" style={{ color: "#e68989" }}>
                            <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z" />
                          </svg>

                        </button>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to additional content.
                        </p>
                      </div>
                    </div>
                  </div>




                  <div className="row">
                    <div className="col-sm-6 my-5">

                      <div className="card-body crd ">
                        <button type="button" className="btn btn-outline-primary btnnicon"  >

                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16" style={{ color: "#e68989" }}>
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                          </svg>


                        </button>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to additional content.
                        </p>

                      </div>
                    </div>
                    <div className="col-sm-6 my-5">

                      <div className="card-body crd ">
                        <button type="button" className="btn btn-outline-primary btnnicon"  >

                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-menu-button-wide" viewBox="0 0 16 16" style={{ color: "#e68989" }} >
                            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
                            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                          </svg>


                        </button>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to additional content.
                        </p>
                      </div>
                    </div>
                  </div>




                  <button type="button" className="btn btn-dark btnn" >Learn more</button>
                </div>





              </div>
            </div>

          </div>



        </div>
        { /* Second PART End HERE */}

        { /* THIRD PART START HERE */}

        <div className='bgpic3'>

          <div className='container '>

            <div className="row row-cols-1 row-cols-md-2 g-6 mainImg">
              <div className="col mg">
                <div className="card">
                  <center>
                    <img src={icon} className="card-img-top iconImg" alt="..." />
                  </center>
                  <div className="card-body">
                    {/* <h5 className="card-title text-center">Card title</h5> */}
                    <p className="card-text text-center ttxt">
                      Easily Create Digital
                      <br />
                      Business Card
                    </p>
                    <center>
                      <button type="button" class="btn btn-outline-danger IcnBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style={{ color: "black" }}>
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                      </button>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col mg">
                <div className="card">
                  <center>
                    <img src={icon} className="card-img-top iconImg" alt="..." />

                  </center>
                  <div className="card-body">
                    {/* <h5 className="card-title text-center">Card title</h5> */}
                    <p className="card-text text-center ttxt">
                      Easily Create Digital
                      <br />
                      Business Card
                    </p>
                    <center>
                      <button type="button" class="btn btn-outline-danger IcnBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style={{ color: "rgb(215, 90, 140)" }}>
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                      </button>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col mg">
                <div className="card">
                  <center>
                    <img src={icon} className="card-img-top iconImg" alt="..." />
                  </center>
                  <div className="card-body">
                    {/* <h5 className="card-title text-center">Card title</h5> */}
                    <p className="card-text text-center ttxt">
                      Easily Create Digital
                      <br />
                      Business Card
                    </p>
                    <center>
                      <button type="button" class="btn btn-outline-danger IcnBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style={{ color: "black" }}>
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                      </button>
                    </center>

                  </div>
                </div>
              </div>
              <div className="col mg">
                <div className="card">
                  <center>
                    <img src={icon} className="card-img-top iconImg" alt="..." />
                  </center>
                  <div className="card-body">
                    {/* <h5 className="card-title text-center">Card title</h5> */}
                    <p className="card-text text-center ttxt">
                      Easily Create Digital
                      <br />
                      Business Card
                    </p>
                    <center>
                      <button type="button" class="btn btn-outline-danger IcnBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" style={{ color: "black" }}>
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>

        { /* THIRD PART End HERE */}


        {/* Fourth Part Start HERE */}


        <div className='bgpic4'>
          <div className='container MainCon5' >
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0 main5" >

                <div className="card-body">
                  {/* <h3 className="card-title tile">
                  THE EASIEST WAY TO SHARE YOUR DEATAILS
                </h3> */}

                  <h1 className="card-title tile33">
                    Generate
                  </h1>

                  {/* <h1 className="card-title tile1">
                  with a Digital
                </h1> */}

                  <h1 className="card-title tile3">
                    Email Signature
                  </h1>

                  <p className="card-text pra" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  </p>

                  <p className="card-text pra" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
                  </p>
                 
                  <button type="button" className="btn btn-dark mx-1 btnn" >Learn more</button>
                </div>

              </div>
              <div className="col-sm-4  main2">

                <div className="card-body">

                  <img src={CARD}

                    className='img3'

                  />
                </div>
              </div>
            </div>

          </div>



        </div>


        {/* Fourth Part End  HERE */}


        {/* Five Part start  HERE */}

        <div className='bgpic5'>
        </div>

        {/* Five Part End  HERE */}



        {/* six Part start  HERE */}




        <div className='bgpic6'>


          <div className='container MainCon3' >
            <div className="row">
              <div className="col-sm-8 mb-3 mb-sm-0 main3" >

                <div className="card-body">
                  {/* <h3 className="card-title tile">
                  THE EASIEST WAY TO SHARE YOUR DEATAILS
                </h3> */}
                  <center>
                    <h1 className="card-title tile1">
                      How it works
                    </h1>
                  </center>
                  <br />
                  <center>
                    <p className="card-text pra1"  >
                      Exactly same as paper business card ordering.
                      Instead of printing, installs directly on Smartphone with our App.
                    </p>
                  </center>
                </div>
              </div>
            </div>

            <div className="col-sm-12 main4" >
              <div className='container-fluid'>
                <div className="card-body samez">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card cd">
                        <div className="card-body">
                          <h5 className="card-title txt1">1</h5>
                          <h1 className="card-title txt2">Order</h1>

                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card cd">
                        <div className="card-body">
                          <h5 className="card-title txt1">2</h5>
                          <h1 className="card-title txt2">Design</h1>

                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card cd">
                        <div className="card-body">
                          <h1 className="card-title txt1">3</h1>
                          <h1 className="card-title txt2">Review</h1>

                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card cd">
                        <div className="card-body">
                          <h5 className="card-title txt1">4</h5>
                          <h1 className="card-title txt2">Ship</h1>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <button type="button" className="btn btn-dark btn-lg btnn1">Order your card</button>

          </div>


        </div>




        {/* six Part End  HERE */}



        {/* Seven Part Start  HERE */}

        <div className='bgpic7'>
          <div className='container-fluid'>
            <br /> <br /> <br /> <br />
            <div className="row">
              <div className="col-sm-4">
                <div className="card cnd" style={{ border: "none" }}>
                  <div className="card-body" >
                    <img src={IMG}
                      className='img4'

                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <center>
                  <div className="card-body">
                    <h1 className="card-title txt3">
                      Create Your Digital Card
                      <br />
                      Business Card Today
                    </h1>
                    <button type="button" className="btn btn-dark btnstrt">Get Started</button>
                    <div className='bnDiv'>
                    <button type="button" className="btn btn-dark btnn2"></button>
                    <button type="button" className="btn btn-dark btnn4"></button>
                  </div>
                  </div>
                </center>
              </div>
            </div>

          </div>

        </div>

        {/* seven Part End  HERE */}

        {/* Eight Part End  HERE */}


        <div className='bgpic8'>

          <div className='container'>
            <center>
              <h1 className="card-title tile6">
                FAQs
              </h1>
            </center>




            <div className="accordion w-100" id="basicAccordion" style={{}} >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    style={{ backgroundColor: "#f4f4f4", height: "90px" }}
                  >
                    How to create a free digital business card ?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance,
                    as well as the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default variables. It's
                    also worth noting that just about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ backgroundColor: "#f4f4f4", marginTop: 20, height: "90px" }}
                  >
                    How to update my details ?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-mdb-parent="#basicAccordion"
                  style={{ backgroundColor: "#f4f4f4", marginTop: 20 }}

                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that
                    we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ backgroundColor: "#f4f4f4", marginTop: 20, height: "90px" }}
                  >
                    Can i create more than 1 digital business card
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that
                    we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eight Part End  HERE */}

        <div className='bgpic9'>
          <div className='container-fluid'>
            <h1 className="card-title text22" >

              Contact Us</h1>
            <div className="row">

              <div className="col-sm-6">
                <div className="card cnd1" style={{ border: "none", borderRadius: "none" }} >
                  <div className="card-body"  >

                    <img
                      src={IMG1}
                      className='img5'

                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 crdd">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body ">

                    <div className='contact'>
                      <input type='text' placeholder='*Your Name' className='inp' />
                    </div>
                    <br />
                    <div className='contact'>
                      <input type='text' placeholder='*Your email' className='inp' />
                    </div>

                    <br />
                    <div className='contact'>
                      <input type='text' placeholder='*Your Message' className='inp1' />
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <Footer />
      </div>

    </>
  )
}

export default Home