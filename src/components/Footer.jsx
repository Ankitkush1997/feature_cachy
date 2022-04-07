import moment from "moment";
import React from "react";
import { Container, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as YourSvg } from './bottom_layer_small.svg';
import './footer.css';


/**
 * @author
 * @function Footer
 **/
// Custom Footer Component 
const Footer = (props) => {
  const { extraItems } = props;
  return (
    <>
      <footer className="public_footer">
        
        <Container className="container">
        
          <Nav className="footer"  style={{paddingTop:"16px"}}>
            {/* <Nav.Item>
              <Link className="nav-link" to="/"> */}
                Home
              {/* </Link>
            </Nav.Item> */}
            <Nav.Item >
              {/* <Link className="nav-link" to="/about"> */}
                About
              {/* </Link> */}
            </Nav.Item>
            <Nav.Item >
              {/* <Link className="nav-link" to="/feature"> */}
                Features
              {/* </Link> */}
            </Nav.Item>
            <Nav.Item >
              {/* <Link className="nav-link" to="/jobs"> */}
                Jobs
              {/* </Link> */}
            </Nav.Item>
            {extraItems && (
              <>
                <Nav.Item >
                  {/* <Link className="nav-link" to="/help"> */}
                    Help
                  {/* </Link> */}
                </Nav.Item>
                <Nav.Item>
                  {/* <Link className="nav-link" to="/privacy"> */}
                    Privacy
                  {/* </Link> */}
                </Nav.Item>
                <Nav.Item>
                  {/* <Link className="nav-link" to="/terms"> */}
                    Terms
                  {/* </Link> */}
                </Nav.Item>
                
              </>
            )}

          <YourSvg className="footer_svg"/>
          </Nav>
          <Nav.Item  style={{paddingTop:"16px"}}>
              <Nav.Link>
                <Form.Select size="sm">
                  <option>English (US)</option>
                </Form.Select>
              </Nav.Link>
            </Nav.Item>

         <div className="bottom_footer">
            <p>&copy; {moment(new Date()).format("YYYY")} Cachy</p>
          </div>
      
        </Container>
        
      </footer>
      
      
    </>
  );
};

export default Footer
