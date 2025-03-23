import { HStack, Heading, Stack, Table } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";

const DataTable = ({ title, columns, items, pageSize }) => {
  return (
    <Stack width="full" gap="5">
      <Heading size="xl">{title}</Heading>
      <Table.Root variant="outline" showColumnBorder>
        <Table.Header>
          <Table.Row>
            {columns.map((col, index) => (
              <Table.ColumnHeader
                // whiteSpace="nowrap"
                fontSize=".75rem"
                color="blue.700"
                key={index}
                textAlign={col.align || "start"}
              >
                {col.label}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id} fontSize=".75rem">
              {columns.map((col, index) => (
                <Table.Cell key={index} textAlign={col.align || "start"}>
                  {item[col.key]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* <PaginationRoot count={items.length} pageSize={pageSize} page={1}>
        <HStack wrap="wrap">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot> */}
    </Stack>
  );
};

export default DataTable;
