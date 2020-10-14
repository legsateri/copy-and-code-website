//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import FooterHome from '../../components/FooterHome/FooterHome';
import HomepageHeader from '../../components/HomepageHeader/HomepageHeader';
import OurWorkHome from '../../components/OurWorkHome/OurWorkHome';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
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

                <FooterHome />
            </>
        )
    }
}

export default Homepage;