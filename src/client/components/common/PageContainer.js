import React, { Component } from 'react';
import styled from 'styled-components';
import bemto from 'bemto-components';

class PageContainer extends Component {
    render() {
        return (
            <PageContainerStyled>
                {this.props.children}
            </PageContainerStyled>
        );
    }
}

PageContainer.propTypes = {};
PageContainer.defaultProps = {};

export default PageContainer;

const PageContainerStyled = styled(bemto({}))`
width: 100%;
height: 100%;
max-width: 960px;
margin: 0 auto;
background-color: #e6ecf0;

@media (max-width: 960px) {
    background: lightgoldenrodyellow;
  }
`;
