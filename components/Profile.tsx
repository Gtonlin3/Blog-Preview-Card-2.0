import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <>
     <div className="user">
        <Image src={"/imagen-avatar.webp"} alt={""} width={40} height={40}/> 
        <b>Greg Hooper</b>
      </div>
    </>
  )
}

export default Profile;