import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'

import Row from '../common/layout/Row'

export default class About extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Sobre' small='Versão 1.0' />
                <Content>
                    <Row>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit amet maxime, unde molestiae repellat tempora ex id molestias dolore quibusdam ullam soluta blanditiis similique ipsam quas accusamus. A, quidem dolorem.</p>
                    </Row>
                </Content>
            </div>
        )
    }
}