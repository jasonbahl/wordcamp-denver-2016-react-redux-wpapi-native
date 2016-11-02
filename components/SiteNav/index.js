import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FooterTab, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import * as siteActions from '../../state/actions/sites';

class SiteNav extends Component {

    handleNavClick( site ) {

        let { siteActions } = this.props;
        siteActions.setActive( site );

    }

    render() {

        let { sites } = this.props;

        return (
            <FooterTab>

                {
                    sites.items.map( ( site, i ) => {

                        let active = ( sites.activeSite === site ) ? true : false;

                        return (
                            <Button key={i} active={active} onPress={ this.handleNavClick.bind( this, site )}>{site.name}</Button>
                        )
                    })

                }
            </FooterTab>
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
        siteActions: bindActionCreators( siteActions, dispatch )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(SiteNav);