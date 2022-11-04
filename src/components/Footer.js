import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
position: absolute;
bottom: 0;
left: 0;
`

function Footer() {
  return (
    <FooterContainer>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Hoerrin">Patryk Dworakowski</a>
          .
        </p>
      </FooterContainer>
  )
}

export default Footer