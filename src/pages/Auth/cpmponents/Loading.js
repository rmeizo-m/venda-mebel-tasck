import { memo } from "react"

const Loading = ({name= "Владимир"}) => {
  return(
   <div className="loading">
     <div className="loading-title">Добрый день, <span className="loading-title__name">{name}</span></div>
     <div>
        <svg className="progress-ring" style={{width:'64px', height:'64px'}}>
          <circle className="progres-ring__circle" stroke="#fff" strokeWidth="2px" cx="32" cy="32" r="24" fill="transparent"/>
        </svg>
     </div>
  </div> 
  )
  
}

export default memo(Loading);