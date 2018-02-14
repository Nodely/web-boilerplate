/**
 * Created by Ivan Soloviev <info@nodely.ru>
 * Date: 02/11/2018
 *
 * Copyright @ Nodely, 2018
 */

import React from 'react'
import * as BS from 'react-bootstrap'
import {Transport, Components} from 'nodely-libs'

export default class FormWrapper extends React.Component {

    state = {
        error: null,
        sent: false,
        form: {}
    };

    form = null;

    onFieldChange(e) {
        let {form} = this.state;
        form[e.target.id] = e.target.value;
        this.setState({form})
    }

    process(e) {
        e.preventDefault();
        let error = this.form.validate(this.state.form);
        if (error) {
            return this.setState({error: error === "captcha" ? "Captcha is not valid" : "Required fields are empty"})
        }
        Transport.sendForm(this.props.code, this.state.form).then(() => {
            this.setState({sent: true})
        });
    }

    render() {
        let {error, sent, form} = this.state;
        return (
            sent ? <p>Your request has been sent</p> :
                <BS.Form horizontal onSubmit={this.process.bind(this)}>
                    {error && <BS.Col smOffset={3} sm={8} className="margin-bottom-20"><span
                        className="text-danger">{error}</span></BS.Col>}
                    <Components.Form code={this.props.code}
                                     fieldsOnly={true}
                                     colLabel={3}
                                     colControl={8}
                                     values={form}
                                     onChange={this.onFieldChange.bind(this)}
                                     onRef={e => this.form = e}/>
                    <BS.Row>
                        <BS.Col sm={2} smOffset={9} className="text-right">
                            <BS.Button type="submit" bsStyle="primary">Send Request</BS.Button>
                        </BS.Col>
                    </BS.Row>
                </BS.Form>
        )
    }
}