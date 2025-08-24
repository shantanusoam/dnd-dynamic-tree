import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SortableTree, FolderTreeItemWrapper } from '../../lib/main'
import type { TreeItems } from '../../lib/main'

interface TreeItemData {
  value: string
}

const meta: Meta = {
  title: 'dnd-dynamic-tree/Folder Tree',
  component: SortableTree,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A folder-style tree component with visual indicators for nested items.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    indentationWidth: {
      control: { type: 'number', min: 10, max: 50 },
      description: 'Width of indentation for nested items'
    },
    disableSorting: {
      control: 'boolean',
      description: 'Disable drag and drop sorting'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => {
    const [items, setItems] = useState<TreeItems<TreeItemData>>([
      {
        id: '1',
        value: 'Root Folder',
        children: [
          { id: '4', value: 'Subfolder 1' },
          { id: '5', value: 'Subfolder 2' },
          { id: '6', value: 'file.txt' },
        ],
      },
      { id: '2', value: 'Documents', children: [{ id: '7', value: 'Resume.pdf' }] },
      { id: '3', value: 'empty-folder' },
    ])

    const TreeItemComponent = React.forwardRef<
      HTMLDivElement,
      any
    >((props, ref) => (
      <FolderTreeItemWrapper {...props} ref={ref}>
        <div style={{
          padding: '8px 12px',
          backgroundColor: props.isOver ? '#e3f2fd' : 'transparent',
          borderRadius: '4px',
          border: props.ghost ? '2px dashed #ccc' : 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ marginRight: '8px' }}>
            {props.childCount !== undefined && props.childCount > 0 ? '📁' : '📄'}
          </span>
          {props.item.value}
        </div>
      </FolderTreeItemWrapper>
    ))

    return (
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h3>Folder Tree Example</h3>
        <p>Drag items to reorder them. Items can be nested by dragging them onto folders.</p>
        <div style={{
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          minHeight: '400px'
        }}>
          <SortableTree
            {...args}
            items={items}
            onItemsChanged={setItems}
            TreeItemComponent={TreeItemComponent}
          />
        </div>
      </div>
    )
  }
}

export const Default: Story = {
  ...Template,
  args: {
    indentationWidth: 25
  }
}

export const LargeIndentation: Story = {
  ...Template,
  args: {
    indentationWidth: 45
  }
}

export const DisabledSorting: Story = {
  ...Template,
  args: {
    indentationWidth: 25,
    disableSorting: true
  }
}
