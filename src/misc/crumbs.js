/**
 * Created by Ivan Soloviev <info@nodely.ru>
 * Date: 02/13/2018
 *
 * Copyright @ Nodely, 2018
 */

import React from 'react'
import {Link} from 'react-router-dom'

export default({items}) => (
    <div className="bread_area">
        <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            {items && items.map((item, idx) => {
                return item.path ?
                    <li key={idx}><Link to={item.path}>{item.title}</Link></li> :
                    <li key={idx}>{item.title}</li>
            })}
        </ol>
    </div>
);