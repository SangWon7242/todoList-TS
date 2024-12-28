"use client";
import { useState } from "react";

// NumberRecordForm 컴포넌트
interface NumberRecordFormProps {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
  recordNumber: () => void;
}

const NumberRecordForm: React.FC<NumberRecordFormProps> = ({
  count,
  increaseCount,
  decreaseCount,
  resetCount,
  recordNumber,
}) => {
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>증가</button>
        &nbsp;
        <button onClick={decreaseCount}>감소</button>
        <br />
        <button onClick={recordNumber}>기록</button>
        &nbsp;
        <button onClick={resetCount}>초기화</button>
      </div>
    </>
  );
};

// NumberListItem 컴포넌트
interface NumberListItemProps {
  index: number;
  number: number;
  modifyNumber: (index: Number) => void;
  setModifiedNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NumberListItem: React.FC<NumberListItemProps> = ({
  index,
  number,
  modifyNumber,
  setModifiedNumber,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <>
      <li>
        {editMode ? (
          <>
            <input
              type="number"
              placeholder="숫자 입력"
              onChange={(e) => setModifiedNumber(Number(e.target.value))}
            />
            <button
              onClick={() => {
                setEditMode(false);
                modifyNumber(index);
              }}
            >
              수정
            </button>
            &nbsp;
            <button onClick={() => setEditMode(false)}>취소</button>
          </>
        ) : (
          <>
            <span>{`${index + 1}번 : ${number}`}</span>
            &nbsp;
            <button onClick={() => setEditMode(true)}>수정</button>
            &nbsp;
            <button>삭제</button>
          </>
        )}
      </li>
    </>
  );
};

// NumberRecordListProps 컴포넌트
interface NumberRecordListProps {
  recordedNumber: number[];
  setRecordedNumber: React.Dispatch<React.SetStateAction<number[]>>;
  modifyNumber: (index: Number) => void;
  setModifiedNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NumberRecordList: React.FC<NumberRecordListProps> = ({
  recordedNumber,
  setRecordedNumber,
  modifyNumber,
  setModifiedNumber,
}) => {
  return (
    <>
      <div>
        {recordedNumber.length == 0 ? (
          <p>기록된 숫자가 없습니다.</p>
        ) : (
          <>
            <h2>숫자 기록</h2>
            <nav>
              <ul>
                {recordedNumber.map((number, index) => (
                  <NumberListItem
                    key={index}
                    number={number}
                    index={index}
                    modifyNumber={modifyNumber}
                    setModifiedNumber={setModifiedNumber}
                  />
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [recordedNumber, setRecordedNumber] = useState<number[]>([]);
  const [modifiedNumber, setModifiedNumber] = useState<number>(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
    setRecordedNumber([]);
  };

  const recordNumber = () => {
    if (count == 0) return;
    setRecordedNumber([...recordedNumber, count]);
  };

  const modifyNumber = (index: Number) => {
    const number = recordedNumber.map((number, _index) =>
      _index == index ? modifiedNumber : number
    );

    setRecordedNumber(number);
  };

  return (
    <>
      <NumberRecordForm
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        resetCount={resetCount}
        recordNumber={recordNumber}
      />
      <NumberRecordList
        recordedNumber={recordedNumber}
        setRecordedNumber={setRecordedNumber}
        modifyNumber={modifyNumber}
        setModifiedNumber={setModifiedNumber}
      />
    </>
  );
}
