/**
 * Created by Ivan Soloviev <info@nodely.ru>
 * Date: 02/13/2018
 *
 * Copyright @ Nodely, 2018
 */

import React from 'react'
import * as BS from 'react-bootstrap'
import {Components} from 'nodely-libs'
import MenuView from './misc/menu'
import * as PageViews from './pages'

import './App.css'
import './Theme.css'

export default () => (
    <div className="container">

        <div className="masthead clearfix">
            <a href="/"><img id="logo" src="/assets/logo.svg" alt="ACME"/></a>
            <Components.Menu code="top" component={MenuView}/>
        </div>

        <hr/>

        <div className="row main-content">
           <Components.Routes views={PageViews}/>
        </div>

        <hr/>

        <div className="row triple-row">
            <div id="triple-first" className="col-md-4 triple">
                <div className="zone zone-triple-first">
                    <article className="widget-triple-first widget-html-widget widget">
                        <header>
                            <h1>First Triple</h1>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nibh ut tortor dapibus
                            vestibulum. Aliquam vel sem nibh. Suspendisse vel condimentum tellus.</p>
                    </article>
                </div>
            </div>

            <div id="triple-second" className="col-md-4 triple">
                <div className="zone zone-triple-second">
                    <article className="widget-triple-second widget-html-widget widget">
                        <header>
                            <h1>Second Triple</h1>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a nibh ut tortor dapibus
                            vestibulum. Aliquam vel sem nibh. Suspendisse vel condimentum tellus.</p>
                    </article>
                </div>
            </div>

            <div id="triple-third" className="col-md-4 triple">
                <div className="zone zone-triple-third">
                    <article className="widget-triple-third widget-html-widget widget">
                        <header>
                            <h1>Share &amp; Connect</h1>
                        </header>
                        <p>
                            <BS.Button variant="link"><i className="fa fa-facebook"/></BS.Button>
                            <BS.Button variant="link"><i className="fa fa-vk"/></BS.Button>
                            <BS.Button variant="link"><i className="fa fa-twitter"/></BS.Button>
                            <BS.Button variant="link"><i className="fa fa-google-plus"/></BS.Button>
                        </p>
                    </article>
                </div>
            </div>
        </div>

        <hr/>

        <BS.Row>
            <BS.Col md={8} className="copyright">&copy; 2018 - ACME Inc.</BS.Col>
            <BS.Col md={4} className="copyright text-right">Powered by <a href="https://nodely.me">Nodely</a></BS.Col>
        </BS.Row>

    </div>
)
