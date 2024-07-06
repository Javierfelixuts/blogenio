import Image from "next/image"
import moment from "moment/moment"
import 'moment/locale/es';

const CardPost = ({post}) => {
    moment.locale('es')
    const formatedDate = moment(post.date).format("DD MMMM YYYY");  
    return (
        <>
        <div  className='hover:scale-105 transition-transform p-2 shadow-md rounded-md shadow-slate-300 border '>
              <Image 
                src={post.jetpack_featured_media_url}
                width={400}
                height={400}
                alt="noticia" 
                className='w-full h-[200px] aspect-[8/4] object-cover rounded-lg'
                />
              <h1 className='my-2 anton-regular text-md text-start break-words break-all'>{(post.title.rendered.length > 25 ? post.title.rendered.toUpperCase().slice(0, 50) : post.excerpt.rendered )}...</h1>
              <p className="hover:underline underline-offset-1 text-[10px] mb-2">Ver Más</p>

              {/* <div className='text-gray-400 text-sm m-0 break-words break-all' dangerouslySetInnerHTML={{ __html:  (post.excerpt.rendered.length > 50 ? post.excerpt.rendered.slice(0, 50) + '...' : post.excerpt.rendered )}}></div> */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Image className="w-5 h-5 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" width={10} height={10} alt="author" />
                    <span className="inline-block text-[10px] text-slate-500 mx-2">By Javier Félix</span>
                </div>
                <span className="text-[10px] text-slate-500 flex"> <Image className="mr-1" src="clock.svg" width={10} height={10} alt="⌚"/>{formatedDate}</span>
              </div>
            </div>
        </>
    )
}

export default CardPost