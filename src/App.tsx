import React, { useState } from 'react'
import { SortableTree, SimpleTreeItemWrapper, FolderTreeItemWrapper } from '../lib/main'
import type { TreeItems, TreeItemComponentProps } from '../lib/main'
import './App.css'

interface TreeItemData {
  value: string
}

function App() {
  // Simple Tree Example Data
  const [simpleTreeItems, setSimpleTreeItems] = useState<TreeItems<TreeItemData>>([
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

  // Folder Tree Example Data
  const [folderTreeItems, setFolderTreeItems] = useState<TreeItems<TreeItemData>>([
    {
      id: '1',
      value: 'Root Folder',
      children: [
        { id: '4', value: 'Subfolder 1' },
        { id: '5', value: 'Subfolder 2' },
        { id: '6', value: 'File.txt' },
      ],
    },
    { id: '2', value: 'Another Root', children: [{ id: '7', value: 'Nested Folder' }] },
    { id: '3', value: 'Empty Folder' },
  ])

  // Tree Item Components
  const SimpleTreeItemComponent = React.forwardRef<
    HTMLDivElement,
    TreeItemComponentProps<TreeItemData>
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

  const FolderTreeItemComponent = React.forwardRef<
    HTMLDivElement,
    TreeItemComponentProps<TreeItemData>
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
    <div className="app">
      <header>
        <h1>dnd-dynamic-tree Demo</h1>
        <p>Drag and drop to reorder items. Expand/collapse folders.</p>
      </header>

      <div className="demo-container">
        <section className="demo-section">
          <h2>Simple Tree Style</h2>
          <div className="tree-container">
            <SortableTree
              items={simpleTreeItems}
              onItemsChanged={setSimpleTreeItems}
              TreeItemComponent={SimpleTreeItemComponent}
              indentationWidth={20}
            />
          </div>
        </section>

        <section className="demo-section">
          <h2>Folder Tree Style</h2>
          <div className="tree-container">
            <SortableTree
              items={folderTreeItems}
              onItemsChanged={setFolderTreeItems}
              TreeItemComponent={FolderTreeItemComponent}
              indentationWidth={25}
            />
          </div>
        </section>
      </div>

      <footer>
        <p>
          Check out the <a href="http://localhost:6006" target="_blank">Storybook</a> for more examples!
        </p>
        <p>
          <a href="https://github.com/shantanusoam/dnd-dynamic-tree" target="_blank">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
