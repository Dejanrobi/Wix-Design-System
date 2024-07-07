import { Box, Button, Card, Cell, FieldSet, FormField, Heading, IconButton, Image, Input, InputArea, Layout, MediaOverlay, Popover, PopoverMenu, Proportion, SIZE, SidePanel, Text, Tooltip } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const IconButtonComponent = () => {

    const ReactRouterLink = (props:any)=> <div {...props} />


    // Popover menu
    const renderImage = () => <Image width={230} borderRadius={0}></Image>

    const renderContent = ()=>(
        <Box
            direction='vertical'
            verticalAlign='space-between'
            padding="24px 29px 27px"
            backgroundColor='D80'
            flexGrow={1}
        >
            <Box direction='vertical' gap={1}>
                <Text weight='bold' >JAVA meetup</Text>
                <Text size='small' weight='thin' secondary light >
                    Jan 20, 2021, 10:00 AM, Location will be announced later
                </Text>
            </Box>

            <Box align='space-between' >
                <Box/>

                <Box align='space-between' verticalAlign='middle' gap={1}>
                    <PopoverMenu
                        textSize='small'
                        triggerElement={
                            <Tooltip content="More actions" >
                                <IconButton priority='secondary' size='small' >
                                    <Icons.MoreSmall/>
                                </IconButton>
                            </Tooltip>
                        }
                    >
                        <PopoverMenu.MenuItem
                            text="Edit SEO settings"
                            prefixIcon={<Icons.SettingsSmall/>}
                        />
                        <PopoverMenu.Divider/>
                        <PopoverMenu.MenuItem
                            text="Duplicate as draft"
                            prefixIcon={<Icons.DuplicateSmall/>}
                        />
                        <PopoverMenu.MenuItem
                            text="Cancel event"
                            skin='destructive'
                            prefixIcon={<Icons.BlockSmall/>}
                        />

                    </PopoverMenu>

                    <Button 
                        priority='secondary'
                        size='small'
                        prefixIcon={<Icons.PromoteSmall/>}
                    >
                        Promote
                    </Button>
                    <Button priority='secondary' size='small' >
                        Edit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Custom HTML Tag</Heading>
        </Box>

        <Box gap="SP4">
            <Box
                direction='vertical'
                gap="12px"
                align='center'
            >
                <Text secondary size='small'>
                    {'<a/> tag'}
                </Text>

                <IconButton as="a" href="https://www.wix.com" target="_blank" >
                    <Icons.Add/>
                </IconButton>

            </Box>

            <Box
                direction='vertical'
                gap="12px"
                align='center'
            >
                <Text secondary size='small'>
                    {'React router <Link/> tag'}
                </Text>

                <IconButton as={ReactRouterLink} to="/home" >
                    <Icons.Add/>
                </IconButton>

            </Box>

            <Box
                direction='vertical'
                gap="12px"
                align='center'
            >
                <Text secondary size='small'>
                    {'Native <button/> tag'}
                </Text>

                <IconButton as="button" >
                    <Icons.Add/>
                </IconButton>

            </Box>
        </Box>

        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Button labels</Heading>
        </Box>

        <Box align='center'>
            <Tooltip content="Edit program">
                <IconButton priority='secondary'>
                    <Icons.Edit/>
                </IconButton>
            </Tooltip>
        </Box>

        <Box direction='vertical' gap="SP2" paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Small Layouts</Heading>
            <Text size='small'>Use icon buttons in small and crowded layouts</Text>
        </Box>
       <Layout>
            <Cell span={4}>
                <Proportion aspectRatio={1}>
                    <MediaOverlay skin='gradient' media="https://www.docs.wixdesignsystem.com/FoodExample2.jpg">
                        <MediaOverlay.Content placement='top-end' visible='always' >
                            <Tooltip content="Edit image">
                                <IconButton priority='secondary' skin='inverted' size='small' >
                                    <Icons.CropSmall/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip content="Mark as favorite">
                                <IconButton priority='secondary' skin='inverted' size='small' >
                                    <Icons.FavoriteSmall/>
                                </IconButton>
                            </Tooltip>

                            <PopoverMenu
                                textSize='small'
                                triggerElement={
                                    <Tooltip content="More actions">
                                        <IconButton priority='secondary' skin='inverted' size='small' >
                                            <Icons.MoreSmall/>
                                        </IconButton>
                                    </Tooltip>
                                }
                            >
                                <PopoverMenu.MenuItem text="Edit" />
                                <PopoverMenu.MenuItem text="Remove" skin='destructive' />

                            </PopoverMenu>

                        </MediaOverlay.Content>
                        <MediaOverlay.Content placement='bottom-start' visible='always' >
                            <Text light size='small' >
                                Pasta with Ricotta Cheese
                            </Text>
                        </MediaOverlay.Content>
                    </MediaOverlay>
                </Proportion>
            </Cell>
       </Layout>

       <Box direction='vertical' gap="SP2" paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Popover menu</Heading>
            <Text size='small'>Use icon buttons to open a Popover menu</Text>
        </Box>

        <Card hideOverflow>
            <Box minHeight={200} >
                {renderImage()}
                {renderContent()}
            </Box>
        </Card>

        <Box direction='vertical' gap="SP2" paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Low priority actions</Heading>
            <Text size='small'>use icon buttons for lower-priority actions that have no effect on the main user flow. example: to change the cover image of an audio</Text>
        </Box>

        <SidePanel onCloseButtonClick={()=>{}} skin='floating' width="280px" >
            <SidePanel.Header title="Audio Player Settings" />
            <SidePanel.Content noPadding >
                <SidePanel.Field>
                    <FieldSet
                        legend="Track cover image"
                        alignment='center'
                        columns='168px auto auto'
                    >
                        <Image width="156px" height="102px" src='https://www.docs.wixdesignsystem.com/TravelExample6.jpg' />

                        <Tooltip content="Change image" >
                            <IconButton size='small' skin='standard' priority='secondary' >
                                <Icons.RefreshSmall/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip content="Change image" >
                            <IconButton size='small' skin='standard' priority='secondary' >
                                <Icons.DeleteSmall/>
                            </IconButton>
                        </Tooltip>

                    </FieldSet>
                </SidePanel.Field>

                <SidePanel.Field>
                    <FormField  label="Source (URL)" >
                        <Input placeholder='Add link to the track' size='small' />
                    </FormField>
                </SidePanel.Field>
                <SidePanel.Field>
                    <FormField  label="Name" >
                        <Input value="Track Name" size='small' />
                    </FormField>
                </SidePanel.Field>
                <SidePanel.Field>
                    <FormField  label="Description" >
                        <InputArea
                            placeholder='Add a short description to promote your audio track.'
                            size='small'
                            minHeight='120px'
                            resizable
                        />
                    </FormField>
                </SidePanel.Field>
            </SidePanel.Content>

        </SidePanel>
            

        

    </Box>
  )
}

export default IconButtonComponent