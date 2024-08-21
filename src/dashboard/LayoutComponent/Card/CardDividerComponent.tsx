import { Box, Card, Cell, Checkbox, FormField, Heading, ImageViewer, Input, InputArea, Layout, Slider } from '@wix/design-system'
import React, { useState } from 'react'

const CardDividerComponent = () => {

    const [value, setValue] = useState(50)

    // content grouping
    const [checked, setChecked] = useState({
        vegan: false,
        vegeterian: false,
        glutenFree: false,
        organic: false
    })
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Header Seperation</Heading>

        <Card>
            <Card.Header
                title="Attachment size"
                subtitle="Save storage space by setting a file size limit."
            />

            <Card.Divider/>

            <Card.Content>
                <Layout>
                    <Cell>
                        <FormField label="Set a max file size (MB)" >
                            <Box gap="12px" >
                                <Box display='block' width="100%" >
                                    <Slider
                                        onChange={setValue}
                                        min={0}
                                        max={500}
                                        value={value}
                                        displayMarks={false}

                                    />

                                </Box>

                                <Box width="60px" >
                                    <Input
                                        value={value}
                                        onChange={(e)=>setValue(e.target.value)}
                                    />

                                </Box>

                            </Box>
                        </FormField>
                    </Cell>
                </Layout>
            </Card.Content>
        </Card>

        <Heading size='small' >Content Grouping</Heading>

        <Card>
            <Card.Header title="New dish" />

            <Card.Divider/>

            <Card.Content>
                <Layout>
                    <Cell span={4} >
                        <FormField label="Image" >
                            <ImageViewer width="100%" height="180px" />
                        </FormField>
                    </Cell>

                    <Cell span={8} >
                        <Layout>
                            <Cell span={6} >
                                <FormField label="Name" >
                                    <Input value="" />
                                </FormField>
                            </Cell>

                            <Cell span={3} >
                                <FormField label="Price" >
                                    <Input value="0" prefix={<Input.Affix>$</Input.Affix>} />
                                </FormField>
                            </Cell>

                            <Cell span={3} >
                                <FormField label="Tax" >
                                    <Input value="0" prefix={<Input.Affix>$</Input.Affix>} />
                                </FormField>
                            </Cell>

                            <Cell  >
                                <FormField label="Description" >
                                    <InputArea
                                        placeholder='Enter more details about the dish.'
                                        resizable
                                        rows={3}
                                    />
                                </FormField>
                            </Cell>
                        </Layout>

                    </Cell>

                    <Cell span={12} >
                        <Card.Divider/>

                    </Cell>

                    <Cell span={12} >
                        <FormField label="Labels" >
                            <Box direction='horizontal' gap="4" >
                                <Checkbox
                                    onChange={()=>{
                                        setChecked({...checked, vegan: !checked.vegan})
                                    }}

                                    checked={checked.vegan}
                                >
                                    Vegan
                                </Checkbox>

                                <Checkbox
                                    onChange={()=>{
                                        setChecked({...checked, vegeterian: !checked.vegeterian})
                                    }}

                                    checked={checked.vegeterian}
                                >
                                    Vegeterian
                                </Checkbox>

                                <Checkbox
                                    onChange={()=>{
                                        setChecked({...checked, glutenFree: !checked.glutenFree})
                                    }}

                                    checked={checked.glutenFree}
                                >
                                    Gluten Free
                                </Checkbox>

                                <Checkbox
                                    onChange={()=>{
                                        setChecked({...checked, organic: !checked.organic})
                                    }}

                                    checked={checked.organic}
                                >
                                    Organic
                                </Checkbox>

                            </Box>

                        </FormField>

                    </Cell>
                </Layout>
            </Card.Content>
        </Card>
    </Box>
  )
}

export default CardDividerComponent