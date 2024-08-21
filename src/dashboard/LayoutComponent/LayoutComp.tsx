import { Box, Button, Card, Cell, FormField, Heading, Input, InputArea, Layout, Page, ToggleSwitch } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const LayoutComp = () => {

    // Card layout
    const [checked, setChecked] = useState(true);

  return (
    <Box width="100%" direction='vertical' gap="SP6" paddingTop="SP4" paddingBottom="SP4" >
        <Heading size='small'>Structure</Heading>

        <Layout>
            <Cell>
                <Box border="1px dotted" align='center'>Cell</Box>
            </Cell>
        </Layout>

        <Heading size='small'>Columns</Heading>

        <Layout>
            <Cell>
                <Box border="1px dotted" align='center'>12 cols</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>6 cols</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>6 cols</Box>
            </Cell>

            <Cell span={4} >
                <Box border="1px dotted" align='center'>4 cols</Box>
            </Cell>
            <Cell span={4} >
                <Box border="1px dotted" align='center'>4 cols</Box>
            </Cell>
            <Cell span={4} >
                <Box border="1px dotted" align='center'>4 cols</Box>
            </Cell>

            <Cell span={3} >
                <Box border="1px dotted" align='center'>3 cols</Box>
            </Cell>
            <Cell span={3} >
                <Box border="1px dotted" align='center'>3 cols</Box>
            </Cell>
            <Cell span={3} >
                <Box border="1px dotted" align='center'>3 cols</Box>
            </Cell>
            <Cell span={3} >
                <Box border="1px dotted" align='center'>3 cols</Box>
            </Cell>

            <Cell span={2} >
                <Box border="1px dotted" align='center'>2 cols</Box>
            </Cell>
            <Cell span={2} >
                <Box border="1px dotted" align='center'>2 cols</Box>
            </Cell>
            <Cell span={2} >
                <Box border="1px dotted" align='center'>2 cols</Box>
            </Cell>
            <Cell span={2} >
                <Box border="1px dotted" align='center'>2 cols</Box>
            </Cell>
            <Cell span={2} >
                <Box border="1px dotted" align='center'>2 cols</Box>
            </Cell>
            <Cell span={2} >
                <Box border="1px dotted" align='center'>2 cols</Box>
            </Cell>

            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
            <Cell span={1} >
                <Box border="1px dotted" align='center'>1 col</Box>
            </Cell>
        </Layout>


        <Heading size='small'>Rows</Heading>

        <Layout>
            <Cell span={6}  rows={6}>
                <Box height="100%" border="1px dotted" align='center'>6 rows</Box>
            </Cell>

            <Cell span={6} >
                <Box border="1px dotted" align='center'>1 row</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>1 row</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>1 row</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>1 row</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>1 row</Box>
            </Cell>
            <Cell span={6} >
                <Box border="1px dotted" align='center'>1 row</Box>
            </Cell>

        </Layout>

        <Heading size='small'>Row Height</Heading>

        <Layout cols={1} gap="60px" >
            <Layout>
                <Cell span={4} >
                    <Box border="1px dotted" align='center'>
                        This layout uses the default sizing which stretches cells vertically to
                        match the item of greatest height in the row. The height of the first
                        row is different than the second row, because of the text in this cell.
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box height="100%" border="1px dotted" align='center'>
                        1 row
                    </Box>
                </Cell>
                <Cell span={4} >
                    <Box height="100%" border="1px dotted" align='center'>
                        1 row
                    </Box>
                </Cell>
                <Cell span={4} >
                    <Box height="100%" border="1px dotted" align='center'>
                        2 row
                    </Box>
                </Cell>
                <Cell span={4} >
                    <Box height="100%" border="1px dotted" align='center'>
                        2 row
                    </Box>
                </Cell>
                <Cell span={4} >
                    <Box height="100%" border="1px dotted" align='center'>
                        2 row
                    </Box>
                </Cell>
            </Layout>

            <Layout rowHeight="1fr" >
                <Cell span={4} >
                    <Box border="1px dotted" align='center'>
                        Here all the rows are sized equally, according to the item with the
                        greatest height in the layout. All of the rows are set to 1fr and have
                        the same height.
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        1 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        1 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        2 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        2 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        2 row
                    </Box>
                </Cell>
                
            </Layout>

            <Layout rowHeight="60px" >
                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        Here the row height is set in pixels, all cells in all rows have the
                        same height.
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        1 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        1 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        2 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        2 row
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">
                        2 row
                    </Box>
                </Cell>
            </Layout>

        </Layout>

        <Heading size='small'>Gap</Heading>

        <Layout cols={2} >
            <Layout gap="24px" >
                <Cell>
                    <Box border="1px dotted" align='center' >
                        24px gap (default)
                    </Box>
                </Cell>

                <Cell>
                    <Box border="1px dotted" align='center' >
                        24px gap 
                    </Box>
                </Cell>


                <Cell>
                    <Box border="1px dotted" align='center' >
                        24px gap 
                    </Box>
                </Cell>

            </Layout>

            <Layout gap="0px" >

                <Cell>
                    <Box border="1px dotted" align='center' >
                        No gap 
                    </Box>
                </Cell>

                <Cell>
                    <Box border="1px dotted" align='center' >
                        No gap 
                    </Box>
                </Cell>

                <Cell>
                    <Box border="1px dotted" align='center' >
                        No gap 
                    </Box>
                </Cell>

            </Layout>
        </Layout>

        <Heading size='small'>Align Items</Heading>

        <Box direction='vertical' gap="SP6">
            <Layout>
                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">Stretched</Box>
                </Cell>
                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">Stretched</Box>
                </Cell>
                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="120px">Stretched</Box>
                </Cell>
            </Layout>

            <Layout alignItems='flex-start' >
                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">Top aligned</Box>
                </Cell>
                <Cell span={4} >
                    <Box border="1px dotted" align='center' height="100%">Top aligned</Box>
                </Cell>
                <Cell span={4}>
                    <Box border="1px dotted" align='center' height="120px" >Top aligned</Box>
                </Cell>
            </Layout>

        </Box>


        <Heading size='small'>Justify Items</Heading>

        <Box direction='vertical' gap="SP6" >
            <Layout>
                <Cell span={4} >
                    <Box border="1px dotted" align='center' >
                        Stretched
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' >
                        Stretched
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' >
                        Stretched
                    </Box>
                </Cell>
            </Layout>

            <Layout justifyItems='end' >
                <Cell span={4} >
                    <Box border="1px dotted" align='center' >
                       End Aligned
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' >
                         End Aligned
                    </Box>
                </Cell>

                <Cell span={4} >
                    <Box border="1px dotted" align='center' >
                        End Aligned
                    </Box>
                </Cell>
            </Layout>
        </Box>

        <Heading size='medium'>Common Use Cases</Heading>

        <Heading size='small'>Card Layout</Heading>

        <Card>
            <Card.Header title="Menu info" />
            <Card.Divider/>

            <Card.Content>
                <Layout>
                    <Cell span={8} >
                        <FormField label="Name" >
                            <Input/>
                        </FormField>
                    </Cell>
                    <Cell span={8} >
                        <FormField label="Description" >
                            <InputArea
                                minHeight={120}
                                resizable
                                placeholder='Get people excited about your menu and food'
                            />
                        </FormField>
                    </Cell>

                    <Cell>
                        <Box>
                            <FormField label="Visible for customers" labelPlacement='right'  >
                                <ToggleSwitch
                                    checked={checked}
                                    onChange={()=>{setChecked(!checked)}}
                                    size='medium'
                                />

                            </FormField>
                        </Box>
                    </Cell>
                </Layout>
            </Card.Content>
        </Card>

        <Heading size='small'>Page Layout</Heading>

       
        <Page>
            <Page.Header title="Main Menu" ></Page.Header>

            <Page.Content>
                <Layout>
                    <Cell>
                        <Layout>
                            <Cell span={8} >
                                <Card>
                                    <Card.Header
                                        title="Sections"
                                        suffix={
                                            <Button size='small' prefixIcon={<Icons.AddSmall/>} >
                                                New Section
                                            </Button>
                                        }
                                    />

                                    <Card.Divider/>
                                    <Box height="480px" />
                                </Card>
                            </Cell>

                            <Cell span={4} >
                                <Card>
                                    <Card.Header
                                        title="Menu info"
                                        suffix={
                                            <Button
                                                size='small'
                                                priority='secondary'
                                                prefixIcon={<Icons.EditSmall/>}
                                            >
                                                Edit
                                            </Button>
                                        }
                                    />
                                    <Card.Divider/>
                                    <Box height="240px" />
                                </Card>
                            </Cell>
                        </Layout>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>
    </Box>
  )
}

export default LayoutComp