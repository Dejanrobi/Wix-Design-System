import { Box, Heading, Text, TextButton } from '@wix/design-system'
import React from 'react'


// import icons
import * as Icons from '@wix/wix-ui-icons-common'

const TextComponent = () => {

  // Text overflow
  const [open, setOpen] = React.useState(false);
  const suffixIcon = open ? <Icons.ChevronUp /> : <Icons.ChevronDown />;

  // show more
  const [showMoreopen, setshowMoreOpen] = React.useState(false);
  const showMoresuffixIcon = open ? <Icons.ChevronUp /> : <Icons.ChevronDown />;
  return (
    <Box direction='vertical' gap="SP6" >

      <Heading size='small' >Size</Heading>

      <Box direction='vertical' gap="SP4" >
        <Text size="medium">
          Medium size is a default size that's used most of the time.
        </Text>
        <Text size="small">
          Small size is used where medium doesn't fit or content is less important.
        </Text>
        <Text size="tiny">
          Tiny size is used when there's no space or it's the last thing users need to
          see.
        </Text>
      </Box>

      <Heading size='small' >Weight</Heading>

      <Box direction='vertical' gap="SP4" >
        <Text weight="bold">Bold weight is meant to emphasize running text.</Text>
        <Text weight="normal">
          Normal weight is for form field values and buttons.
        </Text>
        <Text weight="thin">
          Thin weight is for running text. Use it for all regular paragraphs.
        </Text>
      </Box>

      <Heading size='small' >Skin</Heading>
      <Box direction='vertical' gap="SP4" >
        <Text skin="standard">Standard skin appears in all regular texts.</Text>
        <Text skin="premium">
          Premium skin calls users to upgrade to get unlimited features.
        </Text>
        <Text skin="success">
          Success skin indicates that everything went smooth.
        </Text>
        <Text skin="error">Error skin alerts users that something went wrong.</Text>
        <Text skin="disabled">
          Disabled skin indicates that something cannot be accessed.
        </Text>
        <Text skin="primary">Primary skin is for inline links.</Text>
      </Box>

      <Heading size='small' >Light</Heading>

      <Text>Dark text is used on light backgrounds.</Text>
      <Box backgroundColor="D10">
        <Text light>Light text is used on dark backgrounds.</Text>
      </Box>

      <Heading size='small' >Secondary</Heading>

      <Text skin="standard" secondary>
        Dark secondary text is used where it's less important than standard text.
      </Text>
      <Box backgroundColor="D10">
        <Text light secondary>
          Light secondary text also serves as neutral content just on a dark
          background.
        </Text>
      </Box>

      <Heading size='small' >Unordered List</Heading>

      <Text listStyle="checkmark">
        The list below is built using standard "ul" and "li" HTML tags.
        <ul>
          <li>First statement</li>
          <li>
            Second statement
            <ul>
              <li>Subitem</li>
              <li>Subitem</li>
            </ul>
          </li>
          <li>Third statement</li>
        </ul>
      </Text>
      <Text listStyle="circle">
        The list below is built using standard "ul" and "li" HTML tags.
        <ul>
          <li>First statement</li>
          <li>
            Second statement
            <ul>
              <li>Subitem</li>
              <li>Subitem</li>
            </ul>
          </li>
          <li>Third statement</li>
        </ul>
      </Text>

      <Heading size='small' >Ordered List</Heading>

      <Text>
        The list below is built using standard "ol" and "li" HTML tags.
        <ol type="1">
          <li>First statement</li>
          <li>
            Second statement
            <ol type="1">
              <li>Subitem</li>
              <li>Subitem</li>
            </ol>
          </li>
          <li>Third statement</li>
        </ol>
      </Text>
      <Text>
        The list below is built using standard "ol" and "li" HTML tags.
        <ol type="A">
          <li>First statement</li>
          <li>
            Second statement
            <ol type="a">
              <li>Subitem</li>
              <li>Subitem</li>
            </ol>
          </li>
          <li>Third statement</li>
        </ol>
      </Text>
      <Text>
        The list below is built using standard "ol" and "li" HTML tags.
        <ol type="I">
          <li>First statement</li>
          <li>
            Second statement
            <ol type="i">
              <li>Subitem</li>
              <li>Subitem</li>
            </ol>
          </li>
          <li>Third statement</li>
        </ol>
      </Text>

      <Heading size='small' >Text Overflow</Heading>


      <Box direction='vertical' gap="SP4" >
        <Text>Text that wraps forever. It doesn't show any ellipsis.</Text>
        <Box direction="vertical">
          <Text maxLines={open ? 4 : 2} ellipsis>
            Text that is truncated but has an accessible alternative to provide
            its full content. Click 'Show more' to expand full text. Full text is
            then revealed in the main layout.
          </Text>
          <TextButton onClick={() => setOpen(!open)} suffixIcon={suffixIcon}>
            {open ? 'Show less' : 'Show more'}
          </TextButton>
        </Box>
        <Text ellipsis maxLines={2}>
          Text with ellipsis. It can wrap until a specified number of lines. When
          the limit is reached it displays the 3 dot ellipsis. Full text is
          revealed on hover.
        </Text>
      </Box>

      <Heading size='small' >Inline Link</Heading>

      <Text>
        Use a standard HTML 'a' tag to add <a>a text link</a> within the line.
      </Text>

      <Heading size='medium' >Accessibility Considerations</Heading>
      <Heading size='small' >Formatting</Heading>

      <Box direction='vertical' gap="SP4" >
        <Box gap="12px" direction="vertical">
          <Text weight="bold">Do:</Text>
          <Text>
            To ensure that text is easy to read:
            <ul>
              <li>Use font size that meets accessibility criteria.</li>
              <li>Divide text into shorter paragraphs or lists.</li>
              <li>Do not exceed 75 characters of line width in any language.</li>
              <li>Use left-alignment.</li>
            </ul>
          </Text>
        </Box>
        <Box gap="12px" direction="vertical">
          <Text weight="bold">Don't:</Text>
          <Text size="tiny">
            To ensure that text in a UI is easy to read, consider font size, paragraph
            length, line width, and text alignment. The font size should meet
            accessibility criteria, and the text should be divided into shorter
            paragraphs or lists. Line width should not exceed 75 characters in any
            language to enhance reading speed and comprehension. Lastly, text should
            be left-aligned, as center-aligned text is less readable.
          </Text>
        </Box>
      </Box>


      <Heading size='small' >Contrast</Heading>

      <Box direction='vertical' gap="SP4" >
        <Box direction="vertical" padding="12px" backgroundColor="D80">
          <Text>Standard skin on white background.</Text>
          <Text secondary>Standard secondary skin on white background.</Text>
        </Box>
        <Box direction="vertical" padding="12px" backgroundColor="D10">
          <Text light>Light skin on dark background.</Text>
          <Text light secondary>
            Light secondary skin on dark background.
          </Text>
        </Box>
      </Box>

      <Heading size='medium' >Common Use Cases</Heading>
      <Heading size='small' >Inline button</Heading>

      <Text>
        Set up subscriptions, memberships or package plans to sell on your site.
        <Box inline paddingLeft="SP1">
          <TextButton underline="always">Learn more about Pricing Plans</TextButton>
        </Box>
      </Text>;

      <Heading size='small' >Show more</Heading>
      <Box width="50%" direction="vertical">
        <Text maxLines={showMoreopen ? 4 : 1} ellipsis>
          Click 'Show more' to display more than a single line of text. Toggling
          maxLines allows to recreate expand / collapse behaviour.
        </Text>
        <TextButton onClick={() => setshowMoreOpen(!showMoreopen)} suffixIcon={showMoresuffixIcon}>
          {showMoreopen ? 'Show less' : 'Show more'}
        </TextButton>
      </Box>


    </Box>
  )
}

export default TextComponent