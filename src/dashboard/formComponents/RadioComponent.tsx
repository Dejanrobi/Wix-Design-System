import { Box, Card, Cell, FormField, Heading, InfoIcon, Layout, Radio, Text } from '@wix/design-system'
import React, { useState } from 'react'

const RadioComponent = () => {
    // Custom Label
    const [customLabel, setCustomLabel] = useState(false);
    
    // Additional infor
    const [additionalInfo, setAdditionalInfo] = useState(false);
  
    // Custom Layout
    const [customCheckedId, setCustomCheckedId] = useState(0)
    return (
   <Box direction='vertical' gap="SP6">
        <Heading size='small'>Structure</Heading>

        <Radio label="Label" />

        <Heading size='small'>States</Heading>

        <Box direction='vertical' gap="SP4">
            <Radio label="Default" />
            <Radio label="Checked" checked />
            <Radio label="Disabled" disabled />
        </Box>

        <Heading size='small'>Status Message</Heading>

        <FormField status='error' statusMessage="This is an error message" >
            <Radio label="Radio button" />
        </FormField>

        <Heading size='small'>Alignment</Heading>
        <Radio
            alignItems='top'
            label="Radio button label that wraps to multiple lines"
        />

        <Heading size='medium'>Common Use Cases</Heading>

        <Heading size='small'>Custom Label</Heading>

        <Radio
            checked={customLabel}
            onChange={()=>setCustomLabel(true)}
            label={
                <Cell>
                    <Heading size='small'>Free plan</Heading>
                    <Text size='small' secondary >
                        Offer your plan free of charge
                    </Text>
                </Cell>
            }
        />

        <Heading size='small'>Additional Info</Heading>
        <Box inline gap="6px">
            <Radio
                label="Add total at checkout"
                checked={additionalInfo}
                onChange={()=>setAdditionalInfo(true)}
            />
            <InfoIcon content="Tax is charged to a customer, it won't be included in the price of your plans. They'll see it added to the price at a checkout" />
        </Box>

        <Heading size='small'>Custom Layout</Heading>

        <Layout cols={1} gap="12px" >
            <Card>
                <Box padding="18px 24px" >
                    <Radio
                        checked={customCheckedId === 1}
                        onChange={()=> setCustomCheckedId(1)}
                        label={
                            <Box direction='vertical' >
                                <Heading size='small'>Free plan</Heading>

                                <Text size='small' secondary >
                                    Offer your plan for free of charge
                                </Text>
                            </Box>

                        }
                    />

                </Box>
            </Card>

            <Card>
                <Box padding="18px 24px" >
                    <Radio
                        checked={customCheckedId === 2}
                        onChange={()=> setCustomCheckedId(2)}
                        label={
                            <Box direction='vertical' >
                                <Heading size='small'>One time payment</Heading>

                                <Text size='small' secondary >
                                    Charge a single upfront fee
                                </Text>
                            </Box>

                        }
                    />

                </Box>
            </Card>

            <Card>
                <Box padding="18px 24px" >
                    <Radio
                        checked={customCheckedId === 3}
                        onChange={()=> setCustomCheckedId(3)}
                        label={
                            <Box direction='vertical' >
                                <Heading size='small'>Recurring payment</Heading>

                                <Text size='small' secondary >
                                    Charge a weekly, monthly or yearly fee
                                </Text>
                            </Box>

                        }
                    />

                </Box>
            </Card>
        </Layout>

   </Box>
  )
}

export default RadioComponent
