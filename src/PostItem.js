import sytles from "./PostItem.module.css"

const PostItem = (props) => {
  const { title, date, url } = props.post;
  return (
    <div className={sytles.container}>
      <a href={url}>
        <span className={sytles.date}>{date}</span>
        <span className={sytles.title}>{title}</span>
      </a>
    </div>
  )
}

export default PostItem