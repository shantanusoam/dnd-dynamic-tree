
import { SimpleTreeItemWrapper } from './dynamic-Tree/ui/simple/SimpleTreeItemWrapper';
import { FolderTreeItemWrapper } from './dynamic-Tree/ui/folder/FolderTreeItemWrapper';
import { SortableTree, SortableTreeProps } from './dynamic-Tree/SortableTree';
import { flattenTree } from './dynamic-Tree/utilities';
import type { TreeItems, TreeItemComponentProps, TreeItem } from './dynamic-Tree/types';

export {
  flattenTree,
  SortableTree,
  SimpleTreeItemWrapper,
  FolderTreeItemWrapper,
};
export type { TreeItemComponentProps, TreeItems, TreeItem, SortableTreeProps };

export function helloAnything(thing: string): string {
    console.log(thing)
    return `Hello ${thing}!`
  }