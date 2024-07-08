import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type HereType = {
  className?: string;
};

const Here: FunctionComponent<HereType> = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          row-gap: 20px;
          max-width: 100%;
          width: auto;
          height: auto;
          gap: var(--gap-0);
          text-align: center;
          font-size: var(--garamond-bold-20-size);
          color: var(--color-white);
          font-family: var(--neue-medium-20);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-0);
            align-items: center;
            justify-content: flex-start;
            row-gap: 20px;
            max-width: 100%;
          }
          @media screen and (max-width: 1225px) {
            flex-wrap: wrap;
            justify-content: center;
          }
        `,
        className,
      ].join(" ")}
    >
      <img
        className={css`
          align-self: stretch;
          width: 426.7px;
          position: relative;
          max-height: 100%;
          object-fit: cover;
          min-height: 570;
          max-width: 100%;
          flex-shrink: 0;
          background-color: var(--color-gainsboro-100);
          display: flex;
          height: auto;
          &:hover {
            background-color: var(--color-gainsboro-100);
            display: flex;
            width: 426.7px;
            align-self: stretch;
            height: auto;
            min-height: 570;
            max-width: 100%;
            flex-shrink: 0;
          }
        `}
        alt=""
        src="/hero-background@2x.png"
      />
      <div
        className={css`
          height: 570px;
          width: 1280px;
          position: relative;
          max-width: 100%;
          flex-shrink: 0;
          display: flex;
          gap: var(--gap-0);
          transform: rotate(0deg);
          &:hover {
            display: flex;
            width: 1280px;
            height: 570px;
            gap: var(--gap-0);
            transform: rotate(0deg);
            max-width: 100%;
            flex-shrink: 0;
          }
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 570px;
            top: 0px;
            bottom: 0px;
            left: 0px;
            max-height: 100%;
            width: 426.7px;
            object-fit: cover;
            background-color: var(--color-gainsboro-100);
            display: flex;
            &:hover {
              background-color: var(--color-gainsboro-100);
              display: flex;
              width: 426.7px;
              height: 570px;
            }
          `}
          alt=""
          src="/hero-images@2x.png"
        />
        <img
          className={css`
            position: absolute;
            height: 570px;
            top: 0px;
            bottom: 0px;
            left: 853.3px;
            max-height: 100%;
            width: 426.7px;
            object-fit: cover;
            background-color: var(--color-gainsboro-100);
            display: flex;
            z-index: 1;
            &:hover {
              background-color: var(--color-gainsboro-100);
              display: flex;
              width: 426.7px;
              height: 570px;
            }
          `}
          loading="lazy"
          alt=""
          src="/rectangle-24@2x.png"
        />
      </div>
      <div
        className={css`
          width: 996px;
          margin: 0 !important;
          position: absolute;
          top: 394px;
          left: 40px;
          background-color: var(--color-gray-200);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-base);
          box-sizing: border-box;
          gap: var(--gap-5xs);
          max-width: 100%;
          height: auto;
          z-index: 2;
          &:hover {
            background-color: var(--color-gray-200);
            display: flex;
            width: 996px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-5xs);
            align-items: flex-start;
            justify-content: center;
            padding: var(--padding-base);
            box-sizing: border-box;
            max-width: 100%;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
            width: auto;
            align-self: unset;
            height: auto;
            gap: var(--gap-5xs);
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-xl) 0px 0px;
              box-sizing: border-box;
              max-width: 100%;
            }
          `}
        >
          <h2
            className={css`
              margin: 0;
              width: 409px;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 400;
              font-family: inherit;
              display: flex;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--garamond-bold-20-size);
                line-height: 120%;
                text-align: center;
                color: var(--color-white);
                display: flex;
                width: 409px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            MAINTAIN YOUR STEEZ AND COMPOSURE
          </h2>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            width: auto;
            height: auto;
            gap: var(--gap-5xs);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: center;
              justify-content: center;
              max-width: 100%;
            }
          `}
        >
          <h2
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 400;
              font-family: inherit;
              display: flex;
              max-width: 100%;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--garamond-bold-20-size);
                line-height: 120%;
                text-align: center;
                color: var(--color-white);
                display: flex;
                flex: 1;
                max-width: 100%;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            From backpacks to sneakers. These are the best in the market of
            wears to help you look fresh and smart
          </h2>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-5xs);
            max-width: 100%;
            width: auto;
            align-self: unset;
            height: auto;
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: row;
              gap: var(--gap-5xs);
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-xl) 0px 0px;
              box-sizing: border-box;
              max-width: 100%;
            }
            @media screen and (max-width: 750px) {
              flex-wrap: wrap;
            }
          `}
        >
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--electric-lime);
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: auto;
              align-self: unset;
              height: auto;
              gap: var(--gap-5xs);
              &:hover {
                background-color: var(--electric-lime);
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
                box-sizing: border-box;
                border: 1px solid var(--cyber-punk-gradient);
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-5xs);
                width: auto;
                align-self: unset;
                height: auto;
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-5xs);
                  align-items: center;
                  justify-content: center;
                }
              `}
            >
              <div
                className={css`
                  width: 95px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 95;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 95px;
                    min-width: 95;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Shop Men
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 25px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: flex;
                  gap: var(--gap-0);
                  &:hover {
                    display: flex;
                    width: 25px;
                    height: 12px;
                    gap: var(--gap-0);
                  }
                `}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--electric-lime);
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: auto;
              align-self: unset;
              height: auto;
              gap: var(--gap-5xs);
              &:hover {
                background-color: var(--electric-lime);
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
                box-sizing: border-box;
                border: 1px solid var(--cyber-punk-gradient);
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 0px 0px 0px 0px;
                box-sizing: border-box;
                gap: var(--gap-5xs);
                width: auto;
                align-self: unset;
                height: auto;
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-5xs);
                  align-items: center;
                  justify-content: center;
                  padding: 0px 0px 0px 0px;
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 125px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 125;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 125px;
                    min-width: 125;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Shop Women
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 1px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: flex;
                  gap: var(--gap-0);
                  &:hover {
                    display: flex;
                    width: 1px;
                    height: 12px;
                    gap: var(--gap-0);
                  }
                `}
                alt=""
                src="/arrow-right-1.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--electric-lime);
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: auto;
              align-self: unset;
              height: auto;
              gap: var(--gap-5xs);
              &:hover {
                background-color: var(--electric-lime);
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                flex-direction: row;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
                padding: var(--padding-7xs) var(--padding-6xs);
                box-sizing: border-box;
                border: 1px solid var(--cyber-punk-gradient);
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-5xs);
                width: auto;
                align-self: unset;
                height: auto;
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-5xs);
                  align-items: center;
                  justify-content: center;
                }
              `}
            >
              <div
                className={css`
                  width: 96px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 96;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 96px;
                    min-width: 96;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Shop Kids
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 24px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: flex;
                  gap: var(--gap-0);
                  &:hover {
                    display: flex;
                    width: 24px;
                    height: 12px;
                    gap: var(--gap-0);
                  }
                `}
                alt=""
                src="/arrow-right-2.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Here;
