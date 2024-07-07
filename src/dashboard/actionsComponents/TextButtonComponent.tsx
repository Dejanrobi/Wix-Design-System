import { Box, Button, Card, Heading, Image, MarketingLayout, Page, Text, TextButton } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const TextButtonComponent = () => {
  return (
    <Box direction='vertical' gap="SP2" >
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Inline Links</Heading>
        </Box>

        <Page.Header
            title="Subscriptions"
            subtitle={
                <Box gap="SP1" >
                    <Text secondary>Manage all recurring payments from Pricing Plans, Stores & Invoices</Text>
                    <TextButton underline='always' >
                        Learn more about Subscriptions
                    </TextButton>
                </Box>
            }
            actionsBar={<Button prefixIcon={<Icons.Add/>} >Sell Pricing Plan</Button>}
        />

        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>External Links</Heading>
        </Box>

        <Card>
            <MarketingLayout
                title="Create an email campaign"
                description={
                    <Text size='small' secondary >
                        Send updates, offers or newsletters and keep in touch with your customers. 

                        <Box inline>

                            <TextButton 
                                size='small'
                                underline='always'
                                suffixIcon={<Icons.ExternalLinkSmall/>}
                            >
                                Learn more about email campaigns
                            </TextButton>
                        </Box>
                    </Text>
                }

                actions={<Button size='small'>Create Campaign</Button>}
                size='tiny'
                hiddenBadge
                alignItems='stretch'
                image={
                    <Box width="100%" align='right' >
                        <Image
                            width="120px"
                            src='https://www.docs.wixdesignsystem.com/PromotionalPromoteMarketingHomeEmail.svg'
                            transparent
                        />
                    </Box>
                }
            />
        </Card>

        

        
    </Box>
  )
}

export default TextButtonComponent