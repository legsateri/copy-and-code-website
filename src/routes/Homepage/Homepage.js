//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Footer from '../../components/Footer/Footer';
import HomepageHeader from '../../components/HomepageHeader/HomepageHeader';
import OurWorkHome from '../../components/OurWorkHome/OurWorkHome';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
//////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
//////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <HomepageHeader />

                <main>
                    <OurWorkHome />
                    <WhatWeDo />
                </main>

                <Footer />
            </>
        )
    }
}

export default Homepage;