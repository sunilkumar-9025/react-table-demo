import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy MMMM dd");
    },
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
        Footer: "Date of Birth",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
