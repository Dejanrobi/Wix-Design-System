import { Box, Checkbox, Heading, MessageModalLayout, Text } from '@wix/design-system'
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const MessageModalLayoutComponent = () => {
  return (
   <Box direction='vertical' gap="SP6">
        <Heading size='small'>Theme</Heading>

        <Box direction='vertical' gap="SP4">
            <MessageModalLayout
                onCloseButtonClick={()=>{}}
                primaryButtonText='Leave Page'
                secondaryButtonText='Cancel'
                title="Leave page?"
                content={
                    <Text>When you leave this page, you'll lose unsaved changes.</Text>
                }
            />

            <MessageModalLayout
                theme={'premium'}
                onCloseButtonClick={()=>{}}
                primaryButtonText='Upgrade'
                secondaryButtonText='Not Now'
                title="Uphrade to accept payments"
                content={
                    <Text>To accept payments, upgrade to the Business plan.</Text>
                }
            />

            <MessageModalLayout
                theme={'destructive'}
                onCloseButtonClick={()=>{}}
                primaryButtonText='Delete'
                secondaryButtonText='Cancel'
                title="Delete category"
                content={
                    <Text>
                        You're about to delete the <b>Yoga</b> category. Posts inside this category
                        will also be deleted.
                    </Text>
                }
            />
        </Box>

        <Heading size='small'>Help and Close Buttons</Heading>

        <MessageModalLayout
            onCloseButtonClick={()=>{}}
            onHelpButtonClick={()=>{}}
            primaryButtonText='Leave Page'
            secondaryButtonText='Cancel'
            title="Leave page?"
            content={
                <Text>
                    When you leave this page, you'll lose unsaved changes.
                </Text>
            }
        />

        <Heading size='small'>Illustrations</Heading>
        <Box direction='vertical' gap="SP4">
            <MessageModalLayout
                
                illustration="https://www.docs.wixdesignsystem.com/generic_report.svg"
                onCloseButtonClick={()=>{}}
                primaryButtonText='Report'
                secondaryButtonText='Cancel'
                title="Report as spam?"
                content={<Text>
                    Messages marked as spam are blocked from your inbox.
                </Text>}
            />

            <MessageModalLayout
                illustration="https://www.docs.wixdesignsystem.com/generic_upgrade.svg"
                theme={'premium'}
                onCloseButtonClick={()=>{}}
                primaryButtonText='Upgrade'
                secondaryButtonText='Not Now'
                title="Start accepting online payments"
                content={
                    <Text>
                        Upgrade your site to a Business Basic plan to start accepting payments.
                    </Text>
                }
            />

            <MessageModalLayout
                illustration="https://www.docs.wixdesignsystem.com/generic_trash.svg"
                theme={'destructive'}
                onCloseButtonClick={()=>{}}
                primaryButtonText='Delete'
                secondaryButtonText='Cancel'
                title="Delete category"
                content={
                    <Text>
                        You're about to delete the <b>Yoga</b> category. Posts inside this 
                        category will also be deleted.
                    </Text>
                }
            />
        </Box>

        <Heading size='small'>Side actions</Heading>

        <Box direction='vertical' gap="SP4">
                <MessageModalLayout
                    onCloseButtonClick={()=>{}}
                    primaryButtonText='Leave Page'
                    secondaryButtonText='Cancel'
                    title="Leave page?"
                    content={
                        <Text>When you leave this page, you'll lose unsaved changes</Text>
                    }
                    sideActions={
                        <Box border="1px dotted">
                            Side actions
                        </Box>

                    }
                
                    
                />

                <MessageModalLayout
                    onCloseButtonClick={()=>{}}
                    primaryButtonText='Leave Page'
                    secondaryButtonText='Cancel'
                    title="Leave page?"
                    content={
                        <Text>When you leave this page, you'll lose unsaved changes.</Text>
                    
                    }
                    sideActions={
                        <Checkbox>Don't show this again</Checkbox>
                    }
                />
        </Box>

        <Heading size='small'>Footnote</Heading>
        <Box direction='vertical' gap="SP4">
            <MessageModalLayout
                onCloseButtonClick={()=>{}}
                primaryButtonText='Invite All'
                secondaryButtonText='Cancel'
                title="Invite all site members"
                content={
                    <Text>
                        You're about to send invites to all site members.
                    </Text>
                }

                footnote={
                    <Box border="1px dotted">
                        Footnote
                    </Box>

                }
            />

            <MessageModalLayout
                onCloseButtonClick={()=>{}}
                primaryButtonText='Invite All'
                secondaryButtonText='Cancel'
                title="Invite all site members"
                content={
                    <Text>
                        You're about to send invites to all site members/
                    </Text>
                }

                footnote={
                    <Text size='small'> 
                        By sending an invite, you agree to the <a>Wix Terms of Use.</a>
                    </Text>
                }
            />
        </Box>

        <Heading size='small'>Title</Heading>

        <MessageModalLayout
            onCloseButtonClick={()=>{}}
            primaryButtonText='Leave Page'
            secondaryButtonText='Cancel'
            title="Leave page?"
            content={
                <Text>
                    When you leave this page, you'll lose unsaved changes.
                </Text>
            }
        />

        <Heading size='small'>Action Buttons</Heading>

        <MessageModalLayout
            onCloseButtonClick={()=>{}}
            primaryButtonText='Invite All'
            primaryButtonProps={{ prefixIcon:  <Icons.EmailSendSmall/>}}
            secondaryButtonText='Cancel'
            title="Invite all site members"
            content={
                <Text>
                    You're about to send invites to all site members.
                </Text>
            }
        />

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Warn about destructive changes</Heading>

        <MessageModalLayout
            theme={'destructive'}
            onCloseButtonClick={()=>{}}
            primaryButtonText='Delete'
            secondaryButtonText='Cancel'
            title="Delete category?"
        >
            <Text>
                You're about to delete the <b>Yoga</b> category. Posts inside this category
                will also be deleted.
            </Text>
        </MessageModalLayout>

        <Heading size='small'>Alert users to unsaved changes</Heading>
        <MessageModalLayout
            primaryButtonText='Leave Page'
            secondaryButtonText='Cancel'
            title="Leave page?"
            onCloseButtonClick={()=>{}}
        >
            <Text>
                When you leave this page,  you'll lose unsaved changes.
            </Text>
        </MessageModalLayout>

        <Heading size='small'>Promote premium features</Heading>

        <MessageModalLayout
            onCloseButtonClick={()=>{}}
            theme={'premium'}
            primaryButtonText='Upgrade'
            secondaryButtonText='Not Now'
            title="Upgrade to accept payments"
            illustration="https://www.docs.wixdesignsystem.com/generic_upgrade.svg"
        >
            <Text>
                Upgrade your site to a Business Basic plan to start accepting payments.
            </Text>
        </MessageModalLayout>
   </Box>
  )
}

export default MessageModalLayoutComponent