import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = props => (
  <Helmet>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FF0000" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css" />
    {/* <link rel="stylesheet" href="css/style.css" /> */}
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: ''
}

export default Head;
