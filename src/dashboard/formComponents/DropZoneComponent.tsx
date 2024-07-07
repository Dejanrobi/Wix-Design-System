import { AddItem, Box, Button, Card, Cell, Dropzone, EmptyState, FileUpload, Heading, Layout, Stepper, TextButton } from '@wix/design-system'
import React from 'react'

import * as Icons from '@wix/wix-ui-icons-common'

const DropZoneComponent = () => {
  return (
    <Box direction='vertical' gap="SP2"> 
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Add Item</Heading>
        </Box>

        <Card>
            <Card.Header
                title={
                    <Stepper
                        activeStep={1}
                        steps={[
                            { text: 'Prepare', type: 'completed' },
                            { text: 'Upload' },
                            { text: 'Match', type: 'disabled' },
                            { text: 'Label', type: 'disabled' }

                        ]}  
                    />
                }
            />
            <Card.Divider/>
            <Card.Content>
                <Layout gap="24px">
                    <Cell>
                        <Dropzone onDrop={()=>{}} >
                            <Dropzone.Overlay>
                                <Box
                                    direction='vertical'
                                    height="100%"
                                    boxSizing='border-box'
                                    border="dashed 1px"
                                    borderRadius="6px"
                                    borderColor='B20'
                                >
                                    <AddItem theme='filled' size='large' >
                                        Drop your images here
                                    </AddItem>
                                </Box>

                            </Dropzone.Overlay>

                            <Dropzone.Content>
                                <Box
                                    direction='vertical'
                                    border="dashed 1px"
                                    boxSizing='border-box'
                                    borderRadius="6px"
                                    padding="42px"
                                    borderColor='B20'
                                >
                                    <EmptyState
                                        title="Drag your images here"
                                        subtitle="Or upload images from your computer"
                                        image="https://www.docs.wixdesignsystem.com/generic_add_item_illustration.svg"

                                    >
                                        <FileUpload>
                                            {({ openFileUploadDialog }) =>(
                                                <TextButton
                                                    onClick={openFileUploadDialog}
                                                    prefixIcon={<Icons.Upload/>}
                                                >
                                                    Upload Images
                                                </TextButton>
                                            )}
                                        </FileUpload>

                                    </EmptyState>

                                </Box>
                            </Dropzone.Content>

                        </Dropzone>
                    </Cell>

                    <Cell>
                        <Box width="100%" align='space-between'>
                            <Button
                                size='small'
                                priority='secondary'
                                prefixIcon={<Icons.ChevronLeftSmall/>}
                            >Back</Button>
                            <Button size='small'>Next</Button>

                        </Box>
                    </Cell>
                </Layout>
            </Card.Content>
        </Card>
    </Box>
  )
}

export default DropZoneComponent