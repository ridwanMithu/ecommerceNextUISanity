import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";

export default function BlogCards() {
  return (
    <Card className="py-4 my-4">
      <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
        <p className="font-bold uppercase text-tiny">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="py-2 overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/18448/SM826156.jpg"
          width={270}
        />
      </CardBody>
      <div className="flex justify-center gap-3">
    <Button color="danger">
      Read More
    </Button>
      </div>
    </Card>
    
  );
}
