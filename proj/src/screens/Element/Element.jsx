import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Element = () => {
  return (
    <motion.div className="element"
    >
      <div className="div">
        <div className="overlap">
          <img
            className="backgroundhero"
            alt="Backgroundhero"
            src="/img/backgroundhero-gradienttop.svg"
          />
          <p className="portfolio-of-UI-desi">
            With a passion for solving complex problems and a natural ability to
            understand and anticipate user needs, I have established myself as a
            skilled product designer. My strong communication skills allow me to
            clearly articulate my design vision and collaborate effectively with
            cross-functional teams.
          </p>
          <p className="p">
            <span className="text-wrapper">
              I’m looking for new opportunities
              <br />
              Currently I’m working at{" "}
            </span>
            <span className="span">Authomize</span>
          </p>
          <a
            href="https://www.linkedin.com/in/orel-shmueli/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="logo-linkedin"
              alt="Logo linkedin"
              src="/img/logo-linkedin.svg"
            />
          </a>
          <div className="text-wrapper-2">cv</div>
          <div className="agile-user-interface">Hi, I’m Orel</div>
          <div className="home">
            <div className="hola-andrew-listo-p">Orel Shmueli</div>
            <div className="desaf-os">Israel</div>
            <div className="overlap-group">
              <div className="photo-wrapper" />
              <div className="component-points-m">
                <div className="text-wrapper-3">UX/UI</div>
              </div>
            </div>
          </div>
          <div className="frame">
            <img className="group" alt="Group" src="/img/group-4268.png" />
            <div className="text-wrapper-4">Flow charts</div>
          </div>
          <div className="frame-2">
            <img className="img" alt="Group" src="/img/group-4267.png" />
            <div className="text-wrapper-4">UI Design</div>
          </div>
          <div className="frame-3">
            <img className="group-2" alt="Group" src="/img/group-2214.png" />
            <div className="text-wrapper-4">User Research</div>
          </div>
          <div className="frame-4">
            <img className="group-3" alt="Group" src="/img/group-7.png" />
            <div className="text-wrapper-4"> Design system</div>
          </div>
          <div className="group-4">
            <div className="logo">Orel Shmueli</div>
            <div className="pill">
              <div className="state">Product Designer</div>
            </div>
          </div>
          <Link to="/querybuilder" className="thumbnail">
            <div className="figma">
              <img
                className="figma-logo"
                alt="Figma logo"
                src="/img/figma-logo-e4e21d3aea-seeklogo-1.png"
              />
            </div>
            <div className="mobile-native">Query Builder</div>
            <div className="mobile-native-2">Product Design</div>
            <div className="mobile-native-3">Authomize</div>
            <div className="overlap-2">
              <img
                className="mask-group"
                alt="Mask group"
                src="/img/mask-group-3.png"
              />
              <img
                className="mask-group-2"
                alt="Mask group"
                src="/img/mask-group-2.png"
              />
            </div>
          </Link>
          <Link to="/designsystem" className="thumbnail-2">
            <div className="figma">
              <img
                className="figma-logo"
                alt="Figma logo"
                src="/img/figma-logo-e4e21d3aea-seeklogo-1.png"
              />
            </div>
            <div className="mobile-native">Design System</div>
            <div className="mobile-native-2">Product Design</div>
            <div className="mobile-native-3">Authomize</div>
            <div className="overlap-3">
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
          </Link>
          <Link to="/waystoimprove" className="overlap-wrapper">
            <div className="overlap-4">
              <img className="figma-2" alt="Figma" src="/img/figma.svg" />
              <div className="overlap-5">
                <div className="mobile-native-4">Writing</div>
                <div className="aside-wrapper">
                  <div className="aside">
                    <div className="overlap-6">
                      <div className="container">
                        <div className="overlap-7">
                          <div className="rectangle" />
                          <div className="rectangle-2" />
                          <div className="rectangle-3" />
                        </div>
                        <div className="rectangle-4" />
                        <div className="overlap-8">
                          <div className="overlap-group-2">
                            <div className="rectangle-5" />
                            <div className="rectangle-6" />
                          </div>
                          <div className="rectangle-7" />
                        </div>
                        <div className="rectangle-8" />
                      </div>
                      <div className="container-2">
                        <div className="header">
                          <div className="div-wrapper">
                            <div className="text" />
                          </div>
                        </div>
                        <div className="divider" />
                        <div className="div-2">
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                        </div>
                        <div className="divider" />
                        <div className="div-2">
                          <div className="row">
                            <div className="text-2" />
                          </div>
                        </div>
                        <div className="divider" />
                        <div className="div-2">
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                          <div className="row">
                            <div className="text-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mobile-native-5">
                  3 easy ways to improve your designer-developer
                  <br />
                  collaboration
                </p>
              </div>
              <div className="mobile-native-6">Article</div>
            </div>
          </Link>
        </div>
        <footer className="footer">
          <div className="group-5">
            <div className="galarchenko">
              Orel Shmueli
              <br />
              Product Designer
              <br />
              Orelshmueli20@gmail.com
            </div>
            <div className="group-6">
              <a
                className="logo-linkedin-2"
                href="https://www.linkedin.com/in/orel-shmueli/"
                rel="noopener noreferrer"
                target="_blank"
              />
              <div className="text-wrapper-5">cv</div>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};
