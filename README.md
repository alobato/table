# Table

> Table react component

## Install

```sh
yarn add @alobato/table
```

## Usage

```js
<TableContainer>
  <Table>
    <TableHeaderRow>
      <TableHeaderCell>Data/Hora</TableHeaderCell>
      <TableHeaderCell>ID</TableHeaderCell>
      <TableHeaderCell>Cidade</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </TableHeaderRow>
    {currentPageItems.map(item => (
      <TableRow key={item.id}>
        <TableCell data-title='Data/Hora'>{item.createdAt}</TableCell>
        <TableCell data-title='ID'>{item.id}</TableCell>
        <TableCell data-title='Cidade'>{item.city}</TableCell>
        <TableCell data-title='Status'>{item.status}</TableCell>
      </TableRow>
    ))}
  </Table>
</TableContainer>
```
