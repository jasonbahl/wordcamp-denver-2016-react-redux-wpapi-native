import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { Card, CardItem } from 'native-base';
import moment from 'moment';
import 'moment-timezone';
import HTMLView from 'react-native-htmlview';

import * as articleActions from '../../state/actions/articles';
import * as routeActions from '../../state/actions/route';

class ArticlePreview extends Component {

    handleOnPress( article ) {

        let { articleActions, routeActions } = this.props;
        articleActions.setActiveArticle( article.uniqueIndex );
        routeActions.pushNewRoute( 'articleDetail' );

    }

    render() {

        let { article, settings } = this.props;

        let date = ( article.date ) ? moment( article.date_gmt ).tz( article.timezone ).format('MM/DD/YYYY h:mm a z') : '';

        return (
            <Card style={{marginBottom: 10}} >
                <CardItem style={{paddingBottom: 0}} button onPress={ this.handleOnPress.bind( this, article )}>
                    <Text style={{fontSize: 18, marginBottom: 10, color: 'black'}}>{article.site.name}</Text>
                    <Text style={{fontSize: 22, marginBottom: 10, color: 'black'}}><HTMLView  value={article.title.rendered } /></Text>

                    <Text style={{fontSize: 14, marginBottom: 10, color: 'black'}}>{date}</Text>
                    <Text style={{fontSize: 14, marginBottom: 10, color: 'black'}}><HTMLView value={ article.excerpt.rendered } /></Text>
                </CardItem>
            </Card>
        )
    }

}

function mapDispatchToProps( dispatch ) {
    return {
        routeActions: bindActionCreators( routeActions, dispatch ),
        articleActions: bindActionCreators( articleActions, dispatch )
    }
}

export default connect( null, mapDispatchToProps )(ArticlePreview);