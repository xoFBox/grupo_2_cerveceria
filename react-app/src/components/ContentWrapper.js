import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper(props){

  
    return (

        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                     <ContentRowTop {...props}/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;