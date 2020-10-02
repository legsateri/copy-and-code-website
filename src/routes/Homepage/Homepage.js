//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import HomepageHeader from '../../components/HomepageHeader/HomepageHeader';
import OurWork from '../../components/OurWork/OurWork';
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
                    <OurWork />
                    <WhatWeDo />
                </main>
            </>
        )
    }
}

export default Homepage;