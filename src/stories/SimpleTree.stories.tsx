import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SortableTree, SimpleTreeItemWrapper } from '../../lib/main'
import type { TreeItems } from '../../lib/main'

interface TreeItemData {
  value: string
}

const meta: Meta = {
  title: 'dnd-dynamic-tree/Simple Tree',
  component: SortableTree,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A simple sortable tree component with drag-and-drop functionality.'
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
        value: 'Home',
        children: [
          { id: '4', value: 'Documents' },
          { id: '5', value: 'Pictures' },
          { id: '6', value: 'Music' },
        ],
      },
      { id: '2', value: 'Work', children: [{ id: '7', value: 'Projects' }] },
      { id: '3', value: 'Personal', canHaveChildren: false },
    ])

    const TreeItemComponent = React.forwardRef<
      HTMLDivElement,
      any
    >((props, ref) => (
      <SimpleTreeItemWrapper {...props} ref={ref}>
        <div style={{
          padding: '8px 12px',
          backgroundColor: props.isOver ? '#e3f2fd' : 'transparent',
          borderRadius: '4px',
          border: props.ghost ? '2px dashed #ccc' : 'none'
        }}>
          {props.item.value}
          {props.childCount !== undefined && props.childCount > 0 && (
            <span style={{ marginLeft: '8px', color: '#666', fontSize: '12px' }}>
              ({props.childCount})
            </span>
          )}
        </div>
      </SimpleTreeItemWrapper>
    ))

    return (
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h3>Simple Tree Example</h3>
        <p>Drag items to reorder them. Items can be nested by dragging them onto other items.</p>
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
    indentationWidth: 20
  }
}

export const LargeIndentation: Story = {
  ...Template,
  args: {
    indentationWidth: 40
  }
}

export const DisabledSorting: Story = {
  ...Template,
  args: {
    indentationWidth: 20,
    disableSorting: true
  }
}
