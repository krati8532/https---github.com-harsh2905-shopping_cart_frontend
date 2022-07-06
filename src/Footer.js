
import './App.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="w3_footer_grids">
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Contact</h3>
                        <p>For further queries, You may contact to given below: </p>
                        <ul className="address">
                            <li color='red'><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>A-12, Narayan Complex,  <span >4th block, Delhi</span></li>
                            <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">ecommerce@ecomm.com</a></li>
                            <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+91-8006002255</li>
                        </ul>
                    </div>
                    <div className="agileits_social_button">
                        <ul>
                            <li><a href="#" className="facebook"> </a></li>
                            <li><a href="#" className="twitter"> </a></li>
                            <li><a href="#" className="google"> </a></li>
                            <li><a href="#" className="pinterest"> </a></li>
                        </ul>
                    </div>

                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="footer-copy1">
                    <div className="footer-copy-pos">
                        <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
                    </div>
                </div>

                <div className="container">
                    <p> <b>E-Commerce designed by  </b><a href="http://w3layouts.com/"><b>&copy;INTADM22JF020</b></a></p>
                </div> 
            </div>
        </div>
    )
}
export default Footer;
