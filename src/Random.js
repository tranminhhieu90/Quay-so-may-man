import React, { useState, useEffect } from 'react';
import audioUrl from '../src/assest/xoso.mp3';
import audioWinUrl from '../src/assest/chienthang.mp3';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
  },
};

function NumberAnimation(props) {
  return (
    <div id="counter" className="animated">
      <ul className={`digits luckie ${props.subClass}`}>
        <li> 0 </li>
        <li> 1 </li>
        <li> 2 </li>
        <li> 3 </li>
        <li> 4 </li>
        <li> 5 </li>
        <li> 6 </li>
        <li> 7 </li>
        <li> 8 </li>
        <li> 9 </li>
      </ul>
  </div> 
  )
};
      
function Random(props) {
  const { getNumberReward, listNumber } = props;
  console.log('listNumber',listNumber)
  const [total, setTotal] = useState(0)
  const [resultNumber, setResultNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [showFirework, setShowFirework] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const audioSoxo = new Audio(audioUrl)
  const audioWin = new Audio(audioWinUrl)
  useEffect(() => {
    audioSoxo.addEventListener('ended', () => setPlayAudio(false));
    audioWin.addEventListener('ended', () => setPlayAudio(false));
    return () => {
      audioSoxo.removeEventListener('ended', () => setPlayAudio(false))  
      audioWin.removeEventListener('ended', () => setPlayAudio(false))  
    }
  }, [])
  const handleClick = () => {
    if (listNumber.length >= 5) return;
    if (loading) return;
    setShowFirework(false)
    setPlayAudio(true)
    if (!playAudio) {
      audioSoxo.play()
    }
    const result = Math.ceil(Math.random() * total);
    const convertResult = `00${result}`
    const finalResult = convertResult.substring(convertResult.length - 3);
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        audioSoxo.pause()
        audioWin.play()
        setPlayAudio(false)
        if (!listNumber.includes(finalResult)) {
          setResultNumber(finalResult)
          setShowFirework(true)
          getNumberReward(finalResult)
        } else {
          setIsOpen(true);
        }
      }, 38000)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='random_number'>
      <div style={{display: 'flex', justifyContent: 'end', marginRight: 20}}>
        <div className='logo'></div>
      </div>
      <h3>Tổng Số Phiếu</h3>
      <input
        style={{ marginBottom: 40, height: 30 }}
        type="number"
        value={total}
        onChange={(e) => {
         setTotal(e.target.value)
      }}/>
      <div className='bg'>
        {showFirework && (
          <div className="pyro"><div className="before"></div><div className="after"></div></div>
        )}
     
        <h2>Vòng quay may mắn</h2>
        <div className='result'>
          <div className='result_number'>{ loading? <NumberAnimation subClass="delay_0"/> : resultNumber ? resultNumber.split('')[0]: '0'}</div>
          <div className='result_number'>{loading ? <NumberAnimation subClass="delay_1"/> : resultNumber ? resultNumber.split('')[1]: '0'}</div>
          <div className='result_number'>{ loading? <NumberAnimation subClass="delay_2"/> : resultNumber ? resultNumber.split('')[2]: '0'}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
          {/* <div className='button' onClick={() => {
            setResultNumber('')
            setShowFirework(false)
          }} style={{background: 'gray'}}>Reset</div> */}
          <div className='button' onClick={handleClick}>Quay Thưởng</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div className='close-btn' onClick={closeModal}><div>X</div></div>
        <div className='modal-content'>
          <div className='modal-content-text'>
          <p>Lá thăm {resultNumber} đã có giải </p>
          <p>Vui Lòng Quay Lại </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Random;