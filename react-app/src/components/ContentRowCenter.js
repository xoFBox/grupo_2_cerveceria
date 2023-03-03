<<<<<<< HEAD
import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(props){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb {...props.products.products[props.products.products.length - 1]}/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb {...props.products}/>

        </div>
    )
}

=======
import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(props){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb {...props.products.products[props.products.products.length - 1]}/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb {...props.products}/>

        </div>
    )
}

>>>>>>> 8128e3484fd9d8063f3be01824a90496e4e513cb
export default ContentRowCenter;