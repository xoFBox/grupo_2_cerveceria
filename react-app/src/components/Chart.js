import React from 'react';
import ChartRow from './ChartRow';


function Chart (props){
    console.log(props.products.products)
    // id: prod.id,
    //     name: prod.name,
    //     description: prod.description,
    //     image: prod.image,
    //     price: prod.price,
    //     category: prod.category,
    //     urlImage: `http://localhost:3001/images/products/${prod.image}`
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                     
                        <tbody>
                            {
                            props.products.products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;