import React from 'react';
import img from '../../../images/Beental-Jaipur-Banner_1.jpg'

const Feature = () => {
    return (
        <div>
            <section>
            <div>
    <div className="mt-5 p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={img} className="img-thumbnail" alt="..."/>
        </div>
       
        <div className="col-md-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What are the most important 
                things I should know about 
                our hospital?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Within this short period of time MediClinic Hospital is proud to have set the standard of health care as well as patient care in Bangladesh. We do not intend to set on this but will continuously endeavour to serve our community in a better way. So if you are looking for the best possible treatment available with the best doctors, make your way to MediClinic Hospital and be prepared to be swept away with care and respect. After all the hospital believes that “taking time to protect your health, now can make the difference in how good you feel tomorrow".
                </div>
              </div>
            </div>
            <br/>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Caring for the health of our staff and developing!
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Caring for the health of our staff and developing a culture of trust, and training for personal and professional growth
                </div>
              </div>
            </div>
            <br/>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Providing clear pathways by ensuring collaboration?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Providing clear pathways by ensuring collaboration, consultation, effective communication with health service providers.
                </div>
              </div>
            </div>
            <br/>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What rules should we follow 
                    about patient?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Providing an environment that promises personal development, learning and research.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
        </div>
    );
};

export default Feature;