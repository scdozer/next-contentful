/**
 *
 * Rich Text
 *
 */

import React from 'react';
import _ from 'lodash';
import {
  RichTextWrap,
  Bold,
  Italic,
  Paragraph,
  H2rt,
  Hyperlink,
  ListWrap,
  ListItem,
  //  EmbeddedComponentWrapper,
} from './styles';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import classnames from 'classnames';

//  const componentTypes = {
//    Asset: {
//      component: Asset,
//    },
//  };

const RichText = ({ data }) => {
  const contentJson = _.get(data?.content, 'json');
  //  const contentLinks = _.get(content, 'links');
  //  const embeddedEntries = _.get(contentLinks, 'assets.block') || [];
  //  const embeddedDictionary = _.keyBy(embeddedEntries, 'sys.id') || {};

  //  const EmbeddedBlockComponent = node => {
  //    const embeddedId = _.get(node, 'data.target.sys.id');
  //    const entry = embeddedDictionary[embeddedId];
  //    const moduleType = _.get(entry, '__typename');
  //    const Component = _.get(componentTypes[moduleType], 'component');

  //    if (!Component) return null;
  //    return (
  //      <EmbeddedComponentWrapper>
  //        <Component {...entry} />
  //      </EmbeddedComponentWrapper>
  //    );
  //  };

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_2]: (node, children) => <H2rt>{children}</H2rt>,
      [BLOCKS.HEADING_3]: (node, children) => <H2rt>{children}</H2rt>,
      [BLOCKS.HEADING_4]: (node, children) => <H2rt>{children}</H2rt>,
      [INLINES.HYPERLINK]: node => {
        const { uri } = node.data;
        const isExternal =
          uri.indexOf('http://') > -1 || uri.indexOf('https://') > -1;
        const target = isExternal ? '_blank"' : '_self';
        return (
          <Hyperlink href={uri} target={target}>
            {node.content[0].value}
          </Hyperlink>
        );
      },
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <ListWrap>
          <ListItem>{children}</ListItem>
        </ListWrap>
      ),
      //  [BLOCKS.EMBEDDED_ASSET]: EmbeddedBlockComponent,
      //  [INLINES.EMBEDDED_ENTRY]: EmbeddedBlockComponent,
    },
  };

  const RichTextComponents =
    contentJson && documentToReactComponents(contentJson, options);

  const classess = classnames({});
  return (
    <>
      {RichTextComponents && (
        <RichTextWrap className={classess}>{RichTextComponents}</RichTextWrap>
      )}
    </>
  );
};

export default RichText;
