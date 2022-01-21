import React from 'react';

function RewardList(props) {
  const { listNumber } = props;
  return (
    <div className='random_list'>
      <h2 className='title'>
        DANH SÁCH TRÚNG THƯỞNG
      </h2>
      <div className='list'>
        {/* <div className='reward-item special'> */}
        <div className='reward-item2 special'>
          <p>Giải Đặc Biệt:</p><p>{listNumber?.[4] || '' }</p>
        </div>
        <div className='reward-item' style={{fontSize: 24}}>
          <p>Giải Nhất: </p><p>{listNumber?.[3] || '' }</p>
        </div>
        <div  className='reward-item' style={{fontSize: 22}}>
          <p>Giải Nhì: </p><p>{listNumber?.[2] || '' }</p>
        </div>
        <div  className='reward-item' style={{fontSize: 20}}>
          <p>Giải Ba: </p><p>{listNumber?.[1] || '' }</p>
        </div>
        <div  className='reward-item' style={{fontSize: 18}}>
          <p>Giải Tư: </p><p>{listNumber?.[0] || '' }</p>
        </div>
      </div>
    </div>
  );
}

export default RewardList;