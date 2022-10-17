//#Global Imports
import * as React from "react";
import clsx from "clsx";
import { usePagination, useSortBy, useTable } from "react-table";
//#end Global Imports

//#Local Imports
import { ITable } from "./Table";
import { NextPageIcon, PreviousPageIcon, SortingIcon } from "../../../assests/icons";
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

  const paginationTextStyle = "text-blue-100 opacity-30 text-base font-medium";
  const activePageTextStyle =
    "text-blue-100 text-base font-medium bg-blue-100 bg-opacity-5 rounded py-1 px-3";

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
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={index}
                className="border-b border-gray-150 border-opacity-20"
              >
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
                className="border-b border-gray-150 border-opacity-20 text-black font-medium text-[10px]"
              >
                {
                  // Loop over the rows cells
                  row.cells.map(
                    (
                      cell: {
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
                      },
                      index: React.Key | null | undefined,
                    ) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()} className="py-[22px]" key={index}>
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
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row pagination mt-11 lg:gap-0 lg:mb-8 3xl:mb-0">
          <div className="flex text-sm font-medium text-black w-fit gap-x-2">
            <span className="opacity-60">Showing</span>
            {pageIndex + "1"} -
            {pageOptions.length === pageIndex + 1 ? data?.length : (pageIndex + 1) * 10}
            <span className="opacity-60">of {data?.length} items</span>
          </div>
          <div className="flex items-center justify-center gap-5 cursor-pointer w-[87%] lg:w-[73%] xl:w-[83%] 3xl:w-[87%] mb-8 lg:mb-0">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <PreviousPageIcon />
            </button>
            {pageIndex === 0 ? (
              <>
                <div
                  className={clsx(pageIndex === 0 ? activePageTextStyle : paginationTextStyle)}
                  onClick={() => gotoPage(pageIndex)}
                >
                  {pageIndex + 1}
                </div>
                <div className={paginationTextStyle} onClick={() => gotoPage(pageIndex + 1)}>
                  {pageIndex + 2}
                </div>
                <div className={paginationTextStyle} onClick={() => gotoPage(pageIndex + 2)}>
                  {pageIndex + 3}
                </div>
              </>
            ) : pageIndex < pageOptions.length - 3 ? (
              <>
                <div className={activePageTextStyle} onClick={() => gotoPage(pageIndex)}>
                  {pageIndex + 1}
                </div>
                <div className={paginationTextStyle} onClick={() => gotoPage(pageIndex + 1)}>
                  {pageIndex + 2}
                </div>
                <div className={paginationTextStyle} onClick={() => gotoPage(pageIndex + 2)}>
                  {pageIndex + 3}
                </div>
              </>
            ) : (
              <>
                <div
                  className={clsx(
                    pageIndex === pageOptions.length - 3
                      ? activePageTextStyle
                      : paginationTextStyle,
                  )}
                  onClick={() => gotoPage(pageOptions.length - 3)}
                >
                  {pageOptions.length - 2}
                </div>
                <div
                  className={clsx(
                    pageIndex === pageOptions.length - 2
                      ? activePageTextStyle
                      : paginationTextStyle,
                  )}
                  onClick={() => gotoPage(pageOptions.length - 2)}
                >
                  {pageOptions.length - 1}
                </div>
                <div
                  className={clsx(
                    pageIndex === pageOptions.length - 1
                      ? activePageTextStyle
                      : paginationTextStyle,
                  )}
                  onClick={() => gotoPage(pageOptions.length - 1)}
                >
                  {pageOptions.length}
                </div>
              </>
            )}
            {pageIndex < pageOptions.length - 5 && <div className={paginationTextStyle}>...</div>}
            {pageIndex < pageOptions.length - 4 && (
              <div className={paginationTextStyle} onClick={() => gotoPage(pageOptions.length - 2)}>
                {pageOptions.length - 1}
              </div>
            )}
            {pageIndex < pageOptions.length - 3 && (
              <div className={paginationTextStyle} onClick={() => gotoPage(pageOptions.length - 1)}>
                {pageOptions.length}
              </div>
            )}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <NextPageIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
