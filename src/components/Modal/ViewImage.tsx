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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay opacity={50}>
        <ModalContent>
          <ModalBody>
            <Image src={imgUrl} maxH={600} maxWidth={900} />
          </ModalBody>
          <ModalFooter bgColor='gray.800'>
            <Text as='a' href={imgUrl} fontFamily='sm' color='gray.50'>
              Abrir original
            </Text>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
