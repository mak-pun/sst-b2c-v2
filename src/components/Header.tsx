import React, { useEffect } from 'react'
import { $ } from '../helper'
import { useSref } from '@uirouter/react'

type Props = {
    mode: 'solid' | 'transparent'
}

const Header = (props: Props) => {


    // let mode = 'transparent'
    const {mode} = props
    // let mode = 'solid'

    const homeSref = useSref('home', {})
    const findHotelSref = useSref('hotel.results', {})

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

    const renderTopBar = () => {
        return (
            <div className={'container-fluid u-header__hide-content u-header__topbar u-header__topbar-lg border-bottom ' + (mode === 'transparent' ? 'border-color-white' : 'border-color-8')}>
                <div className="d-flex align-items-center">
                    <ul className={'list-inline mb-0 ' + (mode === 'transparent' ? 'u-header__topbar-nav-divider' : 'u-header__topbar-nav-divider--dark list-inline-dark')}>
                        <li className="list-inline-item mr-0"><a href="tel:+66 (0)2-630-33029" className="u-header__navbar-link">+66 (0)2-630-33029</a></li>
                        <li className="list-inline-item mr-0"><a href="mailto:info@myhotel.com" className="u-header__navbar-link">info@sunseries.travel</a></li>
                    </ul>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline mb-0 mr-2 pr-1">
                            <li className="list-inline-item">
                                <a className={'btn btn-sm btn-icon btn-pill btn-bg-transparent transition-3d-hover ' + (mode === 'transparent' ? 'btn-soft-white' : 'btn-soft-dark')} href="https://www.facebook.com/sunseriestravel/" target="_blank" rel="noopener noreferrer">
                                    <span className="fab fa-facebook-f btn-icon__inner"></span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className={'btn btn-sm btn-icon btn-pill btn-bg-transparent transition-3d-hover ' + (mode === 'transparent' ? 'btn-soft-white' : 'btn-soft-dark')} href="https://www.linkedin.com/company/sun-series-travel-co-ltd-/" target="_blank" rel="noopener noreferrer">
                                    <span className="fab fa-linkedin-in btn-icon__inner"></span>
                                </a>
                            </li>
                        </ul>
                        <div className={'position-relative pl-3 language-switcher dropdown-connector-xl ' + (mode === 'transparent' ? 'u-header__topbar-divider' : 'u-header__topbar-divider--dark')}>
                            <a id="languageDropdownInvoker" className="dropdown-nav-link dropdown-toggle d-flex align-items-center ml-1" href="#" role="button" aria-controls="languageDropdown" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#languageDropdown" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                                <span className="d-inline-block">THB</span>
                            </a>
                            <div id="languageDropdown" className="dropdown-menu dropdown-unfold dropdown-menu-right mt-0" aria-labelledby="languageDropdownInvoker">
                                <a className="dropdown-item" href="#">THB</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderLogo = () => {
        return (
            <>
                {/* Logo */}
                <a {...homeSref} className="navbar-brand u-header__navbar-brand-default u-header__navbar-brand-center u-header__navbar-brand-text-white" aria-label="MyHotel">
                    <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                </a>
                {/* End Logo */}

                {/* Handheld Logo */}
                <a {...homeSref} className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed" aria-label="MyHotel">
                    <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                </a>
                {/* End Handheld Logo */}

                {/* Scroll Logo */}
                <a {...homeSref} className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll" aria-label="MyHotel">
                    <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                </a>
                {/* End Scroll Logo */}
            </>
        )
    }

    const renderResponsiveToggleButton = () => {
        return (
            <>
                {/* Responsive Toggle Button */}
                <button type="button" className="navbar-toggler btn u-hamburger u-hamburger--primary order-2 ml-3" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                    <span id="hamburgerTrigger" className="u-hamburger__box">
                        <span className="u-hamburger__inner"></span>
                    </span>
                </button>
                {/* End Responsive Toggle Button */}

            </>
        )
    }
    const renderNavigation = () => {
        return (
            <>
                {/* Navigation */}
                <div id="navBar" className="navbar-collapse u-header__navbar-collapse collapse order-2 order-xl-0 pt-4 p-xl-0 position-relative">
                    <ul className="navbar-nav u-header__navbar-nav">
                        {/* Home */}
                        <li className="nav-item u-header__nav-item">
                            <a id="homeMenu" {...homeSref} className="nav-link u-header__nav-link u-header__nav-link-border">Home</a>
                        </li>
                        {/* End Home */}

                        {/* Find hotel */}
                        <li className="nav-item u-header__nav-item">
                            <a id="findHotelMenu" {...findHotelSref} className="nav-link u-header__nav-link u-header__nav-link-border">Find hotel</a>
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
            </>
        )
    }

    return <>

        {/* ========== HEADER ========== */}
        <header id="header" className={'u-header u-header--show-hide-xl ' + (mode === 'transparent'
            ? 'u-header--white-nav-links-xl u-header--bg-transparent-xl u-header--abs-top-xl'
            : 'u-header--dark-nav-links-xl u-header--bg-transparent-xl u-header--static-xl')} data-header-fix-moment="500" data-header-fix-effect="slide">
            <div className="u-header__section u-header__shadow-on-show-hide py-4 py-xl-0">

                {renderTopBar()}


                <div id="logoAndNav" className={'container-fluid ' + (mode=='transparent'? 'py-1': 'py-xl-2 border-bottom-xl')}>
                    {/* Nav */}
                    <nav className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space">

                        {renderLogo()}

                        {renderResponsiveToggleButton()}

                        {renderNavigation()}

                    </nav>
                    {/* End Nav */}
                </div>

            </div>
        </header>
        {/* ========== END HEADER ========== */}

    </>
}


export default Header