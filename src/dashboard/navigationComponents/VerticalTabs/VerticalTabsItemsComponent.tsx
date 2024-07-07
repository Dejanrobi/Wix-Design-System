import { Box, Heading, VerticalTabsItem } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const VerticalTabsItemsComponent = () => {
  return (
    <Box direction='vertical'>
        <Box paddingBottom="SP4" >
            <Heading size='tiny'>Types</Heading>
        </Box>
        <Box direction='vertical' gap="SP4">
            <VerticalTabsItem type='tab'>Vertical Tab</VerticalTabsItem>
            <VerticalTabsItem type='action'>Vertical Tab Action</VerticalTabsItem>
            <VerticalTabsItem type='title'>Vertical Tab Title</VerticalTabsItem>
        </Box>

        <Box paddingTop="SP6" paddingBottom="SP4" >
            <Heading size='tiny'>affix</Heading>
        </Box>
        <Box direction='vertical' gap="SP4">
            <VerticalTabsItem prefixIcon={<Icons.Add/>} >Prefix icon</VerticalTabsItem>
            <VerticalTabsItem suffixIcon={<Icons.ChevronRight/>} >
                Suffix icons
            </VerticalTabsItem>
        </Box>

        <Box paddingTop="SP6" paddingBottom="SP4" >
            <Heading size='tiny'>Disabled</Heading>
        </Box>
        <VerticalTabsItem disabled>Disabled tab</VerticalTabsItem>
    </Box>
  )
}

export default VerticalTabsItemsComponent