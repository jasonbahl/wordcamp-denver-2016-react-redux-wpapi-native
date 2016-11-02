import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Navigator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as articleActions from './state/actions/articles';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';



export const globalNav = {};

class App extends Component {

    componentDidMount() {

        globalNav.navigator = this._navigator;

        let { articleActions, sites } = this.props;
        articleActions.articlesFetch( sites );

    }

    renderScene( route, navigator ) {
        switch (route.id) {
            case 'articleList':
                return <ArticleList navigator={navigator}/>;
            case 'articleDetail':
                return <ArticleDetail navigator={navigator}/>;
            default:
                return <ArticleList navigator={navigator}/>;
        }
    }

    render() {
        return (
            <Navigator
                ref={(ref) => {
                    this._navigator = ref;
                }}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                initialRoute={{ id: 'articleList', statusBarHidden: true }}
                renderScene={this.renderScene}
            />
        )
    }

}

function mapStateToProps( state ) {
    return {
        sites: state.sites
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        articleActions: bindActionCreators( articleActions, dispatch )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);