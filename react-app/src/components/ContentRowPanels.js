<<<<<<< HEAD
import React from 'react';
import SmallCard from './SmallCard';

function ContentRowPanels(props){

    const cardProps = [
        {
            title:'Users quantity' ,
            color:'warning',
            cuantity: props.users.count,
            icon:'fa-user-check'
        },
        {
            title:'Products quantity' ,
            color:'success',
            cuantity: props.products.count,
            icon:'fa-award'
        },
        {
            title:'Categories quantity' ,
            color:'danger',
            cuantity: Object.keys(props.products.countByCategory).length,
            icon:'fa-user-check'
        }
    ]
    
    return (
    
        <div className="row">
            
            {cardProps.map( (prod, i) => {

                return <SmallCard {...prod} key={i}/>
            
            })}

        </div>
    )
}

=======
import React from 'react';
import SmallCard from './SmallCard';

function ContentRowPanels(props){

    const cardProps = [
        {
            title:'Users quantity' ,
            color:'warning',
            cuantity: props.users.count,
            icon:'fa-user-check'
        },
        {
            title:'Products quantity' ,
            color:'success',
            cuantity: props.products.count,
            icon:'fa-award'
        },
        {
            title:'Categories quantity' ,
            color:'danger',
            cuantity: Object.keys(props.products.countByCategory).length,
            icon:'fa-user-check'
        }
    ]
    
    return (
    
        <div className="row">
            
            {cardProps.map( (prod, i) => {

                return <SmallCard {...prod} key={i}/>
            
            })}

        </div>
    )
}

>>>>>>> 8128e3484fd9d8063f3be01824a90496e4e513cb
export default ContentRowPanels;