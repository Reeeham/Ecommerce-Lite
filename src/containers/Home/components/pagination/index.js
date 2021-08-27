
import { Link } from 'react-router-dom'
import './index.scss'

export const Pagination = () => {
  return (
    <div className="pagination-wrapper">
      <ul className="pagination modal-1">
        <li><Link href="#" className="prev">&laquo;</Link></li>
        <li><Link href="#" className="active">1</Link></li>
        <li> <Link href="#">2</Link></li>
        <li> <Link href="#">3</Link></li>
        <li> <Link href="#">4</Link></li>
        <li> <Link href="#">5</Link></li>
        <li> <Link href="#">6</Link></li>
        <li> <Link href="#">7</Link></li>
        <li> <Link href="#">8</Link></li>
        <li> <Link href="#">9</Link></li>
        <li><Link href="#" class="next">&raquo;</Link></li>
      </ul>
    </div>
  )
}