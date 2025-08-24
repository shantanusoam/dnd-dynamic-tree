# dnd-dynamic-tree

[![npm version](https://badge.fury.io/js/dnd-dynamic-tree.svg)](https://www.npmjs.org/package/dnd-dynamic-tree) [![npm](https://img.shields.io/npm/dt/dnd-dynamic-tree.svg)](https://www.npmjs.org/package/dnd-dynamic-tree) [![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://opensource.org/licenses/MIT)

A powerful, flexible, and easy-to-use React tree component with drag-and-drop functionality built on top of [@dnd-kit](https://dndkit.com/).

## ✨ Features

- 🎯 **Drag & Drop**: Full drag-and-drop support with visual feedback
- 📁 **Nested Trees**: Support for unlimited nesting levels
- 🎨 **Customizable**: Completely customizable appearance via CSS
- 🔧 **TypeScript**: Written in TypeScript with full type safety
- ⚡ **Performance**: Optimized rendering and smooth animations
- 🧩 **Flexible**: Works with any data structure
- 📱 **Accessible**: Built with accessibility in mind
- 🎭 **Two Styles**: Simple and folder-style tree components included

## 🚀 Quick Start

```bash
npm install dnd-dynamic-tree @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

```tsx
import { SortableTree, SimpleTreeItemWrapper } from 'dnd-dynamic-tree'

function MyTree() {
  const [items, setItems] = useState([
    { id: '1', value: 'Home', children: [{ id: '4', value: 'Documents' }] },
    { id: '2', value: 'Work' },
    { id: '3', value: 'Personal', canHaveChildren: false },
  ])

  const TreeItemComponent = React.forwardRef((props, ref) => (
    <SimpleTreeItemWrapper {...props} ref={ref}>
      <div>{props.item.value}</div>
    </SimpleTreeItemWrapper>
  ))

  return (
    <SortableTree
      items={items}
      onItemsChanged={setItems}
      TreeItemComponent={TreeItemComponent}
    />
  )
}
```

## 🛠 Development

Check out the Storybook for code samples and play around. You could also play with it on [CodeSandbox](https://codesandbox.io/p/sandbox/dnd-test-fmrrc5?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv3wa4mp00063b6jmrb632y3%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv3wa4mp00023b6jydjwzvlt%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv3wa4mp00033b6ju9al8sz5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv3wa4mp00053b6jfwcny4ms%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv3wa4mp00023b6jydjwzvlt%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv3wa4mp00013b6j9b388e49%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clv42er3l00023b6jt604qbcs%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A2%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A7%252C%2522endColumn%2522%253A27%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clv3wa4mp00023b6jydjwzvlt%2522%252C%2522activeTabId%2522%253A%2522clv42er3l00023b6jt604qbcs%2522%257D%252C%2522clv3wa4mp00053b6jfwcny4ms%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv3wa4mp00043b6jugxs56pm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clv3wa4mp00053b6jfwcny4ms%2522%252C%2522activeTabId%2522%253A%2522clv3wa4mp00043b6jugxs56pm%2522%257D%252C%2522clv3wa4mp00033b6ju9al8sz5%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clv3wa4mp00033b6ju9al8sz5%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

### Prerequisites

- Node.js 18+
- npm or pnpm

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shantanusoam/dnd-dynamic-tree.git
   cd dnd-dynamic-tree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development demo**
   ```bash
   npm run dev
   ```
   This will start a demo application at `http://localhost:5173` where you can see and test the library in action.

4. **Start Storybook**
   ```bash
   npm run storybook
   ```
   This will start Storybook at `http://localhost:6006` with interactive examples and documentation.

### Available Scripts

- `npm run dev` - Start development demo
- `npm run storybook` - Start Storybook development server
- `npm run build` - Build the library for production
- `npm run build:lib` - Build only the library
- `npm run build:demo` - Build the demo application
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Project Structure

```
dnd-dynamic-tree/
├── lib/                    # Library source code
│   ├── dynamic-Tree/       # Main library components
│   │   ├── index.ts        # Main exports
│   │   ├── SortableTree.tsx
│   │   ├── ui/             # UI components
│   │   └── types.ts        # TypeScript types
│   └── main.ts             # Library entry point
├── src/                    # Development/demo code
│   ├── App.tsx             # Demo application
│   ├── stories/            # Storybook stories
│   └── index.css
├── dist/                   # Built library output
└── package.json
```



## 📖 Examples

The library includes several example implementations:

### Simple Tree Style

```tsx
import { SortableTree, SimpleTreeItemWrapper } from 'dnd-dynamic-tree'

const SimpleTreeComponent = React.forwardRef((props, ref) => (
  <SimpleTreeItemWrapper {...props} ref={ref}>
    <div style={{ padding: '8px 12px' }}>
      {props.item.value}
    </div>
  </SimpleTreeItemWrapper>
))

<SortableTree
  items={treeData}
  onItemsChanged={setTreeData}
  TreeItemComponent={SimpleTreeComponent}
  indentationWidth={20}
/>
```

### Folder Tree Style

```tsx
import { SortableTree, FolderTreeItemWrapper } from 'dnd-dynamic-tree'

const FolderTreeComponent = React.forwardRef((props, ref) => (
  <FolderTreeItemWrapper {...props} ref={ref}>
    <div style={{ padding: '8px 12px' }}>
      {props.item.value}
    </div>
  </FolderTreeItemWrapper>
))

<SortableTree
  items={treeData}
  onItemsChanged={setTreeData}
  TreeItemComponent={FolderTreeComponent}
  indentationWidth={25}
/>
```

## 📚 Documentation

For complete documentation and API reference, check out:

- **Storybook**: Interactive examples at `http://localhost:6006` (after running `npm run storybook`)
- **Development Demo**: Live demo at `http://localhost:5173` (after running `npm run dev`)
- **Source Code**: Well-documented TypeScript source in the `lib/` directory

## 🎯 Use Cases

- **File Explorers**: Organize files and folders with drag-and-drop
- **Task Management**: Manage tasks and projects hierarchically
- **Navigation Menus**: Create dynamic, reorderable navigation structures
- **Content Management**: Organize content categories and items
- **Data Organization**: Any hierarchical data that needs reordering

## 🤝 Contributing

Contributions are welcome! The development setup is now properly configured:

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/dnd-dynamic-tree.git`
3. Install dependencies: `npm install`
4. Start development: `npm run dev`
5. Start Storybook: `npm run storybook`
6. Make your changes and test thoroughly
7. Submit a pull request

## 📄 License

MIT © [Shantanu Soam](https://github.com/shantanusoam)

