import { AutoComplete, Box, Card, Cell, FormField, Heading, Image, Input, Layout, listItemSelectBuilder, TextButton } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const InputComponent = () => {

    // Clear button
    const [clearInput, setClearInput] = useState('Click the clear button to erase this value.')
    
    // Compound input
    const [value, setValue] = React.useState('');

    const getDisplayValue = (value:any) => {
      const [, group1, group2, group3] = value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
      return (
        (!group2 ? group1 : group1 + ' ') + group2 + (group3 ? '-' + group3 : '')
      );
    };


    const options = [
        listItemSelectBuilder({ id: 0, title: 'Israel', suffix: '+972' }),
        listItemSelectBuilder({ id: 1, title: 'Japan', suffix: '+81' }),
        listItemSelectBuilder({ id: 2, title: 'Australia', suffix: '+61' }),
    ];

    const onChange = (e) => {
        const { value } = e.target;
        if (value.length < 12) {
        setValue(getDisplayValue(value));
        }
    };

    const renderAutoComplete = () => (
        <AutoComplete
        popoverProps={{ placement: 'bottom-start' }}
        value="+972"
        options={options}
        />
    );

    // Input as a title
    const renderCard = (imageSrc:any, inputValue:any) => (
        <Card>
          <Box direction="vertical" padding="SP1 SP1 SP2">
            <Layout gap={12}>
              <Cell>
                <Box padding="6px 6px 0px">
                  <Image borderRadius="4px" height="180px" src={imageSrc} />
                </Box>
              </Cell>
    
              <Cell>
                <Input
                  border="bottomLine"
                  textOverflow="ellipsis"
                  defaultValue={inputValue}
                />
              </Cell>
            </Layout>
          </Box>
        </Card>
      );
    
 
 
    return (
    <Box direction='vertical' gap="SP6">

        <Heading size='small' >Size</Heading>
        
        <Box direction='vertical' gap="SP4">
            <Input size='large' placeholder='Large' />
            <Input size='medium' placeholder='Medium' />
            <Input size='small' placeholder='Small' />

        </Box>

        <Heading size='small' >Border</Heading>
        
        <Box direction='vertical' gap="SP4">
            <Input placeholder='Default' />
            <Input border='round' placeholder='Round' />
            <Input border='bottomLine' placeholder='Bottom Line' />
            <Input border='none' placeholder='None' />

        </Box>

        <Heading size='small' >Status</Heading>

        <Box direction='vertical' gap="SP4">
            <Input status='error' placeholder='Error' />
            <Input status='warning' placeholder='Warning' />
            <Input status='loading' placeholder='Loading' />
        </Box>

        <Heading size='small' >Status message</Heading>

        <Box direction='vertical' gap="SP4">
            <FormField
                label = "For all default cases:"
                status='error'
                statusMessage="This is an error message"
           
            >
                <Input placeholder='See message below' />
            </FormField>

            <FormField
                label = "For narrow layouts only:"
           
            >
                <Input 
                    placeholder='Hover on status icon'
                    status='error'
                    statusMessage="This is an error message"
                    tooltipPlacement='top-end' 
                />
            </FormField>

        </Box>

        <Heading size='small' >Read-only and disabled</Heading>

        <Box direction='vertical' gap="SP4">
            <Input readOnly value="Read-only"/>
            <Input disabled value="Disabled"/>
        </Box>

        <Heading size='small' >Prefix & Suffix</Heading>

        <Input
        
            prefix={<Input.Affix>https://</Input.Affix>}
            suffix={<Input.Affix>.com</Input.Affix>}
            value=""
        />

        <Input
            
            prefix={
                <Input.IconAffix>
                    <Icons.GitHub/>
                </Input.IconAffix>
            }
            suffix={
                <Input.IconAffix>
                   <TextButton>Button</TextButton>
                </Input.IconAffix>
            }
            value=""
        />


        <Heading size='small' >Clear button</Heading>

        <Input
            value={clearInput}
            clearButton
            onChange={(e) => setClearInput(e.target.value)}
            onClear={()=> setClearInput('')}
        
        />

        <Heading size='small' >Text overflow</Heading>
        <Input
             textOverflow="ellipsis"
             border="bottomLine"
             value="This is an extremely long sentence that takes up far more space than can fit inside this input field, so it has to be shortened so that the beginning can be read, but with an ellipsis to indicate there is more text than can be shown at once."
        />

        <Heading size='large' >Common Use Cases</Heading>

        <Heading size='small' >Compound Input</Heading>

        <FormField label="Phone number">
            <Layout gap={6}>
                <Cell span={2}>{renderAutoComplete()}</Cell>
                <Cell span={10}>
                 <Input placeholder="00 000-0000" onChange={onChange} value={value} />
                </Cell>
            </Layout>
        </FormField>


        <Heading size='small' >Input as a title</Heading>

        <Layout>
            <Cell span={4}>{renderCard('', 'Empty photo album')}</Cell>
            <Cell span={4}>{renderCard('example.jpg', 'Cooking recipes album')}</Cell>
        </Layout>
                
        

    </Box>
  )
}

export default InputComponent
