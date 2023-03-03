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

export default ContentRowPanels;