import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeaders'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'

import { init, create, update, remove } from './RestaurantActions'

import RestaurantList from './RestaurantList'
import RestaurantForm from './RestaurantForm'

class Restaurant extends Component {

    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Restaurantes' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Ecluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <RestaurantList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <RestaurantForm onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <RestaurantForm onSubmit={this.props.update} submitLabel='Alterar' submitClass='indo' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <RestaurantForm onSubmit={this.props.remove} readOnly={true} submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchtoProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchtoProps)(Restaurant)