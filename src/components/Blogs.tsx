import BlogCard from "./ui/BlogCard";
import SectionTitle from "./ui/SectionTitle";

const Blogs = () => {
  return (
    <section className="view-container my-24">
      <SectionTitle badges={["Privacy", "Security", "CTFs"]}>
        Some noteworthy blogs
      </SectionTitle>
      <div className="">
        <BlogCard slug="https://medium.com/@notsooshariff/a-beginners-handbook-to-online-privacy-and-defunding-evil-corporations-3efa64908ba7">
        A Beginner&apos;s Handbook to Online Privacy and Defunding Evil Corporations 
        </BlogCard>
        <BlogCard slug="https://medium.com/@notsooshariff/the-footprinting-reconnaissance-bible-a-detailed-guide-for-ceh-v12-addda3d5f570">
        The Footprinting and Reconnaisance Bible
        </BlogCard>
        <BlogCard slug="https://medium.com/@notsooshariff">See all blogs</BlogCard>
      </div>
    </section>
  );
};

export default Blogs;
