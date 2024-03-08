import {
  Modal,
  ModalHeader,
  ModalBody,
  // ModalFooter,
  useDisclosure,
} from "@yamada-ui/react";

import {
  TableContainer,
  NativeTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@yamada-ui/react";
import { CustomButton } from "./CustomButton";
import { FC } from "react";

type Props = {
  className?: string;
};

export const CustomModal: FC<Props> = ({ className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={className}>
      <CustomButton label="詳細を見る" onClick={onOpen} />

      <Modal layerStyle="componentStyle" isOpen={isOpen} onClose={onClose}>
        <ModalHeader>支払い詳細</ModalHeader>

        <ModalBody className="mx-auto">
          <TableContainer className="max-w-20 w-full">
            <NativeTable className="bg-[#E3B04B95] rounded-lg">
              <Thead>
                <Tr>
                  <Th>名前</Th>
                  <Th isNumeric>支払い</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>A</Td>
                  <Td isNumeric>20000</Td>
                </Tr>
                <Tr>
                  <Td>B</Td>
                  <Td isNumeric>10000</Td>
                </Tr>
                <Tr>
                  <Td>C</Td>
                  <Td isNumeric>20000</Td>
                </Tr>
                <Tr>
                  <Td>D</Td>
                  <Td isNumeric>8000</Td>
                </Tr>
                <Tr>
                  <Td>E</Td>
                  <Td isNumeric>20000</Td>
                </Tr>
              </Tbody>
            </NativeTable>
          </TableContainer>
        </ModalBody>
      </Modal>
    </div>
  );
};
