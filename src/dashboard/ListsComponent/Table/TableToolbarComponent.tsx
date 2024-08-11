import { Box, Button, Card, Divider, Dropdown, FormField, Heading, PopoverMenu, Search, TableToolbar, Text, TextButton } from '@wix/design-system'
import React from 'react'


// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const TableToolbarComponent = () => {
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small' >Structure</Heading>

        <Card>
            <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                        <Box border="1px dotted" >
                            Left aligned content
                        </Box>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>

                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                        <Box border="1px dotted" >
                            Right aligned content
                        </Box>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
        </Card>


        <Heading size='small' >Title</Heading>

        <Card>
            <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                        <TableToolbar.Title>Title</TableToolbar.Title>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
        </Card>

        <Heading size='small' >Label</Heading>

        <Card>
            <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                        <TableToolbar.Label>12 products</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
        </Card>

        <Heading size='small' >Main Toolbar</Heading>

        <Box direction='vertical' gap="SP6" >
            <Card>
                <TableToolbar>
                    <TableToolbar.ItemGroup>
                        <TableToolbar.Item>
                            <TableToolbar.Title>Title</TableToolbar.Title>
                        </TableToolbar.Item>
                    </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>


            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Title>Title</TableToolbar.Title>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Title>Title</TableToolbar.Title>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Title>Title</TableToolbar.Title>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Title>Title</TableToolbar.Title>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Button
                        priority="secondary"
                        prefixIcon={<Icons.ContentFilterSmall />}
                        size="small"
                    >
                        Filter
                    </Button>
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Label>3 items</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Label>3 items</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Label>3 items</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Label>3 items</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <TableToolbar.Label>3 items</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Button
                        priority="secondary"
                        prefixIcon={<Icons.ContentFilterSmall />}
                        size="small"
                    >
                        Filter
                    </Button>
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>


            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                        { id: 0, value: 'All options' },
                        { id: 1, value: 'Option 1' },
                        { id: 2, value: 'Option 2' },
                        { id: 3, value: 'Option 3' },
                        ]}
                    />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>

            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <FormField labelPlacement="left" label="Label">
                        <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                            { id: 0, value: 'All options' },
                            { id: 1, value: 'Option 1' },
                            { id: 2, value: 'Option 2' },
                            { id: 3, value: 'Option 3' },
                        ]}
                        />
                    </FormField>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>
            <Card>
                <TableToolbar>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <FormField labelPlacement="left" label="Label">
                        <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                            { id: 0, value: 'All options' },
                            { id: 1, value: 'Option 1' },
                            { id: 2, value: 'Option 2' },
                            { id: 3, value: 'Option 3' },
                        ]}
                        />
                    </FormField>
                    </TableToolbar.Item>
                    <TableToolbar.Item>
                    <FormField labelPlacement="left" label="Label">
                        <Dropdown
                        size="small"
                        border="round"
                        selectedId={0}
                        options={[
                            { id: 0, value: 'All options' },
                            { id: 1, value: 'Option 1' },
                            { id: 2, value: 'Option 2' },
                            { id: 3, value: 'Option 3' },
                        ]}
                        />
                    </FormField>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup>
                    <TableToolbar.Item>
                    <Search size="small" />
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
            </Card>
        </Box>

        <Heading size='small' >Actions Toolbar</Heading>

        <Box direction='vertical' gap="SP6" >
        <Card>
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <Text size="small" weight="normal">
            3 selected
          </Text>
        </TableToolbar.Item>
        <TableToolbar.Item>
          <Box height="18px">
            <Divider direction="vertical" />
          </Box>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="inverted"
            size="small"
            prefixIcon={<Icons.UploadExportSmall />}
          >
            Export
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="inverted"
            size="small"
            prefixIcon={<Icons.DuplicateSmall />}
          >
            Duplicate
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <PopoverMenu
            triggerElement={
              <Button
                skin="inverted"
                size="small"
                suffixIcon={<Icons.ChevronDownSmall />}
              >
                More Actions
              </Button>
            }
          >
            <PopoverMenu.MenuItem
              prefixIcon={<Icons.Discount />}
              text="Add discount"
            />
            <PopoverMenu.MenuItem
              prefixIcon={<Icons.Collections />}
              text="Add to collection"
            />
            <PopoverMenu.MenuItem prefixIcon={<Icons.Delete />} text="Delete" />
          </PopoverMenu>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  </Card>
  <Card>
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <Box gap="12px">
            <Box gap="3px">
              <Text size="small" weight="bold">
                3
              </Text>
              <Text size="small">out of 96 selected</Text>
            </Box>
            <TextButton size="small" weight="normal">
              Select All
            </TextButton>
          </Box>
        </TableToolbar.Item>
        <TableToolbar.Item>
          <Box height="18px">
            <Divider direction="vertical" />
          </Box>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="inverted"
            size="small"
            prefixIcon={<Icons.UploadExportSmall />}
          >
            Export
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="inverted"
            size="small"
            prefixIcon={<Icons.DuplicateSmall />}
          >
            Duplicate
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <PopoverMenu
            triggerElement={
              <Button
                skin="inverted"
                size="small"
                suffixIcon={<Icons.ChevronDownSmall />}
              >
                More Actions
              </Button>
            }
          >
            <PopoverMenu.MenuItem
              prefixIcon={<Icons.Discount />}
              text="Add discount"
            />
            <PopoverMenu.MenuItem
              prefixIcon={<Icons.Collections />}
              text="Add to collection"
            />
            <PopoverMenu.MenuItem prefixIcon={<Icons.Delete />} text="Delete" />
          </PopoverMenu>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  </Card>
        </Box>
        
    </Box>
  )
}

export default TableToolbarComponent