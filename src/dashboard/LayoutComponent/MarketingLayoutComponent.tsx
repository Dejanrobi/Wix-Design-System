import { Badge, Box, Button, Card, Cell, Divider, Heading, Image, Layout, MarketingLayout, Page, PageSection, Text } from '@wix/design-system'
import React from 'react'

const MarketingLayoutComponent = () => {

    // size

    const MarketingLayoutImage = ({ width, height, title }:any) => (
        <Box width="100%" justifyItems='flex-end' >
            <Box width={width} height={height} border="1px dotted"
                // justifyItems='center'
                
                align='center'
                verticalAlign='middle'
            >
                
                    <Heading>{title}</Heading>
                
            </Box>
        </Box>
    )

    // Image position
    const ImageLayoutPosition =()=>(
        <Box
            border="1px dotted"
            width="180px"
            height="120px"
            justifyItems='end'
            align='center'
            verticalAlign='middle'
        >
            <Heading>M2</Heading>
        </Box>
    )
  return (
    <Box direction='vertical' gap="SP6" >

        <Heading size='small'>Structure</Heading>
        <MarketingLayout
            title="Title"
            description="Description"
            actions={<Button size='small'>Button</Button>}
            image={<Image width="180px" height="120px" />}
        />

        <Heading size='small'>Size</Heading>

        <Card>
            <MarketingLayout
                size='tiny'
                title="Tiny"
                description="Description"
                actions={<Button size='small'>Small Button</Button>}
                image={<MarketingLayoutImage width="96px" height="96px" title="S2" />}
            />
        </Card>

        <Card>
            <MarketingLayout
                size='small'
                title="Small"
                description="Description"
                actions={<Button size='small'>Small Button</Button>}
                image={<MarketingLayoutImage width="180px" height="120px" title="M2" />}
            />
        </Card>

        <Card>
            <MarketingLayout
                size='medium'
                title="Medium"
                description="Description"
                actions={<Button size='small'>Medium Button</Button>}
                image={<MarketingLayoutImage width="240px" height="156px" title="L1" />}
            />
        </Card>

        <Heading size='small'>Image Position</Heading>
        <Box direction='vertical' gap="SP6" >
            
            <Card>
               <MarketingLayout
                    title="Default Layout"
                    description="This layout has an image on the right side."
                    actions={<Button>Button</Button>}
                    image={<ImageLayoutPosition/>}
               />
            </Card>

            <Card>
               <MarketingLayout
                    inverted
                    title="Default Layout"
                    description="This layout has an image on the right side."
                    actions={<Button>Button</Button>}
                    image={<ImageLayoutPosition/>}
               />
            </Card>
        </Box>

        <Heading size='small'>Image Background Color</Heading>

        <Card hideOverflow >
            <MarketingLayout
                title="Title"
                description="Description"
                actions={<Button size='small' >Action</Button>}
                imageBackgroundColor='B40'
                image={
                    <Box>
                        <Box>
                        <Box
                            border="1px dotted"
                            width="180px"
                            height="120px"
                            justifyItems='center'
                            align='center'
                            verticalAlign='middle'
                        >
                            <Heading>M2</Heading>
                        </Box>

                        </Box>
                    </Box>
                }
            />
        </Card>

        <Heading size='small'>Badge</Heading>

        <Box direction='vertical' gap="SP6" >
            <Card>
                <MarketingLayout
                badge={<Badge size="small">badge</Badge>}
                title="With badge"
                description="Description"
                actions={<Button size="small">Action</Button>}
                image={<MarketingLayoutImage width="180px" height="120px" title="M2" />}
                />
            </Card>

            <Card>
                <MarketingLayout
                hiddenBadge
                title="Hidden badge"
                description="Description"
                actions={<Button size="small">Action</Button>}
                image={<MarketingLayoutImage width="180px" height="120px" title="M2" />}
                />
            </Card>
        </Box>

        <Heading size='small'>Vertical Alignment</Heading>

        <Box direction='vertical' gap="SP6" >
        <Card>
            <MarketingLayout
            title="Centered"
            description="This layout  centers its content vertically to the image on the right"
            actions={<Button size="small">Action</Button>}
            image={<Image height="180px" />}
            />
        </Card>
        <Card>
            <MarketingLayout
            alignItems="stretch"
            title="Stretched"
            description="This layout  stretches its content to fill the container instead of the default centered alignment."
            actions={<Button size="small">Action</Button>}
            image={<Image height="180px" />}
            />
        </Card>
        </Box>

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Multi-column Layout</Heading>
        
        <Page>
            <Page.Content>
                <Layout>
                <Cell>
                    <PageSection title="Suggested for you" showDivider />
                </Cell>
                <Cell span={6}>
                    <Card>
                    <MarketingLayout
                        title="Get found on Google"
                        description="Boost your site's SEO with the SEO Wiz. Follow your step-by-step plan."
                        actions={<Button size="small">Start Now</Button>}
                        size="tiny"
                        badge={<Badge size="small">Essential</Badge>}
                        image={
                        <Box width="100%" align="right">
                            <Image
                            width="120px"
                            src="https://www.docs.wixdesignsystem.com/PromotionalPromoteMarketingHomeSEO.svg"
                            transparent
                            />
                        </Box>
                        }
                    />
                    </Card>
                </Cell>
                <Cell span={6}>
                    <Card>
                    <MarketingLayout
                        title="Create an email campaign"
                        description="Send updates, offers or newsletters & keep in touch."
                        actions={<Button size="small">Send Campaign</Button>}
                        size="tiny"
                        hiddenBadge
                        alignItems="stretch"
                        image={
                        <Box width="100%" align="right">
                            <Image
                            width="120px"
                            src="https://www.docs.wixdesignsystem.com/PromotionalPromoteMarketingHomeEmail.svg"
                            transparent
                            />
                        </Box>
                        }
                    />
                    </Card>
                </Cell>
                </Layout>
            </Page.Content>
        </Page>;

        <Heading size='small'>Footnote</Heading>

        <Card>
        <MarketingLayout
            title="Add sessions to get booked"
            description="Set when this service is offered and which staff member will provide it."
            actions={
            <Box gap="6px">
                <Button size="small">Add Sessions</Button>
                <Button size="small" skin="inverted">
                Learn More
                </Button>
            </Box>
            }
            size="small"
            image={
            <Box width="100%" align="right">
                <Image width="120px" src="https://www.docs.wixdesignsystem.com/PromotionalBookingsUpgrade.svg" transparent />
            </Box>
            }
        />
        <Divider />
        <Box align="left" padding="12px 30px">
            <Text size="tiny" secondary>
            You can also add sessions directly from your <a>Calendar</a>.
            </Text>
        </Box>
        </Card>;
    </Box>
  )
}

export default MarketingLayoutComponent