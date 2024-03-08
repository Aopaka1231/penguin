import {
  TableContainer,
  NativeTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@yamada-ui/react";
import { FC } from "react";

type Props = {
  className?: string;
};

export const HistoryTable: FC<Props> = ({ className }) => {
  return (
    <TableContainer
      className={`px-2 rounded-md ${className}`}
      layerStyle="componentStyle"
    >
      <NativeTable>
        <Thead>
          <Tr>
            <Th>目的</Th>
            <Th>金額</Th>
            <Th>対象</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>お昼食べた</Td>
            <Td>4360</Td>
            <Td>おひな, 清水</Td>
          </Tr>
          <Tr>
            <Td>庭みた</Td>
            <Td>3000</Td>
            <Td>おひな, 清水, そよち</Td>
          </Tr>
          <Tr>
            <Td>ゲゲ見た!
            </Td>
            <Td>3000</Td>
            <Td>おひな, 清水, そよち</Td>
          </Tr>
          <Tr>
            <Td>タコパ材料とお菓子</Td>
            <Td>4560</Td>
            <Td>おひな, 清水, そよち</Td>
          </Tr>
          <Tr>
            <Td>駅食べ歩き</Td>
            <Td>3945</Td>
            <Td>おひな, 清水, そよち</Td>
          </Tr>
        </Tbody>
      </NativeTable>
    </TableContainer>
  );
};
