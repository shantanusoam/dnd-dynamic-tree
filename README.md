# dnd-dynamic-tree

[![npm version](https://badge.fury.io/js/dnd-dynamic-tree.svg)](https://www.npmjs.org/package/dnd-dynamic-tree) [![npm](https://img.shields.io/npm/dt/dnd-dynamic-tree.svg)](https://www.npmjs.org/package/dnd-dynamic-tree) [![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://opensource.org/licenses/MIT)


Here's how it could look like (visuals are completely customizable via css though)
Normal Look
![screenshot](https://github.com/shantanusoam/dnd-dynamic-tree/blob/main/dnd-kit-folder.png?raw=true)
Folder Look
![screenshot](https://github.com/shantanusoam/dnd-dynamic-tree/blob/main/dnd-drag.png?raw=true)

Play around in [examples](https://shantanusoam.github.io/dnd-dynamic-tree) to check the API and see what it can do.

## Features

- Custom trigger element
- Custom drag Element
- Multi nth level submenu support
- Automatic State update and Postion generation
- Specific props to each dnd item
- Auto positioning of each dnd-item
- Equbied with all the dnd-kit helpers
- Written in TypeScript 🤙



## Install

    npm install dnd-dynamic-tree @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

## How-to use

Check out the Storybook for code samples and play around. You could also play with it on [CodeSandbox](https://codesandbox.io/p/sandbox/dnd-test-fmrrc5?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clv3wa4mp00063b6jmrb632y3%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clv3wa4mp00023b6jydjwzvlt%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clv3wa4mp00033b6ju9al8sz5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clv3wa4mp00053b6jfwcny4ms%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clv3wa4mp00023b6jydjwzvlt%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv3wa4mp00013b6j9b388e49%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clv42er3l00023b6jt604qbcs%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A2%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A7%252C%2522endColumn%2522%253A27%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clv3wa4mp00023b6jydjwzvlt%2522%252C%2522activeTabId%2522%253A%2522clv42er3l00023b6jt604qbcs%2522%257D%252C%2522clv3wa4mp00053b6jfwcny4ms%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clv3wa4mp00043b6jugxs56pm%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clv3wa4mp00053b6jfwcny4ms%2522%252C%2522activeTabId%2522%253A%2522clv3wa4mp00043b6jugxs56pm%2522%257D%252C%2522clv3wa4mp00033b6ju9al8sz5%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clv3wa4mp00033b6ju9al8sz5%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

Shortly, you need to render:

```tsx
<SortableTree
  items={/* array of your tree items */}
  onItemsChanged={/* callback when items are reordered */}
  TreeItemComponent={/* component that renders a single tree item */}
/>
```

And `TreeItemComponent` is usually your data wrapped in `SimpleTreeItemWrapper` or `FolderTreeItemWrapper`:

```tsx
React.forwardRef((props, ref) => (
  <SimpleTreeItemWrapper {...props} ref={ref}>
    <div>{props.item.value}</div>
  </SimpleTreeItemWrapper>
));
```

Note that wrapping in `forwardRef` and passing `ref` to `SimpleTreeItemWrapper` is very important!

## Examples

1. Here's the very minimal code to add a Sortable Tree. You shouldn't use it as is in your project, but it could be easier to grasp what's going on.
   ```jsx
   export const Minimal = () => {
     const [items, setItems] = useState(initialMinimalData);
     return (
       <SortableTree
         items={items}
         onItemsChanged={setItems}
         {
           /*
            * You need to pass the component rendering a single item via TreeItemComponent props.
            * This component will receive the data via `props.item`.
            * In this example we inline the component, but in reality you should extract it into a const.
            */ ...{}
         }
         TreeItemComponent={React.forwardRef((props, ref) => (
           <SimpleTreeItemWrapper {...props} ref={ref}>
             {/* HERE GOES THE ACTUAL CONTENT OF YOUR COMPONENT */}
             <div>{props.item.id}</div>
           </SimpleTreeItemWrapper>
         ))}
       />
     );
   };
   /*
    * Configure the tree data.
    */
   const initialMinimalData = [
     { id: '1', children: [{ id: '4' }, { id: '5' }] },
     { id: '2' },
     { id: '3' },
   ];
   ```
2. Here's the minimal viable example that you could potentially copy&paste to your project to start from.

   ```tsx
   export const MinimalViable = () => {
     const [items, setItems] = useState(initialViableMinimalData);
     return (
       <SortableTree
         items={items}
         onItemsChanged={setItems}
         TreeItemComponent={MinimalTreeItemComponent}
       />
     );
   };
   type MinimalTreeItemData = {
     value: string;
   };
   /*
    * Here's the component that will render a single row of your tree
    */
   const MinimalTreeItemComponent = React.forwardRef<
     HTMLDivElement,
     TreeItemComponentProps<MinimalTreeItemData>
   >((props, ref) => (
     /* you could also use FolderTreeItemWrapper if you want to show vertical lines.  */
     <SimpleTreeItemWrapper {...props} ref={ref}>
       <div>{props.item.value}</div>
     </SimpleTreeItemWrapper>
   ));

   /*
    * Configure the tree data.
    */
   const initialViableMinimalData: TreeItems<MinimalTreeItemData> = [
     {
       id: '1',
       value: 'Jane',
       children: [
         { id: '4', value: 'John' },
         { id: '5', value: 'Sally' },
       ],
     },
     { id: '2', value: 'Fred', children: [{ id: '6', value: 'Eugene' }] },
     { id: '3', value: 'Helen', canHaveChildren: false },
   ];
   ```

## API

### Data configuration (each TreeItem element could define them):

- `canHaveChildren` - Default: `true`.

  If set to `false`, prevents any node from being dragged into the current one.

  Also accepts a function: `(dragItem) => bool` which could conditionally determine if a certain item could be a children of a node

- `disableSorting` - Default: `false`. If set to `true`, prevents node from being dragged (i.e. it can't be sorted or moved to another node)

### Tree configuration (props of `<SortableTree>`)

- `items` - _mandatory_, items shown in a tree
- `onItemsChanged` - _mandatory_, callback that is called when dragging of certain item is finished. You should preserve new state and adjust the value of `items` prop as needed.
- `TreeItemComponent` - _mandatory_, component that renders a single tree row.
- `indentationWidth` - _optional_, padding used for children
- `pointerSensorOptions` - _optional_, configures the condition when item dragging starts. Defaults to:

  ```json
  {
    "activationConstraint": {
      "distance": 3
    }
  }
  ```

- `disableSorting` - _optional_, you could set this to `true` to completely disable the sorting
- `keepGhostInPlace` - _optional_, you could set this to `true` to keep the Node that you are dragging in it's original place in a Tree. Check [VSCode](https://shantanusoam.github.io/dnd-dynamic-tree/?path=/story/simple--vs-code-like) sample to see it in action.
- `dndContextProps` - _optional_, override any prop of underlying [DndContext](https://docs.dndkit.com/api-documentation/context-provider#props).
- `sortableProps` - _optional_, override any prop that is passed to underlying [useSortable](https://docs.dndkit.com/presets/sortable/usesortable) hook.

### TreeItemWrapper configuration (props of `<SimpleTreeItemWrapper>` and `<FolderTreeItemWrapper>`)

- `manualDrag` - Default: `false`. Set to `true` if you want tree item to be draggable ONLY from dragHandle.
- `showDragHandle` - _optional_, set to `false` if you want to hide default dragHandle and show your own instead. Use `<div {...props.handleProps}>DRAG_ME</div>` for your own drag handle.

# FAQ

1. If you want to [disable animation completely](https://shantanusoam.github.io/dnd-dynamic-tree/?path=/story/simple--no-drop-animation), you need to do the following:
   1. Pass `null` as `dropAnimation` prop (this disables the actual 'drop' animation for the Node that was dragged).
   1. Pass `{ animateLayoutChanges: () => false }` to `sortableProps` (this disables the animation of all other nodes that were not dragged)

# Troubleshooting

1. If your dragged item is shown at the end of a list, make sure you that:
   1. You wrapped your `TreeItem` component in `React.forwardRef` and passing the `ref` to `SimpleTreeItemWrapper`
   1. You pass the `styles` prop from `TreeItem` to `SimpleTreeItemWrapper`