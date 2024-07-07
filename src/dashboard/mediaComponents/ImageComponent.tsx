import { Box, Button, Heading, IconButton, Image, Text } from '@wix/design-system'
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const ImageComponent = () => {

    const renderImage = ()=>(
        <Image
            src='https://www.docs.wixdesignsystem.com/TravelExample7.jpg'
            borderRadius="15px 0px 0px 15px"
            height="200px"
            width="230px"
        />
    )

    const renderContent = ()=>(
        <Box
            direction='vertical'
            verticalAlign='space-between'
            padding="24px 29px 27px"
            backgroundColor='D80'
            flexGrow={1}
            borderRadius="0px 15px 15px 0px"
        >
            <Box direction='vertical'>
                <Text weight='bold'> Sunset </Text>
                <Text size='tiny' weight='thin' secondary> Jul 15, 2021 7:30pm, Cypher City</Text>
            </Box>

            <Box align='right' verticalAlign='middle' minWidth={115} gap="12px">
                <IconButton priority='secondary' size='small' >
                    <Icons.More/>
                </IconButton>

                <Button priority='secondary' size='small' >
                    Edit
                </Button>
            </Box>

        </Box>
    )
  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Mix Border Radius</Heading>
        </Box>

        <Box minHeight={200} >
            {renderImage()}
            {renderContent()}

        </Box>
       

    </Box>
  )
}

export default ImageComponent
