import { Box, Button, Card, Heading, IconButton, InfoIcon, SectionHeader, TableActionCell, TableListItem, Text, TextButton } from '@wix/design-system'
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const SectionHeaderComponent = () => {

    const items = [
        {
          sectionTitle: 'Monday, Feb 7',
        },
        {
          time: '7:00 PM - 9:00 PM',
          event: 'Registration & reception',
        },
        {
          sectionTitle: 'Tuesday, Feb 8',
        },
        {
          time: '8:00 AM - 10:00 AM',
          event: 'Keynote address by Steven H. Kastner',
          divider: true,
        },
        {
          time: '10:00 AM - 1:00 PM',
          event: 'Break & networking',
          divider: true,
        },
        {
          time: '1:00 PM - 3:00 PM',
          event: 'Keynote address by Linda Contreras',
          divider: true,
        },
        {
          time: '7:00 PM - 9:00 PM',
          event: 'Evening reception',
        },
        {
          sectionTitle: 'Wednesday, Feb 9',
        },
        {
          time: '8:00 AM - 10:00 AM',
          event: 'Keynote address by Susan W. Eaton',
          divider: true,
        },
        {
          time: '10:00 AM - 1:00 PM',
          event: 'Keynote address by Bjorn Rettig',
        },
      ];
    
      const pirmaryAction = {
        text: 'Edit',
      };
    
      const secondaryActions = [
        {
          text: 'Hide',
          icon: <Icons.HiddenSmall />,
          onClick: () => ({}),
        },
        {
          text: 'Cancel',
          icon: <Icons.BlockSmall />,
          onClick: () => ({}),
        },
        {
          text: 'Delete',
          icon: <Icons.DeleteSmall />,
          onClick: () => ({}),
        },
      ];

      const primaryAction = (
        <Button size="small" priority="secondary" prefixIcon={<Icons.AddSmall />}>
          Add Item
        </Button>
      );
    
      const actionsList = (
        <TableActionCell
          primaryAction={pirmaryAction}
          secondaryActions={secondaryActions}
          numOfVisibleSecondaryActions={0}
          size="small"
        />
      );
    
     
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small' >Size</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Medium" size='medium' />
            <SectionHeader title="Small" size='small' />
        </Box>

        <Heading size='small' >Horizontal Padding</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Large" horizontalPadding='large' />
            <SectionHeader title="Medium" horizontalPadding='medium' />
            <SectionHeader title="Small" horizontalPadding='small' />
            <SectionHeader title="Tiny" horizontalPadding='tiny' />
            <SectionHeader title="Extra tiny" horizontalPadding='xTiny' />
            <SectionHeader title="Extra-extra tiny" horizontalPadding='xxTiny' />
        </Box>

        <Heading size='small' >Skin</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Standard" skin='standard' />
            <SectionHeader title="Neutral" skin='neutral' />
        </Box>

        <Heading size='small' >Dividers</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Default" />
            <SectionHeader title="Top" divider='top' />
            <SectionHeader title="Bottom" divider='bottom' />
            <SectionHeader title="No dividers" divider='none' />
        </Box>

        <Heading size='small' >Suffix</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader
                suffix={
                    <InfoIcon
                        size='small'
                        content="Info icon gives more information abut a section."
                    />
                }
            />

            <SectionHeader
                suffix={
                    <TextButton
                        size='tiny'
                        priority="secondary"
                        prefixIcon={<Icons.AddSmall/>}
                    >
                        Suffix
                    </TextButton>
                }
            />

            <SectionHeader
                suffix={
                <Button size="tiny" priority="secondary">
                    Suffix
                </Button>
                }
            />

            <SectionHeader
                suffix={
                <IconButton size="tiny" priority="secondary">
                    <Icons.MoreSmall />
                </IconButton>
                }
            />
            <SectionHeader suffix={<Text size="tiny">Suffix</Text>} />
        </Box>

        <Heading size='small' >Title</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Default" />
            <SectionHeader
                title={
                <Text weight="bold" size="small">
                    Custom title
                </Text>
                }
            />
            <SectionHeader title={<Box border="1px dotted" height="24px" width="100%"></Box>} />
        </Box>

        <Heading size='small' >Title Alignment</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Start" align="start" />
            <SectionHeader title="Center" align="center" />
        </Box>

        <Heading size='small' >Title Overflow</Heading>

        <SectionHeader title="A very long section title goes into a title container in this case. It even has multiple sentences inside. It will be truncated by ellipses once it reaches the second line" />;

        <Heading size='medium' >Accessibility Considerations</Heading>
        <Heading size='small' >Title as a heading</Heading>

        <Box direction='vertical' gap="SP4" >
            <SectionHeader title="Default" />
            <SectionHeader title="Title as <h3> heading" as="h3" />
        </Box>

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Group content in cards</Heading>

        <Card hideOverflow>
      <Card.Header
        title="Event schedule"
        subtitle="Build a schedule to keep guests informed throughout your event."
        suffix={primaryAction}
      />
      {items.map((params) => {
        if (params.sectionTitle) {
          return <SectionHeader title={params.sectionTitle} size="small" />;
        }
        return (
          <TableListItem
            showDivider={params.divider}
            onClick={() => {}}
            options={[
              { value: <Text size="small">{params.time}</Text>, width: '25%' },
              { value: <Text size="small">{params.event}</Text>, width: '50%' },
              { value: actionsList },
            ]}
          />
        );
      })}
    </Card>



    </Box>
  )
}

export default SectionHeaderComponent