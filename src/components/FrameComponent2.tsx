import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import MobileShoppingCard1 from "./MobileShoppingCard1";
import MobileShoppingCard from "./MobileShoppingCard";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-21xl) var(--padding-31xl)
            var(--padding-13xl);
          box-sizing: border-box;
          max-width: 100%;
          text-align: center;
          font-size: var(--garamond-bold-20-size);
          color: var(--whatsapp-black-11);
          font-family: var(--neue-medium-20);
          @media screen and (max-width: 1100px) {
            padding-bottom: var(--padding-13xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 450px) {
            padding-bottom: var(--padding-2xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-28xl-3);
          max-width: 100%;
          @media screen and (max-width: 450px) {
            gap: var(--gap-5xl);
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-5xl);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-5xs);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                background-color: var(--whatsapp-white-01);
                border: 1px solid var(--cyber-punk-gradient);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-sm);
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 116px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 116px;
                    @media screen and (max-width: 750px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  New Arrivals
                </div>
                <img
                  className={css`
                    height: 12px;
                    width: 12px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
                  `}
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </div>
            <div
              className={css`
                background-color: var(--whatsapp-black-11);
                border: 1px solid var(--cyber-punk-gradient);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
                color: var(--whatsapp-white-01);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-lg);
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 107px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 107px;
                    @media screen and (max-width: 750px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  Retro stock
                </div>
                <img
                  className={css`
                    height: 12px;
                    width: 12px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
                  `}
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </div>
            <div
              className={css`
                background-color: var(--whatsapp-white-01);
                border: 1px solid var(--cyber-punk-gradient);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-lg);
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 108px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 108px;
                    @media screen and (max-width: 750px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  Best sellers
                </div>
                <img
                  className={css`
                    height: 12px;
                    width: 12px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
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
              height: 352.7px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              max-width: 100%;
              @media screen and (max-width: 1275px) {
                gap: var(--gap-157xl);
              }
              @media screen and (max-width: 750px) {
                gap: var(--gap-25xl);
              }
              @media screen and (max-width: 450px) {
                gap: var(--gap-69xl);
              }
            `}
          >
            <div
              className={css`
                width: 1208px;
                flex: 1;
                overflow-x: auto;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-12xs) 0px 0px;
                box-sizing: border-box;
                gap: var(--gap-2xl);
                max-width: 100%;
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
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
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
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
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
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
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
                propOverflowY="auto"
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
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
            gap: var(--gap-3xl);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-5xs);
              max-width: 100%;
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                background-color: var(--whatsapp-white-01);
                border: 1px solid var(--cyber-punk-gradient);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-sm);
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 116px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 116px;
                    @media screen and (max-width: 750px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  New Arrivals
                </div>
                <img
                  className={css`
                    height: 12px;
                    width: 12px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
                  `}
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </div>
            <div
              className={css`
                background-color: var(--whatsapp-white-01);
                border: 1px solid var(--cyber-punk-gradient);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-lg);
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 107px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 107px;
                    @media screen and (max-width: 750px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  Retro stock
                </div>
                <img
                  className={css`
                    height: 12px;
                    width: 12px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
                  `}
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </div>
            <div
              className={css`
                background-color: var(--whatsapp-black-11);
                border: 1px solid var(--cyber-punk-gradient);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
                color: var(--whatsapp-white-01);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-lg);
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 108px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 108px;
                    @media screen and (max-width: 750px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  Best sellers
                </div>
                <img
                  className={css`
                    height: 12px;
                    width: 12px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
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
              height: 447px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              max-width: 100%;
              font-size: var(--font-size-sm);
              color: var(--whatsapp-white-11);
              @media screen and (max-width: 1275px) {
                gap: var(--gap-157xl);
              }
              @media screen and (max-width: 750px) {
                gap: var(--gap-25xl);
              }
              @media screen and (max-width: 450px) {
                gap: var(--gap-69xl);
              }
            `}
          >
            <div
              className={css`
                width: 1208px;
                flex: 1;
                overflow-x: auto;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-12xs) 0px 0px;
                box-sizing: border-box;
                gap: var(--gap-2xl);
                max-width: 100%;
              `}
            >
              <MobileShoppingCard
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                eXPLOREPATRIKOLOR="EXPLORE PATRIKOLOR"
                classicRunwayDress="Classic runway dress"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
              />
              <MobileShoppingCard
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                eXPLOREPATRIKOLOR="TIMELESS FEEL"
                classicRunwayDress="Premium drape orange. Find your taste"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="unset"
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
              />
              <MobileShoppingCard
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                eXPLOREPATRIKOLOR="WHATS YOUR FLAVOUR"
                classicRunwayDress="Classic office high heels"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="unset"
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
              />
              <MobileShoppingCard
                unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
                eXPLOREPATRIKOLOR="CHILDREN IN PATRIK"
                classicRunwayDress="Classic office high heels"
                star="/star.svg"
                star1="/star.svg"
                star2="/star.svg"
                heart="/heart.svg"
                cart="/cart.svg"
                add="/add.svg"
                propOverflowY="auto"
                propAlignSelf="stretch"
                propWidth="286px"
                propHeight="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;