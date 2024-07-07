import { Box, Button, Heading } from '@wix/design-system'
import React from 'react'

const ButtomComponent = () => {
  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Custom HTML tag</Heading>
        </Box>

        <Box gap="SP4">
            <Button as="a" href="https://www.wix.com" target="_blank" >
                {'Native <a> tag'}
            </Button>
            <Button  skin='premium' to="/home" >
                {'React Router <Link/> tag'}
            </Button>
            <Button as="button" onClick={()=> alert('yay!!! Alert')} >
                {'Native <button> tag'}
            </Button>
        </Box>
    </Box>
  )
}

export default ButtomComponent