import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Text
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {

  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>
      <ModalOverlay>
        <ModalContent
          w="auto"
          h="auto"
          maxW={['320px', '540px', '900px', '1000px']}
          maxH={['360px', '440px', '600px', '700px']}
          mx="auto"
          mb="2.5rem"
          mt="2.5rem"
          bg="transparent">

          <ModalBody p='0'>
            <Image src={imgUrl}
              maxW={['320px', '540px', '900px', '1000px']}
              maxH={['360px', '440px', '600px', '700px']} />
          </ModalBody>

          <ModalFooter bgColor="pGray.800" h='8' justifyContent='start'>
            <Text as='a' href={imgUrl} fontSize='sm' color='gray.50' _hover={{
              opacity: 0.8
            }}>
              Abrir original
            </Text>
          </ModalFooter>

        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}