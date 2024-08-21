import { Box, Button, Card, Cell, EmptyState, FormField, Heading, Input, Layout, TextButton } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const CardContentComponent = () => {
  return (
    <Box direction='vertical' gap="SP6" >

        <Heading size='small' >Size</Heading>

        <Box direction='vertical' gap="SP4"  >
            <Card>
                <Card.Content size='medium' >
                    <Box height="180px" align='center' border="1px dotted" >
                        Medium padding
                    </Box>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content size='large' >
                    <Box height="180px" align='center' border="1px dotted" >
                        Large padding
                    </Box>
                </Card.Content>
            </Card>
        </Box>

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Structured Content</Heading>

        <Card>
            <Card.Header
                title="Plan info"
                subtitle="Start by giving your plan a name and tell people what is the plan"
            />

            <Card.Divider/>
            <Card.Content>
                <Layout>
                    <Cell span={8} >
                        <FormField label="Plan name" required >
                            <Input border='default' placeholder='e.g., Silver membership' />
                        </FormField>
                    </Cell>

                    <Cell span={8} >
                        <FormField label="Tagline (optional)"  >
                            <Input 
                                border='default' 
                                placeholder='e.g., Perfect for beginners looking for weekly classes' 
                            />
                        </FormField>
                    </Cell>

                    <Cell span={12} >
                        <Card.Divider/>
                    </Cell>

                    <Cell span={8} >
                        <Box direction='vertical' gap="2" >
                            <FormField
                                label="What's included in this plan?"
                                infoContent="We recommend adding no more than 5, so clients are not overwhelmed."
                            >
                                <Input
                                    border='default'
                                    placeholder='e.g., Unlimited yoga classes'
                                />

                            </FormField>

                            <TextButton size='small' prefixIcon={<Icons.Add/>} >
                                Add More
                            </TextButton>
                        </Box>

                    </Cell>
                </Layout>
            </Card.Content>
        </Card>

        <Heading size='small' >Empty State</Heading>

        <Card>
            <Card.Header
                title="Photo album"
                suffix={
                    <Button size='small' prefixIcon={<Icons.AddSmall/>} >
                        Add Image
                    </Button>
                }
            />

            <Card.Divider/>

            <Card.Content size='medium' >
                <EmptyState
                    theme='section'
                    title="Add your first image"
                    subtitle="Choose the images that will be included in this album."
                >
                    <TextButton prefixIcon={<Icons.Add/>}>Add Image</TextButton>
                </EmptyState>
            </Card.Content>
        </Card>
    </Box>
  )
}

export default CardContentComponent