import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';

import { withProviders } from '../../withProviders';
import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from '@wix/design-system';
import AudioPlayerComponent from '../../mediaComponents/AudioPlayerComponent';
import ImageComponent from '../../mediaComponents/ImageComponent';
import ImageViewerComponent from '../../mediaComponents/ImageViewerComponent';

export default withProviders(function MediaPage(){
    return(
        <Page>
            <Page.Header
                title="Media"
                breadcrumbs={
                    <Breadcrumbs
                        activeId="2"
                        items={[
                            { id: '1', value: 'Apps', disabled: true },
                            { id: '2', value: 'Wix Design System', disabled: true },
                            { id: '3', value: 'Media' }
                        ]}
                    />
                }
            />

            <Page.Content>
                <Layout>
                    <Cell>
                        <Heading size='medium'>Audio Player</Heading>
                        <Box paddingTop="SP4" >
                        </Box>

                        <AudioPlayerComponent/>
                        
                        

                        
                        <Box paddingTop="SP4" paddingBottom="SP4" >
                            <Heading size='medium'>Image</Heading>
                        </Box>
                        
                        <ImageComponent/>

                        <Box paddingTop="SP4" paddingBottom="SP4" >
                            <Heading size='medium'>Image Viewer</Heading>
                        </Box>
                        <ImageViewerComponent/>

                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    )
})