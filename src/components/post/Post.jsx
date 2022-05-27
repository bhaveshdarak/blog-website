import './post.css'

function Post() {
  return (
    <div className='post'>
     <img className='postImg' src="https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png" alt="" />

     <div className="postInfo">
         <div className="postCats">
             <span className='postCat'>Music</span>
             <span className='postCat'>Life</span>
         </div>
         <span className='postTitle'>
             Lorem ipsum dolor sit.
         </span>
         <hr />
         <span className='postDate'>1 hour ago</span>
     </div>
     <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos nulla asperiores labore, officia ex illum, consectetur praesentium tenetur atque, explicabo a! Magnam accusamus exercitationem aperiam doloremque aliquam deserunt rem!</p>
   </div>
  )
}

export default Post