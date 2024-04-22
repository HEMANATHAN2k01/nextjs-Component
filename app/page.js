import CardLayout from "@/components/Card";
import Data from "../assets/userdata.json";
import CardDivider from "@/components/CardDivider";

export default function Home() {
  const reportData = Data.map((e, i) => ({
    Username: e.username,
    Email: e.email,
    Phone: e.phone,
    CompanyName: e.company.name,
    Pics: e.image,
  }));

  return (
    <div>
      {/* <CardLayout data={reportData} /> */}
      <CardDivider data={reportData} />
    </div>
  );
}
