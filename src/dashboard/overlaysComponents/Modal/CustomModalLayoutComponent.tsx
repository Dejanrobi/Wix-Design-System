import { AddItem, Box, Button, Card, Cell, Checkbox, CustomModalLayout, Divider, Dropdown, FormField, Heading, Image, Input, InputArea, Layout, MarketingLayout, Modal, Page, SelectableAccordion, Table, Text, TextButton } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const CustomModalLayoutComponent = () => {

    const [shown, setShown] = useState(false)

    const [usingModals, setUsingModals] = useState(false)

    const [headingStructure, setHeadingStructure] = useState(false)


    // Modal with no content padding

    const [sendCoupons, setSendCoupons] = useState(false)
    const [copySendCoupons, setCopySendCoupons] = useState(false)


    const sendCouponsData = [
        { name: 'User 1', plan: 'Gold', email: 'user1@mail.com' },
        { name: 'User 2', plan: 'Silver', email: 'user2@mail.com' },
        { name: 'User 3', plan: 'Gold', email: 'user3@mail.com' },
        { name: 'User 4', plan: 'Gold', email: 'user4@mail.com' },
        { name: 'User 5', plan: 'Bronze', email: 'user5@mail.com' },
        { name: 'User 6', plan: 'Bronze', email: 'user6@mail.com' },
        { name: 'User 7', plan: 'Gold', email: 'user7@mail.com' },
        { name: 'User 8', plan: 'Bronze', email: 'user8@mail.com' },
    ]

    const sendCouponsColumns = [
        { title: 'Name',  render: (row:any) => row.name },
        { title: 'Plan',  render: (row:any) => row.plan },
        { title: 'Email',  render: (row:any) => row.email },
    ]

    // Modal with multiple actions
    const [multipleActions, setMultipleActions] = useState(false)

    // Modal with page inside
    const [pricingPlans, setPricingPlans] = useState(false)

    // Modal with marketing Layout
    const [marketingLayout, setMarketingLayout] = useState(false)

  return (
    <Box direction='vertical' gap="SP6">
        <Heading size='small'>Structure</Heading>

        <CustomModalLayout
            primaryButtonText="Save"
            secondaryButtonText="Cancel"
            onCloseButtonClick={()=>{}}
            title="Title"
            subtitle="Subtitle"
            footnote={
                <Box border="1px dotted" align='center'  >Footnote</Box>
            }
            sideActions={
                <Box border="1px dotted"  align='center'>
                    Side actions
                </Box>

            }
            content={
                <Box border="1px dotted" height="240px" align='center'>
                    Content
                </Box>
            }
        />

        <Heading size='small'>Height</Heading>

        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                secondaryButtonOnClick={()=>{}}
                primaryButtonOnClick={()=>{}}
                title="Auto height (default)"
                content={<Box height="180px" />}
            />

            <CustomModalLayout
                height="360px"
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                secondaryButtonOnClick={()=>{}}
                primaryButtonOnClick={()=>{}}
                title="Height is fixed at 360px"
                content={<Box height="600px" />}
            />
        </Box>

        <Heading size='small'>Content Padding</Heading>
        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Default content padding"
                content={<Box border="1px dotted" height="60px"></Box>}
            />

            <CustomModalLayout
                removeContentPadding
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Default content padding"
                content={<Box border="1px dotted" height="60px"></Box>}
            />
        </Box>

        <Heading size='small'>Theme</Heading>

        <Box direction='vertical' gap="SP4">

            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Standard (default)"
                content={<Box border="1px dotted" height="60px"></Box>}
            
            />

            <CustomModalLayout
                theme='premium'
                primaryButtonText="Upgrade"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Premium"
                content={<Box border="1px dotted" height="60px"></Box>}
            
            />

            <CustomModalLayout
                theme='destructive'
                primaryButtonText="Delete"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Destructive"
                content={<Box border="1px dotted" height="60px"></Box>}
            
            />
        </Box>

        <Heading size='small'>Header and footer dividers</Heading>

        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Auto (default)"
                height="240px"
                content={<Box border="1px dotted" height="400px"></Box>}

            />

            <CustomModalLayout
                showFooterDivider
                showHeaderDivider
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Always show dividers"
                height="240px"
                content={<Box border="1px dotted" height="400px"></Box>}

            />

            <CustomModalLayout
                showFooterDivider={false}
                showHeaderDivider={false}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Hide dividers"
                height="240px"
                content={<Box border="1px dotted" height="400px"></Box>}

            />
        </Box>

        <Heading size='small'>Help and Close Buttons</Heading>

        <CustomModalLayout
            primaryButtonText="Save"
            secondaryButtonText="Cancel"
            onCloseButtonClick={()=>{}}
            onHelpButtonClick={()=>{}}
            title="Title"
            content={<Box border="1px dotted" height="60px" />}
        />

        <Heading size='small'>Side Actions</Heading>

        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                sideActions={
                    <Box border="1px dotted" >Side actions</Box>
                }
                content={<Box border="1px dotted" height="60px"></Box>}
            />

            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                sideActions={
                    <Checkbox>Don't show this again</Checkbox>
                }
                content={<Box border="1px dotted" height="60px"></Box>}
            />

            <CustomModalLayout
                onCloseButtonClick={()=>{}}
                title="Title"
                sideActions={
                    <Box align='space-between'>
                        <Button priority='secondary' size='small'>Cancel</Button>

                        <Box gap="8px">
                            <Button
                                priority='secondary'
                                size='small'
                                prefixIcon={<Icons.DismissSmall/>}
                            >
                                Reject
                            </Button>

                            <Button
                                priority='secondary'
                                size='small'
                                prefixIcon={<Icons.TimeSmall/>}
                            >
                                Keep for later
                            </Button>

                            <Button
                                priority='secondary'
                                size='small'
                                prefixIcon={<Icons.ConfirmSmall/>}
                            >
                                Approve
                            </Button>
                        </Box>

                    </Box>
                }
                content={<Box border="1px dotted" height="60px"></Box>}
            />
        </Box>

        <Heading size='small'>Footer</Heading>
        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                footnote={
                    <Box align='center' border="1px dotted">
                        Footnote
                    </Box>
                }
                content={<Box height="60px" border="1px dotted"></Box>}
            />

            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                footnote={
                    <Text size='small' >
                        By continuing, you agree to the <a>Wix Terms of Use</a>
                    </Text>
                }
                content={<Box height="60px" border="1px dotted"></Box>}
            />
        </Box>

        <Heading size='small'>Title and Subtitle</Heading>
        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title (required)"
                subtitle="Subtitle (optional)"
                content={<Box border="1px dotted" height="60px" />}
            />

            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title "
                subtitle={
                    <Box gap="6px">
                        <Text secondary>Subtitle</Text>
                        <TextButton underline='always'>Inline text button</TextButton>
                    </Box>
                }
                content={<Box border="1px dotted" height="60px" />}
            />
        </Box>

        <Heading size='small'>Action Buttons</Heading>
        <Box direction='vertical' gap="SP4">
             <CustomModalLayout
                primaryButtonText="Approve"
                primaryButtonProps={{ prefixIcon: <Icons.ConfirmSmall/> }}
                secondaryButtonText="Reject"
                secondaryButtonProps={{ prefixIcon: <Icons.DismissSmall/> }}
                onCloseButtonClick={()=>{}}
                title="Title"
                
                content={<Box border="1px dotted" height="60px" />}
            />
        </Box>

        <Heading size='small'>Disabled Primary Action</Heading>
        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                primaryButtonProps={{ disabled: true }}
                primaryButtonTooltipProps={{ content: 'Tells users why they cannot Save' }}
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                
                content={<Box border="1px dotted" height="60px" />}
            />
        </Box>

        <Heading size='medium'>Developer Examples</Heading>

        <Heading size='small'>Vertical Overflow</Heading>

        <Box direction='vertical' gap="SP4">
            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                content={<Input placeholder='Click here to see the default outlines'/>}
            />

            <CustomModalLayout
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                title="Title"
                overflowY='none'
                content={<Input placeholder='Click here to see the outlines with overflowY prop'/>}
            />
        </Box>

        <Heading size='small'>Modals with Overlays</Heading>

        <Card>
            <Card.Header
                title="Allow using coupons"
                subtitle="Let visitors use coupons to get discounts & special deals."
                suffix={
                    <Button
                        size='small'
                        priority='secondary'
                        onClick={()=>{setShown(true)}}
                    >Apply Coupon</Button>
                }
            />

            <Modal
                isOpen={shown}
                onRequestClose={()=> setShown(false)}
                shouldCloseOnOverlayClick
                screen='desktop'
            >

                <CustomModalLayout
                    primaryButtonText="Apply"
                    primaryButtonOnClick={()=> setShown(false)}
                    secondaryButtonText="Cancel"
                    secondaryButtonOnClick={()=> setShown(false)}
                    onCloseButtonClick={()=> setShown(false)}
                    title="Apply a coupon"
                    overflowY='none'
                    content={
                        <FormField label="Select coupon">
                            <Dropdown
                                popoverProps={{
                                    appendTo: 'scrollParent',
                                    dynamicWidth: 'true',
                                }}
                                options={[
                                    { id: 0, value: 'None' },
                                    { id: 1, value: 'SUMMER15' },
                                    { id: 2, value: 'BACKTOSCHOOL' },
                                    { id: 3, value: 'AUGUST10' },
                                    { id: 4, value: 'OUTWITHTHEOLD' },
                                ]}
                                placeholder='Select from the list'
                            />
                        </FormField>
                    }
                />
            </Modal>
        </Card>

        <Heading size='medium'>Accessibility Considerations</Heading>
        <Heading size='small'>Using Modals</Heading>

        <Card>
            <Card.Header
                title="Plan policies"
                subtitle="Add your own terms and conditions for this plan."
                suffix={
                    <TextButton
                        size='small'
                        prefixIcon={<Icons.AddSmall/>}
                        onClick={()=> setUsingModals(true)}
                    >
                        Add Policy
                    </TextButton>
                }
            />

            <Modal
                isOpen={usingModals}
                onRequestClose={()=> setUsingModals(false)}
                shouldCloseOnOverlayClick
                screen='desktop'
            >
                <CustomModalLayout
                    primaryButtonText="Add Policy"
                    secondaryButtonText="Cancel"
                    onCloseButtonClick={()=> setUsingModals(false)}
                    secondaryButtonOnClick={()=> setUsingModals(false)}
                    primaryButtonOnClick={()=> setUsingModals(false)}
                   
                    width="600px"
                    title="Add new pricing plan policy"

                    content={
                        <Layout>
                            <Cell>
                                <FormField label="Policy title" >
                                    <Input placeholder='Enter title here' />
                                </FormField>
                            </Cell>

                            <Cell>
                                <FormField label="Terms & Conditions" >
                                    <InputArea
                                        placeholder='e.g. Free trial, renewal, cancellation and refunds.'
                                        rows={6}
                                        maxLength={1000}
                                        hasCounter
                                        resizable
                                    />
                                </FormField>
                            </Cell>
                        </Layout>
                    }
                />


            </Modal>
        </Card>

        <Heading size='small'>Heading Structure</Heading>

        <>
                <Button
                    size='small'
                    priority='secondary'
                    prefixIcon={<Icons.PreviewSmall/>}
                    onClick={()=> setHeadingStructure(true)}
                >
                    Click to see a modal
                </Button>

                <Modal
                    isOpen={headingStructure}
                    onRequestClose={()=>setHeadingStructure(false)}
                    shouldCloseOnOverlayClick
                    screen='desktop'
                >
                    <CustomModalLayout
                        primaryButtonText="Save"
                        secondaryButtonText="Cancel"
                        onCloseButtonClick={()=> setShown(false)}
                        onHelpButtonClick={()=>{}}
                        secondaryButtonOnClick={()=> setHeadingStructure(false)}
                        primaryButtonOnClick={()=> setHeadingStructure(false)}
                        removeContentPadding
                        title="Modal title as H2"
                        content={
                            <Page>
                                <Page.Content>
                                    <Box marginTop={5} display='block' >
                                        <Layout>
                                            <Cell span={12} >
                                                <Card>
                                                    <Card.Header title="Card title as H3" />
                                                    <Card.Divider/>
                                                    <Card.Content>
                                                        <Box
                                                            verticalAlign='middle'
                                                            align='center'
                                                            height="180px"
                                                        >
                                                            <Text>Card content</Text>
                                                        </Box>
                                                    </Card.Content>
                                                </Card>
                                            </Cell>
                                        </Layout>
                                    </Box>
                                </Page.Content>
                            </Page>
                        }
                    
                    />

                </Modal>
        </>

        <Heading size='medium'>Common Use Cases</Heading>

        <Heading size='small'>Modal with no Content Padding</Heading>

        <Card>
            <Card.Header
                title="Send coupons to your members"
                subtitle="Select members who will receive a new coupon via email."
                suffix={
                    <Button
                        size='small'
                        priority='secondary'
                        onClick={()=> setSendCoupons(true)}
                    >
                        Send Coupons
                    </Button>
                }
            />

            <Modal
                isOpen={sendCoupons}
                onRequestClose={()=> setSendCoupons(false)}
                shouldCloseOnOverlayClick
                screen='desktop'
            >
                <CustomModalLayout
                    title="Send coupons to members"
                    subtitle="Select members who will receive coupons via email."
                    onCloseButtonClick={()=> setSendCoupons(false)}
                    primaryButtonOnClick={()=> setSendCoupons(false)}
                    secondaryButtonOnClick={()=> setSendCoupons(false)}
                    width="720px"
                    maxHeight="480px"
                    removeContentPadding
                    primaryButtonText="Send"
                    secondaryButtonText="Cancel"
                    sideActions={
                        <Checkbox
                            size='small'
                            checked={copySendCoupons}
                            onChange={()=> setCopySendCoupons(!copySendCoupons)}
                        >
                            Send copy Email to myself
                        </Checkbox>
                    }

                    content={
                        <Table
                            data={sendCouponsData}
                            columns={sendCouponsColumns}
                            showSelection
                        >
                            <Table.Content/>
                        </Table>
                    }
                />

            </Modal>
        </Card>

        <Heading size='small'>Modal with Multiple Actions</Heading>

        <Layout>
            <Cell span={6}>
                <Card>
                    <Box
                        direction='vertical'
                        gap={1}
                        paddingTop="2"
                        paddingLeft="4"
                        paddingRight="4"
                        paddingBottom="2"
                    >
                        <Text secondary>From name: </Text>
                        <Text weight='bold'>User 1</Text>
                        <Text secondary>Reply-to email:</Text>
                        <Text weight='bold'>User1@mail.com</Text>

                    </Box>

                    <Divider/>
                    <Box
                        paddingTop="2"
                        paddingLeft="4"
                        paddingRight="4"
                        paddingBottom="4"
                        align='center'
                    >
                        <TextButton onClick={()=> setMultipleActions(true)} >
                            Confirm Email
                        </TextButton>
                    </Box>

                    <Modal
                        isOpen={multipleActions}
                        onRequestClose={()=> setMultipleActions(false)}
                        shouldCloseOnOverlayClick
                        screen='desktop'
                    >

                        <CustomModalLayout
                            primaryButtonText="Confirm"
                            secondaryButtonText="Change Details"
                            onCloseButtonClick={()=> setMultipleActions(false)}
                            secondaryButtonOnClick={()=> setMultipleActions(false)}
                            primaryButtonOnClick={()=> setMultipleActions(false)}
                            overflowY='none'
                            width="600px"
                            title="Confirm your email address"
                            content={
                                <Layout>
                                    <Cell>
                                        <Text>
                                            To make changes to your sender details, place confirm your email address.
                                            <br /> A confirmation code was sent to {' '}
                                            <b>user1@mail.com</b>
                                        </Text>
                                    </Cell>

                                    <Cell span={6}>
                                        <FormField label="Confirmation Code" >
                                            <Input placeholder='XX-XXX-XX' />
                                        </FormField>

                                    </Cell>
                                    <Cell>
                                        <Text>
                                            Didn't get the code? <a>Send again</a>
                                        </Text>
                                    </Cell>
                                </Layout>
                            }

                            sideActions={
                                <Button
                                    onClick={()=> setMultipleActions(false)}
                                    priority='secondary'
                                    size='small'
                                >
                                    Cancel
                                </Button>
                            }
                        />


                    </Modal>
                </Card>

            </Cell>
        </Layout>

        <Heading size='small'>Modal with Page Inside</Heading>

        <Card>
            <Card.Header
                title="Pricing plans"
                subtitle="Let clients book this service with a plan."
                suffix={
                    <Button
                        size='small'
                        priority='secondary'
                        prefixIcon={<Icons.AddSmall/>}
                        onClick={()=> setPricingPlans(true)}
                    >
                        Create New Plan
                    </Button>
                }
            />

            <Modal
                isOpen={pricingPlans}
                onRequestClose={()=> setPricingPlans(false)}
                shouldCloseOnOverlayClick
                screen='desktop'
            >
                <CustomModalLayout
                    primaryButtonText="Create Plan"
                    secondaryButtonText="Cancel"
                    onCloseButtonClick={()=> setPricingPlans(false)}
                    onHelpButtonClick={()=>{}}
                    secondaryButtonOnClick={()=> setPricingPlans(false)}
                    primaryButtonOnClick={()=> setPricingPlans(false)}
                    removeContentPadding
                    title="Create new pricing plan"
                    content={
                        <Page>
                            <Page.Content>
                                <Box marginTop={5} display='block' >
                                    <Layout>
                                        <Cell>
                                            <Card>
                                                <Card.Header
                                                    title="Plan info"
                                                    subtitle="Give your plan a name and tell customers what it includes"
                                                />

                                                <Card.Divider/>
                                                <Card.Content>
                                                    <Layout>
                                                        <Cell span={6} >
                                                            <FormField
                                                                label="Name this plan"
                                                                required
                                                                charCount={20}
                                                            >
                                                                <Input placeholder='e.g., Silver Membership' />
                                                            </FormField>
                                                        </Cell>
                                                        <Cell span={6} >
                                                            <FormField
                                                                label="Add a tagline"
                                                                
                                                                charCount={60}
                                                            >
                                                                <Input placeholder='e.g., Perfect for beginners' />
                                                            </FormField>
                                                        </Cell>

                                                        <Cell span={12} >
                                                           <AddItem size='tiny' >
                                                                Add what this plan includes
                                                           </AddItem>
                                                        </Cell>
                                                    </Layout>
                                                </Card.Content>
                                            </Card>
                                        </Cell>


                                        <Cell span={12} >
                                            <Card>
                                                <Card.Header
                                                    title="Connect and manage benefits"
                                                    subtitle="Set up how your benefits work in this plan."
                                                />

                                                <Card.Divider/>
                                                <Box
                                                    display='block'
                                                    borderRadius={8}
                                                    paddingBottom="8px"

                                                >
                                                    <SelectableAccordion
                                                        type='checkbox'
                                                        items={[
                                                            {
                                                                title: 'Bookings Services',
                                                                subtitle:
                                                                  'Offer services as a membership or package with this plan.',
                                                                content: (
                                                                  <Box>
                                                                    Booking Services content
                                                                  </Box>
                                                                ),
                                                              },
                                                              {
                                                                title: 'Video Channels',
                                                                subtitle:
                                                                  'Offer access to your Video Channel with this plan.',
                                                                content: (
                                                                  <Box>
                                                                    Video Channels content
                                                                  </Box>
                                                                ),
                                                              },
                                                              {
                                                                title: 'Blog Subscriptions',
                                                                subtitle: 'Give exclusive access to posts.',
                                                                content: (
                                                                  <Box>
                                                                    Blog Subscriptions content
                                                                  </Box>
                                                                ),
                                                              },
                                                              {
                                                                title: 'Forum Subscriptions',
                                                                subtitle:
                                                                  'Give exclusive access to forum categories.',
                                                                content: (
                                                                  <Box>
                                                                    Forum Subscriptions content
                                                                  </Box>
                                                                ),
                                                              },
                                                              {
                                                                title: 'Events Memberships',
                                                                subtitle:
                                                                  'Add ticket discount and ticket limit for your events.',
                                                                content: (
                                                                  <Box>
                                                                    Events Memberships content
                                                                  </Box>
                                                                ),
                                                              },
                                                              {
                                                                title: 'Online Programs',
                                                                subtitle:
                                                                  'Allow participation in different programs with this plan.',
                                                                content: (
                                                                  <Box>
                                                                    Online Programs content
                                                                  </Box>
                                                                ),
                                                              },
                                                              {
                                                                title: 'Groups',
                                                                subtitle:
                                                                  'Give clients access to exclusive groups.',
                                                                content: (
                                                                  
                                                                   <Box>
                                                                        Group content
                                                                   </Box>
                                                                ),
                                                              },
                                                        ]}
                                                    />

                                                </Box>
                                            </Card>

                                        </Cell>
                                    </Layout>
                                </Box>
                            </Page.Content>
                        </Page>
                    }
                />

            </Modal>
        </Card>

        <Heading size='small'>Modal with Marketing Layout</Heading>

        <Card>
            <Card.Header
                title="Add Logo to your website"
                subtitle="Customize your website to match the colors and style of your logo."
                suffix={
                    <Button
                        size='small'
                        priority='secondary'
                        onClick={()=> setMarketingLayout(true)}
                    >
                        Connect Website
                    </Button>
                }
            />

            <Modal
                isOpen={marketingLayout}
                onRequestClose={()=> setMarketingLayout(false)}
                shouldCloseOnOverlayClick
                screen='desktop'
            >
                <CustomModalLayout
                    width="720px"
                    removeContentPadding
                    onCloseButtonClick={()=> setShown(false)}
                    content={
                        <Card>
                            <MarketingLayout
                                size='medium'
                                title="Wix unlimited website Premium plan"
                                description="Get a customizable website, designed to match the colors of your logo."
                                
                                actions={
                                    <Button onClick={()=> setMarketingLayout(false)}>Add to Cart</Button>
                                }

                                image={
                                    <Box height="156px">
                                        <Image src='https://www.docs.wixdesignsystem.com/MarketingIllustration1.png' transparent />
                                    </Box>
                                }
                            />
                        </Card>
                    }
                
                />

            </Modal>
        </Card>
    </Box>
  )
}

export default CustomModalLayoutComponent