import React from "react";

// import css
import '@wix/design-system/styles.global.css';

// import providers
import { withProviders } from "../../withProviders";
import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from "@wix/design-system";
import PopOverMenuComponent from "../../overlaysComponents/PopOverMenuComponent";

// creating the page component
export default withProviders(function OverlaysPage(){
    return(
        <Page>
            <Page.Header
                title="Overlays"
                breadcrumbs={
                    <Breadcrumbs
                        activeId="2"
                        items={[
                            { id: 0, value: "Apps", disabled: true },
                            { id: 1, value: "Wix Design System", disabled: true },
                            { id: 2, value: "Overlays" },
                        ]}
                    />
                }
            />

            <Page.Content>
                <Layout>
                    <Cell>
                        <Box  paddingBottom="SP4" >
                            <Heading size="medium">PopoverMenu</Heading>
                        </Box>

                        <PopOverMenuComponent/>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    )
})