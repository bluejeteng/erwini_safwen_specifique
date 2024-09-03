import React, { useState } from "react";
import "./basic.css";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Basic() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
      <MDBCollapse
        show={showShow}
        tag="nav"
        className="d-lg-block bg-white sidebar"
      >
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            {/* <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag={Link}
                to="/acceuil"
                action
                className="border-0 border-bottom rounded rounded"
              >
                <MDBIcon fas icon="tachometer-alt me-3" />
                Acceuil
              </MDBListGroupItem>
            </MDBRipple> */}

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="/acceuil"
                action
                className="border-0 border-bottom rounded"
                active
                aria-current="true"
              >
                <MDBIcon fas icon="home me-3" />
                Acceuil
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="/irrigation"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="tint me-3" />
                Irrigation
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="/fertigation"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="seedling me-3" />
                fertigation
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="group"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="plug me-3" />
                Grp.Electrogène
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="cog me-3" />
                Paramètre
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="/profile"
                action
                className="border-0 border-bottom rounded"
              >
                <MDBIcon fas icon="user-circle me-3" />
                Profile
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleShow}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#">
              <img src="./icon.png" height="10" width="10" alt="logo" />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              {/* <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput
                  label='Search (ctrl + "/" to focus)'
                  id="form1"
                  type="text"
                />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem> */}
            </MDBCollapse>
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color="danger" notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  {/* <MDBDropdownItem tag="a" href="/profile">
                    Some news
                  </MDBDropdownItem> */}
                  {/*  <MDBDropdownItem tag="a" href="#">
                    Another news
                  </MDBDropdownItem>
                  <MDBDropdownItem tag="a" href="/profile">
                    Something else here
                  </MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <MDBIcon fas icon="fill-drip" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="/group">
                <MDBIcon fab icon="github" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <a href="/profile" className="nav-link hidden-arrow">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </a>

                <MDBDropdownMenu>
                  <MDBDropdownItem tag="a" href="/profile">
                    My profile
                  </MDBDropdownItem>
                  <MDBDropdownItem tag="a" href="#">
                    Settings
                  </MDBDropdownItem>
                  <MDBDropdownItem tag="a" href="/profile">
                    Logout
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
