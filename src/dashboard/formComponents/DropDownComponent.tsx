import { Box, Cell, Dropdown, FormField, Layout, listItemSectionBuilder } from '@wix/design-system'
import React from 'react'

const DropDownComponent = () => {
  return (
    <Box direction='vertical' gap="SP2">
        <Cell span={12}>
            <FormField label="Product">
                <Dropdown
                    placeholder='Select'
                    options={[
                        listItemSectionBuilder({
                            title: 'Most popular',
                        }),
                        { id: 1, value: 'Wix Stores' },
                        { id: 2, value: 'Wix Bookings' },
                        { id: 3, value: 'Wix Blog' },
                        listItemSectionBuilder({
                            title: 'Other',
                        }),
                        { id: 4, value: 'Wix Events' },
                        { id: 5, value: 'Wix Forum' },
                        { id: 6, value: 'Wix Restaurants' }
                    ]}
                />
            </FormField>

        </Cell>
    </Box>
  )
}

export default DropDownComponent