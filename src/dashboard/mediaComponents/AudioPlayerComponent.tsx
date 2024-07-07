import { AudioPlayer, Avatar, Box, Button, Card, Divider, Heading, IconButton, Text } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const AudioPlayerComponent = () => {
  return (
    <Box direction='vertical' gap="SP2">
        <Heading size='small'>Inbox</Heading>
        <Box paddingTop="SP4">
        </Box>

        <Card>
          <Box verticalAlign='middle' align='space-between' padding="SP2 SP3" >
            <Box gap="SP2" verticalAlign='middle' >
              <Avatar name='Sam Lee' size='size30' />
              <Text>Sam Lee</Text>
            </Box>

            <Box gap="SP2" >
              <IconButton skin='inverted' > 
                <Icons.More/>
              </IconButton>

              <Button skin='inverted'>Archives</Button>
            </Box>
          </Box>

          <Divider/>

          <Card.Content>
            <Box
              border="1px solid"
              borderColor='D60'
              borderRadius={12}
              verticalAlign='middle'
              padding="3px SP2 3px SP1"
              width="fit-content"
              gap="6px"
              marginBottom="SP2"
            >
              <Icons.Phone/>
              <Heading size='extraTiny'>Missed call</Heading>

            </Box>

            <Box
              backgroundColor='D70'
              padding="SP3"
              borderRadius={12}
              width="45%"
              direction='vertical'
              gap="6px"
            >

              <Box
                marginBottom="SP2"
                direction='horizontal'
                verticalAlign='middle'
              >
                <AudioPlayer src='https://www.docs.wixdesignsystem.com/AudioTrack1.mp3'/>
                <Box marginLeft="18px">
                  <IconButton size='medium' skin='inverted'>
                    <Icons.Download/>
                  </IconButton>
                </Box>
              </Box>

              <Text size='small'>Message Transcript:</Text>
              <Text size='small'>
                "Hey i know you are busy right now, could you give me a call back when you have a chance."
              </Text>

              <Box verticalAlign='middle' gap="6px" marginTop="SP1">
                <Icons.PhoneFilledSmall/>
                <Text size='tiny'>Voicemail</Text>
              </Box>

            </Box>
          </Card.Content>
        </Card>
    </Box>
  )
}

export default AudioPlayerComponent