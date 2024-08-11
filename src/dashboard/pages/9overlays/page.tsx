import React from "react";

// import css
import '@wix/design-system/styles.global.css';

// import providers
import { withProviders } from "../../withProviders";
import { Box, Breadcrumbs, Cell, Heading, Layout, Page, SidePanel } from "@wix/design-system";
import PopOverMenuComponent from "../../overlaysComponents/PopOverMenuComponent";
import SidePanelComponent from "../../overlaysComponents/SidePanelComponent";
import TooltipComponent from "../../overlaysComponents/TooltipComponent";
import CustomModalLayoutComponent from "../../overlaysComponents/Modal/CustomModalLayoutComponent";
import MessageModalLayoutComponent from "../../overlaysComponents/Modal/MessageModalLayoutComponent";
import ModalComponent from "../../overlaysComponents/Modal/ModalComponent";

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

                        <Box  paddingBottom="SP4" >
                            <Heading size="medium">SidePanel</Heading>
                        </Box>
                        <SidePanelComponent/>


                        <Box  paddingBottom="SP4" >
                            <Heading size="medium">Tooltip</Heading>
                        </Box>

                        <TooltipComponent/>
                        
                        <Box  paddingBottom="SP4"paddingTop="SP4" >
                            <Heading size="large">Modal</Heading>
                        </Box>

                        <Box  paddingBottom="SP4"paddingTop="SP4" >
                            <Heading size="medium">Custom Modal Layout</Heading>
                        </Box>

                        <CustomModalLayoutComponent/>

                        <Box  paddingBottom="SP6"paddingTop="SP6" >
                            <Heading size="medium">Message Modal Layout</Heading>
                        </Box>
                        <MessageModalLayoutComponent/>

                        <Box  paddingBottom="SP6"paddingTop="SP6" >
                            <Heading size="medium">Modal Component</Heading>
                        </Box>

                        <ModalComponent/>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    )
})