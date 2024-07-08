import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import MobileShoppingCard1 from "./MobileShoppingCard1";
import MobileShoppingCard from "./MobileShoppingCard";

export type ProductGridType = {
  className?: string;
};

const ProductGrid: FunctionComponent<ProductGridType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 40.30000000000001px;
          max-width: 100%;
          height: auto;
          transform: rotate(0deg);
          text-align: center;
          font-size: var(--neue-medium-16-size);
          color: var(--whatsapp-white-11);
          font-family: var(--neue-medium-20);
          &:hover {
            display: flex;
            flex: 1;
            height: auto;
            flex-direction: column;
            gap: 40.30000000000001px;
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
          @media screen and (max-width: 750px) {
            gap: var(--gap-xl);
          }
        `,
        className,
      ].join(" ")}
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
          width: auto;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: var(--gap-5xl);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
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
              justify-content: flex-start;
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
              background-color: var(--whatsapp-black-11);
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
                background-color: var(--whatsapp-black-11);
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
                padding: 0px var(--padding-sm);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-sm);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 116px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-white-01);
                  text-align: center;
                  display: flex;
                  min-width: 116;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-white-01);
                    display: flex;
                    width: 116px;
                    min-width: 116;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                New Arrivals
              </div>
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-lg);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 107px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 107;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 107px;
                    min-width: 107;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Retro stock
              </div>
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-lg);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 108px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 108;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 108px;
                    min-width: 108;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Best sellers
              </div>
            </div>
          </button>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: auto;
            height: auto;
            gap: var(--gap-333xl);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: column;
              gap: var(--gap-333xl);
              align-items: flex-start;
              justify-content: flex-start;
            }
            @media screen and (max-width: 1225px) {
              gap: var(--gap-157xl);
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-69xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-25xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: grid;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-12xs) 0px 0px;
              box-sizing: border-box;
              gap: var(--gap-2xl);
              grid-template-columns: repeat(4, minmax(214px, 1fr));
              width: auto;
              height: auto;
              &:hover {
                display: grid;
                align-self: stretch;
                width: auto;
                height: auto;
                flex-direction: row;
                gap: var(--gap-2xl);
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-12xs) 0px 0px;
                box-sizing: border-box;
                grid-template-columns: repeat(4, minmax(214px, 1fr));
              }
              @media screen and (max-width: 1050px) {
                justify-content: center;
                grid-template-columns: repeat(2, minmax(214px, 372px));
              }
              @media screen and (max-width: 450px) {
                grid-template-columns: minmax(214px, 1fr);
              }
            `}
          >
            <MobileShoppingCard1 unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png" />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-1@2x.png"
              propOverflowY="unset"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-2@2x.png"
              propOverflowY="unset"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-3@2x.png"
              propOverflowY="auto"
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
          padding: 0px 0px var(--padding-sm);
          box-sizing: border-box;
          gap: var(--gap-5xl);
          max-width: 100%;
          width: auto;
          height: auto;
          transform: rotate(0deg);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: var(--gap-5xl);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            padding: 0px 0px var(--padding-sm);
            box-sizing: border-box;
            max-width: 100%;
          }
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
              justify-content: flex-start;
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
              background-color: var(--whatsapp-white-01);
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
                background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-sm);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-sm);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 116px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 116;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 116px;
                    min-width: 116;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                New Arrivals
              </div>
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-black-11);
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
                background-color: var(--whatsapp-black-11);
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
                padding: 0px var(--padding-lg);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-lg);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 107px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-white-01);
                  text-align: center;
                  display: flex;
                  min-width: 107;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-white-01);
                    display: flex;
                    width: 107px;
                    min-width: 107;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Retro stock
              </div>
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-lg);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 108px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 108;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 108px;
                    min-width: 108;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Best sellers
              </div>
            </div>
          </button>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: auto;
            height: auto;
            gap: var(--gap-333xl);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: column;
              gap: var(--gap-333xl);
              align-items: flex-start;
              justify-content: flex-start;
            }
            @media screen and (max-width: 1225px) {
              gap: var(--gap-157xl);
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-69xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-25xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: grid;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-12xs) 0px 0px;
              box-sizing: border-box;
              gap: var(--gap-2xl);
              grid-template-columns: repeat(4, minmax(214px, 1fr));
              width: auto;
              height: auto;
              &:hover {
                display: grid;
                align-self: stretch;
                width: auto;
                height: auto;
                flex-direction: row;
                gap: var(--gap-2xl);
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-12xs) 0px 0px;
                box-sizing: border-box;
                grid-template-columns: repeat(4, minmax(214px, 1fr));
              }
              @media screen and (max-width: 1050px) {
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
              propOverflowY="unset"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-1@2x.png"
              propOverflowY="unset"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-2@2x.png"
              propOverflowY="unset"
            />
            <MobileShoppingCard1
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-3@2x.png"
              propOverflowY="auto"
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
          gap: var(--gap-5xl);
          max-width: 100%;
          width: auto;
          height: auto;
          transform: rotate(0deg);
          font-size: var(--font-size-sm);
          &:hover {
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: var(--gap-5xl);
            align-items: flex-start;
            justify-content: flex-start;
            transform: rotate(0deg);
            max-width: 100%;
          }
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
              justify-content: flex-start;
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
              background-color: var(--whatsapp-white-01);
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
                background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-sm);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-sm);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 116px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 116;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 116px;
                    min-width: 116;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                New Arrivals
              </div>
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-lg);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 107px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: flex;
                  min-width: 107;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-black-11);
                    display: flex;
                    width: 107px;
                    min-width: 107;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Retro stock
              </div>
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-black-11);
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
                background-color: var(--whatsapp-black-11);
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
                padding: 0px var(--padding-lg);
                box-sizing: border-box;
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
                  padding: 0px var(--padding-lg);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 108px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-white-01);
                  text-align: center;
                  display: flex;
                  min-width: 108;
                  &:hover {
                    font-family: var(--neue-medium-20);
                    font-size: var(--garamond-bold-20-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-white-01);
                    display: flex;
                    width: 108px;
                    min-width: 108;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Best sellers
              </div>
            </div>
          </button>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: auto;
            height: auto;
            gap: var(--gap-333xl);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: column;
              gap: var(--gap-333xl);
              align-items: flex-start;
              justify-content: flex-start;
            }
            @media screen and (max-width: 1225px) {
              gap: var(--gap-157xl);
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-69xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-25xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: grid;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-12xs) 0px 0px;
              box-sizing: border-box;
              gap: var(--gap-2xl);
              grid-template-columns: repeat(4, minmax(214px, 1fr));
              width: auto;
              height: auto;
              &:hover {
                display: grid;
                align-self: stretch;
                width: auto;
                height: auto;
                flex-direction: row;
                gap: var(--gap-2xl);
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-12xs) 0px 0px;
                box-sizing: border-box;
                grid-template-columns: repeat(4, minmax(214px, 1fr));
              }
              @media screen and (max-width: 1050px) {
                justify-content: center;
                grid-template-columns: repeat(2, minmax(214px, 372px));
              }
              @media screen and (max-width: 450px) {
                grid-template-columns: minmax(214px, 1fr);
              }
            `}
          >
            <MobileShoppingCard
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-8@2x.png"
              eXPLOREPATRIKOLOR="EXPLORE PATRIKOLOR"
              classicRunwayDress="Classic runway dress"
            />
            <MobileShoppingCard
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-9@2x.png"
              eXPLOREPATRIKOLOR="TIMELESS FEEL"
              classicRunwayDress="Premium drape orange. Find your taste"
              propOverflowY="unset"
            />
            <MobileShoppingCard
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-10@2x.png"
              eXPLOREPATRIKOLOR="WHATS YOUR FLAVOUR"
              classicRunwayDress="Classic office high heels"
              propOverflowY="unset"
            />
            <MobileShoppingCard
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-11@2x.png"
              eXPLOREPATRIKOLOR="CHILDREN IN PATRIK"
              classicRunwayDress="Classic office high heels"
              propOverflowY="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
