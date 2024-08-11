import { Box, Button, Heading, IconButton, Image, TableListItem, Text, TextButton } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const BoxComponent = () => {

    // Content arrangement

    const arrangementoptions =[
        {
            value: (
              <Box verticalAlign="middle">
                <Image width="48px" height="48px" />
                <Box marginLeft="SP3" direction="vertical">
                  <Heading size="small">Structured data</Heading>
                  <Text size="small" secondary>
                    Make your product eligible for rich results in search engines.
                  </Text>
                </Box>
              </Box>
            ),
            width: '80%',
          },
          {
            value: (
              <IconButton skin="inverted">
                <Icons.ChevronDown />
              </IconButton>
            ),
            align: 'right',
          },
    ]
  return (
    <Box direction='vertical' gap="SP6" paddingTop="SP6" >
        <Heading size='small' >Structure</Heading>
        <Box border="1px dotted" align='center' >Content</Box>

        <Heading size='small' >Dimensions</Heading>
        <Box direction='vertical' gap="SP4" >
             <Box border="1px dotted" align='center' width="100%" height="100px" >
                Width 100%, Height 100px
             </Box>

             <Box border="1px dotted" align='center' width="50%" height="50px" >
                Width 50%, Height 50px
             </Box>
        </Box>

        <Heading size='small' >Direction</Heading>

        <Box direction='horizontal' width="100%" >
            <Box border="1px dotted" align='center' width="100%" >
                Horizontal
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                Horizontal
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                Horizontal
            </Box>
        </Box>

        <Box direction='vertical' width="100%" >
            <Box border="1px dotted" align='center' width="100%" >
                Vertical
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                Vertical
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                Vertical
            </Box>
        </Box>

        <Heading size='small' >Gap</Heading>

        <Box direction='horizontal' width="100%" gap="SP1" >
            <Box border="1px dotted" align='center' width="100%" >
                6px gap
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                6px gap
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                6px gap
            </Box>
        </Box>

        <Box direction='horizontal' width="100%" gap="48px" >
            <Box border="1px dotted" align='center' width="100%" >
                48px gap
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                48px gap
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                48px gap
            </Box>
        </Box>

        <Heading size='small' >Horizontal Alignment</Heading>

        <Box direction='horizontal' width="100%" gap="48px" >
            <Box border="1px dotted" align='left' width="100%" >
               Left
            </Box>
            <Box border="1px dotted" align='center' width="100%" >
                Center
            </Box>
            <Box border="1px dotted" align='right' width="100%" >
                Right
            </Box>
        </Box>

        <Box border="1px dotted" align='space-between' width="100%" >
               <Box border="1px dotted" >
                 Space Between
               </Box>

               <Box border="1px dotted" >
                 Space Between
               </Box>
        </Box>

        <Heading size='small' >Vertical Alignment</Heading>

        <Box direction='horizontal' width="100%" gap="48px" height="50px" >
            <Box border="1px dotted" verticalAlign='top' width="100%" height="100%" >
                <Box>
                    Top
                </Box>
            </Box>

            <Box border="1px dotted" verticalAlign='middle' width="100%" height="100%" >
                <Box>
                    Middle
                </Box>
            </Box>

            <Box border="1px dotted" verticalAlign='bottom' width="100%" height="100%" >
                <Box>
                    Bottom
                </Box>
            </Box>

            <Box border="1px dotted" direction='vertical' verticalAlign='space-between' width="100%" height="100%" >
                <Box>
                    Space
                </Box>

                <Box>
                    Between
                </Box>
            </Box>
           
        </Box>

        <Heading size='small' >Padding</Heading>

        <Box width="100%"gap="48px" >
            <Box border="1px dotted" padding="SP4" >
                Equal Padding
            </Box>

            <Box border="1px dotted" 
               paddingTop="SP2"
               paddingRight="SP10"
               paddingBottom="SP2"
               paddingLeft="SP10"
            >
                Different side paddings
            </Box>

            <Box
                border="1px dotted"
            >
                No padding
            </Box>
        </Box>

        <Heading size='small' >Margin</Heading>

        <Box width="100%" >
            <Box width="100%" border="1px dotted" height="18px" >
                No margin
            </Box>

            <Box width="100%" margin="SP6 SP2" border="1px dotted" height="18px" >
                With margin
            </Box>
        </Box>

        <Heading size='small' >Color</Heading>
        <Box >
            <Box padding="SP4" margin="SP2" backgroundColor='D80' color='D10' >
                Dark Text
            </Box>

            <Box padding="SP4" margin="SP2" backgroundColor='D10' color='D80' >
                Light Text
            </Box>
            
            <Box padding="SP4" margin="SP2" backgroundColor='B10' color='D80' >
                Light Text
            </Box>

            <Box padding="SP4" margin="SP2" backgroundColor='G10' color='D80' >
                Light Text
            </Box>

            <Box padding="SP4" margin="SP2" backgroundColor='Y10' color='D10' >
                Light Text
            </Box>

        </Box>

        <Heading size='small' >Border</Heading>

        <Box>
            <Box
                padding="SP6"
                margin="SP1"
                border="1px solid"
                borderColor='D50'
                borderRadius={0}
            >
            </Box>

            <Box
                padding="SP6"
                margin="SP1"
                border="2px dotted"
                borderColor='D40'
                borderRadius={6}
            >
            </Box>

            <Box
                padding="SP6"
                margin="SP1"
                border="3px dashed"
                borderColor='D30'
                borderRadius={12}
            >
            </Box>

            <Box
                padding="SP6"
                margin="SP1"
                border="6px solid"
                borderColor='D20'
                borderRadius={50}
            >
            </Box>
        </Box>

        <Heading size='small' >Link</Heading>

        <Box direction='vertical' gap="SP6" >

            <Text>
                This is a sentence with an action at the end of it.
                <Box>
                    <TextButton>Add link</TextButton>
                </Box>
            </Text>

            <Text>
                This is a sentence with an action at the end of it.
                <Box inline >
                    <TextButton>Add link</TextButton>
                </Box>
            </Text>

        </Box>

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Content Arrangement</Heading>

        <TableListItem options={arrangementoptions} />

        <Heading size='small' >List Item</Heading>

        <Box  height={160}>
            <Box align='center' verticalAlign='middle' width={180} >
                <Image
                    height="180px"
                    borderRadius="8px 0px 0px 8px"
                    src='https://www.docs.wixdesignsystem.com/running_man.png'
                />
            </Box>

            <Box
                direction='vertical'
                borderRadius="0px 8px 8px 0px"
                verticalAlign='space-between'
                padding="18px 24px"
                backgroundColor='D80'
                flexGrow={1}
            >

                <Box verticalAlign="space-between" flexGrow={1}>
                    <Box direction="vertical" gap="3px">
                        <Heading size="small">Get running!</Heading>
                        <Text size="small" secondary>
                            Scheduled for April 26, 2021
                        </Text>
                    </Box>
                </Box>

                <Box align="space-between">
                    <Box gap="24px">
                        <Box verticalAlign="middle" gap="0px">
                            <Icons.LockUnlockedSmall />
                            <Box marginLeft={1}>
                                <Text size="small">Public</Text>
                            </Box>
                        </Box>
                        <Box verticalAlign="middle">
                            <Box marginLeft={1}>
                                <Text size="small">Join for Free</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box verticalAlign="middle">
                            <Box gap="SP2">
                            <IconButton priority="secondary" size="small">
                                <Icons.MoreSmall />
                            </IconButton>
                            <Button priority="secondary" size="small">
                                Edit
                            </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
            </Box>
        </Box>

    </Box>
  )
}

export default BoxComponent