import { Avatar, Box, Button, Card, Checkbox, Dropdown, FieldSet, 
    FormField, Heading, IconButton, Image, ImageViewer, Input, Page, 
    Search, SidePanel, Table, TableActionCell, TableToolbar, Tabs 
} from '@wix/design-system'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

import React, { useState } from 'react'


const SidePanelComponent = () => {

    // Group content in settings panel
    const [selectedOption, setSelectedOption] = useState(0);

    const options = [
        { id: 0, value: 'Monday' },
        { id: 1, value: 'Sunday' },
    ]

    // DATA FILTER
    const [right, setRight] = useState(-440)
    const [records, setRecords] = useState(Array.from({ length: 20 }, (_, index) => index + 1));

    const columns = [
        {
            title: '',
            render: (row:any) => <Image width="42px" height="42px" />
        }
    ]


    const openPanel = () =>{
        setRight(0)
    }

    const closePanel = () =>{
        setRight(-440)
    }


    // QUICK VIEW
    const [quickViewRight, setQuickViewRight] = useState(-440)
    const [quickViewRecords, setQuickViewRecords] = useState([
        {
            name: "Jenny Wilson"
        },
        {
            name: "Robert Fox"
        },
        {
            name: "Albert Flored"
        },
        {
            name: "Floyd Miles"
        },
        {
            name: "Esther Howard"
        },
        {
            name: "Brooklyn Simmons"
        },
        {
            name: "Kathyn Murphy"
        },
        {
            name: "Dianne Russell"
        },
    ])


    const qucikViewColumns = [
        {
            title: '',
            render: (row:any) => <Avatar size='size36' name={row.name} />
        },
        {
            render: ()=>(
                <TableActionCell
                    size='small'
                    primaryAction={{
                        text: 'View'
                    }}
                />
            )
        }
    ]

    const openQuickViewPanel = ()=>{
        setQuickViewRight(0)
    }

    const closeQuickViewPanel = ()=>{
        setQuickViewRight(-440)
    }
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small'> Structure </Heading>

        <SidePanel onCloseButtonClick={()=>{}} >
            <SidePanel.Header title="Header" />
            <SidePanel.Content>
                <Box border="1px dotted" height="480px" align='center'>
                    <div>Content</div>
                </Box>
            </SidePanel.Content>
            <SidePanel.Footer>
                <Box border="1px dotted" height="36px" align='center'>
                    <div>Footer</div>
                </Box>
            </SidePanel.Footer>
        </SidePanel>

        <Heading size='small'> Skin </Heading>

        <Box gap="SP6">
            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header title="Standard" />
                <SidePanel.Content>
                    <Box  height="480px" >
                    
                    </Box>
                </SidePanel.Content>
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} skin='floating' width="288px" >
                <SidePanel.Header title="Floating" />
                <SidePanel.Content>
                    <Box  height="492px" >
                    
                    </Box>
                </SidePanel.Content>
            </SidePanel>

        </Box>

        <Heading size='small'> Width </Heading>
        
        <Box gap="SP6">
            <SidePanel onCloseButtonClick={()=>{}} width="300px" >
                <SidePanel.Header title="Narrow panel" />
                <SidePanel.Content>
                    <Box  height="360px" >
                    
                    </Box>
                </SidePanel.Content>
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} width="600px" >
                <SidePanel.Header title="Wide panel" />
                <SidePanel.Content>
                    <Box  height="360px" >
                    
                    </Box>
                </SidePanel.Content>
            </SidePanel>

        </Box>

        <Heading size='small'> Padding </Heading>

        <Box gap="SP6">
            <SidePanel onCloseButtonClick={()=>{}}  >
                <SidePanel.Header title="With padding" />
                <SidePanel.Content>
                    <Box border="1px dotted"  height="360px" >
                    
                    </Box>
                </SidePanel.Content>
                <SidePanel.Footer>
                    <Box border="1px dotted"   height="42px" >
                    
                    </Box>
                </SidePanel.Footer>
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} width="600px" >
                <SidePanel.Header title="No padding" />
                <SidePanel.Content noPadding={true} >
                    <Box border="1px dotted"  height="360px" >
                    
                    </Box>
                </SidePanel.Content>
                <SidePanel.Footer noPadding={true} >
                    <Box border="1px dotted"   height="42px" >
                    
                    </Box>
                </SidePanel.Footer>
            </SidePanel>

        </Box>

        <Heading size='small'> Dividers </Heading>
        <Box gap="SP6">
            <SidePanel onCloseButtonClick={()=>{}}  >
                <SidePanel.Header title="With Divider" />
                <SidePanel.Content>
                    <Box  height="360px" >
                    
                    </Box>
                </SidePanel.Content>
                <SidePanel.Footer>
                    <Box    height="42px" >
                    
                    </Box>
                </SidePanel.Footer>
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}}>
                <SidePanel.Header title="No Divider" showDivider={false} />
                <SidePanel.Content noPadding={true}  >
                    <Box   height="360px" >
                    
                    </Box>
                </SidePanel.Content>
                <SidePanel.Footer noPadding={true} showDivider={false} >
                    <Box   height="42px" >
                    
                    </Box>
                </SidePanel.Footer>
            </SidePanel>

        </Box>

        <Heading size='small'> Header </Heading>
        <Box direction='vertical' gap="SP4">
            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header title="Title" showDivider={true} />
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header title="Title" subtitle="Subtitle" showDivider={true} />
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header 
                    title="Title" 
                    subtitle="Subtitle" 
                    infoTooltipContent="Additional info here"
                    showDivider={true} 
                />
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} onHelpButtonClick={()=>{}} >
                <SidePanel.Header 
                    title="Title" 
                    subtitle="Subtitle" 
                    infoTooltipContent="Additional info here"
                    showDivider={true} 
                />
            </SidePanel>
        </Box>

        <Heading size='small'> Custom Header </Heading>

        <Box direction='vertical' gap="SP4">
            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header title="Title"  />
                <Box border="1px dotted" margin="0px 24px 12px 24px" height="42px" >

                </Box>
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header title="Title"  showDivider={false} >
                    <Tabs
                        items={[
                            { id: 1, title: 'First Tab' },
                            { id: 2, title: 'Second Tab' },
                        ]}
                        activeId={1}
                        type='uniformSide'
                        width="174px"
                    />
                </SidePanel.Header>
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header 
                    title="Title" 
                    
                >
                    <Box margin="0px 24px 12px 24px" >
                        <Search/>
                    </Box>
                </SidePanel.Header>
            </SidePanel>

            
        </Box>

        <Heading size='small'> Text Overflow </Heading>
        <Box direction='vertical' gap="SP4">
            <SidePanel onCloseButtonClick={()=>{}}>
                <SidePanel.Header
                    title="A long title that needs to wrap into multiple lines"
                    subtitle="A long title that needs to wrap into multiple lines because its so long"
                    showDivider={true}
                />
            </SidePanel>

            <SidePanel onCloseButtonClick={()=>{}}>
                <SidePanel.Header
                    ellipsis
                    maxLines={1}
                    title="A long title that needs to wrap into multiple lines"
                    subtitle="A long title that needs to wrap into multiple lines because its so long"
                    showDivider={true}
                />
            </SidePanel>
        </Box>

        <Heading size='small'> Content sections </Heading>
        <Box direction='vertical' gap="SP4">
            <SidePanel>
                <SidePanel.Header title="Content sections" />
                <SidePanel.Content>
                    <Box height="150px" border="1px dotted"></Box>
                </SidePanel.Content>
                <SidePanel.Divider/>
                <SidePanel.Content>
                    <Box height="150px" border="1px dotted"></Box>
                </SidePanel.Content>
                <SidePanel.Divider/>
                <SidePanel.Content>
                    <Box height="150px" border="1px dotted"></Box>
                </SidePanel.Content>
            </SidePanel>
            

        </Box>

        <Heading size='small'> Content Fields </Heading>

        <Box direction='vertical' gap="SP4">
            <SidePanel onCloseButtonClick={()=>{}} >
                <SidePanel.Header title="Content fields" />
                <SidePanel.Field>
                    <Box border="1px dotted" height="48px" >

                    </Box>
                </SidePanel.Field>
                <SidePanel.Field>
                    <Box border="1px dotted" height="48px" >

                    </Box>
                </SidePanel.Field>
                <SidePanel.Field>
                    <Box border="1px dotted" height="48px" >

                    </Box>
                </SidePanel.Field>
                <SidePanel.Field>
                    <Box border="1px dotted" height="48px" >

                    </Box>
                </SidePanel.Field>
            </SidePanel>
        </Box>

        <Heading size='small'> Custom Footer </Heading>
        <Box direction='vertical' gap="SP4">
            <SidePanel>
                <SidePanel.Footer>
                    <Box border="1px dotted" height="36px" ></Box>
                </SidePanel.Footer>
            </SidePanel>

            <SidePanel>
                <SidePanel.Footer>
                   <Button priority='secondary' fullWidth>
                     Close
                   </Button>
                </SidePanel.Footer>
            </SidePanel>

            <SidePanel>
                <SidePanel.Footer>
                    <Box align='right'>
                        <Box  gap="12px" >
                                <Button priority='secondary' >Cancel</Button>
                                <Button>Save</Button>
                        </Box>
                    </Box>
                   
                </SidePanel.Footer>
            </SidePanel>
        </Box>

        <Heading size='small'> Draggable </Heading>

        <Box direction='vertical' gap="SP4">
            <SidePanel
                onCloseButtonClick={()=>{}}
                skin='floating'
                width="288px"
                draggable
            >
                <SidePanel.Header title="Draggable panel" />
                <SidePanel.Content>
                    <Box border="1px dotted" height="492px">

                    </Box>
                </SidePanel.Content>
            </SidePanel>
        </Box>

        <Heading size='medium'> Common Use Cases </Heading>
        <Heading size='small'> Settings panel </Heading>

        <Box direction='vertical' gap="SP4">
            <SidePanel onCloseButtonClick={()=>{}} skin='floating' width="288px">
                <SidePanel.Header title="Button Settings" />
                <SidePanel.Field>
                    <FormField label="Choose what displays" >
                        <Dropdown
                            size='small'
                            selectedId={0}
                            options={[
                                { id: 0, value: 'Text and icon' },
                                { id: 1, value: 'Icon only' },
                                { id: 2, value: 'Text only' },
                                { id: 3, value: 'Nothing' }
                                
                            ]}
                            
                        />
                    </FormField>
                </SidePanel.Field>

                <SidePanel.Field>
                    <FormField label="Text" >
                        <Input size='small' value="New Folder" />
                    </FormField>
                </SidePanel.Field>
                
                <SidePanel.Field>
                    <FieldSet
                        legend="Icon"
                        columns='auto 30px 20px'
                        gap='small'
                        alignment='center'
                    >
                        <ImageViewer height="102px" width="160px" />
                        <IconButton size='small' priority='secondary' >
                            <Icons.ReplaceSmall/>
                        </IconButton>
                        <IconButton size='small' priority='secondary' >
                            <Icons.DeleteSmall/>
                        </IconButton>
                    </FieldSet>
                </SidePanel.Field>

                <SidePanel.Field>
                    <FormField label="Links to" >
                        <Button
                            size='small'
                            priority='secondary'
                            fullWidth
                            suffixIcon={<Icons.LinkSmall/>}
                        >
                            Choose a link
                        </Button>
                    </FormField>
                </SidePanel.Field>

            </SidePanel>
        </Box>

        <Heading size='small'> Group Content in Settings Panel </Heading>
        <SidePanel
            maxHeight="576px"
            width="288px"
            skin='floating'
            onCloseButtonClick={()=>{}}
        >
            <SidePanel.Header title="Calendar Settings" />
            <SidePanel.Content noPadding >
                <SidePanel.Field>
                    <FormField label="Week starts on" >
                        <Dropdown
                            value=""
                            size='small'
                            options={options}
                            onSelect={(option)=>setSelectedOption(option.id)}
                            selectedId={selectedOption}
                        />
                    </FormField>
                </SidePanel.Field>

                <SidePanel.Field>
                    <FieldSet
                        legend="Set active days"
                        legendSize='small'
                        legendPlacement='top'
                        direction='vertical'
                        gap="small"
                    >
                        <Checkbox size='small' checked>
                            Monday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Tuesday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Wednesday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Thursday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Friday
                        </Checkbox>
                        <Checkbox size='small'>Saturday</Checkbox>
                        <Checkbox size='small'>Sunday</Checkbox>
                    </FieldSet>
                </SidePanel.Field>

            </SidePanel.Content>

        </SidePanel>

        <Heading size='small'> Data Filter </Heading>
        <div style={{ display: 'block', overflow: 'hidden', position: 'relative' }} >
           <Page height='780px'>
                <Page.Header  title="Products"/>
                <Page.Content>
                    <Card>
                        <Table data={records} columns={columns} rowVerticalPadding='tiny' >
                            <TableToolbar>
                                <TableToolbar.ItemGroup position='start' >
                                    <TableToolbar.Item>
                                        <TableToolbar.Label>7 products</TableToolbar.Label>
                                    </TableToolbar.Item>
                                </TableToolbar.ItemGroup>
                                <TableToolbar.ItemGroup position='end' >
                                    <TableToolbar.Item>
                                        <Button
                                            size='small'
                                            priority='secondary'
                                            prefixIcon={<Icons.ContentFilterSmall/>}
                                            onClick={openPanel}
                                        >
                                            Filter
                                        </Button>
                                    </TableToolbar.Item>

                                    <TableToolbar.Item>
                                        <Search size='small' />
                                    </TableToolbar.Item>
                                </TableToolbar.ItemGroup>
                            </TableToolbar>
                            <Table.Content/>

                        </Table>
                    </Card>
                </Page.Content>
           </Page>

           <div
            style={{
                position: 'absolute',
                top: 0,
                right: `${right}px`,
                height: '100%',
                boxShadow: '0 3px 24px 0 rgba(22, 45, 61, 0.18), 0 8px 8px 0 rgba(22, 45, 61, 0.12)',
                transition: 'right 0.4s ease 0s',
                zIndex: 1000
            }}
           >
           <SidePanel onCloseButtonClick={closePanel} >
                <SidePanel.Header  title="Filter"/>
                <SidePanel.Footer>
                    <Button onClick={closePanel} priority='secondary' fullWidth >
                        Close
                    </Button>
                </SidePanel.Footer>
           </SidePanel>

           </div>

        </div>

        <Heading size='small'> Quick View </Heading>

        <div
            style={{ display: 'block', overflow: 'hidden', position: 'relative' }}
        >
            <Page height='780px' >
                <Page.Header title="Contacts" />
                <Page.Content>
                    <Card>
                        <Table data={quickViewRecords} columns={qucikViewColumns} onRowClick={openQuickViewPanel}>
                            <TableToolbar>
                                <TableToolbar.ItemGroup>
                                    <TableToolbar.Item>
                                        <TableToolbar.Label>8 contacts</TableToolbar.Label>
                                    </TableToolbar.Item>
                                </TableToolbar.ItemGroup>
                               
                            </TableToolbar>
                            <Table.Content/>
                        </Table>
                    </Card>
                </Page.Content>
            </Page>

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: `${quickViewRight}px`,
                    height: '100%',
                    boxShadow: '0  3px 24px 0 rgba(22, 45, 61, 0.18), 0  8px 8px  0 rgba(22, 45, 61, 0.12)',
                    transition: 'right 0.4s ease 0s',
                    zIndex: 1000
                }}
            >

                <SidePanel onCloseButtonClick={closeQuickViewPanel} >
                    <SidePanel.Header  showDivider={false}>
                        <Box direction='vertical' align='center' marginBottom="12px">
                            <Avatar size='size72' />

                        </Box>
                        <Tabs
                            items={[
                                { id: 1, title: 'Overview' },
                                { id: 2,  title: 'Inbox' }
                            ]}

                            activeId={1}
                            type='uniformSide'
                            width="174px"
                        />
                    
                    </SidePanel.Header>

                </SidePanel>
            </div>

        </div>

    </Box>
  )
}

export default SidePanelComponent
