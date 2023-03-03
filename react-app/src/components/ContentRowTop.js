<<<<<<< HEAD
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
=======
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
>>>>>>> 8128e3484fd9d8063f3be01824a90496e4e513cb
export default ContentRowTop;