import { Box, Heading, Pagination } from '@wix/design-system'
import React from 'react'

const PaginationComponent = () => {
  return (
    <Box direction='vertical'>
        <Box  paddingBottom="SP4">
            <Heading size='small'>Number of pages</Heading>
        </Box>

        <Box direction='vertical' gap="SP4">
            <Pagination currentPage={1} totalPages={2} />
            <Pagination currentPage={2} totalPages={10} />
        </Box>

    </Box>
  )
}

export default PaginationComponent