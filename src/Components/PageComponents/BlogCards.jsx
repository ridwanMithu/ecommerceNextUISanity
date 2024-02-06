import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";


export default function BlogCards({blogInform}) {

  // [_type=="blogSection"]{blogTopic, blogCategory, publishingDate,blogImage,_id}

  return (
    <Card className="p-4 my-4">
      <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
        <p className="font-bold uppercase text-tiny">{blogInform.blogTopic}</p>
        <small className="text-default-500">#{blogInform.blogCategory}</small>
        <h4 className="font-bold">{blogInform.blogAuthor}</h4>
      </CardHeader>
      <CardBody className="py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={blogInform.blogImage}
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-3">
        <Link to={`/blog/${blogInform._id}`}>
        <Button color="danger"> 
      Read More
    </Button> 
    {/* we can disable a button if there is no value for the button by simply adding disabled={true} like:<Button disabled={boginform.blogImage?false:true} color="danger"></Button> */}
        </Link>
      </div>
    </Card>
    
  );
}
