import Image from "next/image";

const Cover = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div className="mil-p-0-160 mil-mt180">
      <div className="container">
        <h1 className="mil-display3 mil-mb130 w-100 text-center">{title}</h1>

        <div className="row mil-jcc mil-aic">
          <div className="col-lg-12 mil-mb160">
            <div className="mil-project-img mil-land">
              <Image
                fill
                priority
                src={imageUrl}
                alt="project"
                className="mil-scale-img"
                data-value-1="1.15"
                data-value-2="1"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <p className="mil-text-xl mil-m1 mil-mb60">
              In today&apos;s visually driven world, creating eye-catching
              visuals is essential. Fortunately, you don&apos;t need to be a
              graphic designer to achieve stunning results with minimal effort.
              Here&apos;s how you can do it.
            </p>

            <p className="mil-text-md mil-mb90">
              Start by using online design tools like Canva and Crello, which
              offer a wide range of customizable templates for social media
              posts, presentations, and more. These tools make it easy to create
              polished visuals without any design expertise. Additionally,
              websites like Unsplash and Pexels provide high-quality free stock
              photos, and platforms like Icons8 offer free icons and
              illustrations to enhance your designs.
            </p>

            <p className="mil-text-md mil-mb30">
              Keep your designs simple and uncluttered. Focus on a single
              message and use white space effectively. Stick to a consistent
              color scheme that aligns with your brand; tools like Coolors can
              help generate harmonious palettes. Limit your typography to two or
              three fonts for readability and visual appeal. Google Fonts offers
              a variety of free fonts that can enhance your designs.
            </p>

            <p className="mil-text-md mil-mb90">
              Optimize your visuals for different platforms by using the correct
              dimensions and formats. Ensure your content is mobile-friendly
              with clear, legible text and fast-loading images. Automation can
              also save time: tools like Photoshop&apos;s batch processing
              feature allow you to apply edits to multiple images at once.
              Scheduling tools like Buffer or Hootsuite help you plan posts in
              advance, ensuring consistent posting without extra effort.
            </p>

            <h3 className="mil-head4 mil-mb30">Conclusion</h3>

            <p className="mil-text-md">
              By leveraging online tools, mastering basic design principles,
              optimizing for various platforms, and automating tasks, you can
              create professional-quality visuals with minimal effort. Implement
              these tips today and watch your content stand out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
