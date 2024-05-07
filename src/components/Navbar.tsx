
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  const now=new Date();
  const time=now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  const date=(new Intl.DateTimeFormat('en-IN', { dateStyle:'full'})).format(now)
  return (
   
    <div className="header">
    <nav>
    <label>
      <Image
      alt='image'
    src='/image/gmeet.png'
    width={152}
    height={22}
    />
    </label>
    
      <ul>
        <li><a href="#"  suppressHydrationWarning>{time} . {date}</a>
        </li>
        <li>
          <a href=""><Image
      alt='image'
    src='/icon/question.png'
    width={25}
    height={25}
    /></a>
    <a href=""><Image
    alt='image'
  src='/icon/problem.png'
  width={25}
  height={25}
  />
  </a>
  <a href=""><Image
  alt='image'
src='/icon/setting.png'
width={25}
height={25}
/></a>
</li>
        <li><a href=""><Image
  alt='image'
src='/icon/menu.png'

width={25}
height={25}
/></a>
<a href=""><Image
  alt='image'
src='/icon/profile.png'
width={35}
height={35}
/></a>
</li>
      </ul>
    </nav>
  </div>

  )
}


  
