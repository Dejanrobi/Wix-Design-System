import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from '@wix/design-system'
import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';
import BoxComponent from '../../LayoutComponent/BoxComponent';

const page = () => {
  return (
    <Page>
        <Page.Header
            title="Layout"
            breadcrumbs={
                <Breadcrumbs
                    activeId="2"
                    items={[
                        { id: '1', value: 'Apps', disabled: true },
                        { id: '2', value: 'Wix Design System', disabled: true },
                        { id: '3', value: 'Layout' },
                    ]}
                />
            }
        />

        <Page.Content>
            <Layout>
                <Cell span={12} >
                    <Heading size='medium'>Layout</Heading>                  
                    <BoxComponent/>                   
                </Cell> 
            </Layout>
        </Page.Content>
    </Page>
  )
}

export default page