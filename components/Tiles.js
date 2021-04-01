import {
  Box,
  Flex,
  Link,
  Image,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMore } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { css } from "@emotion/react";
import Tile from "./Tile";
import AddOrUpdateTile from "./AddOrUpdateTile";
import { useState } from "react";

const tileCss = css`
  &:hover {
    background-color: #eee;
  }
  &:hover > .more {
    opacity: 1;
  }
`;

export default function Tiles({ tiles }) {
  const len = tiles.length;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [list, setList] = useState(tiles);
  const [tile, setTile] = useState({ title: "", url: "" });
  const [idx, setIdx] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  function clickTile(idx, val) {
    setIdx(idx);
    setIsEdit(idx ? true : false);
    setTile(val);
    onOpen();
  }

  function editTile(index, val) {
    list.splice(index, 1, val);
    onClose();
  }

  function addTile(val) {
    list.push(val);
    onClose();
  }

  function removeTile(index) {
    list.splice(index, 1);
    onClose();
  }

  return (
    <Box mx="auto" mt={5} w={573} h={266}>
      <Flex wrap="wrap" justifyContent="center">
        {list.map((tile, idx) => (
          <Tile key={tile.url} tile={tile} css={tileCss}>
            <Box
              className="more"
              w="20px"
              h="20px"
              position="absolute"
              variant="ghost"
              backgroundColor="unset"
              top={0}
              right={0}
              opacity={0}
              onClick={() => clickTile(idx, tile)}
            >
              <AiOutlineMore size={20} />
            </Box>
          </Tile>
        ))}
        {len < 10 ? (
          <Box
            boxSize={112}
            p={4}
            textAlign="center"
            position="relative"
            borderRadius="lg"
            css={tileCss}
            onClick={() => clickTile(undefined, { title: "", url: "" })}
          >
            <Link>
              <Flex
                mx="auto"
                boxSize="48px"
                backgroundColor="gray.300"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
              >
                <GrAdd size={24} />
              </Flex>
              <Text mt={3} fontSize={12}>
                添加快捷方式
              </Text>
            </Link>
          </Box>
        ) : (
          ""
        )}
      </Flex>
      {isOpen ? (
        <AddOrUpdateTile
          isEdit={isEdit}
          idx={idx}
          editTile={editTile}
          addTile={addTile}
          removeTile={removeTile}
          tile={tile}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      ) : (
        ""
      )}
    </Box>
  );
}
