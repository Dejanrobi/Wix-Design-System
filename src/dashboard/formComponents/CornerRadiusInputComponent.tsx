import { Box, CornerRadiusInput, FieldSet, Heading, Input, SidePanel, Slider } from '@wix/design-system'
import React, { useState } from 'react'

const CornerRadiusInputComponent = () => {

    const [value, setValue] = useState(2);
    const [opacity, setOpacity] = useState(75);

    const [topLeft, setTopLeft] = useState(0);
    const [topRight, setTopRight] = useState(0);
    const [bottomLeft, setBottomLeft] = useState(0);
    const [bottomRight, setBottomRight] = useState(0);

    const [topLeftInvalid, setTopLeftInvalid] = useState(false);
    const [topRightInvalid, setTopRightInvalid] = useState(false);
    const [bottomLeftInvalid, setBottomLeftInvalid] = useState(false);
    const [bottomRightInvalid, setBottomRightInvalid] = useState(false);


  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Design Panel</Heading>
        </Box>

        <SidePanel
            onCloseButtonClick={()=>{}}
            skin='floating'
            width="288px"
            height="576px"
        >
            <SidePanel.Header  title="Box Design" />
            <SidePanel.Field>
                <FieldSet
                    gap='small'
                    legend="Border width"
                    columns='auto 72px'
                >
                    <Slider
                        onChange={setValue}
                        min={0}
                        max={10}
                        value={value}
                        displayMarks={false}
                    />

                    <Input
                        size='small'
                        value={value}
                        onChange={(e:any)=>setValue(e.target.value)}
                    />
                </FieldSet>
            </SidePanel.Field>
            <SidePanel.Field>
                <FieldSet legend="Border radius">
                    <CornerRadiusInput
                        size='small'
                        linkingButtonLabels={{
                            pressed: 'Edit individually',
                            unpressed: 'Apply to all corners'
                        }}
                        topLeft={{
                            value: topLeft,
                            ariaLabel: 'Top left corner',
                            onChange: (e:any)=>{
                                setTopLeftInvalid(false);
                                setTopLeft(e)
                            }
                        }}

                        topRight={{
                            value: topRight,
                            ariaLabel: 'Top right corner',
                            onChange: (e:any)=>{
                                setTopRightInvalid(false);
                                setTopRight(e);
                            }
                        }}

                        bottomLeft={{
                            value: bottomLeft,
                            ariaLabel: 'Bottom left corner',
                            onChange: (e:any)=>{
                                setBottomLeftInvalid(false);
                                setBottomLeft(e);
                            }
                        }}

                        bottomRight={{
                            value: bottomRight,
                            ariaLabel: 'Bottom right corner',
                            onChange: (e:any) =>{
                                setBottomRightInvalid(false);
                                setBottomRight(e)
                            }
                        }}
                    />
                </FieldSet>
            </SidePanel.Field>

        </SidePanel>

    </Box>
  )
}

export default CornerRadiusInputComponent