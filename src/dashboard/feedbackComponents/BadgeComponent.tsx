import { Badge, Box, Button, Card, Heading, Image, MarketingLayout, Table, TableActionCell, TableToolbar } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const BadgeComponent = () => {
    const records = [
        {
            number: '#1439',
            total: '$105.55',
            status: {
                title: "Paid",
                skin: "neutralLight"
            }
        },
        {
            number: '#4152',
            total: '$928.41',
            status: {
                title: "Paid",
                skin: "neutralLight"
            }
        },
        {
            number: '#9261',
            total: '$710.68',
            status: {
                title: "Paid",
                skin: "neutralLight"
            }
        },
        {
            number: '#9359',
            total: '$219.78',
            status: {
                title: "Overdue",
                skin: "danger"
            }
        },
        {
            number: '#5560',
            total: '$782.01',
            status: {
                title: "Partially paid",
                skin: "urgent"
            }
        },
        {
            number: '#6690',
            total: '$406.27',
            status: {
                title: "Paid",
                skin: "neutralLight"
            }
        },
        {
            number: '#5948',
            total: '$475.22',
            status: {
                title: "Sent",
                skin: "success"
            }
        }
    ]

    const badgeFunction =(skin:any, title:any)=>{
        return (
            <Badge skin={skin}  >{title}</Badge>
        )
    }

    const secondaryAction = [
        {
            icon: <Icons.DuplicateSmall/>,
            text: "Duplicate",
            onclick: ()=>{}
        },
        {
            icon: <Icons.DeleteSmall/>,
            text: "Delete",
            onclick: ()=>{}
        }
    ]

    const columns = [
        {
            title: 'Number',
            render: (row:any) => row.number,
            width: '30%'
        },
        {
            title: 'Total',
            render: (row:any) => row.total,
            width: '30%',
            align: 'start'
        },
        {
            title: 'Status',
            render: (row:any) => badgeFunction(row.status.skin, row.status.title),
            width: '30%',
            align: 'start'
        },
        {
            render: (row:any)=>(
                <TableActionCell size='small' secondaryActions={secondaryAction} />
            ),
            width: '10%'
        }

    ]


  return (
    <Box direction='vertical' gap="SP6">
        <Box >
            <Heading size='small'>Size</Heading>
        </Box>

        <Box direction='vertical' gap="SP2" width="200px">
            <Badge size='medium'>Medium</Badge>
            <Badge size='small'>Small</Badge>
            <Badge size='tiny'>Tiny</Badge>
        </Box>

        <Box direction='vertical' gap="SP2" width="200px">
            <Badge type='solid'>Solid</Badge>
            <Badge type='outlined'>Outlined</Badge>
            <Badge type='transparent'>Transparent</Badge>           
        </Box>

        <Box >
            <Heading size='small'>Skin</Heading>
        </Box>

        <Box gap="SP4">
            <Box direction='vertical' gap="SP2">
                <Badge skin="general">General</Badge>
                <Badge skin="standard">Standard</Badge>
                <Badge skin="danger">Danger</Badge>
                <Badge skin="success">Success</Badge>
                <Badge skin="neutral">Neutral</Badge>
                <Badge skin="warning">Warning</Badge>
                <Badge skin="urgent">Urgent</Badge>
                <Badge skin="premium">Premium</Badge>
            </Box>
            <Box direction='vertical' gap="SP2">
                <Badge skin="neutralStandard">Neutral Standard</Badge>
                <Badge skin="neutralDanger">Neutral Danger</Badge>
                <Badge skin="neutralSuccess">Neutral Success</Badge>
                <Badge skin="neutralLight">Neutral Light</Badge>
                <Badge skin="warningLight">Warning Light</Badge>
            </Box>

            <Box direction='vertical' gap="SP2">
                <Badge skin="general" type="outlined">
                General
                </Badge>
                <Badge skin="standard" type="outlined">
                Standard
                </Badge>
                <Badge skin="danger" type="outlined">
                Danger
                </Badge>
                <Badge skin="success" type="outlined">
                Success
                </Badge>
                <Badge skin="neutral" type="outlined">
                Neutral
                </Badge>
                <Badge skin="warning" type="outlined">
                Warning
                </Badge>
                <Badge skin="urgent" type="outlined">
                Urgent
                </Badge>
                <Badge skin="premium" type="outlined">
                Premium
                </Badge>
            </Box>

            <Box direction='vertical' gap="SP2">
                <Badge skin="neutralStandard" type="outlined">
                Neutral Standard
                </Badge>
                <Badge skin="neutralDanger" type="outlined">
                Neutral Danger
                </Badge>
                <Badge skin="neutralSuccess" type="outlined">
                Neutral Success
                </Badge>
                <Badge skin="neutralLight" type="outlined">
                Neutral Light
                </Badge>
                <Badge skin="warningLight" type="outlined">
                Warning Light
                </Badge>
            </Box>

            <Box direction='vertical' gap="SP2">
                <Badge skin="general" type="transparent">
                General
                </Badge>
                <Badge skin="standard" type="transparent">
                Standard
                </Badge>
                <Badge skin="danger" type="transparent">
                Danger
                </Badge>
                <Badge skin="success" type="transparent">
                Success
                </Badge>
                <Badge skin="neutral" type="transparent">
                Neutral
                </Badge>
                <Badge skin="warning" type="transparent">
                Warning
                </Badge>
                <Badge skin="urgent" type="transparent">
                Urgent
                </Badge>
                <Badge skin="premium" type="transparent">
                Premium
                </Badge>
            </Box>

        </Box>

        <Box >
            <Heading size='small'>Letter Case</Heading>
        </Box>
        <Box direction='vertical' gap="SP4" width="200px">
            <Badge>Upper case</Badge>
            <Badge uppercase={false}>Lower case</Badge>
        </Box>

        <Box >
            <Heading size='small'>Affix</Heading>
        </Box>

        <Box direction='vertical' gap="SP4" width="200px">
            <Badge prefixIcon={<Icons.LockLockedSmall/>}>Prefix icon</Badge>
            <Badge suffixIcon={<Icons.ChevronDownSmall/>}>Suffix icon</Badge>
            
        </Box>

        <Box >
            <Heading size='medium'>Common Use Cases</Heading>
        </Box>
        <Box >
            <Heading size='small'>Item Status</Heading>
        </Box>

        <Card>
            <Table data={records} columns={columns} showSelection >
                <TableToolbar>
                    <TableToolbar.ItemGroup position='start' >
                        <TableToolbar.Item>
                            <TableToolbar.Label>7 invoices</TableToolbar.Label>
                        </TableToolbar.Item>
                    </TableToolbar.ItemGroup>
                </TableToolbar>
                <Table.Content/>

            </Table>
        </Card>

        <Box >
            <Heading size='small'>Promote</Heading>
        </Box>
        <Card>
            <MarketingLayout
                title = "Get listed on Google Search"
                description="Continue with your SEO setup checklist and connect to Google Search Console."
                actions={<Button size='small'>Go for It</Button>}
                size='tiny'
                badge={<Badge size='small'>Recommended</Badge>}
                image={
                    <Box width="100%" align='right'>
                       <Image
                        width="120px"
                        src='https://www.docs.wixdesignsystem.com/PromotionalPromoteMarketingHomeSEO.svg'
                        transparent
                       />

                    </Box>
                }
            />
        </Card>
    </Box>
  )
}

export default BadgeComponent
