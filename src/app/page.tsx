"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [recordedNumber, setRecordedNumber] = useState<number[]>([]);

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
                    <span>{`${index + 1}번 : ${number}`}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
}
