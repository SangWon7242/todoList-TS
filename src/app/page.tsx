"use client";
import { useState } from "react";

// NumberRecordForm 컴포넌트
interface NumberRecordFormProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  recordedNumber: number[];
  setRecordedNumber: React.Dispatch<React.SetStateAction<number[]>>;
}

const NumberRecordForm: React.FC<NumberRecordFormProps> = ({
  count,
  setCount,
  recordedNumber,
  setRecordedNumber,
}) => {
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>증가</button>
        &nbsp;
        <button onClick={() => setCount(count - 1)}>감소</button>
        <br />
        <button
          onClick={() => {
            if (count == 0) return;
            setRecordedNumber([...recordedNumber, count]);
          }}
        >
          기록
        </button>
        &nbsp;
        <button
          onClick={() => {
            setCount(0);
            setRecordedNumber([]);
          }}
        >
          초기화
        </button>
      </div>
    </>
  );
};

// NumberRecordListProps 컴포넌트
interface NumberRecordListProps {
  recordedNumber: number[];
  setRecordedNumber: React.Dispatch<React.SetStateAction<number[]>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  modifiedNumber: number;
  setModifiedNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NumberRecordList: React.FC<NumberRecordListProps> = ({
  recordedNumber,
  setRecordedNumber,
  editMode,
  setEditMode,
  modifiedNumber,
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
                  <li key={index}>
                    {editMode ? (
                      <>
                        <input
                          type="number"
                          placeholder="숫자 입력"
                          onChange={(e) =>
                            setModifiedNumber(Number(e.target.value))
                          }
                        />
                        <button>수정</button>
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
  const [editMode, setEditMode] = useState<boolean>(false);
  const [modifiedNumber, setModifiedNumber] = useState<number>(0);

  return (
    <>
      <NumberRecordForm
        count={count}
        setCount={setCount}
        recordedNumber={recordedNumber}
        setRecordedNumber={setRecordedNumber}
      />
      <NumberRecordList
        recordedNumber={recordedNumber}
        setRecordedNumber={setRecordedNumber}
        editMode={editMode}
        setEditMode={setEditMode}
        modifiedNumber={modifiedNumber}
        setModifiedNumber={setModifiedNumber}
      />
    </>
  );
}
