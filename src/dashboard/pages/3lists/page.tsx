import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from '@wix/design-system'
import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';
import NestableListComponent from '../../ListsComponent/NestableListComponent';
import SelectorListComponent from '../../ListsComponent/SelectorListComponent';
import TableComponent from '../../ListsComponent/Table/TableComponent';
import TableActionCellComponent from '../../ListsComponent/Table/TableActionCellComponent';
import TableListHeaderComponent from '../../ListsComponent/Table/TableListHeaderComponent';
import TableListItemComponent from '../../ListsComponent/Table/TableListItemComponent';
import TableToolbarComponent from '../../ListsComponent/Table/TableToolbarComponent';
import TagListComponent from '../../ListsComponent/Table/TagListComponent';

const page = () => {
  return (
   <Page>
    <Page.Header
      title="Lists"
      breadcrumbs={
        <Breadcrumbs
          activeId="2"
          items={[
            { id: '1', value: 'Apps', disabled: true },
            { id: '2', value: 'Wix Design Sytsem ', disabled: true },
            { id: '3', value: 'List' },
          ]}
        />
      }
    />

    <Page.Content>
      <Layout>

        <Cell>
          <Heading size='medium'>Nestable List</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <NestableListComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='medium'>Selector List</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <SelectorListComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='large'>Table</Heading>
        </Cell>

        <Cell>
          <Heading size='medium'>Table</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <TableComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='medium'>Table Action Cell</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <TableActionCellComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='medium'>Table List Header</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <TableListHeaderComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='medium'>Table List Item</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <TableListItemComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='medium'>Table Toolbar Component</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <TableToolbarComponent/>
          </Box>
        </Cell>

        <Cell>
          <Heading size='medium'>Tag List Component</Heading>
          <Box paddingTop="SP4" paddingBottom="SP4">
            <TagListComponent/>
          </Box>
        </Cell>
      </Layout>
    </Page.Content>

   </Page>
  )
}

export default page