/**
 * Created by Ivan Soloviev <info@nodely.ru>
 * Date: 02/13/2018
 *
 * Copyright @ Nodely, 2018
 */

import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import * as BS from 'react-bootstrap'

export default (props) => {
    let {items} = props;
    return (
        <BS.Nav className="ww-nav pull-right hidden-phone">
            {items.map((item, idx) => {
                if (item.children && item.children.length > 0) {
                    return <BS.NavDropdown key={idx} eventKey={idx} title={item.title} id="main-menu-dropdown">
                        {item.children.map((child, child_idx) => {
                            return <LinkContainer to={child.path} key={child_idx}>
                                <BS.DropdownItem eventKey={child_idx}>{child.title}</BS.DropdownItem>
                            </LinkContainer>
                        })}
                    </BS.NavDropdown>
                } else {
                    return <LinkContainer to={item.path} key={idx}>
                        <BS.NavItem eventKey={idx}>{item.title}</BS.NavItem>
                    </LinkContainer>
                }
            })}
        </BS.Nav>
    )
}