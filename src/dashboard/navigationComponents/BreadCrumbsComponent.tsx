import { Box, Breadcrumbs, Button, Cell, CustomModalLayout, Divider, Heading, Layout, Page, Search, SidebarDividerNext, SidebarHeaderNext, SidebarItemNext, SidebarNext, SidebarTitleItemNext, Text, Thumbnail } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const BreadCrumbsComponent = () => {

    const renderThumbnail = (backgroundImage:any)=>(
        <Cell span={2}>
            <Thumbnail
                backgroundImage={backgroundImage}
                title={
                    <Text secondary size='tiny'>
                        {backgroundImage.substring(backgroundImage.lastIndexOf('/') + 1)}
                    </Text>
                }
                height={132}
            
            />
        </Cell>
    )


  return (
   <Box direction='vertical'>

        <Box paddingTop="SP2" paddingBottom="SP6">
            <Heading size='small'>Navigate Between Pages</Heading>
        </Box>

        <Page.Header
            title="Appointment Hours"
            subtitle="Set default hours for when you and your staff are available to take appointments."
            breadcrumbs={
                <Breadcrumbs
                    activeId="3"
                    items={[
                        { id: "1", value: "Home", link: '' },
                        { id: "2", value: "Booking Settings", link: '' },
                        { id: "3", value: "Appointment Hours", link: '' }
                    ]}

                    onClick={()=>{}}
                />
            }

            showBackButton
            onBackClicked={()=>{}}
            actionsBar={
                <Box gap="12px">
                    <Button skin='inverted'>Cancel</Button>
                    <Button>Save</Button>
                </Box>
            }
        />

        <Box paddingTop="SP10" paddingBottom="SP6">
            <Heading size='small'>Navigate Between Folders</Heading>
        </Box>

        <CustomModalLayout
            title="Choose images"
            onCloseButtonClick={()=>{}}
            removeContentPadding={true}
            showHeaderDivider
            content={
                <Box>
                    <Box>
                        <SidebarNext
                            skin='neutral'
                            isLoading={false}
                            selectedKey='2'
                            header={
                                <SidebarHeaderNext>
                                    <Button prefixIcon={<Icons.Add/>}>Upload Media</Button>
                                </SidebarHeaderNext>
                            }
                        >
                            <SidebarItemNext itemKey='1' >Home</SidebarItemNext>
                            <SidebarDividerNext/>
                            <SidebarTitleItemNext>Manage</SidebarTitleItemNext>
                            <SidebarItemNext itemKey='2' >Site Files</SidebarItemNext>
                            <SidebarItemNext itemKey='3' >My Boards</SidebarItemNext>
                            <SidebarItemNext itemKey='4' >Trash</SidebarItemNext>
                            <SidebarDividerNext/>
                            <SidebarTitleItemNext>Explore</SidebarTitleItemNext>
                            <SidebarItemNext itemKey='5' >Media from Wix</SidebarItemNext>
                            <SidebarItemNext itemKey='6' >ShuttersStock</SidebarItemNext>
                            <SidebarItemNext itemKey='7' >Unsplash</SidebarItemNext>
                        </SidebarNext>
                    </Box>

                    <Box direction='vertical' width="100%">
                        <Box direction='vertical' padding="24px">
                            <Search/>
                        </Box>

                        <Box padding="0px 24px 24px 24px" >
                            <Breadcrumbs
                                theme='onWhiteBackground'
                                items={[
                                    { id: 0, value: "Site Files", link: '' },
                                    { id: 1, value: "Stores", link: '' },
                                    { id: 2, value: "Product images", link: '' },
                                    { id: 3, value: "Photos", link: '' },
                                ]}
                                activeId={3}
                            />
                        </Box>
                        <Box padding="0px 24px" > 
                                <Layout>
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample1.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample2.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample3.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample4.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample5.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample6.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample7.jpg')}
                                    {renderThumbnail('https://www.docs.wixdesignsystem.com/ProductExample8.jpg')}
                                </Layout>
                        </Box>

                        <Box paddingTop="60px" >
                                <Divider/>
                        </Box>
                        <Box padding="12px 24px" align='right' >
                                <Box>
                                    <Button>Add to Page</Button>
                                </Box>

                        </Box>




                    </Box>


                    

                </Box>
                   
            }
            
        />
   </Box>
  )
}

export default BreadCrumbsComponent