import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title,image_url, details, _id} = news;
    return (
        <div className="  bg-base-100 shadow-xl my-4 p-3">
            <div className="">
                
                <p className="font-semibold text-xl">{title}</p>
            </div>
            <div className="flex justify-center">
            <img src={image_url}alt="Shoes" />
            </div>
            {
                details.length > 200 ? <p>{details.slice(0,200)} <Link 
                to={`/news/${_id}`}
                className="text-blue-500">Read more..</Link></p>
                : <p>{details}</p>
            }
        </div>
    );
};

export default NewsCard;