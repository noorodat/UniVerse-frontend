import RenderItemConditionally from "@/components/render/RenderItemConditionally";
const Social = ({ github, linkedIn }) => {
  const socialContent = [

    { id: 1, icon: "fa-github", link: github },
    { id: 2, icon: "fa-linkedin-in", link: linkedIn },
  ];
  return (
    <div className="social-links">
      {socialContent?.map((item) => (
        <RenderItemConditionally key={item.id} item={item.link} >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
          >
            <i className={`fab ${item.icon}`}></i>
          </a>
        </RenderItemConditionally>
      ))}
    </div>
  );
};

export default Social;
