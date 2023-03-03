import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowPanels from './ContentRowPanels';
import Chart from './Chart';

function ContentRowTop(props){

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowPanels {...props}/>
					<ContentRowCenter {...props}/>
					<Chart {...props}/>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;