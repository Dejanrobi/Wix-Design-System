import { Box, Heading, Search } from '@wix/design-system'
import React, { useState } from 'react'

const SearchComponent = () => {

    const [text, setText] = useState('');
    const options = [
        { value: 'Option 1', id: 0 },
        { value: 'Option 2', id: 1 },
        { value: 'James momago', id: 2 },
        { value: 'Samson Mwita', id: 3 },
        { value: 'Option 5', id: 4 },
    ]
  return (
    <Box direction='vertical' gap="SP2">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Options</Heading>
        </Box>

        <Search
            value={text}
            onChange={(e)=> setText(e.target.value)}
            onClear={()=>setText('')}
            options={options}
            predicate={(option:any) => option.value.indexOf(text) !== -1}
        />

    </Box>
  )
}

export default SearchComponent