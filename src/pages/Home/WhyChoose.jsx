import React from 'react'
import Button from '../../components/Button';

function WhyChoose() {
        return (
          <section className="section-container">
            <div>
              <div>
                <h1 className="text-4xl font-bold">
                  Why <br /> Choosing Us
                </h1>
              </div>
              <div>
                <h3>Luxury facilities</h3>
                <p>
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </p>
                <Button text='More Info'/>
              </div>
            </div>
          </section>
        );
}

export default WhyChoose