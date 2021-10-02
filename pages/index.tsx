import type { NextPage } from "next";
import css from "../styles/Home.module.css";
import ctx from "classnames";
import Image from "next/image";
import Head from "next/head";

import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

import { BsArrowRight } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { GrLocation } from "react-icons/gr";

import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Up Business</title>
      </Head>
      <div className={css.landingpage}>
        <div className={ctx(css.levelupbusiness, "container")}>
          <div
            style={{
              width: "20vw",
              height: "20vw",
              left: "-80px",
              top: "30%",
            }}
            className={css.ellipse}
          />
          <div className={css.content}>
            <div>
              <h1 className={css.title}>
                How to <span className={css.levelup}>level up</span>
              </h1>
              <h1 className={css.title}>your business</h1>
            </div>
            <p className={css.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
              potenti duis.
            </p>
            <div>
              <PrimaryButton>How we work</PrimaryButton>
              <SecondaryButton>
                <span className={css.letstalk}>
                  Let's talk <BsArrowRight />
                </span>
              </SecondaryButton>
            </div>
          </div>
          <div className={css.image}>
            <div className={ctx(css.ellipse, css.topright)} />
            <Image
              width={1000}
              height={700}
              src="/Build 1.svg"
              objectFit="cover"
            />
            <div className={ctx(css.ellipse, css.bottomleft)} />
          </div>
        </div>
        <div className={ctx(css.logobrands, "container")}>
          <span className={css.subtitle}>
            <FaChevronLeft />
            We are working with customers brands and startups
            <FaChevronRight />
          </span>
          <div className={css.logos}>
            <div>
              <Image src="/brand 1.svg" width={120} height={120} />
            </div>
            <div>
              <Image src="/brand 2.svg" width={120} height={120} />
            </div>
            <div>
              <Image src="/brand 3.svg" width={120} height={120} />
            </div>
            <div>
              <Image src="/brand 4.svg" width={120} height={120} />
            </div>
            <div>
              <Image src="/brand 5.svg" width={120} height={120} />
            </div>
          </div>
        </div>
        <div className={ctx(css.businessshop, "container")}>
          <div
            style={{
              width: "20vw",
              height: "20vw",
              left: "-80px",
              top: "10%",
            }}
            className={css.ellipse}
          />
          <div className={css.content}>
            <div>
              <span className={css.subtitle}>Portfolio Service</span>
              <h1 className={css.title}>We help design a ecommerce</h1>
              <h1 className={css.title}>business shop</h1>
            </div>
            <p className={css.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
              potenti duis.
            </p>
            <div>
              <div className={css.active}>
                <AiOutlinePlayCircle />
                <span>See live</span>
              </div>
              <div>
                <span>Case study</span>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <Image
              width={1000}
              height={700}
              src="/e-Commerce 1.svg"
              objectFit="cover"
            />
            <div
              style={{ width: "15vw", height: "15vw" }}
              className={ctx(css.ellipse, css.bottomright)}
            />
          </div>
        </div>
        <div className={ctx(css.webdesign, "container")}>
          <div className={css.content}>
            <div>
              <span className={css.subtitle}>Portfolio Service</span>
              <h1 className={css.title}>We design investment funds</h1>
              <h1 className={css.title}>website in Vietnam</h1>
            </div>
            <p className={css.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
              potenti duis.
            </p>
            <div>
              <div className={css.active}>
                <AiOutlinePlayCircle />
                <span>See live</span>
              </div>
              <div>
                <span>Case study</span>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <Image
              width={1000}
              height={700}
              src="/Finance 1.svg"
              objectFit="cover"
            />
            <div
              style={{ width: "15vw", height: "15vw", right: "220px" }}
              className={ctx(css.ellipse, css.topright)}
            />
          </div>
        </div>
        <div className={ctx(css.designmessages, "container")}>
          <div
            style={{
              width: "20vw",
              height: "20vw",
              left: "-80px",
              bottom: "10%",
            }}
            className={css.ellipse}
          />
          <div className={css.content}>
            <div>
              <span className={css.subtitle}>Portfolio Service</span>
              <h1 className={css.title}>We help design a messages</h1>
              <h1 className={css.title}>app for communication</h1>
            </div>
            <p className={css.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
              potenti duis.
            </p>
            <div>
              <div className={css.active}>
                <AiOutlinePlayCircle />
                <span>See live</span>
              </div>
              <div>
                <span>Case study</span>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <Image
              width={1000}
              height={700}
              src="/Messages 1.svg"
              objectFit="cover"
            />
            <div
              style={{ width: "15vw", height: "15vw" }}
              className={ctx(css.ellipse, css.topright)}
            />
          </div>
        </div>
        <div className={ctx(css.maintenancedesign, "container")}>
          <div className={css.content}>
            <div>
              <span className={css.subtitle}>Portfolio Service</span>
              <h1 className={css.title}>We help maintanence design</h1>
              <h1 className={css.title}>for customers</h1>
            </div>
            <p className={css.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
              potenti duis.
            </p>
            <div>
              <div className={css.active}>
                <AiOutlinePlayCircle />
                <span>See live</span>
              </div>
              <div>
                <span>Case study</span>
              </div>
            </div>
          </div>
          <div className={css.image}>
            <Image
              width={1000}
              height={700}
              src="/Service 1.svg"
              objectFit="cover"
            />
            <div
              style={{ width: "15vw", height: "15vw", right: "220px" }}
              className={ctx(css.ellipse, css.topright)}
            />
          </div>
        </div>
        <div className={ctx(css.services, "container")}>
          <div>
            <div className={css.title}>Our main services</div>
            <div className={css.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              in malesuada eget fames purus ligula luctus tellus. Habitant
              condimentum sit gravida praesent.
            </div>
          </div>
          <div className={css.cards}>
            <div className={css.card}>
              <Image src="/Search 1.svg" width={310} height={310} />
              <div className={css.title}>Web development</div>
              <div className={css.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie in malesuada eget fames purus ligula luctus tellus.
                Habitant condimentum sit gravida praesent.
              </div>
              <div>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>
            <div className={css.card}>
              <Image src="/Instagram Shot 1.svg" width={310} height={310} />
              <div className={css.title}>Mobile development</div>
              <div className={css.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie in malesuada eget fames purus ligula luctus tellus.
                Habitant condimentum sit gravida praesent.
              </div>
              <div>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>
            <div className={css.card}>
              <Image src="/Product Launch 1.svg" width={310} height={310} />
              <div className={css.title}>Product design</div>
              <div className={css.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie in malesuada eget fames purus ligula luctus tellus.
                Habitant condimentum sit gravida praesent.
              </div>
              <div>
                <SecondaryButton>Learn more</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
        <div className={ctx(css.testimonials, "container")}>
          <div>
            <div className={css.title}>Testimonials</div>
            <div
              style={{
                width: "5vw",
                height: "5vw",
              }}
              className={ctx(css.ellipse)}
            />
            <div
              style={{
                left: "50%",
                top: "-50%",
              }}
              className={ctx(css.ellipse)}
            />
          </div>
          <div>
            <div className={css.content}>
              <div
                style={{
                  top: 0,
                  left: 0,
                  color: "var(--purple)",
                  opacity: 0.5,
                }}
                className={css.quote}
              >
                <ImQuotesLeft />
              </div>
              <div className={css.card}>
                <div className={css.image}>
                  <Image width={50} height={50} src="/memoji female 14.svg" />
                </div>
                <div className={css.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur et pretium nunc, quis euismod et. Volutpat
                  suspendisse sed in blandit condimentum. Sagittis nullam nec
                  mauris, feugiat hendrerit aliquam cras. Dolor tortor gravida
                  lobortis in ultricies enim vulputate non. Neque nibh donec
                  quam lectus.
                  <br />
                  <span
                    style={{
                      fontFamily: "SF Pro Display Bold",
                    }}
                  >
                    Sed arcu, enim eu adipiscing enim vulputate vulputate semper
                    adipiscing.
                  </span>
                  <br />
                  <span
                    style={{
                      color: "var(--purple)",
                      fontFamily: "SF Pro Display Bold",
                    }}
                  >
                    - Customer
                  </span>
                </div>
              </div>
              <div
                style={{
                  bottom: 0,
                  right: 0,
                  color: "var(--purple)",
                }}
                className={css.quote}
              >
                <ImQuotesRight />
              </div>
            </div>
            <div className={css.image}>
              <Image
                width={1000}
                height={700}
                src="/Awards 1.svg"
                objectFit="cover"
              />
            </div>
          </div>
          <div className={css.testimonials2}>
            <div className={css.card}>
              <div className={css.image}>
                <Image src="/memoji male 02.svg" width={50} height={50} />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                condimentum velit egestas rutrum purus. Quam velit velit nisi
                ultrices gravida est in tellus. Id in faucibus consequat
                hendrerit scelerisque maecenas massa, quis.
                <span
                  style={{
                    color: "var(--purple)",
                    fontFamily: "SF Pro Display Bold",
                  }}
                >
                  - Customer
                </span>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.image}>
                <Image src="/memoji female 06.svg" width={50} height={50} />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                condimentum velit egestas rutrum purus. Quam velit velit nisi
                ultrices gravida est in tellus. Id in faucibus consequat
                hendrerit scelerisque maecenas massa, quis.
                <span
                  style={{
                    color: "var(--purple)",
                    fontFamily: "SF Pro Display Bold",
                  }}
                >
                  - Customer
                </span>
              </div>
            </div>
            <div className={css.card}>
              <div className={css.image}>
                <Image src="/memoji male 12.svg" width={50} height={50} />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                condimentum velit egestas rutrum purus. Quam velit velit nisi
                ultrices gravida est in tellus. Id in faucibus consequat
                hendrerit scelerisque maecenas massa, quis.
                <span
                  style={{
                    color: "var(--purple)",
                    fontFamily: "SF Pro Display Bold",
                  }}
                >
                  - Customer
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={ctx(css.startyourbusinessnow, "container")}>
          <div>
            <div className={css.title}>Start your business now !!!</div>
          </div>
          <div className={css.image}>
            <Image
              width={500}
              height={500}
              src="/Shopping 1.svg"
              objectFit="cover"
            />
          </div>
          <div>
            <SecondaryButton>
              <span className={css.letstalk}>
                Let's talk <BsArrowRight />
              </span>
            </SecondaryButton>
          </div>
        </div>
        <div className={css.footer}>
          <div className={css.info}>
            <Logo />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              a, ultricies sit nunc purus vel cras pellentesque.
            </div>
            <div className={css.socials}>
              <div className={css.social}>
                <Image src="/dribbble.svg" width={24} height={24} />
              </div>
              <div className={css.social}>
                <Image src="/instagram.svg" width={24} height={24} />
              </div>
              <div className={css.social}>
                <Image src="/facebook.svg" width={24} height={24} />
              </div>
              <div className={css.social}>
                <Image src="/twitter.svg" width={24} height={24} />
              </div>
            </div>
          </div>
          <div className={css.aboutus}>
            <div>
              <div className={css.title}>About us</div>
            </div>
            <ul>
              <li>Home</li>
              <li>How we work</li>
              <li>Our team</li>
              <li>Pricing</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className={css.location}>
            <div>
              <div className={css.title}>Location</div>
            </div>
            <div>
              <div>
                <GrLocation />
                <div>3891 Ranchview Dr. Richardson, California 62639</div>
              </div>
              <div>
                <GrLocation />
                <div>4517 Washington Ave. Manchester, Kentucky 39495</div>
              </div>
            </div>
          </div>
          <div className={css.contactus}>
            <div>
              <div className={css.title}>Contact us</div>
            </div>
            <div>
              <div>trungkienspktnd@gamail.com</div>
              <div>207.555.0119</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
