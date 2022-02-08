const Book = (props) => {
  const { img, title, author } = props;
  return (
    <div className="small-components">
      <h4>{title}</h4>
      <img src={img} alt="" />
      <p>Author : {author}</p>
    </div>
  );
};

export default Book;
