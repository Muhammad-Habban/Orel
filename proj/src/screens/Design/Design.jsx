import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Design = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div className="design">
      <div className="design-system">
        <div className="overlap">
          <img
            className="backgroundhero"
            alt="Backgroundhero"
            src="/img/backgroundhero-gradienttop.svg"
          />
          <div className="mobile-native">Product Designer</div>
          <div className="frame">
            <div className="div">
              <div className="simulador-de-cr-dito">Design System</div>
              <p className="propuesta-de-concept">
                A design system is a set of guidelines and standards that define
                the visual and functional elements of the product. Having a
                design system is important because it ensures consistency and
                coherence across all aspects of the product.
              </p>
            </div>
            <div className="group">
              <div className="propuesta-de-concept-wrapper">
                <div className="text-wrapper">Worked on this project</div>
              </div>
              <div className="frame-2">
                <div className="frame-wrapper">
                  <div className="div-wrapper">
                    <div className="text">Product designer</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="text">Frontend developer</div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <img className="btn-sign" alt="Btn sign" src="/img/btn-sign.png" />
          </Link>
          <div className="group-2">
            <p className="p">
              One of my most notable projects as a product designer was building
              a comprehensive design system from scratch for Authomize, a
              startup company. I utilized Figma&#39;s advanced features to
              create a user-friendly and easily navigable system, aimed at
              promoting consistency in design and facilitating communication
              with the front-end development team. This ongoing project has been
              in development for approximately a year, and I continue to make
              improvements and add new elements to it all the time.
            </p>
            <div className="what-people-are-sayi">Overview</div>
            <div className="overlap-group">
              <video autoPlay muted loop className="video_mov">
                <source src="/videos/Design system.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <img
            className="screen-shot"
            alt="Screen shot"
            src="/img/screen-shot-2023-01-23-at-12-24-1.png"
          />
        </div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="group-3">
              <div className="frame-5">
                <p className="what-people-are-sayi-2">
                  <span className="span">t</span>
                  <span className="span">
                    he platform: <br />
                  </span>
                  <span className="text-wrapper-2">a</span>
                  <span className="text-wrapper-2"> few pages designs </span>
                </p>
                <div className="frame-6">
                  <div className="frame-7">
                    <Carousel
                      className="carousel"
                      autoPlay={true}
                      infiniteLoop={true}
                      showThumbs={false}
                      showStatus={false}
                      showIndicators={true}
                      showArrows={false}
                      renderIndicator={(onClickHandler, isSelected, index, label) => {
                        
                        return (
                          <span
                            style={{
                              padding:"0px 9px",
                              backgroundColor:isSelected ? "#9251f7" : "#c8acf3",
                              margin:"0px 10px",
                              lineHeight:"0px",
                              borderRadius:"50%",
                              position:"relative",
                              bottom:"20px",
                              zIndex:"10",
                            }}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                          >
                            
                          </span>
                        );
                      }}
                    >
                      <img
                        className="identity-overview"
                        alt="Identity overview"
                        src="/img/identity - overview.png"
                      />
                      <img
                        className="identity-overview"
                        alt="Identity overview"
                        src="/img/identity - overview - hover.png"
                      />
                      <img
                        className="identity-overview"
                        alt="Identity overview"
                        src="/img/Dashboard1.png"
                      />
                      <img
                        className="identity-overview"
                        alt="Identity overview"
                        src="/img/Investigation Graph.png"
                      />
                    </Carousel>
                  </div>
                  <div className="group-5">
                    <p className="what-people-are-sayi-3">
                      <span className="span">
                        Building a User-Friendly Design System:{" "}
                      </span>
                      <span className="text-wrapper-2">
                        My Research Journey
                      </span>
                    </p>
                    <p className="propuesta-de-concept-2">
                      As a product designer, I was keen on building a
                      comprehensive design system that would help streamline the
                      design process and promote consistency across the
                      company&#39;s products. In order to learn best practices
                      for building a design system, I did my research by reading
                      multiple articles and watching Figma&#39;s official
                      tutorials. This research helped me to understand the
                      importance of using Figma&#39;s advanced features in
                      creating a user-friendly and easily navigable system. The
                      tutorials and articles provided me with an in-depth
                      understanding of how to use Figma&#39;s features to create
                      a design system that is both functional and visually
                      appealing. This research helped me to develop a clear
                      understanding of what features I needed to include in my
                      design system in order to make it easy to use and navigate
                      for the team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img className="img" alt="Frame" src="/img/frame-1-9.png" />
          </div>
          <div className="group-wrapper">
            <div className="group-6">
              <div className="frame-9">
                <div className="group-7">
                  <div className="frame-10">
                    <p className="what-people-are-sayi-4">
                      <span className="span">
                        Deciding which design elements we need: <br />
                      </span>
                      <span className="text-wrapper-2">Components Library</span>
                    </p>
                    <p className="propuesta-de-concept-3">
                      The choice of components for the design system was a
                      deliberate process, taking into consideration the
                      complexity of Authomize&#39;s product. I began by
                      identifying the key design elements that were necessary to
                      effectively present the product&#39;s data and
                      functionality. The selection of components was also done
                      by taking into account the user experience, keeping in
                      mind usability and accessibility, making sure that the
                      design system is inclusive for all users. Here is a list
                      of the pages we have in the design system today:
                    </p>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="frame-12">
                    <div className="frame-13">
                      <div className="text-2">Colors</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Typography</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Alerts</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Buttons</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Charts</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Error \ Empty Pages</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Icons</div>
                    </div>
                  </div>
                  <div className="frame-12">
                    <div className="frame-13">
                      <div className="text-2">Text Inputs</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Drop-downs</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Filters</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Labels</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Menus</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Tables</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Tabs</div>
                    </div>
                  </div>
                  <div className="frame-12">
                    <div className="frame-13">
                      <div className="text-2">Spaces</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Logos</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Grids</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">Modals</div>
                    </div>
                    <div className="frame-13">
                      <div className="text-2">
                        Identities \ Assets components
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-14">
                <div className="group-8">
                  <div className="frame-5">
                    <p className="what-people-are-sayi-4">
                      <span className="span">
                        Here are some of them in detail:
                        <br />
                      </span>
                      <span className="text-wrapper-2">Buttons</span>
                    </p>
                    <p className="propuesta-de-concept-4">
                      The button component of the design system is a standout
                      feature, offering four levels of hierarchy to meet a
                      variety of design needs. The different states and
                      behaviors of the buttons are clearly displayed, making it
                      easy for users to understand and apply the appropriate
                      button for their design. One unique aspect of this design
                      system is the ability to change the state of a button
                      within the design itself, allowing for instant updates and
                      improved efficiency. Additionally, the system includes
                      functionalities for links and icons, providing a
                      comprehensive solution for all button-related design
                      needs. Overall, this design system&#39;s button component
                      is user-friendly, versatile, and streamlined.
                    </p>
                  </div>
                </div>
                <div className="group-9">
                  <img
                    className="mask-group"
                    alt="Mask group"
                    src="/img/mask-group-3.png"
                  />
                  <img
                    className="screen-shot-2"
                    alt="Screen shot"
                    src="/img/screen-shot-2023-01-23-at-12-29.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="group-10">
            <div className="frame-15">
              <div className="group-11">
                <p className="propuesta-de-concept-5">
                  The tables page in the design system is an essential
                  component, as Authomize&#39;s product is a complex system that
                  heavily relies on tables to present data. I approached this
                  design by using atoms for different parameters such as date,
                  status, and name, and then built smart columns and tables to
                  make it easy to adjust the table to specific design needs. One
                  of the key features of this design is the ability to easily
                  adjust the columns size, making it easy to create tables that
                  are both functional and visually appealing. The component is
                  designed to be flexible and adaptable, ensuring that it can
                  meet the various design needs of the different tables within
                  the Authomize product. This tables page is user-friendly and
                  provides a comprehensive solution for all table-related design
                  needs.
                </p>
                <div className="what-people-are-sayi">Tables</div>
              </div>
              <div className="group-12">
                <img
                  className="mask-group-2"
                  alt="Mask group"
                  src="/img/mask-group-2.png"
                />
                <img
                  className="screen-shot-3"
                  alt="Screen shot"
                  src="/img/screen-shot-2023-01-23-at-12-37.png"
                />
              </div>
            </div>
          </div>
          <div className="group-13">
            <div className="frame-16">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="mask-group-3"
                    alt="Mask group"
                    src="/img/mask-group-1.png"
                  />
                  <img
                    className="mask-group-4"
                    alt="Mask group"
                    src="/img/mask-group.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-14">
              <p className="propuesta-de-concept-6">
                The alerts page in the design system is an important component,
                as it provides a clear and consistent way to communicate
                important information to users. The components are divided into
                four different types of alerts, each with its own color scheme
                to help users quickly identify the type of alert they are
                seeing. This color division helps users to understand the level
                of importance and the action needed for each type of alert. The
                design of the alerts is also clean and minimalistic, making it
                easy to read and understand the message. Additionally, the
                alerts are designed to be easily recognizable, so users can
                quickly understand the message and take the appropriate action.
              </p>
              <div className="what-people-are-sayi">Alerts</div>
            </div>
          </div>
          <div className="group-15">
            <div className="frame-15">
              <div className="group-16">
                <p className="propuesta-de-concept-6">
                  The inputs section of the design system is a crucial
                  component, as it provides a consistent and user-friendly way
                  for users to input data. The section is divided into two
                  pages: one for drop-downs and one for text inputs. This
                  separation allows for easy navigation and makes it clear for
                  the developers (and future designers), what type of input is
                  needed. The page includes all the different sizes and states
                  for each type of input, making it easy for the designer to
                  choose the appropriate input for their design needs. The
                  dropdown page includes all the different states like selected,
                  hover, disabled and so on. The text input page includes all
                  the different sizes and states, like error, disabled, and so
                  on. This comprehensive approach ensures that all input needs
                  are met and that the design is consistent and user-friendly. I
                  also added guidelines for how to place inputs in a form,
                  indicates the spaces and titles sizes needed.
                </p>
                <div className="what-people-are-sayi">Inputs</div>
              </div>
              <div className="group-17">
                <img
                  className="screen-shot-4"
                  alt="Screen shot"
                  src="/img/screen-shot-2023-01-23-at-12-48-1.png"
                />
                <img
                  className="screen-shot-5"
                  alt="Screen shot"
                  src="/img/screen-shot-2023-01-23-at-12-48.png"
                />
              </div>
            </div>
          </div>
          <div className="group-18">
            <div className="frame-15">
              <div className="group-18">
                <div className="frame-5">
                  <p className="what-people-are-sayi-4">
                    <span className="span">
                      Building a Comprehensive Design System:
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      The Challenges and Rewards
                    </span>
                  </p>
                  <p className="propuesta-de-concept-7">
                    In conclusion, building a comprehensive design system for
                    Authomize was a challenging but rewarding project. By
                    utilizing Figma&#39;s advanced features, I was able to
                    create a user-friendly and easily navigable system that
                    promotes consistency in design and facilitates communication
                    with the front-end team. The design system includes
                    components for buttons, tables, alerts and inputs, each with
                    their different states and behaviors. Additionally, I also
                    incorporated best practices such as using a modular
                    approach, testing with real users, prioritizing
                    accessibility, and incorporating version control to ensure
                    the design system is efficient, user-friendly and adaptable
                    to the changing requirements of the product. Overall, the
                    design system is a valuable asset to the company,
                    streamlining the design process and improving the overall
                    user experience of Authomize&#39;s product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="overlap-2">
            <div className="group-19">
              <div className="galarchenko">
                Orel Shmueli
                <br />
                Product Designer
                <br />
                Orelshmueli20@gmail.com
              </div>
              <div className="group-20">
                <a
                  className="logo-linkedin"
                  href="https://www.linkedin.com/in/orel-shmueli/"
                  rel="noopener noreferrer"
                  target="_blank"
                />
                <div className="text-wrapper-3">cv</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};
