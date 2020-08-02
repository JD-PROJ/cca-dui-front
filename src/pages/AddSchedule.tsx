/** @jsx jsx */
import { jsx } from '@emotion/core';

import {
  Button,
  FullSizeContainer,
  Input,
  InputContainer,
  Label,
} from '@/styles';

const AddSchedule = () => {
  return (
    <FullSizeContainer>
      <InputContainer>
        <Input placeholder="이름"></Input>
        <Label>이름</Label>
      </InputContainer>
      <Button>확인</Button>
    </FullSizeContainer>
  );
};

export default AddSchedule;
