import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';

// import withProviders
import { withProviders } from '../../withProviders';
import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from '@wix/design-system';
import ButtomComponent from '../../actionsComponents/ButtomComponent';
import IconButtonComponent from '../../actionsComponents/IconButtonComponent';
import TextButtonComponent from '../../actionsComponents/TextButtonComponent';

export default withProviders(function ActionsPage(){
    return(
        <Page>
            <Page.Header
                title="Actions"
                breadcrumbs={
                    <Breadcrumbs
                        activeId="2"
                        items={[
                            { id: '1', value: 'Apps', disabled: true },
                            { id: '2', value: 'Wix Design System', disabled: true },
                            { id: '3', value: 'Actions' }
                        ]}
                    />
                }
            />


            <Page.Content>
                <Layout>
                    <Cell>
                        <Heading size='medium'>Button</Heading>
                        <Box paddingTop="SP4">
                        </Box>
                        <ButtomComponent/>
                    </Cell>


                    <Cell>
                        <Heading size='medium'>Icon Button</Heading>
                        <Box paddingTop="SP4">
                        </Box>
                        <IconButtonComponent/>
                    </Cell>

                    <Cell>
                        <Heading size='medium'>Text Button</Heading>
                        <Box paddingTop="SP4">
                        </Box>
                        <TextButtonComponent/>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>

    )
})