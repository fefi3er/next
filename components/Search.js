import { useState } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Image
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

function useInput(initState) {
  const [value, setValue] = useState(initState || "");
  const onChange = (event) => setValue(event.target.value);
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      window.location.href = `https://www.google.com/search?q=${event.target.value}&oq=&aqs=chrome.0.69i59i450.282306703j0j15&sourceid=chrome&ie=UTF-8`
    }
  };
  return {
    value,
    onChange,
    onKeyUp,
  };
}

export default function Search() {
  const searchStr = useInput("");
  return (
    <Box mx="auto" mt={2} w={561} h="44px">
      <InputGroup>
        <InputLeftElement children={<AiOutlineSearch color="gray.100" />} />
        <Input mx="auto" borderRadius="full" boxShadow="lg" placeholder="在 Google 上搜索，或者输入一个网址" {...searchStr} />
        <InputRightElement children={<Image src="googlemic_clr_24px.svg"/>}/>
      </InputGroup>
    </Box>
  );
}
