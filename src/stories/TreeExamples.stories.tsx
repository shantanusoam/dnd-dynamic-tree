import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SortableTree, SimpleTreeItemWrapper, FolderTreeItemWrapper } from '../../lib/main'
import type { TreeItems } from '../../lib/main'

interface TaskData {
  value: string
  completed?: boolean
  priority?: 'low' | 'medium' | 'high'
}

const meta: Meta = {
  title: 'dnd-dynamic-tree/Examples',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Various examples showing different use cases of the sortable tree component.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// File Explorer Example
export const FileExplorer: Story = {
  render: () => {
    const [items, setItems] = useState<TreeItems<{ value: string }>>([
      {
        id: '1',
        value: '📁 src',
        children: [
          { id: '4', value: '📁 components' },
          { id: '5', value: '📁 utils' },
          { id: '6', value: '📄 index.ts' },
          { id: '7', value: '📄 App.tsx' },
        ],
      },
      {
        id: '2',
        value: '📁 public',
        children: [
          { id: '8', value: '📄 index.html' },
          { id: '9', value: '📄 favicon.ico' },
        ]
      },
      { id: '3', value: '📄 package.json' },
    ])

    const TreeItemComponent = React.forwardRef<
      HTMLDivElement,
      any
    >((props, ref) => (
      <FolderTreeItemWrapper {...props} ref={ref}>
        <div style={{
          padding: '6px 8px',
          backgroundColor: props.isOver ? '#e3f2fd' : 'transparent',
          borderRadius: '3px',
          border: props.ghost ? '2px dashed #ccc' : 'none',
        }}>
          {props.item.value}
        </div>
      </FolderTreeItemWrapper>
    ))

    return (
      <div style={{ padding: '20px', maxWidth: '500px' }}>
        <h3>File Explorer</h3>
        <p>Organize your project files with drag and drop.</p>
        <div style={{
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          minHeight: '300px',
          fontFamily: 'monospace'
        }}>
          <SortableTree
            items={items}
            onItemsChanged={setItems}
            TreeItemComponent={TreeItemComponent}
            indentationWidth={20}
          />
        </div>
      </div>
    )
  }
}

// Task Manager Example
export const TaskManager: Story = {
  render: () => {
    const [items, setItems] = useState<TreeItems<TaskData>>([
      {
        id: '1',
        value: '🚀 Sprint 1',
        children: [
          { id: '4', value: '✅ Design homepage', completed: true },
          { id: '5', value: '🔄 Implement auth', completed: false },
          { id: '6', value: '⏳ Write tests', completed: false },
        ],
      },
      {
        id: '2',
        value: '📋 Sprint 2',
        children: [
          { id: '7', value: '🎯 Add analytics' },
        ]
      },
      { id: '3', value: '⭐ Backlog' },
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
          border: props.ghost ? '2px dashed #ccc' : 'none',
          opacity: props.item.completed ? 0.7 : 1,
          textDecoration: props.item.completed ? 'line-through' : 'none'
        }}>
          {props.item.value}
        </div>
      </SimpleTreeItemWrapper>
    ))

    return (
      <div style={{ padding: '20px', maxWidth: '500px' }}>
        <h3>Task Manager</h3>
        <p>Organize tasks and sprints with drag and drop.</p>
        <div style={{
          border: '1px solid #e9ecef',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          minHeight: '300px'
        }}>
          <SortableTree
            items={items}
            onItemsChanged={setItems}
            TreeItemComponent={TreeItemComponent}
            indentationWidth={25}
          />
        </div>
      </div>
    )
  }
}

// Minimal Example
export const Minimal: Story = {
  render: () => {
    const [items, setItems] = useState<TreeItems<{ value: string }>>([
      { id: '1', value: 'Item 1', children: [{ id: '4', value: 'Nested Item' }] },
      { id: '2', value: 'Item 2' },
      { id: '3', value: 'Item 3' },
    ])

    const TreeItemComponent = React.forwardRef<
      HTMLDivElement,
      any
    >((props, ref) => (
      <SimpleTreeItemWrapper {...props} ref={ref}>
        <div style={{
          padding: '4px 8px',
          backgroundColor: props.isOver ? '#f0f0f0' : 'transparent',
          borderRadius: '2px',
        }}>
          {props.item.value}
        </div>
      </SimpleTreeItemWrapper>
    ))

    return (
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <h3>Minimal Example</h3>
        <p>Simple tree with minimal styling.</p>
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '8px',
          backgroundColor: '#fafafa',
          minHeight: '200px'
        }}>
          <SortableTree
            items={items}
            onItemsChanged={setItems}
            TreeItemComponent={TreeItemComponent}
            indentationWidth={15}
          />
        </div>
      </div>
    )
  }
}
