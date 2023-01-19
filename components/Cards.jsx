import styled from 'styled-components'
import Image from 'next/image'

export default function Cards({ title, items, urlPrefix }) {
  return (
    <div length={items.length}>
      <h2>{title}</h2>

      <div className='cards'>
        {items.map((item, index) => (
          <div key={index} className='card'>
            <div className='img'>
              <Image
                width={128}
                height={128}
                alt={item.title}
                src={urlPrefix + item.img}
                className='shadow'
              />
              <Image width={256} height={256} alt={item.title} src={urlPrefix + item.img} />
            </div>
            <span>
              <h3>{item.title}</h3>
              {item.p && <p>{item.p}</p>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
