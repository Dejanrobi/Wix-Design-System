import React, { useEffect, useState } from 'react'

// importing css
import '@wix/design-system/styles.global.css';
import { AutoComplete, FormField, listItemSectionBuilder, listItemSelectBuilder } from '@wix/design-system';



const AutoCompleteForm = () => {

    const [searchValue, setSearchValue] = React.useState('');
  const [selectedId, setSelectedId] = React.useState();

  const options = [
    listItemSectionBuilder({
      title: 'General roles',
    }),
    listItemSelectBuilder({
      id: 0,
      title: 'Website manager',
      label: 'Website manager',
      subtitle:
        'Has access to manage, edit & publish site, but cannot manage billing, delete, duplicate or transfer site.',
    }),
    listItemSelectBuilder({
      id: 1,
      title: 'Website designer',
      label: 'Website designer',
      subtitle:
        'Can edit the site, manage settings and apps but cannot access Inbox, contacts and other sensitive info.',
    }),
    listItemSelectBuilder({
      id: 2,
      title: 'Back office manager',
      label: 'Back office manager',
      subtitle:
        'Can access the Dashboard to manage site settings and apps but cannot edit the site.',
    }),
    listItemSectionBuilder({
      type: 'divider',
    }),
    listItemSectionBuilder({
      title: 'Content manager roles',
    }),
    listItemSelectBuilder({
      id: 3,
      title: 'Content collection manager',
      label: 'Content collection manager',
      subtitle:
        'Can add and modify content for all collections, but cannot edit other areas of your site.',
    }),
    listItemSectionBuilder({
      type: 'divider',
    }),
    listItemSectionBuilder({
      title: 'Blog roles',
    }),
    listItemSelectBuilder({
      id: 4,
      title: 'Blog editor',
      label: 'Blog editor',
      subtitle: 'Can fully manage the blog but not other areas of your site.',
    }),
    listItemSelectBuilder({
      id: 5,
      title: 'Blog writer',
      label: 'Blog writer',
      subtitle:
        'Can write and publish posts. Cannot create or manage categories.',
    }),
    listItemSelectBuilder({
      id: 6,
      title: 'Guest writer',
      label: 'Guest writer',
      subtitle:
        'Can write posts but cannot publish them. Posts must be approved and published by a Blog Editor or site owner.',
    }),
    listItemSectionBuilder({
      type: 'divider',
    }),
    listItemSectionBuilder({
      title: 'Events roles',
    }),
    listItemSelectBuilder({
      id: 7,
      title: 'Events check-in assistant',
      label: 'Events check-in assistant',
      subtitle:
        'Can see the guest list, check-in guests and scan tickets on the Wix Owner App.',
    }),
  ];

  function includesCaseInsensitive(a = '', b = '') {
    return !b || a.toLowerCase().indexOf(b.toLowerCase()) !== -1;
  }

  return (
    <FormField label="Role">
      <AutoComplete
        placeholder="Select"
        maxHeightPixels="300px"
        options={options}
        selectedId={selectedId}
        value={searchValue}
        onSelect={(option) => {
          setSelectedId(option.id);
          setSearchValue(option.label);
        }}
        onChange={(event) => setSearchValue(event.target.value)}
        predicate={(option) =>
          includesCaseInsensitive(option.label, searchValue.trim())
        }
      />
    </FormField>
  );
}

export default AutoCompleteForm