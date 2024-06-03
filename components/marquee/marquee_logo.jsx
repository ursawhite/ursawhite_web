import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeLogo() {
  const image = [
    {
      src: "/images/logo/adobeexperiencemanager.png",
      alt: "adobeexperiencemanager Logo",
    },
    {
      src: "/images/logo/ant-design.png",
      alt: "ant-design Logo",
    },
    {
      src: "/images/logo/aws.png",
      alt: "aws Logo",
    },
    {
      src: "/images/logo/bootstrap.png",
      alt: "bootstrap Logo",
    },
    {
      src: "/images/logo/chakra-ui.png",
      alt: "chakra-ui Logo",
    },
    {
      src: "/images/logo/circleci.png",
      alt: "circleci Logo",
    },
    {
      src: "/images/logo/contentful.png",
      alt: "contentful Logo",
    },
    {
      src: "/images/logo/coreui.png",
      alt: "coreui Logo",
    },
    {
      src: "/images/logo/css.png",
      alt: "css Logo",
    },
    {
      src: "/images/logo/django.png",
      alt: "django Logo",
    },
    {
      src: "/images/logo/docker.png",
      alt: "docker Logo",
    },
    {
      src: "/images/logo/drupal.png",
      alt: "drupal Logo",
    },
    {
      src: "/images/logo/expressjs.png",
      alt: "expressjs Logo",
    },
    {
      src: "/images/logo/firebase.png",
      alt: "firebase Logo",
    },
    {
      src: "/images/logo/flask.png",
      alt: "flask Logo",
    },
    {
      src: "/images/logo/framer-motion.png",
      alt: "framer-motion Logo",
    },
    {
      src: "/images/logo/ghost.png",
      alt: "ghost Logo",
    },
    {
      src: "/images/logo/git.png",
      alt: "git Logo",
    },
    {
      src: "/images/logo/gitlab.png",
      alt: "gitlab Logo",
    },
    {
      src: "/images/logo/golang.png",
      alt: "golang Logo",
    },
    {
      src: "/images/logo/gsap.png",
      alt: "gsap Logo",
    },
    {
      src: "/images/logo/html.png",
      alt: "html Logo",
    },
    {
      src: "/images/logo/hubspot.png",
      alt: "hubspot Logo",
    },
    {
      src: "/images/logo/java.png",
      alt: "java Logo",
    },
    {
      src: "/images/logo/jenkins.png",
      alt: "jenkins Logo",
    },
    {
      src: "/images/logo/joomla.png",
      alt: "joomla Logo",
    },
    {
      src: "/images/logo/js.png",
      alt: "js Logo",
    },
    {
      src: "/images/logo/kentico.png",
      alt: "kentico Logo",
    },
    {
      src: "/images/logo/kubernetes.png",
      alt: "kubernetes Logo",
    },
    {
      src: "/images/logo/laravel.png",
      alt: "laravel Logo",
    },
    {
      src: "/images/logo/Magento.png",
      alt: "Magento Logo",
    },
    {
      src: "/images/logo/mantime-ui.png",
      alt: "mantime-ui Logo",
    },
    {
      src: "/images/logo/materialui.png",
      alt: "materialui Logo",
    },
    {
      src: "/images/logo/mongodb.png",
      alt: "mongodb Logo",
    },
    {
      src: "/images/logo/mysql.png",
      alt: "mysql Logo",
    },
    {
      src: "/images/logo/nestjs.png",
      alt: "nestjs Logo",
    },
    {
      src: "/images/logo/nextjs.png",
      alt: "nextjs Logo",
    },
    {
      src: "/images/logo/next-ui.png",
      alt: "next-ui Logo",
    },
    {
      src: "/images/logo/nodejs.png",
      alt: "nodejs Logo",
    },
    {
      src: "/images/logo/php.png",
      alt: "php Logo",
    },
    {
      src: "/images/logo/postgresql.png",
      alt: "postgresql Logo",
    },
    {
      src: "/images/logo/react.png",
      alt: "react Logo",
    },
    {
      src: "/images/logo/react-spring.png",
      alt: "react-spring Logo",
    },
    {
      src: "/images/logo/react-suite.png",
      alt: "react-suite Logo",
    },
    {
      src: "/images/logo/redis.png",
      alt: "redis Logo",
    },
    {
      src: "/images/logo/ruby.png",
      alt: "ruby Logo",
    },
    {
      src: "/images/logo/semantic-ui.png",
      alt: "semantic-ui Logo",
    },
    {
      src: "/images/logo/shadcn.png",
      alt: "shadcn Logo",
    },
    {
      src: "/images/logo/shopify.png",
      alt: "shopify Logo",
    },
    {
      src: "/images/logo/spring-boot.png",
      alt: "spring-boot Logo",
    },
    {
      src: "/images/logo/squarespace.png",
      alt: "squarespace Logo",
    },
    {
      src: "/images/logo/storybook.png",
      alt: "storybook Logo",
    },
    {
      src: "/images/logo/strapi.png",
      alt: "strapi Logo",
    },
    {
      src: "/images/logo/tailwind.png",
      alt: "tailwind Logo",
    },
    {
      src: "/images/logo/travis.png",
      alt: "travis Logo",
    },
    {
      src: "/images/logo/typescript.png",
      alt: "typescript Logo",
    },
    {
      src: "/images/logo/typo3.png",
      alt: "typo3 Logo",
    },
    {
      src: "/images/logo/umbraco.png",
      alt: "umbraco Logo",
    },
    {
      src: "/images/logo/vue.png",
      alt: "vue Logo",
    },
    {
      src: "/images/logo/wix.png",
      alt: "wix Logo",
    },
    {
      src: "/images/logo/wordpress.png",
      alt: "wordpress Logo",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <Marquee speed={100} autoFill={true} pauseOnHover={true}>
          {image.slice(0, 30).map((item, index) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={index}>
              <Image
                src={item.src}
                width={100}
                height={100}
                sizes={
                  "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                }
                placeholder="blur"
                blurDataURL={item.src}
                alt={item.alt}
                className="img-fluid m-3"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <Marquee
          speed={100}
          autoFill={true}
          direction={"right"}
          pauseOnHover={true}
        >
          {image.slice(31, 61).map((item, index) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 " key={index}>
              <Image
                src={item.src}
                width={100}
                height={100}
                sizes={
                  "(max-width: 768px) 100vw,(max-width: 1224px) 50vw, 30vw"
                }
                placeholder="blur"
                blurDataURL={item.src}
                alt={item.alt}
                className="img-fluid m-3"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeLogo;
