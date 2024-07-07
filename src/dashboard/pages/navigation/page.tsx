import React from "react";

// import css
import '@wix/design-system/styles.global.css'

// import with providers
import { withProviders } from "../../withProviders";
import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from "@wix/design-system";
import BreadCrumbsComponent from "../../navigationComponents/BreadCrumbsComponent";
import PaginationComponent from "../../navigationComponents/PaginationComponent";
import VerticalTabsComponents from "../../navigationComponents/VerticalTabs/VerticalTabsComponents";
import VerticalTabsItemsComponent from "../../navigationComponents/VerticalTabs/VerticalTabsItemsComponent";


// creating the page component
export default withProviders(function NavigationPage(){

    return (
        <Page>
            <Page.Header
                title="Navigation"
                breadcrumbs={
                    <Breadcrumbs
                        activeId="2"
                        items={[
                            { id: "1", value: "Apps", disabled: true },
                            { id: "2", value: "Wix Design System", disabled: true },
                            { id: "3", value: "Navigation" }
                        ]}
                    />
                }
            />

            <Page.Content>
                <Layout>
                    <Cell>
                        <Box paddingTop="SP4" paddingBottom="SP4">
                            <Heading size="medium">BreadCrumbs</Heading>
                        </Box>
                        <BreadCrumbsComponent/>
                        <Box paddingTop="SP10" paddingBottom="SP6">
                            <Heading size="medium">Pagination</Heading>
                        </Box>
                        <PaginationComponent/>

                        <Box paddingTop="SP10" paddingBottom="SP6">
                            <Heading size="medium">Vertical Tabs</Heading>
                        </Box>
                        <VerticalTabsComponents/>
                        
                        <Box paddingTop="SP10" paddingBottom="SP6">
                            <Heading size="small">Vertical Tabs Item</Heading>
                        </Box>
                        <VerticalTabsItemsComponent/>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    )
})