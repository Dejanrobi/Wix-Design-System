import { Avatar, Box, Button, Card, Cell, Heading, IconButton, Layout, PopoverMenu, TextButton, Text, Page } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const PopOverMenuComponent = () => {
  return (
    <Box direction='vertical' gap="SP6">

        {/* NOTE: ENSURE THAT THE POP OVER MENU IS INSIDE A BOX TO BE DISPLAYED PROPERLY */}
        <Box >
            <Heading size='small' >Trigger Element</Heading>
        </Box>

        <Box gap="SP6">
           <PopoverMenu
            triggerElement={
                <Button priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                    More Actions
                </Button>
            }
           >
            <PopoverMenu.MenuItem text="Action 1" />
            <PopoverMenu.MenuItem text="Action 2" />
            <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>

           <PopoverMenu
            triggerElement={
                <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                    More Actions
                </TextButton>
            }
           >
            <PopoverMenu.MenuItem text="Action 1" />
            <PopoverMenu.MenuItem text="Action 2" />
            <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>

           <PopoverMenu
            triggerElement={
                <IconButton priority='secondary' >
                    <Icons.More/>
                </IconButton>
            }
           >
            <PopoverMenu.MenuItem text="Action 1" />
            <PopoverMenu.MenuItem text="Action 2" />
            <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Trigger Interaction</Heading>
        </Box>

        <Box gap="SP6">

            <PopoverMenu
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        Click Here
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>

           <PopoverMenu
                triggerElement={({ toggle, open, close })=>(
                    <TextButton
                        onClick={toggle}
                        onMouseEnter={open}
                        onMouseLeave={close}
                        suffixIcon={<Icons.ChevronDown/>}
                    >
                        Hover Here
                    </TextButton>
                )}
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>

        </Box>

        <Box >
            <Heading size='small' >Size</Heading>
        </Box>

        <Box gap="SP6">
        <PopoverMenu
                textSize='medium'
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        Click Here
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>

           <PopoverMenu
                textSize='small'
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        Click Here
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
           </PopoverMenu>

        </Box>

        <Box >
            <Heading size='small' >Skin</Heading>
        </Box>

        <Box>
            <PopoverMenu
                
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Skins
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem skin='dark' text="Dark Action" />
                <PopoverMenu.MenuItem skin='destructive' text="Destructive action" />
               
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Disabled</Heading>
        </Box>

        <Box>
            <PopoverMenu
                
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Disabled State
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Disabled action" disabled />
               
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Prefix</Heading>
        </Box>

        <Box gap="SP6">
            <PopoverMenu
                
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Prefix
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Add" prefixIcon={<Icons.Add/>} />
                <PopoverMenu.MenuItem text="Edit" prefixIcon={<Icons.Edit/>} />
                <PopoverMenu.MenuItem skin='destructive' text="Delete" prefixIcon={<Icons.Delete/>}  />
               
           </PopoverMenu>

           <PopoverMenu
                textSize='small'
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Small Prefix
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Add" prefixIcon={<Icons.Add/>} />
                <PopoverMenu.MenuItem text="Edit" prefixIcon={<Icons.Edit/>} />
                <PopoverMenu.MenuItem skin='destructive' text="Delete" prefixIcon={<Icons.Delete/>}  />
               
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Subtitle</Heading>
        </Box>

        <Box>
            <PopoverMenu
                    triggerElement={
                        <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                            View Subtitle
                        </TextButton>
                    }
            >
                <PopoverMenu.MenuItem 
                    text="Action 1" 
                    subtitle='Subtitle that explains action 1'
                />
                <PopoverMenu.MenuItem 
                    text="Action 2" 
                    subtitle='Subtitle that explains action 2'
                />
                <PopoverMenu.MenuItem 
                    text="Action 3" 
                    subtitle='Subtitle that explains action 3'
                />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Divider</Heading>
        </Box>

        <Box>
            <PopoverMenu
                    triggerElement={
                        <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                            Click Here
                        </TextButton>
                    }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.Divider/>
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Placement</Heading>
        </Box>

        <Box gap="SP6">
            <PopoverMenu
                    placement='top'
                    triggerElement={
                        <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                            Top Placement
                        </TextButton>
                    }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.Divider/>
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>

           <PopoverMenu
                    placement='left'
                    triggerElement={
                        <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                            Left Placement
                        </TextButton>
                    }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.Divider/>
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>

           <PopoverMenu
                    placement='right'
                    triggerElement={
                        <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                            Right Placement
                        </TextButton>
                    }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.Divider/>
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>

           <PopoverMenu
                    placement="bottom"
                    triggerElement={
                        <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                            Bottom Placement
                        </TextButton>
                    }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.Divider/>
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Pointer Arrow</Heading>
        </Box>

        <Box gap="SP6">
            <PopoverMenu
                
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View With Arrow
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>

           <PopoverMenu
                showArrow={false}
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Without Arrow
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Text Overflow</Heading>
        </Box>

        <Box gap="SP6">
            <PopoverMenu
                
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Wrapping Text
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
           </PopoverMenu>

           <PopoverMenu
                ellipsis
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Text With Ellipsis
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
                <PopoverMenu.MenuItem text="Long action text here, can you come with me." />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='small' >Custom Dimensions</Heading>
        </Box>

        <Box gap="SP6">
            <PopoverMenu
                minWidth="240px"
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Min Width
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>

           <PopoverMenu
                maxWidth="180px"
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Max Width
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.MenuItem text="Action 4" />
           </PopoverMenu>

           <PopoverMenu
                maxHeight="180px"
                triggerElement={
                    <TextButton priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                        View Max Height
                    </TextButton>
                }
           >
                <PopoverMenu.MenuItem text="Action 1" />
                <PopoverMenu.MenuItem text="Action 2" />
                <PopoverMenu.MenuItem text="Action 3" />
                <PopoverMenu.MenuItem text="Action 4" />
                <PopoverMenu.MenuItem text="Action 5" />
                <PopoverMenu.MenuItem text="Action 6" />
                <PopoverMenu.MenuItem text="Action 7" />
                <PopoverMenu.MenuItem text="Action 8" />
           </PopoverMenu>
        </Box>

        <Box >
            <Heading size='medium' >Common Use Cases</Heading>
        </Box>

        <Box >
            <Heading size='small' >Secondary Actions in Widgets</Heading>
        </Box>


        <Layout>
            <Cell span={4} >
                <Card>
                    <Card.Content>
                        <Box direction='vertical' gap={4}> 
                            <Box direction='horizontal' align='space-between' verticalAlign='middle' >
                                <Avatar/>
                                <PopoverMenu
                                    textSize='small'
                                    triggerElement={
                                        <IconButton priority='secondary' size='small'>
                                            <Icons.More/>
                                        </IconButton>
                                    }
                                >
                                    <PopoverMenu.MenuItem
                                        prefixIcon={<Icons.EditSmall/>}
                                        text="Edit info"
                                    />
                                    <PopoverMenu.MenuItem
                                        prefixIcon={<Icons.DateAndTimeSmall/>}
                                        text="Edit availability"
                                    />
                                    <PopoverMenu.MenuItem
                                        prefixIcon={<Icons.AdminAccessSmall/>}
                                        text="Manage permissions"
                                    />
                                    <PopoverMenu.Divider/>
                                    <PopoverMenu.MenuItem
                                        prefixIcon={<Icons.DeleteSmall/>}
                                        text="Delete"
                                        skin='destructive'
                                    />

                                </PopoverMenu>
                            </Box>

                            <Box direction='vertical'>
                                <Heading appearance='H4' >Mike Peterson</Heading>
                                <Text size='small' secondary >
                                    Sales Associate
                                </Text>
                                <Box height="60px" />
                            </Box>
                        </Box>
                    </Card.Content>
                </Card>
            </Cell>
        </Layout>

        <Box >
            <Heading size='small' >Secondary Page Actions</Heading>
        </Box>

        <Page>
            <Page.Header
                title="Services"
                subtitle="Create and edit courses, classes or appointments"
                actionsBar={
                    <Box direction='horizontal' gap="SP2">
                        <PopoverMenu
                            minWidth="max-content"
                            triggerElement={
                                <Button priority='secondary' suffixIcon={<Icons.ChevronDown/>} >
                                    More Actions
                                </Button>
                            }
                        >
                            <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Settings/>}
                                text="Update booking settings"
                            />
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Payment/>}
                                text="Accept payments"
                            />
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Users/>}
                                text="Manage staff"
                            />
                            <PopoverMenu.Divider/>
                            <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Coupon/>}
                                text="Create coupon"
                            />

                            <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Google/>}
                                text="Get booked on Google"
                            />
                            
                        </PopoverMenu>

                        <Button prefixIcon={<Icons.Add/>} >New Service</Button>
                    </Box>
                }
            />

            <Page.Content>
                <Card>
                    <Box height="360px"/>
                </Card>
            </Page.Content>
        </Page>

        <Box >
            <Heading size='small' >Disabled Action Explanation</Heading>
        </Box>

        <Page>
            <Page.Header
                title="Contacts"
                subtitle="Sort and keep track of the people who interact with your site"
                actionsBar={
                    <Box direction='horizontal' gap="SP2">
                        <PopoverMenu
                            minWidth="max-content"
                            triggerElement={
                                <Button priority='secondary' suffixIcon={<Icons.ChevronDown/>}>
                                    More Actions
                                </Button>
                            }
                        >
                            <PopoverMenu.MenuItem
                                prefixIcon={<Icons.DownloadImport/>}
                                text="Import contacts"
                            />
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.UploadExport/>}
                                text="Export contacts"
                                subtitle='Only site owners can export contacts'
                                disabled
                            />
                            <PopoverMenu.Divider/>
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Adjust/>}
                                text="Manage custom fields"
                            />
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Tag/>}
                                text="Manage labels"
                            />
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Visible/>}
                                text="Privacy and GDPR"
                            />
                             <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Tag/>}
                                text="Watch demo video"
                            />
                            <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Play/>}
                                text="Discover CRM tools"
                            />
                            <PopoverMenu.MenuItem
                                prefixIcon={<Icons.Chat/>}
                                text="Send feedback"
                            />

                        </PopoverMenu>

                        <Button prefixIcon={<Icons.Add/>} >New Contact</Button>

                    </Box>
                }
            />

            <Page.Content>
                <Card>
                    <Box height="360px" />
                </Card>
            </Page.Content>
        </Page>

        
        
    </Box>
  )
}

export default PopOverMenuComponent
