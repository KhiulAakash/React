import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">
            <img src="https://s3-alpha-sig.figma.com/img/5f58/2a30/fd63de4356dc476c037adbb202ffa6fe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qs5SsdO8WP63OJ-o39lP1nmeAYdtmeZYdTj2FnACSSY3TzTmRecUOcI4YGGvgdPkEBiioV~wV6F6HmjChDreawPfGknRvwVxnh6--78oFDpqksrNsg~bIOKe1XAcCutH8DcSW-MDO~zbf4TOaFAd9Y2V~Qj3pqSGkIuaerPmdsSKQXmtnHlWtNVyNZ4Vy4~DpX~egECbcTCYtphF4ZKb6nCo4noS-rScJpxgi-lFDm8fMVW3qb5TdzG4ki3Gx9tM9x~oVjsXiqlA-xzmXC64C37K8DW8VZ6N0E2uqFjSH7WGhpUTHQ5861vHK46xumuVCidbPvwiBuBOCLBCfzDWOA__" alt="" />
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
