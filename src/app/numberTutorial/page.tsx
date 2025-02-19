"use client";

import { NextPage } from "next";
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
      <div className="site-wrap flex items-center justify-center h-screen">
        <div className="inner w-[400px] h-[400px] shadow-2xl flex flex-col">
          <div className="content-header py-6 flex items-center justify-center text-2xl font-bold border-b-[1px]">
            <h1>숫자 카운터</h1>
          </div>
          <div className="content-body flex flex-col flex-grow">
            <div className="flex items-center justify-center flex-grow">
              <span className="count-number text-[4rem] font-bold text-blue-500">
                {count}
              </span>
            </div>
            <div className="btn-group flex gap-x-3 justify-center py-6 border-t-[1px]">
              <button className="btn btn-primary" onClick={increaseCount}>
                증가
              </button>
              <button className="btn btn-secondary" onClick={decreaseCount}>
                감소
              </button>
              <button className="btn btn-accent" onClick={recordNumber}>
                기록
              </button>
              <button className="btn" onClick={resetCount}>
                초기화
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// NumberListItem 컴포넌트
interface NumberListItemProps {
  index: number;
  number: number;
  modifyNumber: (index: Number) => void;
  deleteNumber: (index: Number) => void;
  setModifiedNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NumberListItem: React.FC<NumberListItemProps> = ({
  index,
  number,
  modifyNumber,
  deleteNumber,
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
            <button onClick={() => deleteNumber(index)}>삭제</button>
          </>
        )}
      </li>
    </>
  );
};

// NumberRecordListProps 컴포넌트
interface NumberRecordListProps {
  recordedNumber: number[];
  modifyNumber: (index: Number) => void;
  deleteNumber: (index: Number) => void;
  setModifiedNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NumberRecordList: React.FC<NumberRecordListProps> = ({
  recordedNumber,
  modifyNumber,
  deleteNumber,
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
                    deleteNumber={deleteNumber}
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

const NumberTutorial: NextPage = () => {
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

  const deleteNumber = (index: Number) => {
    const number = recordedNumber.filter((_, _index) => _index != index);
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
        modifyNumber={modifyNumber}
        deleteNumber={deleteNumber}
        setModifiedNumber={setModifiedNumber}
      />
    </>
  );
};

export default NumberTutorial;
