import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import moment from 'moment'

export default function Timmer() {
  const [date, setDate]: [date: any, setDate: any] = useState(undefined)

  useEffect(() => {
    update()
    setInterval(update, 1000)
  }, [date])

  const update = () => {
    let datetime = moment(new Date())
    setDate(datetime.format('dddd, MMMM Do YYYY, h:mm:ss a'))
  }

  return <h1 className={styles.title}>{date}</h1>
}
