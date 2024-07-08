import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import MobileShoppingCard1 from "../components/MobileShoppingCard1";
import { css } from "@emotion/css";

const Menhome: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--color-white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-208xl);
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        font-size: var(--neue-medium-32-size);
        color: var(--color-white);
        font-family: var(--neue-medium-20);
        @media screen and (max-width: 750px) {
          gap: var(--gap-94xl);
        }
        @media screen and (max-width: 450px) {
          gap: var(--gap-38xl);
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0px 0px 0px 0px;
          box-sizing: border-box;
          gap: var(--gap-13xl);
          max-width: 100%;
          @media screen and (max-width: 750px) {
            gap: var(--gap-base);
          }
        `}
      >
        <FrameComponent1
          search="/search.svg"
          person="/person.svg"
          heart="/heart.svg"
          cart="/cart.svg"
          frameDivPadding="0px 0px 13px"
          onLogoContainerClick={onLogoContainerClick}
        />
        <FrameComponent4
          arrowLeft="/arrow-left.svg"
          wOMENSSHOESUPTO60OFFTHISW="MEN’S SHOES: UP TO 60% OFF THIS WEEK"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            padding: 0px var(--padding-13xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              height: 1142px;
              flex: 1;
              position: relative;
              max-width: 100%;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                display: grid;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-4xs) 0px 0px;
                box-sizing: border-box;
                gap: var(--gap-2xl);
                max-width: 100%;
                grid-template-columns: repeat(4, minmax(214px, 1fr));
                @media screen and (max-width: 1100px) {
                  justify-content: center;
                  grid-template-columns: repeat(2, minmax(214px, 372px));
                }
                @media screen and (max-width: 450px) {
                  grid-template-columns: minmax(214px, 1fr);
                }
              `}
            >
              <MobileShoppingCard1
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="unset"
                propAlignSelf="unset"
                propWidth="unset"
                propHeight="352.7px"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
              />
              <MobileShoppingCard1
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="unset"
                propAlignSelf="unset"
                propWidth="unset"
                propHeight="352.7px"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
              />
              <MobileShoppingCard1
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="unset"
                propAlignSelf="unset"
                propWidth="unset"
                propHeight="352.7px"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
              />
              <MobileShoppingCard1
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="unset"
                propAlignSelf="unset"
                propWidth="unset"
                propHeight="352.7px"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
              />
            </div>
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="unset"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="394.7px"
              propLeft="0px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="unset"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="394.7px"
              propLeft="307px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="auto"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="394.7px"
              propLeft="614px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="auto"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="394.7px"
              propLeft="921px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="unset"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="789.4px"
              propLeft="0px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="unset"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="789.4px"
              propLeft="307px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="auto"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="789.4px"
              propLeft="614px"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
              star="/star.svg"
              star1="/star.svg"
              star2="/star.svg"
              heart="/heart.svg"
              cart="/cart.svg"
              add="/add.svg"
              propOverflowY="auto"
              propAlignSelf="unset"
              propWidth="286px"
              propHeight="352.7px"
              propPosition="absolute"
              propTop="789.4px"
              propLeft="921px"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            background-color: var(--iris-100);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-30xl) var(--padding-45xl);
            box-sizing: border-box;
            max-width: 100%;
            gap: var(--gap-xl);
            @media screen and (max-width: 1100px) {
              flex-wrap: wrap;
              padding-left: var(--padding-13xl);
              padding-right: var(--padding-13xl);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              width: 622px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              gap: var(--gap-9xs);
              max-width: 100%;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 120%;
                  display: inline-block;
                  max-width: 100%;
                  @media screen and (max-width: 750px) {
                    font-size: var(--font-size-7xl);
                    line-height: 31px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-lgi);
                    line-height: 23px;
                  }
                `}
              >
                Join our exclusive Patriclub newsletter list
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                max-width: 100%;
                font-size: var(--garamond-bold-20-size);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 120%;
                  font-weight: 300;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Be the first to know when we have new releases
              </div>
            </div>
          </div>
          <div
            className={css`
              width: 292px;
              background-color: var(--whatsapp-black-11);
              border: 1px solid var(--cyber-punk-gradient);
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-3xl) var(--padding-mini);
              font-size: var(--garamond-bold-20-size);
              color: var(--whatsapp-white-01);
            `}
          >
            <div
              className={css`
                height: 16px;
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 0px 0px;
                box-sizing: border-box;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 182px;
                  position: relative;
                  line-height: 120%;
                  display: inline-block;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Sign me up for free!
              </div>
              <img
                className={css`
                  height: 12px;
                  flex: 1;
                  position: relative;
                  max-width: 100%;
                  overflow: hidden;
                `}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            background-color: var(--whatsapp-white-01);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            padding: var(--padding-13xl) var(--padding-45xl);
            box-sizing: border-box;
            max-width: 100%;
            font-size: var(--neue-light-12-size);
            color: var(--whatsapp-white-11);
            @media screen and (max-width: 1275px) {
              flex-wrap: wrap;
              padding-left: var(--padding-13xl);
              padding-right: var(--padding-13xl);
              box-sizing: border-box;
            }
            @media screen and (max-width: 1100px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 750px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 450px) {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            className={css`
              width: 514px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
              min-width: 514px;
              max-width: 100%;
              gap: var(--gap-xl);
              @media screen and (max-width: 1275px) {
                flex: 1;
              }
              @media screen and (max-width: 1100px) {
                flex: 1;
              }
              @media screen and (max-width: 750px) {
                flex: 1;
                min-width: 100%;
              }
              @media screen and (max-width: 450px) {
                flex: 1;
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    width: 56px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 56px;
                  `}
                >
                  Collection
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: var(--gap-5xs);
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 41px;
                      `}
                    >
                      Football
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 35px;
                      `}
                    >
                      Sports
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 30px;
                      `}
                    >
                      Office
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 36px;
                      `}
                    >
                      Casual
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 27px;
                      `}
                    >
                      Party
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: var(--gap-5xs);
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        width: 69px;
                        position: relative;
                        line-height: 120%;
                        display: inline-block;
                        min-width: 69px;
                      `}
                    >
                      New arrivals
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 32px;
                      `}
                    >
                      Latest
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 38px;
                      `}
                    >
                      Gbanjo
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 51px;
                      `}
                    >
                      Flash sale
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    width: 51px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 51px;
                  `}
                >
                  Products
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px var(--padding-28xl) 0px 0px;
                    gap: var(--gap-5xs);
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 33px;
                      `}
                    >
                      Shoes
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 43px;
                      `}
                    >
                      Clothing
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 63px;
                      `}
                    >
                      Accessories
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 53px;
                      `}
                    >
                      Gift packs
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 34px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 34px;
                  `}
                >
                  About
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: center;
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 120%;
                      font-weight: 300;
                      display: inline-block;
                      min-width: 71px;
                    `}
                  >
                    Our company
                  </div>
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 120%;
                      font-weight: 300;
                      display: inline-block;
                      min-width: 41px;
                    `}
                  >
                    Careers
                  </div>
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 120%;
                      font-weight: 300;
                      display: inline-block;
                      min-width: 99px;
                    `}
                  >
                    Community service
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    width: 44px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 44px;
                  `}
                >
                  Contact
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: var(--gap-5xs);
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 38px;
                      `}
                    >
                      Find us
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 42px;
                      `}
                    >
                      Support
                    </div>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 120%;
                        font-weight: 300;
                        display: inline-block;
                        min-width: 41px;
                      `}
                    >
                      Helpline
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              width: 615px;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: center;
              gap: var(--gap-5xs);
              min-width: 615px;
              max-width: 100%;
              font-size: var(--garamond-bold-20-size);
              @media screen and (max-width: 1275px) {
                flex: 1;
              }
              @media screen and (max-width: 1100px) {
                flex: 1;
                min-width: 100%;
              }
              @media screen and (max-width: 750px) {
                flex: 1;
              }
              @media screen and (max-width: 450px) {
                flex: 1;
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                padding: 0px var(--padding-5xs);
              `}
            >
              <div
                className={css`
                  width: 89px;
                  position: relative;
                  line-height: 120%;
                  display: inline-block;
                  min-width: 89px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Follow us
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                max-width: 100%;
                text-align: left;
                font-size: var(--display-medium-24-size);
                color: var(--primary-grey-wolf-10);
                font-family: var(--display-medium-24);
                @media screen and (max-width: 750px) {
                  gap: var(--gap-base);
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  gap: var(--gap-45xl);
                  max-width: 100%;
                  @media screen and (max-width: 750px) {
                    flex-wrap: wrap;
                    gap: var(--gap-13xl);
                  }
                  @media screen and (max-width: 450px) {
                    gap: var(--gap-base);
                  }
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: var(--gap-base);
                    min-width: 224px;
                    max-width: 100%;
                    @media screen and (max-width: 450px) {
                      flex-wrap: wrap;
                    }
                  `}
                >
                  <div
                    className={css`
                      border-radius: var(--br-9xs);
                      border: 1px solid var(--primary-arctic-white-03);
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                      padding: var(--padding-7xs) var(--padding-6xs);
                      white-space: nowrap;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        line-height: 32px;
                        font-weight: 500;
                      `}
                    >
                      Download our app
                    </div>
                  </div>
                  <div
                    className={css`
                      width: 112px;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: var(--gap-9xs);
                    `}
                  >
                    <div
                      className={css`
                        align-self: stretch;
                        border-radius: var(--br-9xs);
                        background-color: var(--primary-grey-wolf-10);
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                      `}
                    >
                      <img
                        className={css`
                          align-self: stretch;
                          height: 40px;
                          position: relative;
                          max-width: 100%;
                          overflow: hidden;
                          flex-shrink: 0;
                          object-fit: cover;
                        `}
                        alt=""
                        src="/r-2-1@2x.png"
                      />
                    </div>
                    <img
                      className={css`
                        align-self: stretch;
                        height: 41px;
                        position: relative;
                        border-radius: var(--br-9xs);
                        max-width: 100%;
                        overflow: hidden;
                        flex-shrink: 0;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/downloadontheappstorelogopng23-1@2x.png"
                    />
                  </div>
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: var(--gap-5xs);
                    font-size: var(--garamond-bold-20-size);
                    font-family: var(--garamond-bold-20);
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: center;
                      padding: 0px var(--padding-8xs);
                    `}
                  >
                    <b
                      className={css`
                        position: relative;
                        line-height: 24px;
                        @media screen and (max-width: 450px) {
                          font-size: var(--neue-medium-16-size);
                          line-height: 19px;
                        }
                      `}
                    >
                      Follow on social media
                    </b>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                      padding: 0px var(--padding-7xs);
                      gap: var(--gap-5xs);
                    `}
                  >
                    <div
                      className={css`
                        height: 29px;
                        width: 32.4px;
                        border-radius: var(--br-45xl);
                        background-color: var(--iris-100);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: var(--padding-10xs-5) var(--padding-9xs);
                        box-sizing: border-box;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                        `}
                        alt=""
                        src="/facebook.svg"
                      />
                    </div>
                    <div
                      className={css`
                        height: 29px;
                        width: 32.4px;
                        border-radius: var(--br-45xl);
                        background-color: var(--stroke-green-deep);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: var(--padding-10xs-5) var(--padding-9xs);
                        box-sizing: border-box;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                        `}
                        alt=""
                        src="/x.svg"
                      />
                    </div>
                    <div
                      className={css`
                        height: 29px;
                        width: 32.4px;
                        border-radius: var(--br-45xl);
                        background-color: var(--fuschia-100);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: var(--padding-10xs-5) var(--padding-9xs);
                        box-sizing: border-box;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                        `}
                        alt=""
                        src="/instagram.svg"
                      />
                    </div>
                    <div
                      className={css`
                        height: 29px;
                        width: 32.4px;
                        border-radius: var(--br-45xl);
                        background-color: var(--accent-link);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: var(--padding-10xs-5) var(--padding-9xs);
                        box-sizing: border-box;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                        `}
                        alt=""
                        src="/linkedin.svg"
                      />
                    </div>
                    <div
                      className={css`
                        height: 29px;
                        width: 32.4px;
                        border-radius: var(--br-45xl);
                        background-color: var(--accent-error);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: var(--padding-10xs-5) var(--padding-9xs);
                        box-sizing: border-box;
                      `}
                    >
                      <img
                        className={css`
                          width: 24px;
                          height: 24px;
                          position: relative;
                        `}
                        alt=""
                        src="/youtube.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menhome;