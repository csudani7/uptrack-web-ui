//#Global Imports
import * as React from "react";
import clsx from "clsx";
import { usePagination, useSortBy, useTable } from "react-table";
//#end Global Imports

//#Local Imports
import { ITable } from "./Table";
import { SortingIcon } from "../../../assests/icons";

//#end Local Imports

export const Table: React.FunctionComponent<ITable.IProps> = ({ data, columns, isPagination }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  }: any = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
  );

  return (
    <div className="w-full overflow-auto">
      <table {...getTableProps()} className="w-full table-fixed min-w-[1440px]">
        <thead className="w-full">
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>;
                headers: any[];
              },
              index: React.Key | null | undefined,
            ) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>
                    <div className="flex items-center justify-between w-full font-medium text-gray-150 text-[10px] pb-4">
                      <div>{column.render("Header")}</div>
                      <div className={clsx(headerGroup.headers?.length !== index + 1 && "mr-4")}>
                        {column.canSort && <SortingIcon />}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ),
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, index: React.Key | null | undefined) => {
            prepareRow(row);

            return (
              // Apply the row props
              <tr
                {...row.getRowProps()}
                key={index}
                className="border-t border-gray-150 border-opacity-20 text-black font-medium text-[10px]"
              >
                {
                  // Loop over the rows cells
                  row.cells.map(
                    (cell: {
                      getCellProps: () => JSX.IntrinsicAttributes;
                      render: (
                        arg0: string,
                      ) =>
                        | string
                        | number
                        | boolean
                        | React.ReactFragment
                        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                        | React.ReactPortal
                        | null
                        | undefined;
                    }) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()} className="py-[22px]">
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    },
                  )
                }
              </tr>
            );
          })}
        </tbody>
      </table>
      {isPagination && (
        <div className="flex items-center justify-between pagination">
          <div className="flex w-1/4 text-sm font-medium text-black gap-x-2">
            <span className="opacity-60">Showing</span>
            {(pageIndex + 1) * 1} - {(pageIndex + 1) * 10}
            <span className="opacity-60">of {pageOptions.length * 10} items</span>
          </div>
          <div className="flex items-center justify-center w-3/4 gap-5 cursor-pointer">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>
            <div onClick={() => gotoPage(pageIndex + 1)}>{pageIndex + 1}</div>
            <div onClick={() => gotoPage(pageIndex + 2)}>{pageIndex + 2}</div>
            <div onClick={() => gotoPage(pageIndex + 3)}>{pageIndex + 3}</div>
            <div>...</div>
            <div onClick={() => gotoPage(pageOptions.length - 1)}>{pageOptions.length - 1}</div>
            <div onClick={() => gotoPage(pageOptions.length)}>{pageOptions.length}</div>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
