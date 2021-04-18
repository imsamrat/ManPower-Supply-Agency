import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <footer style={{ background: '#1974D2', padding: '4rem' }} id="contact">
      <div className='row footer'>
        <div className='col-md-6'>
          <div className='footerLeft'>
            <h2>Let us handle your project, professionally.</h2>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
        <div className='col-md-6 footerRight'>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Enter Email Address' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Control type='text' placeholder='Your Name/Company Name' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Control as='textarea' placeholder='Your message' rows='6' />
            </Form.Group>
            <Link
              to=''
              className='submitContact'
              variant='primary'
              type='submit'>
              Send
            </Link>
          </Form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;