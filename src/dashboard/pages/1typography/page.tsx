import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';
import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from '@wix/design-system';
import HeadingComponent from '../../typographyComponents/HeadingComponent';
import TextComponent from '../../typographyComponents/TextComponent';

const page = () => {
  return (
    <Page>
      <Page.Header
        title="Typography"
        breadcrumbs={
          <Breadcrumbs
            activeId="2"
            items={[
              { id: '1', value: 'Apps', disabled: true },
              { id: '2', value: 'Wix Design System', disabled: true },
              { id: '3', value: 'Typography' },
            ]}
          />
        }
      />

      <Page.Content>
        <Layout>
          <Cell>
            <Heading size='medium' >Heading</Heading>

            <Box paddingTop="SP4" paddingBottom="SP4" >
              <HeadingComponent/>
            </Box>

            <Heading size='medium' >Text</Heading>

            <Box paddingTop="SP4" paddingBottom="SP4" >
              <TextComponent/>
            </Box>
          </Cell>
        </Layout>
      </Page.Content>
    </Page>
  )
}

export default page