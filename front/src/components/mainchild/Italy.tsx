import React, { startTransition, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { stageSubjectState } from '@/state/StageSubjectAtoms'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'
import { country } from '@/api/child'
import styles from './Italy.module.css'

const Italy: React.FC = () => {
  const [stageId, setStageId] = useRecoilState(stageSubjectState)
  const [stageOneAns, setStageOneAns] = useState(0);
  const [stageTwoAns, setStageTwoAns] = useState(0);
  const [stageThreeAns, setStageThreeAns] = useState(0);
  const [stageFourAns, setStageFourAns] = useState(0);
  const [stageFiveAns, setStageFiveAns] = useState(0);
  // 물음표 아이콘 클릭
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const closeDescription = () => {
    setShowDescription(false)
  }

  const navigate = useNavigate()
  useEffect(() => {
    const fetchItalyStage = async () => {
      try {
        const response = await country(3)
        setStageOneAns(response.data.data[0].answer);
        setStageTwoAns(response.data.data[1].answer);
        setStageThreeAns(response.data.data[2].answer);
        setStageFourAns(response.data.data[3].answer);
        setStageFiveAns(response.data.data[4].answer);
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchItalyStage();
  }, [])
  const stageStart = (Id: number) => {
    // 상태 업데이트 함수를 사용하여 stageId 상태를 변경
    setStageId(Id)
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate('/mainchild/stage/Italy')
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.italymap}></div>
      <div onClick={() => stageStart(1)} className={styles.stage1}>{stageOneAns}/10</div>
      <div onClick={()=>stageStart(2)} className={
          stageOneAns >= 7
            ? styles.active_stage2
            : styles.unactive_stage2
        }>{stageTwoAns}/10</div>
      <div onClick={()=>stageStart(3)} className={
          stageTwoAns >= 7
            ? styles.active_stage3
            : styles.unactive_stage3
        }>{stageThreeAns}/10</div>
      <div onClick={()=>stageStart(4)} className={
          stageThreeAns >= 7
            ? styles.active_stage4
            : styles.unactive_stage4
        }>{stageFourAns}/10</div>
      <div onClick={()=>stageStart(5)} className={
          stageFourAns >= 7
            ? styles.active_stage5
            : styles.unactive_stage5
        }>{stageFiveAns}/10</div>

      <div className={styles.fairyContainer}>
        <div className={styles.fairy}>
          {!showDescription && (
            <FontAwesomeIcon
              icon={faQuestion}
              className={styles.questionIcon}
              onClick={toggleDescription}
            />
          )}
        </div>
        {showDescription && (
          <div className={styles.description}>
            <button className={styles.closeButton} onClick={closeDescription}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>
              뭐? 연료를 달라고? 로마에선 로마법을 따라야지!
              <br />
              로마에 공짜는 없어! 문제를 맞춘다면 생각해볼게.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Italy
