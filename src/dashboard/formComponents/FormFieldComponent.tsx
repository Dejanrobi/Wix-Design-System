import { Box, Card, Cell, Checkbox, Dropdown, FieldSet, FormField, Heading, ImageViewer, Input, InputArea, Layout, SidePanel, Slider, Text, TextButton, ToggleSwitch } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const FormFieldComponent = () => {


    // Character count
    const [charCount, setCharCount] = useState(0);
    const [value, setValue] = useState('');

    const handleOnChange = (value: any)=>{
        if(value.length <= 20){
            setValue(value)
            setCharCount(value.length)
        }
    }

    // settings panel
    const [selectedOption, setSelectedOption] = React.useState(0);
    const [valuePanel, setValuePanel] = React.useState(2);
    const [toggleChecked, setToggleChecked] = React.useState(true);
  
    const options = [
      { id: 0, value: 'Image' },
      { id: 1, value: 'Video' },
      { id: 2, value: 'Image and video' },
      { id: 3, value: 'Document' },
      { id: 4, value: 'Audio' },
    ];
  return (
    <Box direction='vertical' gap="SP6">

        <Heading size='small'> Structure</Heading>

        <FormField
            label="Label"
            suffix={
                <Box border="1px dotted">
                    Suffix
                </Box>
            }
        >
            <Box border="1px dotted" align='center'>Any form element</Box>

        </FormField>

        <Heading size='small'> Label placement</Heading>
        
        <Box direction='vertical' gap="SP4">
            <FormField label="Top" labelPlacement='top'>
                <Input/>
            </FormField>

            <FormField label="Left" labelPlacement='left'>
                <Input/>
            </FormField>

            <FormField label="Right" labelPlacement='right' stretchContent={false}>
                <ToggleSwitch checked />
            </FormField>

        </Box>

        <Heading size='small'> Label alignment</Heading>

        <Box gap="SP4">
            <FormField label="Top" labelPlacement='left' labelAlignment='top' >
                <InputArea minHeight='90px' />
            </FormField>

            <FormField label="Middle" labelPlacement='left' labelAlignment='middle' >
                <Input/>
            </FormField>
        </Box>

        <Heading size='small'> Required</Heading>

        <Box gap="SP4" >
            <FormField label="Mandatory field" required >
                <Input/>
            </FormField>

            <FormField label="Not mandatory field (optional)" required >
                <Input/>
            </FormField>
        </Box>

        <Heading size='small'> Status and message</Heading>

        <Box direction='vertical' gap="SP4">
            <FormField
                labelSize='small'
                label="Label"
                status='error'
                statusMessage="This is an error message."
            >
                <Input/>
            </FormField>

            <FormField
                labelSize='small'
                label="Label"
                status='warning'
                statusMessage="This is an warning message."
            >
                <Input/>
            </FormField>

            <FormField
                labelSize='small'
                label="Label"
                status='loading'
                statusMessage="This is an loading message."
            >
                <Input/>
            </FormField>

            <FormField
                labelSize='small'
                label="Label"
                
                statusMessage="This is a helper text."
            >
                <Input/>
            </FormField>

        </Box>

        <Heading size='small'> Additional info</Heading>
        
        <FormField
            label="Hover over info icon"
            infoContent="This tooltip provides additional info about what the user needs to put in the input field."
        >
            <Input/>
        </FormField>

        <Heading size='small'> Suffix</Heading>

        <FormField
            label="Label"
            suffix={
                <TextButton size='small' suffixIcon={<Icons.ExternalLinkSmall/>}>
                    Go to External Site
                </TextButton>
            }
        >
            <Input/>
        </FormField>

        <Heading size='small'> Character Count</Heading>

        <FormField
            label="Enter more than 20 characters"
            charCount={20 - charCount}
        
        >
            <Input
                value={value}
                onChange={(event)=> handleOnChange(event.target.value)}
            
            />
        </FormField>

        <Heading size='small'> Stretch content</Heading>
        <FormField
            label="Not stretched content"
            labelPlacement="right"
            stretchContent={false}
        >
            <ToggleSwitch checked />
        </FormField>;

        <Heading size='large'> Common use cases</Heading>
        <Heading size='small'> Regular form</Heading>

            <Card>
                <Card.Header title="New dish" />
                <Card.Divider />
                <Card.Content>
                    <Layout>
                    <Cell span={4}>
                        <FormField label="Image">
                        <ImageViewer width="100%" height="176px" />
                        </FormField>
                    </Cell>
                    <Cell span={8}>
                        <Layout gap="24px">
                        <Cell span={8}>
                            <FormField label="Name">
                            <Input value="My New Dish" />
                            </FormField>
                        </Cell>
                        <Cell span={4}>
                            <FormField label="Price">
                            <Input value="0" prefix={<Input.Affix>$</Input.Affix>} />
                            </FormField>
                        </Cell>
                        <Cell>
                            <FormField label="Description">
                            <InputArea
                                placeholder="Describe your dish in a few sentences."
                                resizable
                                rows={3}
                            />
                            </FormField>
                        </Cell>
                        </Layout>
                    </Cell>
                    <Cell span={6}>
                        <FormField
                        label="Dietary preferences"
                        infoContent="Choose which dietary preferences your dish is appropriate for."
                        >
                        <Layout>
                            <Cell span={6}>
                            <Box direction="vertical" gap="12px">
                                <Checkbox>No salt</Checkbox>
                                <Checkbox>Vegan</Checkbox>
                                <Checkbox>Vegetarian</Checkbox>
                            </Box>
                            </Cell>
                            <Cell span={6}>
                            <Box direction="vertical" gap="12px">
                                <Checkbox>Gluten free</Checkbox>
                                <Checkbox>Organic</Checkbox>
                                <Checkbox>Spicy</Checkbox>
                            </Box>
                            </Cell>
                        </Layout>
                        </FormField>
                    </Cell>
                    <Cell span={3}>
                        <FormField label="Visibility">
                        <Checkbox checked>Visible on site</Checkbox>
                        </FormField>
                    </Cell>
                    <Cell span={3}>
                        <FormField label="Availability">
                        <Checkbox checked>In stock</Checkbox>
                        </FormField>
                    </Cell>
                    </Layout>
                </Card.Content>
                </Card>;

        <Heading size='small'> Settings panel</Heading>

        <SidePanel maxHeight="576px" width="288px" skin="floating">
      <SidePanel.Header title="Upload Settings" />
      <SidePanel.Content noPadding>
        <SidePanel.Field>
          <FormField label="Supported file type">
            <Dropdown
              placeholder="Select"
              size="small"
              options={options}
              onSelect={(option:any) => setSelectedOption(option.id)}
              selectedId={selectedOption}
            />
          </FormField>
        </SidePanel.Field>
        <SidePanel.Field>
          <FieldSet
            gap="small"
            legend="Max number of files"
            columns="auto 60px"
          >
            <Slider
              onChange={setValuePanel}
              min={0}
              max={10}
              value={valuePanel}
              displayMarks={false}
            />
            <Input
              size="small"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </FieldSet>
        </SidePanel.Field>
        <SidePanel.Field>
          <FormField label="Is required" labelPlacement="left" labelWidth="1fr">
            <ToggleSwitch
              checked
              size="small"
              checked={toggleChecked}
              onChange={() => setToggleChecked(!toggleChecked)}
            />
          </FormField>
        </SidePanel.Field>
        <SidePanel.Section title="Display settings">
          <SidePanel.Field>
            <FormField label="Field title">
              <Input size="small" placeholder="Enter field title" />
            </FormField>
          </SidePanel.Field>
          <SidePanel.Field>
            <FormField label="Button text">
              <Input size="small" value="Choose file" />
            </FormField>
          </SidePanel.Field>
        </SidePanel.Section>
      </SidePanel.Content>
    </SidePanel>

    </Box>
  )
}

export default FormFieldComponent
