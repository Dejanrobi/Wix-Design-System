import { Box, Button, Cell, CustomModalLayout, FormField, Heading, Input, InputArea, Layout, SegmentedToggle, SidePanel, ToggleSwitch } from '@wix/design-system'

import React, { useEffect, useRef, useState } from 'react'

const InputAreaComponent = () => {

    // Character count
    const [characterCount, setCharacterCount] = useState('This is a sentence that uses only some of the allowed characters.')
  
    // controlled
    const [controlledValue, setControlledValue] = useState(0)

    // Force Outgrow when Controlled Externally
    const [forceValue, setForceValue] = useState('');
    const forceRef = useRef();

    useEffect(()=>{
        forceRef.current?.calculateComputedRows();

    },[forceValue])

    const onInsertText = () => {
        setForceValue((prevValue: any) => prevValue + 'field grows on every click ');
    }

    // FORMS
    const [formsVisibleChecked, setFormsVisibleChecked] = useState(true);
    const [formNameInputValue, setFomNameInputValue] = useState('My New Menu');
    const [formInputAreaValue, setFormInputAreaValue] = useState('');
  
    // SETTINGS PANEL
    const [settingsPanelValue, setSettingsPanelValue] = useState('');
    return (
   <Box direction='vertical' gap="SP6">

        <Heading size='small'> Size</Heading>

        <Box direction='vertical' gap="SP4">
            <InputArea  placeholder='Medium' size='medium' />
            <InputArea  placeholder='Small' size='small' />
        </Box>

        <Heading size='small'> Height</Heading>

        <Box direction='vertical' gap="SP4">
            <InputArea
                placeholder='Height defined in pixels'
                minHeight='120px'
                maxHeight='300px'
            />
            <InputArea
                placeholder='Height that fits 4 rows of text'
                rows={4}
            />
        </Box>

        <Heading size='small'> Status</Heading>

        <Box direction='vertical' gap="SP4">
            <InputArea placeholder='Error' status='error' />
            <InputArea placeholder='Warning' status='warning' />
            <InputArea placeholder='Loading' status='loading' />
        </Box>

        <Heading size='small'> Status Message</Heading>

        <Box direction='vertical' gap="SP4">

            <FormField
                label="For all default cases"
                status='error'
                statusMessage="This is an error message"
            >
                <InputArea
                
                    placeholder='See message below'
                    tooltipPlacement='top-end'
                />
            </FormField>

            <FormField
                label="For narrow layouts only: "
                
            >
                <InputArea
                
                    placeholder='Hover on status icon'
                    status='error'
                    statusMessage="This is an error message"
                    tooltipPlacement='top-end'
                />
            </FormField>
        </Box>

        <Heading size='small'> Read only and disabled</Heading>

        <Box direction='vertical' gap="SP4">
            <InputArea
             value='Read-only'
             readOnly
            />
            <InputArea
             value='Disabled'
             disabled
            />
        </Box>

        <Heading size='small'> Resize</Heading>
        <InputArea
             placeholder='Drag the handle in the bottom right corner to change the height of an area.'
             resizable
            />
        
        <Heading size='small'> Character count</Heading>
        <InputArea
         value={characterCount}
         onChange={(e)=> setCharacterCount(e.target.value)}
         maxLength={100}
         hasCounter
        
        />

    <Heading size='small'> Auto grow</Heading>
    <InputArea
        placeholder="Enter a lot of text into this area to see how it grows according to the length of content."
        autoGrow={true}
        minRowsAutoGrow={1}
        />;

    <Heading size='small'> Auto select</Heading>
    <InputArea value="Click on the field to select the entire text." autoSelect />;

    <Heading size='large'> Developer examples</Heading>
    <Heading size='small'>Controlled</Heading>
    <InputArea value={controlledValue} onChange={(e) => setControlledValue(e.target.value)} />;
    
    <Heading size='small'>Force Outgrow When Controlled Externally</Heading>
    
    <Box gap="SP6">
        <Button onClick={onInsertText}>Insert Text</Button>

        <div style={{ width: '100%' }} >
            <InputArea
                ref={forceRef}
                value={forceValue}
                onChange={(e) => setForceValue(e.target.value)}
                autoGrow
                placeholder='Click on Insert Text'
                minRowsAutoGrow={1}
            
            />

        </div>

    </Box>

    <Heading size='medium'>Common Use Cases</Heading>
    <Heading size='small'>Forms</Heading>

    <CustomModalLayout
        primaryButtonText="Create Menu"
        secondaryButtonText="Cancel"
        onCloseButtonClick={()=>{}}
        title="Create new menu"
    >
        <Layout gap="24px" >
            <Cell span={12}>
                <FormField label="Name" >
                    <Input
                        value={formNameInputValue}
                        onChange={(e)=> setFomNameInputValue(e.target.value)}
                    />
                </FormField>
            </Cell>

            <Cell span={12}>
                <FormField label="Description" >
                   <InputArea
                        placeholder='Get people excited about you menu and you food.'
                        rows={4}
                        maxLength={300}
                        hasCounter
                        resizable
                        value={formInputAreaValue}
                        onChange={(e)=> setFormInputAreaValue(e.target.value)}
                   />
                </FormField>
            </Cell>
            
            <Cell span={12} >
                <FormField
                    label="Visible to custome customers"
                    labelPlacement='right'
                    stretchContent={false}
                >
                    <ToggleSwitch
                        checked={formsVisibleChecked}
                        onChange={()=> setFormsVisibleChecked(!formsVisibleChecked)}
                    />

                </FormField>

            </Cell>

        </Layout>

    </CustomModalLayout>

    <Heading size='small'>Settings Panel</Heading>

    <SidePanel maxHeight="576px" width="288px" skin='floating'>
        <SidePanel.Header title="Text Box Settings" />
        <SidePanel.Content noPadding>
            <SidePanel.Field>
                <FormField label="Description" >
                    <InputArea
                        placeholder='This input area is great for longer descriptions with multiple lines of text.'
                        size='small'
                        rows={3}
                        maxLength={300}
                        hasCounter
                        resizable
                        value={settingsPanelValue}
                        onChange={(e)=> setSettingsPanelValue(e.target.value)}
                    />
                </FormField>
            </SidePanel.Field>

            <SidePanel.Field>
                <FormField label="What does the button do?" >
                    <SegmentedToggle size='small' defaultSelected="Open" >
                        <SegmentedToggle.Button value="Open" >
                            Expand
                        </SegmentedToggle.Button>
                        <SegmentedToggle.Button value="Closed" >
                            Link
                        </SegmentedToggle.Button>
                    </SegmentedToggle>
                </FormField>
            </SidePanel.Field>

            <SidePanel.Field>
                <FormField label="Link button text" >
                    <Input size='small' placeholder='Link to full aticle' />
                </FormField>
            </SidePanel.Field>

        </SidePanel.Content>

    </SidePanel>


   </Box>
  )
}

export default InputAreaComponent
