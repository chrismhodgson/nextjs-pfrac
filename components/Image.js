import NextImage from 'next/image'

//https://nextjs.org/docs/api-reference/next/image
// eslint-disable-next-line jsx-a11y/alt-text
// const Image = ({ ...rest }) => <NextImage {...rest} />

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Image = (props) => {
  return (
    <NextImage
      loader={myLoader}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}

export default Image
