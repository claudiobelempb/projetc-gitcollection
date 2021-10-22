import { TableContainer } from "./styles";

interface ITableProps {
  header?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;

  ths?: {
    key: string | number;
    title: string | number;
  }[];

  tds?: {
    key: string | number;
    value: string | number;
  }[];
}

export const TableDefault: React.FC<ITableProps> = ({
  header,
  subtitle,
  tagcolor,
  amount,
  ths,
  tds,
}: ITableProps) => {
  return (
    <TableContainer tagcolor={tagcolor}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Created</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>valor</td>
            <td>type</td>
            <td>created</td>
            <td>updated</td>
          </tr>
        </tbody>
        {/* <tfoot>
        <tr>
          <td>Título</td>
          <td>Preço</td>
          <td>Categoria</td>
          <td>Data</td>
          <td>Ações</td>
        </tr>
      </tfoot> */}
      </table>
    </TableContainer>
  );
};
