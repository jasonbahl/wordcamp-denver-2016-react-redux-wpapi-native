import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Title, Container, Text, Button, Icon, Content, Spinner, Card, CardItem } from 'native-base';
import moment from 'moment';
import 'moment-timezone';
import HTMLView from 'react-native-htmlview';

import * as routeActions from '../../state/actions/route';

class ArticleDetail extends Component {

    getActiveArticle() {

        let { articles } = this.props;
        let activeArticle = articles.items[0];

        if ( articles.activeArticle ) {

            articles.items.map(( article, i ) => {

                if ( article.uniqueIndex === articles.activeArticle ) {
                    activeArticle = article;
                }
                return activeArticle;

            });
        }

        return activeArticle;


    }

    render() {

        let { routeActions, articles } = this.props;

        if ( false === articles.activeArticle ) {

            return <Spinner />;

        } else {

            let article = this.getActiveArticle();
            let date = ( article.date ) ? moment( article.date_gmt ).tz( article.timezone ).format('MM/DD/YYYY h:mm a z') : '';

            return (
                <Container>
                    <Header>
                        <Button transparent onPress={() => routeActions.popRoute()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                        <Title><HTMLView  value={article.site.name } /></Title>
                    </Header>
                    <Content>
                        <Card style={{marginBottom: 10}} >
                            <CardItem style={{paddingBottom: 0}}>
                                <Text style={{fontSize: 18, marginBottom: 10, color: 'black'}}>{article.site.name}</Text>
                                <Text style={{fontSize: 22, marginBottom: 10, color: 'black'}}><HTMLView  value={article.title.rendered } /></Text>

                                <Text style={{fontSize: 14, marginBottom: 10, color: 'black'}}>{date}</Text>
                                <Text style={{fontSize: 14, marginBottom: 10, color: 'black'}}><HTMLView value={ article.content.rendered } /></Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            )

        }

    }

}

function mapStateToProps( state ) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        routeActions: bindActionCreators( routeActions, dispatch )
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(ArticleDetail);