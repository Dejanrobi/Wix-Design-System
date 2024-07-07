import { Box, Cell, CustomModalLayout, Divider, Heading, VerticalTabs } from '@wix/design-system'
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const VerticalTabsComponents = () => {
  return (
    <Box direction='vertical'>
        <Box  paddingBottom="SP4" >
             <Heading size='small'>Vertical Tabs</Heading>
        </Box>

        <Box  paddingBottom="SP4" >
             <Heading size='tiny'>Size</Heading>
        </Box>

        <Box direction='vertical' gap="SP6" width="200px" >
            <VerticalTabs onChange={(/*id*/)=>{}} >
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Medium tab 1
                </VerticalTabs.TabItem>
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Medium tab 2
                </VerticalTabs.TabItem>
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Medium tab 3
                </VerticalTabs.TabItem>
            </VerticalTabs>

            <VerticalTabs size='small' onChange={(/*id*/)=>{}} >
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Small tab 1
                </VerticalTabs.TabItem>
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Small tab 2
                </VerticalTabs.TabItem>
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Small tab 3
                </VerticalTabs.TabItem>
            </VerticalTabs>

            <VerticalTabs size='tiny' onChange={(/*id*/)=>{}} >
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Tiny tab 1
                </VerticalTabs.TabItem>
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Tiny tab 2
                </VerticalTabs.TabItem>
                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                    Tiny tab 3
                </VerticalTabs.TabItem>
            </VerticalTabs>
        </Box>

        <Box paddingTop="SP4"  paddingBottom="SP4" >
             <Heading size='tiny'>Group title</Heading>
        </Box>
        <Box direction="vertical" width="200px">
            <VerticalTabs  onChange={(/*id*/)=>{}} >
                    <VerticalTabs.TabsGroup title='Group Title' >
                        <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                            Tab 1
                        </VerticalTabs.TabItem>
                        <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                            Tab 2
                        </VerticalTabs.TabItem>
                        <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                            Tab 3
                        </VerticalTabs.TabItem>

                    </VerticalTabs.TabsGroup>

            </VerticalTabs>

        </Box>

        <Box paddingTop="SP4"  paddingBottom="SP4" >
             <Heading size='tiny'>Selected Tab</Heading>
        </Box>

        <Box direction="vertical" width="200px">
            <VerticalTabs activeTabId={0}  onChange={(/*id*/)=>{}} >
                    <VerticalTabs.TabsGroup title='Group Title' >
                        <VerticalTabs.TabItem id={0} >
                            Tab 1
                        </VerticalTabs.TabItem>
                        <VerticalTabs.TabItem id={1} >
                            Tab 2
                        </VerticalTabs.TabItem>
                        <VerticalTabs.TabItem id={2} >
                            Tab 3
                        </VerticalTabs.TabItem>

                    </VerticalTabs.TabsGroup>

            </VerticalTabs>

        </Box>

        <Box paddingTop="SP4"  paddingBottom="SP4" >
             <Heading size='small'>Common use cases</Heading>
        </Box>
        <Box paddingTop=""  paddingBottom="SP4" >
             <Heading size='tiny'>Sidebar in a custom modal</Heading>
        </Box>

        <CustomModalLayout
            showFooterDivider
            showHeaderDivider
            primaryButtonText="Save"
            secondaryButtonText="Cancel"
            onCloseButtonClick={()=>{}}
            title="Account settings"
            removeContentPadding
            content={
                <Box>
                    <Box width="200px" direction='vertical' paddingBottom="16px" >
                        <VerticalTabs size='small' onChange={(/*id */) => {}} >
                            <VerticalTabs.TabsGroup title='Settings' >
                                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                                    Account info
                                </VerticalTabs.TabItem>
                                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                                    Login info
                                </VerticalTabs.TabItem>
                                <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight/>} >
                                    Email preferences
                                </VerticalTabs.TabItem>
                            </VerticalTabs.TabsGroup>
                            
                        </VerticalTabs>
                    </Box>
                    <Divider direction='vertical' ></Divider>

                </Box>
            }
        />
       

    </Box>
  )
}

export default VerticalTabsComponents