import * as React from 'react'

type AccordionItemColorScheme = 'purple-head' | 'all-purple'

export interface AccordionItemProps {
  /** if true, the Accoridon item starts opened */
  open?: boolean
  /** index number inside the accordion (automatically assigned by the Accodion component)  */
  accIndex?: number
  /** Item children */
  children: React.ReactNode
  /** Item titleChildren */
  titleChild?: React.ReactNode
  /** List of all opened items */
  openedItems?: number[]
  /** event to open Item */
  onOpenItem?: (...args: any) => any
  /** event to close panel */
  onCloseItem?: (...args: any) => any
  /** choose a pre-defined color scheme */
  colorScheme?: AccordionItemColorScheme
  /** run a function when item is opened */
  openCallback?: (...args: any) => any
  /** run a function when item is closed */
  closeCallback?: (...args: any) => any
}

export interface AccordionType<T> extends React.FC<T> {
  Item: React.FC<AccordionItemProps>
}

export interface AccordionProps {
  /** Tells the accordion to keep only one item opened per time */
  onlyOneItemOpen?: boolean
  /** Accordion.Item[] */
  children?: JSX.Element[]
  /** Set all accordion items a predefined color scheme */
  colorScheme?: AccordionItemColorScheme
}
