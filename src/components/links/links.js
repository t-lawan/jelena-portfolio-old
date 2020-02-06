import React from "react"
import styled from "styled-components"

const LinkWrapper = styled.div`
    padding: 1rem;
`

let sociallinks = ['link', 'twitter', 'instagram']
const Links = () => {
    return (
        <LinkWrapper>
            {sociallinks.map((li, index) => {
                <p key={index}> {li} </p>
            })}
        </LinkWrapper>
    )
}

export default Links;