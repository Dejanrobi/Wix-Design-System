import { Box, Cell, Checkbox, DatePicker, Dropdown, FieldSet, FormField, Heading, IconButton, Layout, SidePanel, TextButton, TimeInput, Tooltip } from '@wix/design-system'
import React, { useState } from 'react'

import * as Icons from '@wix/wix-ui-icons-common';

const DatePickerComponent = () => {

    const [selectedOption, setSelectedOption] = useState(0);
    const options = [
        { id:0, value: 'Monday' },
        { id: 1, value: 'Sunday' }
    ]

    // Together with time input
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Settings Panel</Heading>
        </Box>
        <SidePanel
            maxHeight="576px"
            width="288px"
            skin='floating'
            onCloseButtonClick={()=>{}}
        >
            <SidePanel.Header title="Calendar Settings" />
            <SidePanel.Content noPadding>
                <SidePanel.Field>
                    <FormField label="Week starts on">
                        <Dropdown
                            value=""
                            size='small'
                            options={options}
                            onSelect={(option:any)=> setSelectedOption(option.id)}
                            selectedId={selectedOption}
                        />

                    </FormField>
                </SidePanel.Field>
                <SidePanel.Field>
                    <FieldSet
                        legend="Set active days"
                        legendSize='small'
                        legendPlacement='top'
                        direction='vertical'
                        gap='12px'
                    >
                        <Checkbox size='small' checked>
                            Monday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Tuesday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Wednesday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Thursday
                        </Checkbox>
                        <Checkbox size='small' checked>
                            Friday
                        </Checkbox>
                        <Checkbox size='small' >
                            Saturday
                        </Checkbox>
                        <Checkbox size='small' >
                            Sunday
                        </Checkbox>
                    </FieldSet>
                </SidePanel.Field>

                <SidePanel.Section title="Available dates">
                    <SidePanel.Field>
                        <FieldSet
                            alignment='end'
                            direction='horizontal'
                            legendPlacement='none'
                        >
                            <FormField label="From">
                                <DatePicker size='small' width="auto" placeholderText="Start"/>
                            </FormField>
                            <FormField label="To">
                                <DatePicker size='small' width="auto" placeholderText="End" />
                            </FormField>
                            <Tooltip content="Delete">
                                <IconButton size='small' priority='secondary'>
                                    <Icons.DeleteSmall/>
                                </IconButton>
                            </Tooltip>

                        </FieldSet>
                    </SidePanel.Field>
                    <SidePanel.Field>
                        <TextButton size='small' prefixIcon={<Icons.AddSmall/>}>
                            Add Available Dates
                        </TextButton>
                    </SidePanel.Field>
                </SidePanel.Section>

                <SidePanel.Section title="Unavailable dates" >
                    <SidePanel.Field>
                        <FieldSet
                            alignment='end'
                            direction='horizontal'
                            legendPlacement='none'
                        >
                            <FormField label="From" >
                                <DatePicker size='small' width="auto" placeholderText='Start' />
                            </FormField>
                            <FormField label="From" >
                                <DatePicker size='small' width="auto" placeholderText='End' />
                            </FormField>
                            <Tooltip content="Delete">
                                <IconButton size='small' priority='secondary'>
                                    <Icons.DeleteSmall/>
                                </IconButton>
                            </Tooltip>

                        </FieldSet>
                    </SidePanel.Field>
                    <SidePanel.Field>
                        <TextButton size='small' prefixIcon={<Icons.AddSmall/>} >Add Unavailable Dates</TextButton>
                    </SidePanel.Field>

                </SidePanel.Section>
            </SidePanel.Content>

        </SidePanel>


        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Together with time input</Heading>
        </Box>


        <Layout cols={12} >
            <Cell span={6}>
                <FormField label="Start date" statusMessage="mm/dd/yyyy" >
                    <Box gap={2}>
                        <DatePicker
                            value={startDate}
                            onChange={setStartDate}
                            placeholderText='Select date'
                            width="80%"
                            showMonthDropdown
                            showYearDropdown
                        />
                        <TimeInput/>
                    </Box>
                </FormField>

            </Cell>

            <Cell span={6}>
                <FormField label="End date" statusMessage="mm/dd/yyyy" >
                    <Box gap={2}>
                        <DatePicker
                            value={endDate}
                            onChange={setEndDate}
                            placeholderText='Select date'
                            width="80%"
                            showMonthDropdown
                            showYearDropdown
                        />
                        <TimeInput/>
                    </Box>
                </FormField>

            </Cell>

        </Layout>
    </Box>
  )
}

export default DatePickerComponent