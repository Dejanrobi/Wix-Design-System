import React from "react";

// importing css
import '@wix/design-system/styles.global.css'

// import with providers
import { withProviders } from "../../withProviders";
import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from "@wix/design-system";
import BadgeComponent from "../../feedbackComponents/BadgeComponent";
import LoaderComponent from "../../feedbackComponents/LoaderComponent";

// creating the page component
export default withProviders( function FeedbackPage(){
    return(
        <Page>
            <Page.Header
                title="Feedback"
                breadcrumbs={
                    <Breadcrumbs
                        activeId="3"
                        items={[
                            { id: 0, value: "Apps", link: '' },
                            { id: 1, value: "Wix Design System", link: '' },
                            { id: 2, value: "Feedback", link: '' },
                        ]}
                    />
                }
            />

            <Page.Content>
                <Layout>
                    <Cell>
                        
                        <Box paddingTop="SP4" paddingBottom="SP4">
                            <Heading size="medium">Badge</Heading>
                        </Box>

                        <BadgeComponent/>

                        <Box paddingTop="SP4" paddingBottom="SP4">
                            <Heading size="medium">Loader</Heading>
                        </Box>
                        <LoaderComponent/>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    )
})