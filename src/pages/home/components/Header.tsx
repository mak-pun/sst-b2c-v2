import React, { useEffect } from 'react';
import { $ } from '../../../helper'

const Header = () => {

    useEffect(() => {
        // initialization of header
        $.HSCore.components.HSHeader.init($('#header'));
        // initialization of unfold component
        $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

        // initialization of HSMegaMenu component
        $('.js-mega-menu').HSMegaMenu({
            event: 'hover',
            pageContainer: $('.container'),
            breakpoint: 1199.98,
            hideTimeOut: 0
        });
    }, [])

    return <>

        {/* ========== HEADER ========== */}
        <header id="header" className="u-header u-header--abs-top-xl u-header--white-nav-links-xl u-header--bg-transparent-xl u-header--show-hide-xl" data-header-fix-moment="500" data-header-fix-effect="slide">
            <div className="u-header__section u-header__shadow-on-show-hide py-4 py-xl-0">
                {/* Topbar */}
                <div className="container-fluid u-header__hide-content u-header__topbar u-header__topbar-lg border-bottom border-color-white">
                    <div className="d-flex align-items-center">
                        <ul className="list-inline u-header__topbar-nav-divider mb-0">
                            <li className="list-inline-item mr-0"><a href="tel:+66 (0)2-630-33029" className="u-header__navbar-link">+66 (0)2-630-33029</a></li>
                            <li className="list-inline-item mr-0"><a href="mailto:info@myhotel.com" className="u-header__navbar-link">info@sunseries.travel</a></li>
                        </ul>
                        <div className="ml-auto d-flex align-items-center">
                            <ul className="list-inline mb-0 mr-2 pr-1">
                                <li className="list-inline-item">
                                    <a className="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://www.facebook.com/sunseriestravel/" target="_blank" rel="noopener noreferrer">
                                        <span className="fab fa-facebook-f btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover" href="https://www.linkedin.com/company/sun-series-travel-co-ltd-/" target="_blank" rel="noopener noreferrer">
                                        <span className="fab fa-linkedin-in btn-icon__inner"></span>
                                    </a>
                                </li>
                            </ul>
                            {/* <div className="position-relative px-3 u-header__topbar-divider">
                                <a href="#" className="d-flex align-items-center text-white">
                                    <i className="flaticon-user mr-2 ml-1"></i>
                                    <span className="d-inline-block font-size-14 mr-1">Sign in or Register</span>
                                </a>
                            </div> */}
                            <div className="position-relative pl-3 language-switcher dropdown-connector-xl u-header__topbar-divider">
                                <a id="languageDropdownInvoker" className="dropdown-nav-link dropdown-toggle d-flex align-items-center ml-1 py-3" href="#" role="button" aria-controls="languageDropdown" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#languageDropdown" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                                    <span className="d-inline-block">THB</span>
                                </a>
                                <div id="languageDropdown" className="dropdown-menu dropdown-unfold dropdown-menu-right mt-0" aria-labelledby="languageDropdownInvoker">
                                    <a className="dropdown-item" href="#">THB</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Topbar */}
                <div id="logoAndNav" className="container-fluid py-1">
                    {/* Nav */}
                    <nav className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space">
                        {/* Logo */}
                        <a className="navbar-brand u-header__navbar-brand-default u-header__navbar-brand-center u-header__navbar-brand-text-white" href="../home/index.html" aria-label="MyHotel">
                            <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                        </a>
                        {/* End Logo */}

                        {/* Handheld Logo */}
                        <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed" href="../home/index.html" aria-label="MyHotel">
                            <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                        </a>
                        {/* End Handheld Logo */}

                        {/* Scroll Logo */}
                        <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll" href="../home/index.html" aria-label="MyHotel">
                            <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                        </a>
                        {/* End Scroll Logo */}

                        {/* Responsive Toggle Button */}
                        <button type="button" className="navbar-toggler btn u-hamburger u-hamburger--primary order-2 ml-3" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                            <span id="hamburgerTrigger" className="u-hamburger__box">
                                <span className="u-hamburger__inner"></span>
                            </span>
                        </button>
                        {/* End Responsive Toggle Button */}

                        {/* Navigation */}
                        <div id="navBar" className="navbar-collapse u-header__navbar-collapse collapse order-2 order-xl-0 pt-4 p-xl-0 position-relative">
                            <ul className="navbar-nav u-header__navbar-nav">
                                {/* Home */}
                                <li className="nav-item u-header__nav-item">
                                    <a id="homeMenu" className="nav-link u-header__nav-link u-header__nav-link-border" href="#">Home</a>
                                </li>
                                {/* End Home */}

                                {/* Find hotel */}
                                <li className="nav-item u-header__nav-item">
                                    <a id="findHotelMenu" className="nav-link u-header__nav-link u-header__nav-link-border" href="#">Find hotel</a>
                                </li>
                                {/* End Find hotel */}

                                {/* About us */}
                                <li className="nav-item u-header__nav-item">
                                    <a id="aboutUsMenu" className="nav-link u-header__nav-link u-header__nav-link-border" href="#">About us</a>
                                </li>
                                {/* End About us */}

                                {/* Contact us */}
                                <li className="nav-item u-header__nav-item">
                                    <a id="aboutUsMenu" className="nav-link u-header__nav-link u-header__nav-link-border" href="#">Contact us</a>
                                </li>
                                {/* End Contact us */}

                            </ul>
                        </div>
                        {/* End Navigation */}

                    </nav>
                    {/* End Nav */}
                </div>
            </div>
        </header>
        {/* ========== End HEADER ========== */}

    </>
}

export default Header