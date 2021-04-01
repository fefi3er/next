import React, { useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

const inputCss = css`
  border: 1px solid #b1b1b1;
  width: 100px;
`;

export default function AddOrUpdateTile({
  isEdit,
  idx,
  isOpen,
  addTile,
  editTile,
  removeTile,
  onClose,
  tile,
}) {
  // export default function AddOrUpdateTile() {
  // const [detail, setDetail] = useState(tile)
  const { title, url } = tile;
  const [tileTitle, setTitle] = useState(title);
  const [tileUrl, setUrl] = useState(url);
  function handlerTile() {
    if (isEdit) {
      editTile(idx, { title: tileTitle, url: tileUrl });
    } else {
      addTile({ title: tileTitle, url: tileUrl });
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEdit ? "编辑快捷方式" : "添加快捷方式"}</ModalHeader>
          <ModalBody>
            <FormControl id="title">
              <FormLabel>名称</FormLabel>
              <Input
                value={tileTitle}
                onChange={(e) => setTitle(e.target.value)}
                type="title"
              />
            </FormControl>
            <FormControl id="url">
              <FormLabel>网址</FormLabel>
              <Input
                value={tileUrl}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={() => removeTile(idx)}
              disabled={!isEdit}
            >
              删除
            </Button>
            <Button variant="ghost" mr={3} onClick={onClose}>
              取消
            </Button>
            <Button
              onClick={handlerTile}
              variant="ghost"
              disabled={!tileTitle && !tileUrl}
            >
              完成
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
