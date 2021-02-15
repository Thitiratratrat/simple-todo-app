import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Spacer,
  Circle,
} from '@chakra-ui/react';
import { todoService } from '../../lib/dependencies';

import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

export default function TodoItem({
  id,
  title,
  body,
  isComplete,
  onComplete,
  onDelete,
}) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Flex alignItems="center">
              {title}
              <Spacer />
              {!isComplete && (
                <>
                  <Circle
                    size="30px"
                    bg="green.400"
                    color="white"
                    mr="3"
                    onClick={() => onComplete(id)}
                  >
                    <CheckIcon />
                  </Circle>
                  <Circle
                    size="30px"
                    bg="red.400"
                    color="white"
                    mr="3"
                    onClick={() => onDelete(id)}
                  >
                    <CloseIcon />
                  </Circle>
                </>
              )}
            </Flex>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{body}</AccordionPanel>
    </AccordionItem>
  );
}
