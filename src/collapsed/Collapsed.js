/* import React, { useState } from "react";
import "./collapsed.css";
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
  MDBDropdownLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Collapsed() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isCollapse1Open, setIsCollapse1Open] = useState(true);
  const [isCollapse2Open, setIsCollapse2Open] = useState(false);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const toggleCollapse1 = () => setIsCollapse1Open(!isCollapse1Open);
  const toggleCollapse2 = () => setIsCollapse2Open(!isCollapse2Open);

  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
      <MDBCollapse
        show={isSidebarVisible}
        tag="nav"
        className="d-lg-block bg-white sidebar"
      >
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
                onClick={toggleCollapse1}
              >
                <MDBIcon fas icon="tachometer-alt me-3" />
                Expanded menu
              </MDBListGroupItem>
            </MDBRipple>

            <MDBCollapse show={isCollapse1Open}>
              <MDBListGroup flush>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>

          <MDBListGroup flush className="mx-3">
            <MDBRipple rippleTag="span">
              <MDBListGroupItem
                tag="a"
                href="#"
                action
                className="border-0 border-bottom rounded"
                onClick={toggleCollapse2}
              >
                <MDBIcon fas icon="chart-area me-3" />
                Collapsed menu
              </MDBListGroupItem>
            </MDBRipple>

            <MDBCollapse show={isCollapse2Open}>
              <MDBListGroup flush>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag="a" action href="#">
                  Link
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleSidebar}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#">
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
                height="30"
                alt="Logo"
                loading="lazy"
              />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput
                  label='Search (ctrl + "/" to focus)'
                  id="form1"
                  type="text"
                />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
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
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      Something else here
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <MDBIcon fas icon="fill-drip" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <MDBIcon fab icon="github" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="me-3 me-lg-0 d-flex align-items-center">
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  href="#!"
                  className="hidden-arrow nav-link"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt="User Avatar"
                    loading="lazy"
                  />
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">My profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Settings</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Logout</MDBDropdownLink>
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
 */
