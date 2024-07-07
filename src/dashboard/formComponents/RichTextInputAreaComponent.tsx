import { Box, Card, FormField, Heading, RichTextInputArea } from '@wix/design-system'
import React from 'react'

const RichTextInputAreaComponent = () => {
  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Manage Panel</Heading>
        </Box>

        <Card>
            <Card.Header title="Event description" />
            <Card.Divider/>
            <Card.Content>
                <FormField label="Add more details about the event" >
                    <RichTextInputArea
                        minHeight='120px'
                        placeholder='Add details dates, schedule and speakers.'
                    />

                </FormField>
            </Card.Content>
        </Card>
    </Box>
  )
}

export default RichTextInputAreaComponent