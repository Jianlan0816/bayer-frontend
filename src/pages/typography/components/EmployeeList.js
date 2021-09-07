import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      display: "block",
      maxWidth: 350
    },
    body: {
      display: "block",
      overflow: "auto",
      height: "300px"
    },
    header: {
      backgroundColor: "#123456",
      color: "#ffffff",
      fontSize: 18
    },
    checkBox: {
      paddingTop: 1,
      paddingBottom: 1
    }
  })
);

interface Props {
  showAdmin: boolean;
  employees: IEmployee[];
}

export interface IEmployee {
  id: number;
  name: string;
  isAdmin: boolean;
}

/**
 * @param showAdmin : boolean
 * @param employees : IEmployee[]
 */
export default function EmployeeList(props: Props) {
  const styles = useStyles();

  const [selected, setSelected] = React.useState<number[]>([]);
  const [allSelected, setAllSelected] = React.useState<boolean>(false);

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const handleSelect = (id: number) => {
    let arr = selected.slice();
    isSelected(id) ? (arr = arr.filter(s => s !== id)) : arr.push(id);
    setSelected(arr);
  };

  const handleSelectAll = () => {
    setSelected(allSelected ? [] : props.employees.map(r => r.id));
    setAllSelected(!allSelected);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={styles.table} size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={styles.header}>
              <Checkbox
                checked={allSelected}
                onClick={handleSelectAll}
                color="primary"
              />
            </TableCell>
            <TableCell className={styles.header} align="left">
              Name
            </TableCell>
            {props.showAdmin && (
              <TableCell className={styles.header}>Admin</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody className={styles.body}>
          {props.employees.map(empl => (
            <TableRow key={empl.id}>
              <TableCell>
                <Checkbox
                  checked={isSelected(empl.id)}
                  onClick={() => handleSelect(empl.id)}
                  className={styles.checkBox}
                  color="primary"
                />
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingRight: 30 }}
              >
                {empl.name}
              </TableCell>
              {props.showAdmin && (
                <TableCell align="center">
                  <Checkbox
                    disabled
                    checked={empl.isAdmin}
                    className={styles.checkBox}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
