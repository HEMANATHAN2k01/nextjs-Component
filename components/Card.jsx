import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import pic from "../assets/A1.jpg";

const CardLayout = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((item, index) => (
        <Card key={index} className="py-4 border w-fill rounded gap-2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{item.Username}</p>
            <small className="text-default-500">{item.Email}</small>
            <h4 className="font-bold text-large">{item.Phone}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image src={item.Pics} alt={item.title} className="w-20" />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CardLayout;
