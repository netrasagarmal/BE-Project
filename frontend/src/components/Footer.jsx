export const Footer = () => {
   return (
      <footer className="bg-gray-300">
         <div className="container">
            <div className="footer__box">
               <a
                  href="/"
                  className="logo text-3xl py-2.5 max-w-max cursor-pointer"
               >
                  <i className="bx bxl-react"></i>Trip Planner Logo
               </a>

               <div className="row box__contains">
                  <div className="box__contact ">
                     <ul>
                        <li>
                           <div className="contact__item space-x-2.5">
                              <box-icon type="solid" name="map"></box-icon>
                              <p>PVG COET, Pune - 411052</p>
                           </div>
                        </li>
                        <li>
                           <div className="contact__item space-x-2.5">
                              <box-icon type="solid" name="phone" />
                              <p>+1-543-123-4567</p>
                           </div>
                        </li>
                        <li>
                           <div className="contact__item space-x-2.5">
                              <box-icon type="logo" name="gmail"></box-icon>
                              <p>example@pvgcoet.com</p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="box__link">
                     <ul>
                        <li>
                           <a href="#">About Us</a>
                        </li>
                        <li>
                           <a href="#">What We Do</a>
                        </li>
                        <li>
                           <a href="#">FAQ</a>
                        </li>
                     </ul>
                  </div>

                  <div className="box__link">
                     <ul>
                        <li>
                           <a href="#">Career</a>
                        </li>
                        <li>
                           <a href="#">Blog</a>
                        </li>
                        <li>
                           <a href="#">Contact Us</a>
                        </li>
                     </ul>
                  </div>

                  <div className="social">
                     <ul>
                        <li>
                           <a href="#">
                              <i className="bx bxl-facebook-circle text-4xl text-center"></i>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i className="bx bxl-twitter text-4xl text-center"></i>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i className="bx bxl-instagram-alt text-4xl text-center"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
