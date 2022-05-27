import './singlePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlepostWrapper">
        <img src="https://www.datocms-assets.com/46272/1633199491-1633199490440.jpg?fit=max&fm=jpg&w=1000" alt="" className="singlepostImg" />

       <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet .

       <div className="singlePostEdit">

       <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
       <i className="singlePostIcon fa-regular fa-trash-can"></i>
       </div>
       </h1>

       <div className="singlePostInfo">
         <span className='singlePostAuthor'>Author: <b>Bhavesh</b></span>
         <span className='singlePostDate'>1 hour ago</span>
       </div>
       <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad cum neque quibusdam natus magnam enim, dicta accusamus eum at architecto excepturi ratione assumenda, quo rerum ut tenetur quos? Qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam, dignissimos asperiores autem nihil hic facilis minima illum, iste vero ullam quisquam magni, optio commodi perferendis placeat. Quod, quae! Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo ad eligendi, nihil culpa debitis impedit eos qui minima soluta magnam facilis molestiae tenetur, vitae nemo natus! Animi, harum dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id eligendi ut blanditiis consequatur itaque doloribus. Perspiciatis cum officiis odio tempora pariatur unde magni doloribus eligendi rerum, ipsa placeat corrupti voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum nulla quibusdam eligendi, doloremque laborum atque necessitatibus quam veritatis voluptas deleniti quod voluptatem recusandae quia eaque dignissimos perferendis quos? Quis?</p>
      </div>
    </div>
  )
}

export default SinglePost