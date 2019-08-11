export type NodePosition = {
  offset: number,
  line: number,
  column: number
}

export type NodeRange = {
  start: NodePosition,
  end: NodePosition
}

export type BaseNode = {
  location: NodeRange
}

export type KeywordNode = {
  type: 'keyword',
  value: string,
  location: NodeRange
}

export type ComparisonOperator =
  '+' | '-' | '*' | '/' | '>' | '<' | '!' | '='

export type Operator =
   ComparisonOperator| 'OR' | 'AND' | 'NOT'

export type BinaryExpressionNode = {
  type: 'binary_expr',
  operator: Operator,
  // TODO: define it
  left: BaseNode | BinaryExpressionNode,
  right: BaseNode | BinaryExpressionNode,
  location: NodeRange 
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
  expression: BinaryExpressionNode,
  location: NodeRange
}

export function parse(sql: string): SelectStatement