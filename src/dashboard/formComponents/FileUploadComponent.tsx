import { AddItem, Box, Button, Card, Cell, FileUpload, Heading, IconButton, ImageViewer, Layout, PopoverMenu, Text, TextButton, Tooltip } from '@wix/design-system'
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common'

const FileUploadComponent = () => {


  // Add attachments

  const renderAddFileButton = (
    <FileUpload multiple >
      {({ openFileUploadDialog }) => (
        <TextButton
          size='small'
          onClick={openFileUploadDialog}
          prefixIcon={<Icons.Add/>}
        >
          Attach File
        </TextButton>
      )}
    </FileUpload>
  )
  return (
    <Box direction='vertical' gap="SP6">

      <Heading size='small' >Basic Structure</Heading>

      <FileUpload>

        {({ openFileUploadDialog }) => (
          <Button onClick={openFileUploadDialog} prefixIcon={<Icons.UploadExport/>}>
            Upload File
          </Button>
        )}
      </FileUpload>

      <Heading size='small' >File type selection</Heading>

      <Box gap="SP6">

      <FileUpload accept='.jpeg, .gif, .png'>

        {({ openFileUploadDialog }) => (
          <Button onClick={openFileUploadDialog} prefixIcon={<Icons.UploadExport/>}>
            Upload Image
          </Button>
        )}
      </FileUpload>

      <FileUpload accept='.doc, .pdf'>

        {({ openFileUploadDialog }) => (
          <Button onClick={openFileUploadDialog} prefixIcon={<Icons.UploadExport/>}>
            Upload Document
          </Button>
        )}
      </FileUpload>
        
      </Box>

      <Heading size='small' >Multiple files upload</Heading>

      <FileUpload multiple>

        {({ openFileUploadDialog }) => (
          <Button onClick={openFileUploadDialog} prefixIcon={<Icons.UploadExport/>}>
            Upload File
          </Button>
        )}
      </FileUpload>

      <Heading size='large' >Common Use Cases</Heading>

      <Heading size='small' >Upload files</Heading>

      <FileUpload multiple accept='.jpeg, .gif, .png'>

        {({ openFileUploadDialog }) => (
          <AddItem
            size='large'
            subtitle="Only JPEG, GIF and PNG files up to 5 MB are supported."
            onClick={openFileUploadDialog}
          >
            Upload Media
          </AddItem>
        )}
      </FileUpload>

      <Heading size='small' >Add Images</Heading>

      <FileUpload multiple accept='.jpeg, .gif, .png'>

        {({ openFileUploadDialog }) => (
          <ImageViewer onAddImage={openFileUploadDialog} />
        )}
      </FileUpload>

      <Heading size='small' >Add Attachments</Heading>

      <Layout>
        <Cell span={6} >
          <Card>
            <Card.Content>
              <Box direction='vertical' gap={2} >
                <Box
                  width="100%"
                  align='space-between'
                  marginBottom={4}
                  verticalAlign='middle'
                >
                  <Text size='medium' secondary weight='bold'>
                    Attachments
                  </Text>
                  {renderAddFileButton}
                </Box>

                <Box align="space-between" verticalAlign="middle">
                <Box gap={2}>
                  <Icons.Attachment />
                  <Text secondary>CV.pdf</Text>
                </Box>
                <PopoverMenu
                  textSize="small"
                  triggerElement={
                    <Tooltip content="More actions">
                      <IconButton priority="secondary" size="small">
                        <Icons.MoreSmall />
                      </IconButton>
                    </Tooltip>
                  }
                >
                  <PopoverMenu.MenuItem
                    text="Download"
                    prefixIcon={<Icons.DownloadImportSmall />}
                  />
                  <PopoverMenu.MenuItem
                    text="Delete"
                    prefixIcon={<Icons.DeleteSmall />}
                  />
                </PopoverMenu>
              </Box>

              <Box align="space-between" verticalAlign="middle">
                <Box gap={2}>
                  <Icons.Attachment />
                  <Text secondary>Contract.pdf</Text>
                </Box>
                <PopoverMenu
                  textSize="small"
                  triggerElement={
                    <Tooltip content="More actions">
                      <IconButton priority="secondary" size="small">
                        <Icons.MoreSmall />
                      </IconButton>
                    </Tooltip>
                  }
                >
                  <PopoverMenu.MenuItem
                    text="Download"
                    prefixIcon={<Icons.DownloadImportSmall />}
                  />
                  <PopoverMenu.MenuItem
                    text="Delete"
                    prefixIcon={<Icons.DeleteSmall />}
                  />
                </PopoverMenu>
              </Box>

              </Box>
            </Card.Content>
          </Card>

        </Cell>
      </Layout>
    </Box>
  )
}

export default FileUploadComponent
