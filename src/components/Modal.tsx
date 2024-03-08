import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Button,
  } from "@yamada-ui/react"

  import {
    TableContainer,
    NativeTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@yamada-ui/react";

export const ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

return (
  <>
    <Button onClick={onOpen}>Open Modal</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>支払い詳細</ModalHeader>

      <ModalBody>
      <TableContainer layerStyle="componentStyle">
      <NativeTable>
        <Thead>
          <Tr>
            <Th >名前</Th>
            <Th  isNumeric>支払い</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td >おひな</Td>
            <Td  isNumeric>20000</Td>
          </Tr>
          <Tr>
            <Td >清水
            </Td>
            <Td  isNumeric>10000</Td>
          </Tr>
          <Tr>
            <Td >そよち</Td>
            <Td  isNumeric>20000</Td>
          </Tr>
        </Tbody>
      </NativeTable>
    </TableContainer>
      </ModalBody>

      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          とじる
        </Button>
      </ModalFooter>
    </Modal>
  </>
)
}
