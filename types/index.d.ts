export type NodePosition = {
  offset: number,
  line: number,
  column: number
}

export type NodeRange = {
  start: NodePosition,
  end: NodePosition
}

export type KeywordNode = {
  type: 'keyword',
  value: string,
  location: any
}

export type SelectStatement = {
  type: 'select',
  keyword: KeywordNode,
  distinct: 'distinct' | null,
  columns: any,
  from: FromClause | null,
  where: WhereClause | null,
  groupBy: any,
  orderBy: any
}

export type FromClause = {
  type: 'from',
  keyword: KeywordNode,
  tables: any,
  location: NodeRange
}

export type WhereClause = {
  type: 'where',
  keyword: KeywordNode,
  expression: any,
  location: NodeRange
}

export function parse(sql: string): SelectStatement