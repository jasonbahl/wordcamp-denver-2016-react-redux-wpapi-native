import React, { Component } from 'react';
import { Header, Title, Container, Content, Footer, List, Spinner } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';

import ArticlePreview from '../ArticlePreview';
import SiteNav from '../SiteNav';

class ArticleList extends Component {

    render() {

        let { articles, activeSite } = this.props;

        let activeSiteArticles = _.filter( articles.items, { site: activeSite });

        if ( articles.items[0] ) {

            return (
                <Container>
                    <Header>
                        <Title>WordCamp Denver 2016</Title>
                    </Header>
                    <Content padder>
                        <List dataArray={ activeSiteArticles }
                            renderRow={( article, i ) => {

                                let uniqueId = article.site.id + article.id;

                                if (activeSite === article.site) {
                                    return (
                                        <ArticlePreview key={ uniqueId } i={i} uniqueId={ uniqueId } article={article}/>
                                    )
                                } else {
                                    return <Spinner color='blue' />;
                                }

                            }}/>
                    </Content>
                    <Footer>
                        <SiteNav/>
                    </Footer>
                </Container>
            )

        } else {

            return(
                <Container>
                    <Spinner color='blue' />
                </Container>
            )

        }
    }

}

function mapStateToProps( state ) {
    return {
        activeSite: state.sites.activeSite,
        articles: state.articles
    }
}

export default connect( mapStateToProps )(ArticleList);