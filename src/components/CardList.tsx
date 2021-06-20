import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [imageURL, setImageURL] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleToOpenModal(url: string) {
    setImageURL(url)
    onOpen()
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={10}>
        {
          cards?.map(card => (
            <Card data={card} viewImage={() => handleToOpenModal(card.url)} key={card.id} />
          ))
        }
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */
        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageURL} />
      }
    </>
  );
}
