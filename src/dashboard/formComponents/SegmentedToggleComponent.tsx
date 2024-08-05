import { Box, Button, Card, Divider, FormField, Heading, IconButton, Image, Input, InputArea, Layout, MediaOverlay, Proportion, RadioGroup, SegmentedToggle, SidePanel, TableActionCell, TableListItem, Text } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const SegmentedToggleComponent = () => {

    // Selection controls
    const [selectionSelectedValue, setSelectionSelectedValue] = useState('option1');
    const selectionOnClick = (_:any, value:any) => setSelectionSelectedValue(value)
  
    // Settings Panel
    const [settingsValue, setSettingsValue] = useState('')
    
    // Switch Between Views
    const VIEW_TYPE = {
        listView: 'listView',
        tileView: 'tileView'
    }

    const [switchViewType, setSwitchViewType]  = useState(VIEW_TYPE.listView);

    const changeViewType = (_:any, value:any) => setSwitchViewType(value);

    const switchActionsCell = (
        <TableActionCell
            primaryAction={{
                text: 'Edit',
                skin: 'standard',
                onClick: ()=>{}
            }}

            secondaryActions={[
                {
                    text: 'Move',
                    icon: <Icons.MoveToSmall />,
                    onClick: () => {},
                },
                {
                    text: 'Mark as sold out',
                    icon: <Icons.FoodOutOfStockSmall />,
                    onClick: () => {},
                },
                {
                    text: 'Hide',
                    icon: <Icons.HiddenSmall />,
                    onClick: () => {},
                },
                {
                    text: 'Archive',
                    icon: <Icons.ArchiveSmall />,
                    onClick: () => {},
                },
            ]}

            numOfVisibleSecondaryActions={0}
        />
    );

    const ListView = () => [
        <TableListItem
            key="1"
            draggable
            showDivider
            options={[
            {
                value: <Image src="https://www.docs.wixdesignsystem.com/FoodExample1.jpg" width="90px" height="52px" />,
                width: '90px',
            },
            { value: <Text>French toast</Text> },
            { value: <Text>$8.00</Text> },
            {
                value: switchActionsCell
            }
           
            ]}
        />,
        <TableListItem
        key="2"
        draggable
        showDivider
        options={[
          {
            value: <Image src="https://www.docs.wixdesignsystem.com/FoodExample2.jpg" width="90px" height="52px" />,
            width: '90px',
          },
          { value: <Text>House pasta</Text> },
          { value: <Text>$27.00</Text> },
          {
            value: switchActionsCell
         }
          
        ]}
      />,
      <TableListItem
        key="3"
        draggable
        options={[
          {
            value: <Image src="https://www.docs.wixdesignsystem.com/FoodExample3.jpg" width="90px" height="52px" />,
            width: '90px',
          },
          { value: <Text>Paella</Text> },
          { value: <Text>$18.00</Text> },
          {
            value: switchActionsCell
        }
          
        ]}
      />,
    ]

    const Tile = ({ media, title }:{media:any, title: any}) => (
        <Proportion aspectRatio={1}>
          <MediaOverlay skin="gradient" media={media}>
            <MediaOverlay.Content placement="top-end" visible="hover">
              <IconButton priority="secondary" skin="inverted" size="tiny">
                <Icons.Edit />
              </IconButton>
            </MediaOverlay.Content>
            <MediaOverlay.Content placement="bottom-start" visible="always">
              <Text size="small" weight="normal" light>
                {title}
              </Text>
            </MediaOverlay.Content>
          </MediaOverlay>
        </Proportion>
      );
    
    const TileView = () => (
        <Card.Content>
          <Layout cols={4}>
            <Tile media="https://www.docs.wixdesignsystem.com/FoodExample1.jpg" title="French toast" />
            <Tile media="https://www.docs.wixdesignsystem.com/FoodExample2.jpg" title="House pasta" />
            <Tile media="https://www.docs.wixdesignsystem.com/FoodExample3.jpg" title="Paella" />
          </Layout>
        </Card.Content>
      );

    const [statusRegistrationOrigin, setStatusRegistrationOrigin] = useState(1)
    return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small' >Structure</Heading>

        <SegmentedToggle defaultSelected="option 1" >
            <SegmentedToggle.Button value="option 1" >Option 1</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option 2" >Option 2</SegmentedToggle.Button>
        </SegmentedToggle>

        <SegmentedToggle defaultSelected="option 1" >
            <SegmentedToggle.Button value="option 1" >Option 1</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option 2" >Option 2</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option 3" >Option 3</SegmentedToggle.Button>
        </SegmentedToggle>

        <SegmentedToggle defaultSelected="option 1" >
            <SegmentedToggle.Button value="option 1" >Option 1</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option 2" >Option 2</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option 3" >Option 3</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option 4" >Option 4</SegmentedToggle.Button>
        </SegmentedToggle>

        <Heading size='small' >Child items</Heading>

        <Box gap="SP6">
            <SegmentedToggle defaultSelected="option 1" >
                <SegmentedToggle.Button value="option 1" >Option 1</SegmentedToggle.Button>
                <SegmentedToggle.Button value="option 2" >Option 2</SegmentedToggle.Button>
            </SegmentedToggle>

            <SegmentedToggle defaultSelected="option 1" >
                <SegmentedToggle.Icon value="option 1" tooltipText='Option 1' >
                    <Icons.LockLocked/>
                </SegmentedToggle.Icon>
                <SegmentedToggle.Icon value="option 2" tooltipText='Option 2' >
                    <Icons.LockUnlocked/>
                </SegmentedToggle.Icon>
            </SegmentedToggle>
        </Box>

        <Heading size='small' >Size</Heading>

        <Box direction='vertical' gap="SP4" >
            <SegmentedToggle defaultSelected="option1" size='medium' >
                <SegmentedToggle.Button value="option1">Medium</SegmentedToggle.Button>
                <SegmentedToggle.Button value="option2">Medium</SegmentedToggle.Button>
            </SegmentedToggle>

            <SegmentedToggle defaultSelected="option1" size='small' >
                <SegmentedToggle.Button value="option1">Small</SegmentedToggle.Button>
                <SegmentedToggle.Button value="option2">Small</SegmentedToggle.Button>
            </SegmentedToggle>
        </Box>

        <Heading size='small' >Prefix Icon</Heading>

        <SegmentedToggle defaultSelected="option1" >
            <SegmentedToggle.Button prefixIcon={<Icons.LockLocked/>} value="option1">
                Option 1
            </SegmentedToggle.Button>
            <SegmentedToggle.Button prefixIcon={<Icons.LockUnlocked/>} value="option2">
                Option 2
            </SegmentedToggle.Button>
        </SegmentedToggle>

        <Heading size='small' >Disabled Options</Heading>

        <SegmentedToggle defaultSelected="option1" disabled >
            <SegmentedToggle.Button value="option1">Option</SegmentedToggle.Button>
            <SegmentedToggle.Button value="option1">Option</SegmentedToggle.Button>
        </SegmentedToggle>

        <Heading size='medium' >Developer Examples</Heading>
        <Heading size='small' >Selection Controls</Heading>

        <FormField label="Alignment" >
            <Box>
                <SegmentedToggle selected={selectionSelectedValue} onClick={selectionOnClick} >
                    <SegmentedToggle.Icon value="option1" tooltipText='Left align' >
                        <Icons.TextAlignLeft/>
                    </SegmentedToggle.Icon>

                    <SegmentedToggle.Icon value="option2" tooltipText='Center align' >
                        <Icons.TextAlignCenter/>
                    </SegmentedToggle.Icon>

                    <SegmentedToggle.Icon value="option3" tooltipText='Right align' >
                        <Icons.TextAlignRight/>
                    </SegmentedToggle.Icon>

                    <SegmentedToggle.Icon value="option4" tooltipText='Justify' >
                        <Icons.TextJustify/>
                    </SegmentedToggle.Icon>

                </SegmentedToggle>
            </Box>
        </FormField>

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Settings panel</Heading>

        <SidePanel maxHeight="576px" width="288px" skin='floating' >
            <SidePanel.Header title="Text Box Settings" />
            <SidePanel.Content noPadding >
                <SidePanel.Field>
                    <FormField label="Description" >
                        <InputArea
                            placeholder='Collapsible text is great for longer section titles and descriptions.'
                            size='small'
                            rows={3}
                            maxLength={300}
                            hasCounter
                            resizable
                            value={settingsValue}
                            onChange={(e)=>setSettingsValue(e.target.value)}
                        />
                    </FormField>
                </SidePanel.Field>

                <SidePanel.Field>
                    <FormField label="What does the button do?" >
                        <SegmentedToggle size='small' defaultSelected="Open" >
                            <SegmentedToggle.Button value="Open" >
                                Expand
                            </SegmentedToggle.Button>
                            <SegmentedToggle.Button value="Close" >
                                Link
                            </SegmentedToggle.Button>
                        </SegmentedToggle>
                    </FormField>
                </SidePanel.Field>

                <SidePanel.Field>
                    <FormField label="Link button text" >
                        <Input size='small' placeholder='Link to full article' />
                    </FormField>
                </SidePanel.Field>
            </SidePanel.Content>
        </SidePanel>

        <Heading size='small' >Switch Between Views</Heading>

        <Card>
            <Card.Header
                title="Dishes"
                suffix={
                    <Box gap="18px" verticalAlign="middle">
                    <SegmentedToggle selected={switchViewType} onClick={changeViewType}>
                      <SegmentedToggle.Icon
                        value={VIEW_TYPE.tileView}
                        tooltipText="Tile view"
                      >
                        <Icons.LayoutGallery />
                      </SegmentedToggle.Icon>
                      <SegmentedToggle.Icon
                        value={VIEW_TYPE.listView}
                        tooltipText="List view"
                      >
                        <Icons.LayoutList />
                      </SegmentedToggle.Icon>
                    </SegmentedToggle>
                    <Button size="small" prefixIcon={<Icons.Add />}>
                      Add Dish
                    </Button>
                  </Box>
                }
            />
            <Card.Divider/>
            {switchViewType === VIEW_TYPE.listView ? <ListView/>: <TileView/>}
        </Card>

        <Heading size='small' >Status Toggle</Heading>

        <Card>
            <Card.Header title="Guest registration" />
            <Card.Divider/>
            <Card.Content>
                <Layout cols={1} >
                    <Box direction='vertical' gap="12px" >
                        <FormField label="Where do guests register?" >
                            <RadioGroup
                                value={statusRegistrationOrigin}
                                onChange={setStatusRegistrationOrigin}
                            >
                                <RadioGroup.Radio value={1} >
                                    On my Wix Events registration page
                                </RadioGroup.Radio>
                                <RadioGroup.Radio value={2} >
                                    On a different page or website
                                </RadioGroup.Radio>
                                <RadioGroup.Radio value={3} >
                                    Guest don't need to register
                                </RadioGroup.Radio>

                            </RadioGroup>
                        </FormField>
                    </Box>

                    <Divider  />

                    <FormField label="Registration for this event is:" >
                        <Box>
                            <SegmentedToggle defaultSelected="option1" >
                                <SegmentedToggle.Button
                                    prefixIcon={<Icons.LockUnlocked/>}
                                    value="option1"
                                >
                                    Open
                                </SegmentedToggle.Button>
                                <SegmentedToggle.Button
                                    prefixIcon={<Icons.LockLocked/>}
                                    value="option2"
                                >
                                    Closed
                                </SegmentedToggle.Button>
                            </SegmentedToggle>
                        </Box>
                    </FormField>
                </Layout>   
            </Card.Content>
        </Card>


    </Box>
  )
}

export default SegmentedToggleComponent