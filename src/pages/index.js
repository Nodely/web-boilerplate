/**
 * Created by Ivan Soloviev <info@nodely.ru>
 * Date: 02/14/2018
 *
 * Copyright @ Nodely, 2018
 */

import React from 'react'
import * as BS from 'react-bootstrap'
import {createMarkup} from 'nodely-libs'
import * as Wrappers from '../wrappers'

export const index = ({page}) => (
    <BS.Col md={6} mdOffset={3} className="zone-content">
        <article>
            <h1>Welcome to ACME</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales cursus
                fringilla. Praesent non enim urna. Praesent in tellus augue, eget egestas purus.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales cursus fringilla. Cras
                consequat enim turpis, in cursus dui. Phasellus dapibus mauris et velit porta posuere. In at leo mauris,
                a euismod erat. Nulla eu convallis nibh. Cras eros dui, lobortis eget venenatis nec, egestas consequat
                arcu. Nunc laoreet risus at elit rutrum a varius lorem adipiscing. Ut eget mattis libero. Curabitur at
                elit augue. Mauris et felis dui. Phasellus ac pretium mauris. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Facilis architecto incidunt cum soluta iste culpa tenetur dolorum maiores nihil
                laudantium blanditiis rerum sapiente nesciunt consequatur quasi dolorem dolor in tempora.</p>
        </article>
    </BS.Col>
);

export const internal = ({page}) => (
    <BS.Col className="zone-content">
        <article>
            <h1>{page.title}</h1>
            {createMarkup(page.content, Wrappers)}
        </article>
    </BS.Col>
);

export const notFound = () => (
    <BS.Col className="zone-content">
        <article>
            <h1>Page Not Found</h1>
            <p>
                Page that you have requested is not found
            </p>
        </article>
    </BS.Col>
);