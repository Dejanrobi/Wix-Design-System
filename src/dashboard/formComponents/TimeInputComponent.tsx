import { Box, Cell, DatePicker, FormField, Heading, Input, Layout, Range, TimeInput } from '@wix/design-system'
import React, { useState } from 'react'

const TimeInputComponent = () => {

    // Predefined time validations
    const [predefinedError, setPredefinedError] = useState('');

    const predefinedOnChange = (value:any) =>{
        setPredefinedError('')
    }

    const predefinedOnInvalid = (errorInfo:any)=>{
        if(errorInfo.validationType === 'outOfBoundsError'){
            setPredefinedError('Past time values are not allowed')
        }else if(errorInfo.validationType === 'formatError'){
            setPredefinedError('Invalid format')
        }
    }

    // SCHEDULING
    const [schedulingStartDate, setSchedulingStartDate] = useState();
    const [schedulingEndDate, setSchedulingEndDate] = useState();

  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small'>Size</Heading>

        <Box direction='vertical' gap="SP4">
            <TimeInput size='large' placeholder='Large' />
            <TimeInput size='medium' placeholder='Medium' />
            <TimeInput size='small' placeholder='Small' />
        </Box>

        <Heading size='small'>Width</Heading>
        <Box direction='vertical' gap="SP4">
            <TimeInput width="auto"  placeholder='Auto' />
            <TimeInput width="100%"  placeholder='Full width' />
            
        </Box>

        <Heading size='small'>Border</Heading>
        <Box direction='vertical' gap="SP4">
            <TimeInput border='standard' placeholder='Standard' />
            <TimeInput border='round' placeholder='Round' />
            <TimeInput border='bottomLine' placeholder='Bottom Line' />
            <TimeInput border='none' placeholder='None' />
        </Box>

        <Heading size='small'>Status</Heading>
        <Box direction='vertical' gap="SP4">
            <TimeInput status='error' placeholder='Error' />
            <TimeInput status='warning' placeholder='Warning' />
            <TimeInput status='loading' placeholder='Loading' />
        </Box>

        <Heading size='small'>Status Message</Heading>
        <FormField label="For all default cases: " status='error' statusMessage="This is an error message." >
            <TimeInput placeholder='See message below' />
        </FormField>
        <FormField label="For narrow layouts only: " >
            <TimeInput 
                placeholder='See message below' 
                status='error'
                statusMessage="This is an error message"
            />
        </FormField>

        <Heading size='small'>Invalid Message</Heading>

        <TimeInput invalidMessage='Enter a time in 12 hour format using AM or PM.' />

        <Heading size='small'>Disabled</Heading>
        <TimeInput disabled />

        <Heading size='small'>Prefix & Suffix</Heading>
        <TimeInput
            prefix={<Input.Affix>From</Input.Affix>}
            suffix={<Input.Affix>GMT+1</Input.Affix>}
        />

        <Heading size='small'>Locale</Heading>
        <TimeInput locale='en' />
        <TimeInput locale='de' />

        <Heading size='small'>Time Style</Heading>
        <TimeInput timeStyle='short' />
        <TimeInput timeStyle='long' />

        <Heading size='small'>Step</Heading>
        <Box gap="SP6">
            <FormField label="15 min (default):" >
                <TimeInput step={15}/>
            </FormField>
            <FormField label="5 min:" >
                <TimeInput step={5}/>
            </FormField>
            <FormField label="30 min:" >
                <TimeInput step={30}/>
            </FormField>
            <FormField label="60 min:" >
                <TimeInput step={60}/>
            </FormField>
        </Box>

        <Heading size='medium'>Developer Examples</Heading>
        <Heading size='small'>Predefined time validations</Heading>

        <FormField 
            status={predefinedError? 'error': undefined}
           statusMessage={
            predefinedError? predefinedError : 'Try entering invalid (e.g. 12:99 PM) or past time values to see different error messages'
           }
        >
            <TimeInput excludePastTimes onChange={predefinedOnChange}  onInvalid={predefinedOnInvalid}/>

        </FormField>

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Scheduling</Heading>

        <Layout>
            <Cell span={6} >
                <Box gap={2} >
                    <FormField label="Start date" >
                        <DatePicker
                            width="100%"
                            placeholderText='select'
                            value={schedulingStartDate}
                            onChange={(value:any)=>setSchedulingStartDate(value)}
                        />

                    </FormField>
                    <FormField label="Start time" >
                        <TimeInput/>
                    </FormField>
                </Box>

            </Cell>

            <Cell span={6} >
                <Box gap={2} >
                    <FormField label="End date" >
                        <DatePicker
                            width="100%"
                            placeholderText='select'
                            value={schedulingEndDate}
                            onChange={(value:any)=>setSchedulingEndDate(value)}
                        />

                    </FormField>
                    <FormField label="End time" >
                        <TimeInput/>
                    </FormField>
                </Box>

            </Cell>
        </Layout>

        <Heading size='medium'>Range</Heading>
        <FormField label="Duration" >
           <Range>
            <TimeInput/>
            <TimeInput/>
           </Range>
        </FormField>
    </Box>
  )
}

export default TimeInputComponent
