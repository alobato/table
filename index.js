import styled from 'styled-components'
import { width, height, lineHeight } from 'styled-system'

export const TableContainer = styled.div`
  border: none;
  @media (min-width: 768px) {
    border: 1px solid ${props => props.theme.colors.grey200};
  }
`

export const Table = styled.div`
  display: block;
  &:last-child {
    border-bottom: none;
  }
  @media (min-width: 768px) {
    width: 100%;
    display: table;
    color: inherit;
  }
`

export const TableHeader = styled.div`
  display: block;
  @media (min-width: 768px) {
    font-weight: 600;
    color: inherit;
    background-color: ${props => props.theme.colors.primary};
  }
`

export const TableRow = styled.div`
  display: block;
  border-bottom: 1px solid ${props => props.theme.colors.grey200};
  padding-top: 16px;
  @media (min-width: 768px) {
    padding-top: 0;
    display: table-row;
    border-bottom: none;
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.colors.grey200};
    &:hover {
      background-color: ${props => props.theme.colors.grey100};
    }
  }
`

export const TableHeaderRow = styled(TableRow)`
  border-bottom: none;
  @media (min-width: 768px) {
    font-weight: 500;
    color: inherit;
    background-color: ${props => props.theme.colors.grey100};
  }
`

export const TableCell = styled.div`
  display: block;
  margin-bottom: 10px;
  line-height: 20px;
  @media (max-width: 767px) {
    &:before {
      margin-bottom: 3px;
      content: attr(data-title);
      min-width: 98px;
      font-size: 10px;
      line-height: 1;
      font-weight: bold;
      text-transform: uppercase;
      color: ${props => props.theme.colors.grey400};
      display: block;
    }
  }
  @media (min-width: 768px) {
    display: table-cell;
    vertical-align: middle;
    font-size: inherit;
    padding-right: 16px;
    &:first-child {
      height: 40px;
      padding-left: 16px;
    }
  }
  ${width}
  ${height}
  ${lineHeight}
`

export const TableHeaderCell = styled(TableCell)`
  margin-bottom: 0;
  @media (max-width: 767px) {
    display: none;
  }
`

export default Table