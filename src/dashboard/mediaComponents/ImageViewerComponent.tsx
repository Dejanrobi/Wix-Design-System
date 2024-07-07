import { Box, Card, Cell, FormField, Heading, ImageViewer, Input, InputArea, Layout } from '@wix/design-system'
import React from 'react'

const ImageViewerComponent = () => {
  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small' >Dimensions</Heading>
        </Box>

        <ImageViewer width="35%" height="240px" />

        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small' >States</Heading>
        </Box>

        <Box paddingTop="SP2" paddingBottom="SP2">
            <Heading size='tiny' >No image source</Heading>
        </Box>

        <ImageViewer/>

        <Box paddingTop="SP2" paddingBottom="SP2">
            <Heading size='tiny' >Image source present</Heading>
        </Box>

        <ImageViewer imageUrl='https://www.docs.wixdesignsystem.com/example.jpg'/>

        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small' >Common Use Cases</Heading>
        </Box>
        <Box paddingTop="SP2" paddingBottom="SP2">
            <Heading size='tiny' >Form</Heading>
        </Box>

        <Card>
            <Card.Header title="Program info" />
            <Card.Divider/>

            <Card.Content>
                <Layout>
                    <Cell span={8} >
                        <Box direction='vertical' gap="12px">
                            <FormField label="Program name" required>
                                <Input value="Sugar Reset" />
                            </FormField>

                            <FormField label="Description" >
                                <InputArea
                                    value='Want to feel better, have more energy and trim down your waistline at the same time? Removing refined and added sugar from your diet is for you!'
                                    resizable
                                    maxLength={100}
                                    hasCounter
                                    minHeight=''
                                />
                            </FormField>
                        </Box>

                    </Cell>

                    <Cell span={4}>
                        <FormField label="Cover image">
                            <ImageViewer imageUrl='https://www.docs.wixdesignsystem.com/FoodExample1.jpg' height="218px"/>
                        </FormField>
                    </Cell>
                </Layout>
            </Card.Content>
        </Card>

    </Box>
  )
}

export default ImageViewerComponent
