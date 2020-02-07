import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';

const PARAGRAPH = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.2rem;
  color: red;
`

const EXTERNALLINK = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  :hover {
    cursor: url('../images/surfer.png');
  }
`
export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <PARAGRAPH>{children}</PARAGRAPH>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <EXTERNALLINK href={node.data.uri} target="__blank">{children}</EXTERNALLINK>
    },
  };