import { Box, Card, Divider, Heading, Text, ToggleSwitch } from '@wix/design-system'
import React, { useState } from 'react'

const ToggleSwitchComponent = () => {
 
    const renderListItem = ({ title, subtitle, padding, toggleChecked }:{title:string, subtitle:string, padding:string, toggleChecked:boolean}) => {

        const [checked, setChecked] = useState(toggleChecked);

        return (
            <Box verticalAlign='middle' align='space-between' padding={padding} >
                <Box direction='vertical'>
                    <Text weight='normal'>{title}</Text>
                    <Text>{subtitle}</Text>
                </Box>
                <ToggleSwitch checked={checked} onChange={()=> setChecked(!checked)} />
            </Box>
        )
    }

  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Settings</Heading>
        </Box>

        <Card>
            <Card.Header
                title="Default emails"
                subtitle="Send default notifications about this event."
            />
            <Card.Divider/>
            <Card.Content>
                <Box direction='vertical'>
                    {renderListItem({
                        title: 'Confirmation',
                        subtitle: 'Let guests know their spot is confirmed',
                        padding: '0px 0px 18px',
                        toggleChecked: false
                    })}
                    <Divider/>

                    {
                        renderListItem({
                            title: 'Reminder',
                            subtitle: 'Send a friendly reminder when the event is coming up.',
                            padding: '18px 0px',
                            toggleChecked: true
                        })
                    }
                    <Divider/>
                    {
                        renderListItem({
                            title: 'Cancelation',
                            subtitle: 'Notify guests if this event is canceled.',
                            padding: '18px 0px 0px',
                            toggleChecked: true
                        })
                    }
                </Box>
            </Card.Content>
        </Card>

    </Box>
  )
}

export default ToggleSwitchComponent