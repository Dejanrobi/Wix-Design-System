import { Box, Button, Card, Divider, Heading, Image, MarketingLayout, Text, TextButton, ToggleSwitch } from '@wix/design-system'
import React, { useState } from 'react'

const DividerComponent = () => {

    // Lists
    const ListItem = ({ title,subtitle }:any)=>{
        const [checked, setChecked] = useState(true)

        return (
            <Box align='space-between' >
                <Box direction='vertical' >
                    <Text weight='normal'>{title}</Text>
                    <Text size='small' secondary>{subtitle}</Text>
                </Box>

                <Box gap="24px" verticalAlign='middle' >
                    <ToggleSwitch
                        size='medium'
                        checked={checked}
                        onChange={()=>setChecked(!checked)}
                    />

                    <TextButton>Edit</TextButton>
                </Box>
            </Box>
        )
    }
  return (
    <Box direction='vertical' gap="SP6" paddingTop="SP4" paddingBottom="SP4" width="100%" >

        <Heading size='small' >Direction</Heading>

        <Box direction='vertical' gap="SP6" width="100%">
            <Box>Horizontal</Box>
            <Divider direction='horizontal' />
            <Box>Vertical</Box>
            <Box align='space-between' height="50px" width="100%"  >
                <Divider direction='vertical' />
                <Divider direction='vertical' />
                <Divider direction='vertical' />
                <Divider direction='vertical' />
                <Divider direction='vertical' />
            </Box>
        </Box>

        <Heading size='small' >Skin</Heading>

        <Box direction='vertical' gap="SP6" >
            <Divider skin='light' />
            <Divider skin='dark' />
            <Divider skin='standard' />
            <Divider skin='warning' />
            <Divider skin='destructive' />
            <Divider skin='success' />
            <Divider skin='premium' />
        </Box>

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Lists</Heading>

        <Card>
            <Card.Header title="Default emails" />
            <Card.Divider/>

            <Card.Content>
                <Box direction='vertical' gap="18px" >
                    <ListItem
                        title="Confirmation"
                        subtitle="Let guests know their sport is confirmed"
                    />

                    <Divider/>

                    <ListItem
                        title="Reminder"
                        subtitle="Send a friendly reminder when the event is coming up"
                    />

                    <Divider/>

                    <ListItem
                        title="Cancellation"
                        subtitle="Notify guest if this event is canceled"
                    />

                </Box>
            </Card.Content>
        </Card>

        <Heading size='small' >Seperated Content</Heading>

        <Card>
            <MarketingLayout
                title="Add sessions to get booked"
                description="Set when this service is offered and the staff who provided it."
                actions={<Button size='small' >Add Sessions</Button>}
                size='tiny'
                image={
                    <Box align='right' >
                        <Image
                            transparent
                            width="120px"
                            height="120px"
                            src='https://www.docs.wixdesignsystem.com/PromotionalBookingsUpgrade.svg'

                        />
                    </Box>
                }
            />

            <Divider/>
            <Box padding="12px 30px" >
                <Text size='tiny' skin='standard' >
                    You can also add sessions directly from your <a>Calendar</a>
                </Text>

            </Box>
        </Card>

        


    </Box>
  )
}

export default DividerComponent