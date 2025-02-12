"use client"

import { formatNumberWithComma } from "@/src/utils";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ProgressBarProps = {
    percentage: number
}

const ProgressBar = ({percentage} : ProgressBarProps) => {
  return (
    <div className="flex justify-center p-10">
        <CircularProgressbar 
            styles={buildStyles({
                pathColor: percentage >= 100 ? '#DC2626' : '#F59E0B',
                trailColor: '#E1E1E1',
                textColor: percentage >= 100 ? '#DC2626' : '#F59E0B',
                textSize: 8,
            })}
            text={`${formatNumberWithComma(percentage)} % gastado`}
            value={percentage}
        />
    </div>
  )
}

export default ProgressBar;