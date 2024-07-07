import { Box, Button, ColorInput, FormField, Heading, Input, SidePanel, Text, ToggleButton } from '@wix/design-system'
import React, { useState } from 'react'


// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const ColorInputComponent = () => {
    const [color, setColor] = useState('#000000');
    const [alignment, setAlignment] = useState(0);
    const [text, setText] = useState('Luna Boutique');


  return (
    <Box direction='vertical' gap="SP2"> 
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Custom text color</Heading>
        </Box>

        <SidePanel>
            <SidePanel.Header title="Customise text" ></SidePanel.Header>
            <SidePanel.Content>
                <Box direction='vertical' gap="30px" >
                    <Text size='small' secondary>
                        Change the font, color and more to make your text stand out.
                    </Text>

                    <FormField label="Edit text">
                        <Input value={text} onChange={(e)=>setText(e.target.value)}/>
                    </FormField>
                    <FormField label="Font">
                        <Box gap="6px">
                            <Text weight='bold'>Playfair Display - 700</Text>
                            <Button size='tiny' priority='secondary'>
                                Change Font
                            </Button>                        
                        </Box>
                    </FormField>

                    <FormField label="Alignment" >
                        <Box gap="6px">
                            <ToggleButton
                                labelValue="Left"
                                selected={alignment === 0}
                                onClick={()=> setAlignment(0)}
                            >
                                <Icons.TextAlignLeft/>
                            </ToggleButton>
                            <ToggleButton
                                labelValue="Center"
                                selected={alignment === 1}
                                onClick={()=> setAlignment(1)}
                            >
                                <Icons.TextAlignCenter/>
                            </ToggleButton>
                            <ToggleButton
                                labelValue="Right"
                                selected={alignment === 2}
                                onClick={()=> setAlignment(2)}
                            >
                                <Icons.TextAlignRight/>
                            </ToggleButton>

                        </Box>
                    </FormField>

                    <FormField label="Text color">
                        <ColorInput
                            value={color}
                            onChange={setColor}
                            popoverAppendTo='viewport'
                        />

                    </FormField>

                </Box>
            </SidePanel.Content>e

            <SidePanel.Footer>
                <Box align='right' gap="12px" >
                    <Button size='small' priority='secondary'>Discard Changes</Button>
                    <Button size='small'>Save</Button>
                </Box>
            </SidePanel.Footer>
        
        </SidePanel>
    </Box>
  )
}

export default ColorInputComponent