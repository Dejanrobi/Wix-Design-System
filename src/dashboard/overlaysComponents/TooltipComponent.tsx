import { Box, Card, Heading, IconButton, Image, Text, TextButton, Tooltip } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const TooltipComponent = () => {
  return (
    <Box direction='vertical' gap="SP6">
        <Heading size='small'>Structure</Heading>
        <Box direction='vertical' gap="SP4" >
            <Tooltip inline content="Tooltip content goes here." >
                <TextButton>Hover or focus to see tooltip</TextButton>
            </Tooltip>
        </Box>

        <Heading size='small'>Size</Heading>
        <Box direction='vertical' gap="SP4" >
            <Tooltip inline content="This is a small tooltip" size='small' >
                <TextButton>Small tooltip</TextButton>
            </Tooltip>

            <Tooltip inline content="This is a medium (default) tooltip. " >
                <TextButton>Medium tooltip</TextButton>
            </Tooltip>
        </Box>

        <Heading size='small'>Max Width</Heading>
        <Box direction='vertical' gap="SP4" >
            <Tooltip 
                inline 
                content="This is a tooltip with content wrapped using the default max width."  
            >
                <TextButton>Default max width</TextButton>
            </Tooltip>

            <Tooltip 
                inline 
                content="This is a tooltip with content wrapped using 360px max width. " 
                maxWidth={360}
                >
                <TextButton>Max width = 360px</TextButton>
            </Tooltip>
        </Box>

        <Heading size='small'>Placement</Heading>

        <Box direction='vertical' gap="SP4" >
            <Tooltip inline content="Bottom" placement='bottom' >
                <TextButton>Bottom</TextButton>
            </Tooltip>

           

            
            <Box gap="SP6">
                <Tooltip inline content="Right" placement='right' >
                    <TextButton>Right</TextButton>
                </Tooltip>

                <Tooltip inline content="Left" placement='left' >
                    <TextButton>Left</TextButton>
                </Tooltip>
            </Box>


            <Tooltip inline content="Top(default)." >
                <TextButton>Top (default)</TextButton>
            </Tooltip>

            

          
        </Box>

        <Heading size='small'>Text ALignment</Heading>
        <Box direction='vertical' gap="SP4" >
             <Tooltip inline content="Content is aligned to the left (default)."  >
                <TextButton>Start (default)</TextButton>
             </Tooltip>

             <Tooltip 
                inline 
                content="Content is aligned to the center."  
                textAlign='center'
            >
                <TextButton>Center</TextButton>
             </Tooltip>
        </Box>

        <Heading size='small'>Delay</Heading>

        <Box direction='vertical' gap="SP4" >
             <Tooltip 
                inline 
                content="Tooltip was shown after 450ms."  
                enterDelay={450}
            >
                <TextButton>Enter delay</TextButton>
             </Tooltip>

             <Tooltip 
                inline 
                content="Tooltip will fade after 450ms."  
                exitDelay={450}
                
            >
                <TextButton>Exit delay</TextButton>
             </Tooltip>
        </Box>

        <Heading size='small'>On disabled trigger elements</Heading>
        <Box direction='vertical' gap="SP4" >
            <Tooltip 
                inline 
                content="Tooltip content will not be shown."  
                
            >
                <TextButton disabled>No tooltip (default)</TextButton>
            </Tooltip>

            <Tooltip 
                inline 
                content="Tooltip contentis shown on mouse hover."
                disabled={false}  
                
            >
                <TextButton disabled>Tooltip on mouse hover</TextButton>
            </Tooltip>
        </Box>

        <Heading size='medium'>Common use cases</Heading>
        <Heading size='small'>To label icons buttons</Heading>

        <Card>
            <Box direction='horizontal' >
                <Image
                    height="120px"
                    width="180px"
                    borderRadius="8px 0px 0px 8px"
                    src='https://www.docs.wixdesignsystem.com/running_man.png'

                />

                <Box
                    direction='vertical'
                    borderRadius="0px 8px 8px 0px"
                    verticalAlign='space-between'
                    padding="18px 24px"
                    backgroundColor='D80'
                    flexGrow={1}
                >
                    <Box verticalAlign='space-between' >
                        <Box direction='vertical' gap="3px" >
                            <Heading size='small'>Running for beginners program</Heading>
                            <Text size='small'>
                                Scheduled | 57 days
                            </Text>
                        </Box>

                        <Tooltip content="Edit program">
                            <IconButton priority='secondary' size='small' >
                                <Icons.Edit/>
                            </IconButton>
                        </Tooltip>

                    </Box>

                    <Box marginRight={3} >
                        <Text size='small' secondary >
                            Created on september 26, 2022
                        </Text>
                    </Box>

                </Box>
            </Box>  
        </Card>
    </Box>
  )
}

export default TooltipComponent