'use client';

import { useState } from 'react';
import { InputField } from '../shared/ui/input';

export default function InputTest() {
  const [title, setTitle] = useState('');
  const [num, setNum] = useState('');
  return (
    <div>
      <div>인풋 테스트 페이지 입니다.</div>
      <InputField
        type="text"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        placeholder="할 일의 제목을 적어주세요."
      />
      <InputField
        type="number"
        value={num}
        onChange={(e: any) => setNum(e.target.value)}
        placeholder="금액을 적어주세요."
        className="mt-10"
      />
    </div>
  );
}
