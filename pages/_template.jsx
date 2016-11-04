import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import '../css/markdown-styles'
import '../css/main'
import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#111'
          }}
        >
          <Container
            style={{
              display: 'none',
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'hotpink',
                textDecoration: 'none',
              }}
            >
              WebVR Rocks
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
          className="container"
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
