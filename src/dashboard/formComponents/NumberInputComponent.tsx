import { Box, Button, Cell, Divider, FieldSet, FillPreview, FormField, Heading, Input, Layout, NumberInput, SectionHelper, SegmentedToggle, SidePanel, Slider, VerticalTabs } from '@wix/design-system'
import React, { useRef, useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const NumberInputComponent = () => {

    const [clearInputText, setClearInputText] = useState('20');

    // Controlled
    const [controlledValue, setControlledValue] = useState(0);

    // Range Validatin
    const rangeValidationRef = useRef();
    const [rangeInvalid, setRangeInvalid] = useState(false);
    const [rangeErrorMessage, setRangeErrorMessage] = useState('');

    const rangeOnInvalid = (value:any) => {
        if(Number(value) < 2) {
            setRangeErrorMessage('You must order at least 2 tickets.')
        }

        if(Number(value) > 20) {
            setRangeErrorMessage('You can only order up to 20 tickets')
        }
    }

    const rangeOnSubmit = () => {
        if(rangeErrorMessage){
            rangeValidationRef.current.focus();
        }
    }

    // SETTINGS PANEL
    const [settingsValue, setSettingsValue] = useState(50);
    const [settingsOpacity, setSettingsOpacity] = useState(100);

    // Compound Input

    const compoundSigns = {
        amount: '$',
        percentage: '%'
    }

    const [compoundValue, setCompoundValue] = useState(20);
    const [compoundSignValue, setCompoundSignValue] = useState('amount');

    const compoundOnClick = (_:any, value:any) => {
        setCompoundSignValue(value)
    }

    // Disabled Stepper
    const [disabledStepperValue, setDisabledStepperValue] = useState(20)

   
  return (
    <Box direction='vertical' gap="SP6">

        <Heading size='small'>Size</Heading>

        <Box  direction='vertical' gap="SP4">
            <NumberInput size='large' placeholder='Large' />
            <NumberInput size='medium' placeholder='Medium' />
            <NumberInput size='small' placeholder='Small' />
        </Box>

        <Heading size='small'>Border</Heading>

        <Box  direction='vertical' gap="SP4">
            <NumberInput border='standard' placeholder='Standard' />
            <NumberInput border='round' placeholder='Round' />
            <NumberInput border='bottomLine' placeholder='Bottom line' />
            <NumberInput border='none' placeholder='None' />
            
        </Box>

        <Heading size='small'>Status</Heading>

        <Box  direction='vertical' gap="SP4">
            <NumberInput status='error' placeholder='Error' />
            <NumberInput status='warning' placeholder='Warning' />
            <NumberInput status='loading' placeholder='Loading' />
        </Box>

        <Heading size='small'>Status Message</Heading>
        <Box  direction='vertical' gap="SP4">
            <FormField
                label="For all default cases: "
                status='error'
                statusMessage="This is an error message"
            >
                <NumberInput placeholder='See message below' tooltipPlacement='top-end'/>
            </FormField>

            <FormField
                label="For narrow layouts only: "
            
            >
                <NumberInput 
                placeholder='Hover on status icon' 
                status='error'
                statusMessage="This is an error message"
                tooltipPlacement='top-end'/>
            </FormField>
        </Box>

        <Heading size='small'>Prefix and Suffix</Heading>

        <Box  direction='vertical' gap="SP4">
            <NumberInput
                prefix={<Input.Affix>$</Input.Affix>}
                value="20.00"
            />
            <NumberInput
                suffix={<Input.Affix>%</Input.Affix>}
                value="10"
            />

            <NumberInput
                prefix={
                <Input.IconAffix>
                    <Icons.Users/>
                </Input.IconAffix>}
                suffix={<Input.Affix>guests</Input.Affix>}
                value="2"
            />
        </Box>

        <Heading size='small'>Read Only and Disabled</Heading>

        <Box  direction='vertical' gap="SP4">
            <NumberInput placeholder="Read-only" readOnly />
            <NumberInput placeholder="Disabled" disabled />
        </Box>

        <Heading size='small'>Clear Button</Heading>
        
        <Box  direction='vertical' gap="SP4">
            <NumberInput
                value={clearInputText}
                clearButton
                onChange={(e:any)=> setClearInputText(e.target.value)}
                onClear={()=> setClearInputText('')}
            />
        </Box>

        <Heading size='small'>Increment By Steps</Heading>
        
        <Box  direction='vertical' gap="SP4">
        <NumberInput
            step={20}
            placeholder="Click on the arrows to change the value by 20 units at a time."
        />
        <NumberInput
            step={20}
            hideStepper
            placeholder="Click the up and down arrow keys to change the value by 20 when the arrows are hidden."
        />
        </Box>

        <Heading size='small'>Min and Max Values</Heading>

        <NumberInput
            min={-5}
            max={5}
            invalidMessage="Enter a number between -5 and 5."
            placeholder="Try typing a number less than -5 or more than 5"
        />;

        <Heading size='medium'>Developer Examples</Heading>
        
        <Heading size='small'>Controlled</Heading>
        <NumberInput value={controlledValue} onChange={(val:any)=>setControlledValue(val)} />


        <Heading size='small'>Range Validation</Heading>

        <Layout>
            <Cell>
                <FormField
                    label="Number of tickets"
                    infoContent="You can buy between 2 and 20 tickets at a time."
                >
                   <NumberInput
                    ref={rangeValidationRef}
                    min={5}
                    max={20}
                    invalidMessage={rangeErrorMessage}
                    onInvalid={rangeOnInvalid}
                    placeholder='How many tickets would you like?'
                   />

                </FormField>
            </Cell>

            <Cell>
                <Button onClick={rangeOnSubmit}>Purchase</Button>
            </Cell>
        </Layout>

        <Heading size='medium'>Accessibility Considerations</Heading>
        <Heading size='small'>Helper Text</Heading>

        <FormField label="Label" statusMessage="Helper text">
            <NumberInput size='medium' />
        </FormField>

        <FormField
            label="Number of visitors"
            statusMessage="Enter numbers only, from 1 to 100"
        >
            <NumberInput size='medium' />
        </FormField>


        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Settings Panel</Heading>

        <SidePanel
            skin='floating'
            width="500px"
            onCloseButtonClick={()=>{}}
            onHelpButtonClick={()=>{}}
        >

            <SidePanel.Header title="Events" />

            <Box height="480px">
                <VerticalTabs size='small' activeTabId={1} onChange={()=>{}} >
                    <VerticalTabs.TabItem id={0}>Main</VerticalTabs.TabItem>
                    <VerticalTabs.TabItem id={1}>Design</VerticalTabs.TabItem>
                    <VerticalTabs.TabItem id={2}>Text</VerticalTabs.TabItem>
                </VerticalTabs>

                <Divider direction='vertical' />

                <SidePanel.Content noPadding >
                    <SidePanel.Field>
                        <Button
                            priority='secondary'
                            size='tiny'
                            prefixIcon={<Icons.ChevronLeft/>}
                        >
                            Back
                        </Button>
                    </SidePanel.Field>

                    <SidePanel.Section title="Background" >
                        <SidePanel.Field>
                            <FieldSet
                                legend="Background color"
                                legendSize='small'
                                legendPlacement='top'
                                alignment='center'
                                columns='30px auto 72px'
                                gap='large'
                            >
                                <FillPreview fill="#000000" aspectRatio={1} />

                                <Slider
                                    gradientColor='#000000'
                                    min={0}
                                    max={100}
                                    displayMarks={false}
                                    onChange={(value) => setSettingsOpacity(value)}
                                    value={settingsOpacity}
                                />

                                {/* <NumberInput
                                    value={settingsOpacity}
                                    // min={0}
                                    // max={100}
                                    onChange={(val)=> setSettingsOpacity(val)}
                                    suffix={<Input.Affix>%</Input.Affix>}
                                    size='small'
                                    hideStepper
                                /> */}

                                <Input
                                    value={settingsOpacity}
                                    suffix={<Input.Affix>%</Input.Affix>}
                                    size='small'
                                    onChange={(e)=>setSettingsOpacity(e.target.value)}
                                />
                            </FieldSet>
                        </SidePanel.Field>

                        <SidePanel.Field>
                            <FieldSet 
                                gap='small'
                                legend="Border width"
                                columns='auto 60px'
                            >
                                <Slider
                                    onChange={(value:any)=>setSettingsValue(value)}
                                    min={0}
                                    max={100}
                                    value={settingsValue}
                                    displayMarks={false}
                                />

                                <Input
                                    value={settingsValue}
                                    size='small'
                                    onChange={(e)=>setSettingsValue(e.target.value)}
                                />

                            </FieldSet>
                        </SidePanel.Field>
                    </SidePanel.Section>

                </SidePanel.Content>

            </Box>

        </SidePanel>

        <Heading size='small'>Compound Input</Heading>

        <FormField
            label="Discount"
            infoContent="This is how much will be taken off the final price. Discount can be offered in percentage off the starting price or specific amount."
        >
            <Box gap="12px" width="100%">
                <Box direction='vertical' width="100%" >
                    <NumberInput
                        prefix={
                            compoundSignValue === 'amount' ? (
                                <Input.Affix>{compoundSigns[compoundSignValue]}</Input.Affix>
                            ) : null
                        }

                        suffix={
                            compoundSignValue === 'percentage' ? (
                                <Input.Affix>{compoundSigns[compoundSignValue]}</Input.Affix>
                            ) : null
                        }

                        onChange={setCompoundValue}
                        value={compoundValue}
                    />
                </Box>

                <Box direction='vertical' >
                    <SegmentedToggle
                        defaultSelected="amount"
                        onClick={compoundOnClick}
                        selected={compoundSignValue}
                    >
                        <SegmentedToggle.Button value="amount"  tooltipText="Fixed amount" >
                            {compoundSigns.amount}
                        </SegmentedToggle.Button>

                        <SegmentedToggle.Button value="percentage"  tooltipText="Percentage" >
                            {compoundSigns.percentage}
                        </SegmentedToggle.Button>

                    </SegmentedToggle>
                </Box>

            </Box>

        </FormField>

        <Heading size='small'>Disabled Stepper</Heading>
        <NumberInput
            min={2}
            max={20}
            value={disabledStepperValue}
            onChange={setDisabledStepperValue}
            placeholder='How many tickets would you like?'
            strict={true}
        />
        
    </Box>
  )
}

export default NumberInputComponent
