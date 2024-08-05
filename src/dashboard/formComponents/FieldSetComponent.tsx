import { Box, Button, Cell, ComposerHeader, ComposerSidebar, DatePicker, Dropdown, FieldSet, FillButton, FillPreview, FormField, Heading, IconButton, Image, Input, Layout, SidePanel, Slider, Text, TextButton, TimeInput, ToggleSwitch, Tooltip } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const FieldSetComponent = () => {


  // In settings panel

  const [backgroundOpacity, setBackgroundOpacity] = useState(100);
  const [textOpacity, setTextOpacity] = useState(100);
  const [hasPublishPeriod, setHasPublishPeriod] = useState(true);

  const changeBackgroundOpacity = (value:any)=>{
    setBackgroundOpacity(value)
  }

  const changeTextOpacity = (value:any) => {
    setTextOpacity(value);
  };

  const items=[
    {
      id: 0,
      label: 'Crop & Rotate',
      icon: <Icons.Crop/>
    },
    {
      id: 1,
      label: 'Enhance',
      icon: <Icons.MagicWand/>
    },
    {
      id: 0,
      label: 'Settings',
      icon: <Icons.Settings/>
    }
  ]


  const renderBackgroundSidePanel = () => {
    return (
      <SidePanel width="480px" onCloseButtonClick={()=>{}}>
        <SidePanel.Header title="Settings" showDivider={true} />
        <SidePanel.Content noPadding >
          <SidePanel.Field>
            <FieldSet
              legend="Background color"
              columns='30px auto 72px'
              alignment='center'
            >
              <Box>
                <FillPreview fill="#B7EEFF" />
              </Box>
              <Box marginRight="12px">
                <Slider
                  displayMarks={false}
                  gradientColor="#B7EEFF"
                  min={0}
                  max={100}
                  value={backgroundOpacity}
                  onChange={changeBackgroundOpacity}
                />
              </Box>
              <Input
                value={backgroundOpacity}
                suffix={<Input.Affix>%</Input.Affix>}
                size="small"
                onChange={(e) => changeBackgroundOpacity(e.target.value)}
              />

            </FieldSet>
          </SidePanel.Field>

          <SidePanel.Field>
             <FieldSet
              legend="Text color"
              columns="30px auto 72px"
              alignment="center"
            >
              <Box>
                <FillPreview fill="#454B46" />
              </Box>
              <Box marginRight="12px">
                <Slider
                  displayMarks={false}
                  gradientColor="#454B46"
                  min={0}
                  max={100}
                  value={textOpacity}
                  onChange={changeTextOpacity}
                />
              </Box>
              <Input
                value={textOpacity}
                suffix={<Input.Affix>%</Input.Affix>}
                size="small"
                onChange={(e) => changeTextOpacity(e.target.value)}
              />
            </FieldSet>
          </SidePanel.Field>

          <SidePanel.Field>
            <FieldSet
              legend="Background photo"
              columns="auto min-content min-content"
              alignment="center"
            >
              <Box marginRight="12px">
                <Image src="https://www.docs.wixdesignsystem.com/running_man.png" />
              </Box>
              <Button priority="secondary" size="small">
                Replace
              </Button>
              <Tooltip content="Delete image">
                <IconButton priority="secondary" size="small">
                  <Icons.DeleteSmall />
                </IconButton>
              </Tooltip>
            </FieldSet>
          </SidePanel.Field>


          {/* <SidePanel.Section title="Publish period">
            <SidePanel.Field divider={false}>
              <FormField labelPlacement="left" label="Set publish period">
                <ToggleSwitch
                  checked={hasPublishPeriod}
                  onChange={() => setHasPublishPeriod(!hasPublishPeriod)}
                  size="small"
                />
              </FormField>
            </SidePanel.Field>
            <SidePanel.Field>
              {hasPublishPeriod && (
                <FieldSet
                  legend="Publish period"
                  legendPlacement="none"
                  columns="1fr 1fr"
                >
                  <FormField label="From">
                    <DatePicker width="100%" value={new Date()} size="small" />
                  </FormField>
                  <FormField label="To">
                    <DatePicker width="100%" value={new Date()} size="small" />
                  </FormField>
                </FieldSet>
              )}
            </SidePanel.Field>
          </SidePanel.Section> */}
        </SidePanel.Content>
       

      </SidePanel>
    )
  }


  const renderCreateStep = () => (
    <>
      <ComposerSidebar labelPlacement="bottom" items={items} selectedId={2} />
      {renderBackgroundSidePanel()}

      <Box backgroundColor="D70" width="100%">
        <Box width="100%" padding={4}>
          <Box border="1px dotted" width="100%">
            <Box verticalAlign="middle" align="center" height="100%" width="100%">
              <Text>Composer content area</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
  return (
    <Box direction='vertical' gap="SP6">
      <Heading size='small'>
        Structure
      </Heading>

      <FieldSet
        legend="Legend"
        suffix={
          <Box border="1px dotted">
            <Text>Suffix</Text>
          </Box>
        }
      >
        <Box border="1px dotted" align='center' height="36px">
            <Text>Children</Text>
        </Box>

      </FieldSet>

      <Heading size='small'>Legend Placement</Heading>
      <Box direction='vertical' gap="SP4">
        <FieldSet legend="Top (default)" >
          <Box border="1px dotted" height="36px"></Box>
          <Box border="1px dotted" height="36px"></Box>
        </FieldSet>

        <FieldSet legend="Left" legendPlacement='left' >
          <Box border="1px dotted" height="36px"></Box>
          <Box border="1px dotted" height="36px"></Box>
        </FieldSet>

        <FieldSet legend="Right" legendPlacement='right' >
          <Box border="1px dotted" height="36px"></Box>
          <Box border="1px dotted" height="36px"></Box>
        </FieldSet>

        <FieldSet legend="Hidden legend" legendPlacement='none' >
          <Box border="1px dotted" height="36px"></Box>
          <Box border="1px dotted" height="36px"></Box>
        </FieldSet>
      </Box>

      <Heading size='small'>Legend Alignment</Heading>

      <Box direction='vertical' gap="SP4">
        <FieldSet legend="Top" legendAlignment='top' legendPlacement='left' >
          <Box border="1px dotted" height="60px"></Box>
          <Box border="1px dotted" height="60px"></Box>
        </FieldSet>

        <FieldSet legend="Left" legendAlignment='middle' legendPlacement='left' >
          <Box border="1px dotted" height="60px"></Box>
          <Box border="1px dotted" height="60px"></Box>
        </FieldSet>

      </Box>

      <Heading size='small'>Required</Heading>

      <FieldSet legend="Required" required >
          <Box border="1px dotted" height="36px"></Box>
          <Box border="1px dotted" height="36px"></Box>
      </FieldSet>

        <Heading size='small'>Status and Message</Heading>

        <Box direction='vertical' gap="SP4">
          <FieldSet 
            legend="Field set in error state" 
            status='error'
            statusMessage="This is an error message" 
          >
            <Box border="1px dotted" height="36px"></Box>
            <Box border="1px dotted" height="36px"></Box>
          </FieldSet>

          <FieldSet 
            legend="Field set in warning state" 
            status='warning'
            statusMessage="This is a warning message" 
          >
            <Box border="1px dotted" height="36px"></Box>
            <Box border="1px dotted" height="36px"></Box>
          </FieldSet>

          <FieldSet 
            legend="Field set in default state" 
            
            statusMessage="This is helper text" 
          >
            <Box border="1px dotted" height="36px"></Box>
            <Box border="1px dotted" height="36px"></Box>
          </FieldSet>
        </Box>

        <Heading size='small'>Additional Info</Heading>

        <FieldSet 
            legend="Hover over info icon" 
            infoContent="This tooltip provides additional info about what the user needs to put in the field set element."
          >
            <Box border="1px dotted" height="36px"></Box>
            <Box border="1px dotted" height="36px"></Box>
          </FieldSet>

          <Heading size='small'>Suffix</Heading>

          <Box direction='vertical' gap="SP4">
            <FieldSet 
              legend="Custom suffix" 
              suffix={
                <TextButton size='small' suffixIcon={<Icons.ExternalLinkSmall/>}>
                  Go to External Site
                </TextButton>
              }
            >
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
            </FieldSet>

            <FieldSet 
              legend="Character count in suffix" 
              charCount={20}
            >
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
            </FieldSet>

          </Box>

          <Heading size='small'>Content Direction</Heading>

          <Box direction='vertical' gap="SP4">
            <FieldSet 
              legend="Horizontal" 
              columns='auto 120px'
              
            >
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
            </FieldSet>

            <FieldSet 
              legend="Vertical" 
              direction='vertical'
              
            >
              <Box border="1px dotted" height="36px" width="100%"></Box>
              <Box border="1px dotted" height="36px" width="120px"></Box>
            </FieldSet>
          </Box>

          <Heading size='small'>Content Alignment</Heading>

          <Layout>
            <Cell span={6}>
              <Text secondary weight='normal' >
                Horizontal direction
              </Text>
            </Cell>

            <Cell span={6}>
              <Text secondary weight='normal' >
                Vertical direction
              </Text>
            </Cell>

            <Cell span={6}>
              <FieldSet legend="Start" columns='auto 120px' >
                <Box border="1px dotted" height="36px"></Box>
                <Box border="1px dotted" height="18px"></Box>
              </FieldSet>
            </Cell>

            <Cell span={6}>
              <FieldSet legend="Start" direction='vertical' >
                <Box border="1px dotted" height="36px" width="100%"></Box>
                <Box border="1px dotted" height="18px" width="120px"></Box>
              </FieldSet>
            </Cell>
            
            <Cell span={6}>
              <FieldSet legend="Start" columns='auto 120px' alignment='center' >
                <Box border="1px dotted" height="36px"></Box>
                <Box border="1px dotted" height="18px"></Box>
              </FieldSet>
            </Cell>

            <Cell span={6}>
              <FieldSet legend="Start" direction='vertical' alignment='center' >
                <Box border="1px dotted" height="36px" width="100%"></Box>
                <Box border="1px dotted" height="18px" width="120px"></Box>
              </FieldSet>
            </Cell>

            <Cell span={6}>
              <FieldSet legend="Start" columns='auto 120px' alignment='end' >
                <Box border="1px dotted" height="36px"></Box>
                <Box border="1px dotted" height="18px"></Box>
              </FieldSet>
            </Cell>

            <Cell span={6}>
              <FieldSet legend="Start" direction='vertical' alignment='end' >
                <Box border="1px dotted" height="36px" width="100%"></Box>
                <Box border="1px dotted" height="18px" width="120px"></Box>
              </FieldSet>
            </Cell>


          </Layout>

          <Heading size='small'>Content Width</Heading>

          <FieldSet legend="Custom content width" columns='auto 120px 60px' >
            <Box border="1px dotted" height="36px"></Box>
            <Box border="1px dotted" height="36px"></Box>
            <Box border="1px dotted" height="36px"></Box>
          </FieldSet>

          <Heading size='small'>Gap</Heading>

          <Box direction='vertical' gap="SP4">

            <FieldSet legend="Small gap" gap='small' >
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
            </FieldSet>

            <FieldSet legend="Medium gap" gap='medium' >
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
            </FieldSet>

            <FieldSet legend="Large gap" gap='large' >
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
              <Box border="1px dotted" height="36px"></Box>
            </FieldSet>

          </Box>

          <Heading size='large'>Developer Examples</Heading>
          <Heading size='small'>Custom content width</Heading>

          <Box direction='vertical' gap="SP6" >

            <FieldSet
              legend="Opacity and color"
              columns='auto 90px min-content'
              alignment='center'
            >
              <Slider
                displayMarks={false}
                gradientColor='purple'
                min={0}
                max={100}
                value={50}
              />

              <Input value="50" suffix={<Input.Affix>%</Input.Affix>} />
              <FillButton fill='purple' tooltipContent="Pick a color" />

            </FieldSet>

            <FieldSet
              legend="Assign color to a team"
              columns='auto min-content'
              alignment='center'
            >
              <Dropdown placeholder='Select a team' />
              <FillButton fill='purple' tooltipContent="Pick a color" />

            </FieldSet>

            <FieldSet
              legend="Select a time range"
              columns='1fr 1fr min-content'
              alignment='end'
            >
             <FormField label="From">
                <TimeInput value={new Date()} />
             </FormField>

             <FormField label="To">
                <TimeInput value={new Date()} />
             </FormField>

             <IconButton priority='secondary' >
               <Icons.Edit/>
             </IconButton>

            </FieldSet>

          </Box>

          <Heading size='large'>Accessibility Considerations</Heading>
          <Heading size='small'>Using hidden legends</Heading>

          <Box direction='vertical' gap="SP4">
              <FieldSet
                legend="Select a date range"
                columns='1fr 1fr'
              >
                <FormField label="From">
                 <DatePicker width="100%" value={new Date()} />
                </FormField>

                <FormField label="To">
                 <DatePicker width="100%" value={new Date()} />
                </FormField>
                
              </FieldSet>

              <FieldSet
                legend="Select a date range"
                columns='1fr 1fr'
                legendPlacement='none'
              >
                <FormField label="Start date">
                 <DatePicker width="100%" value={new Date()} />
                </FormField>

                <FormField label="End date">
                 <DatePicker width="100%" value={new Date()} />
                </FormField>
                
              </FieldSet>
          </Box>

          <Heading size='small'>Status Message</Heading>

          <FieldSet
            legend="User contacts (Auto linked status message)"
            status='error'
            columns='1fr 1fr'
            statusMessage="Insert your phone number starting with +3706"
          >
            <FormField label="Phone number" status='error' >
              <Input value="00000" />
            </FormField>

            <FormField label="Email" >
              <Input value="user@email.com" />
            </FormField>
          </FieldSet>

          <FieldSet
            legend="User contacts (Manually linked status message)"
            status='error'
            columns='1fr 1fr'
            statusMessage="Insert your phone number starting with +3706"
          >
            <FormField label="Phone number" status='error' >
              <Input value="00000" />
            </FormField>

            <FormField label="Email" >
              <Input value="user@email.com" />
            </FormField>
          </FieldSet>

          <Heading size='large'>Common use cases</Heading>
          <Heading size='small'>In settings panel</Heading>

          
          <Layout gap={0}>
            <Cell>
              <ComposerHeader backButtonValue="Manage Album">
                <ComposerHeader.Actions justifyContent="end">
                  <Button priority="secondary">Preview</Button>
                  <Button>Publish</Button>
                </ComposerHeader.Actions>
              </ComposerHeader>
            </Cell>
            <Cell>
              <Box direction="vertical">
                <Box gap="0" height="800px">
                  {renderCreateStep()}
                </Box>
              </Box>
            </Cell>
          </Layout>

        

    </Box>
  )
}

export default FieldSetComponent