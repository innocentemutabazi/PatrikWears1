import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={[
        css`
          align-self: stretch;
          background-color: var(--whatsapp-white-01);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          padding: var(--padding-13xl);
          box-sizing: border-box;
          max-width: 100%;
          gap: var(--gap-xl);
          width: auto;
          height: auto;
          text-align: center;
          font-size: var(--neue-light-12-size);
          color: var(--whatsapp-white-11);
          font-family: var(--neue-medium-20);
          &:hover {
            background-color: var(--whatsapp-white-01);
            display: flex;
            align-self: stretch;
            width: auto;
            height: auto;
            flex-direction: row;
            gap: var(--gap-xl);
            align-items: flex-start;
            justify-content: space-between;
            padding: var(--padding-13xl);
            box-sizing: border-box;
            max-width: 100%;
          }
          @media screen and (max-width: 1225px) {
            flex-wrap: wrap;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 514px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-45xl);
          min-width: 514;
          max-width: 100%;
          height: auto;
          &:hover {
            display: flex;
            width: 514px;
            height: auto;
            flex-direction: row;
            gap: var(--gap-45xl);
            align-items: flex-start;
            justify-content: flex-start;
            min-width: 514;
            max-width: 100%;
          }
          @media screen and (max-width: 1225px) {
            flex: 1;
          }
          @media screen and (max-width: 750px) {
            flex-wrap: wrap;
            gap: var(--gap-13xl);
            min-width: 100%;
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-base);
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
            width: auto;
            align-self: unset;
            height: auto;
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: column;
              gap: var(--gap-5xs);
              align-items: flex-start;
              justify-content: center;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
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
              }
            `}
          >
            <div
              className={css`
                width: 56px;
                position: relative;
                line-height: 120%;
                display: flex;
                min-width: 56;
                &:hover {
                  font-family: var(--neue-medium-20);
                  font-size: var(--neue-light-12-size);
                  line-height: 120%;
                  text-align: center;
                  color: var(--whatsapp-white-11);
                  display: flex;
                  width: 56px;
                  min-width: 56;
                }
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
                width: auto;
                align-self: unset;
                height: auto;
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-5xs);
                  align-items: flex-start;
                  justify-content: center;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 41;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 41;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 35;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 35;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 30;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 30;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 36;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 36;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 27;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 27;
                    }
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
                width: auto;
                align-self: unset;
                height: auto;
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-5xs);
                  align-items: flex-start;
                  justify-content: center;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
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
                  }
                `}
              >
                <div
                  className={css`
                    width: 69px;
                    position: relative;
                    line-height: 120%;
                    display: flex;
                    min-width: 69;
                    &:hover {
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      width: 69px;
                      min-width: 69;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 32;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 32;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 38;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 38;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 51;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 51;
                    }
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
            width: auto;
            align-self: unset;
            height: auto;
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: column;
              gap: var(--gap-5xs);
              align-items: flex-start;
              justify-content: center;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
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
              }
            `}
          >
            <div
              className={css`
                width: 51px;
                position: relative;
                line-height: 120%;
                display: flex;
                min-width: 51;
                &:hover {
                  font-family: var(--neue-medium-20);
                  font-size: var(--neue-light-12-size);
                  line-height: 120%;
                  text-align: center;
                  color: var(--whatsapp-white-11);
                  display: flex;
                  width: 51px;
                  min-width: 51;
                }
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
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-28xl) 0px 0px;
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
                  flex-direction: column;
                  gap: var(--gap-5xs);
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px var(--padding-28xl) 0px 0px;
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-5xs);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-5xs);
                    align-items: center;
                    justify-content: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 33;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 33;
                    }
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
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-5xs);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-5xs);
                    align-items: center;
                    justify-content: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 43;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 43;
                    }
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
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-5xs);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-5xs);
                    align-items: center;
                    justify-content: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 63;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 63;
                    }
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
                  width: auto;
                  align-self: unset;
                  height: auto;
                  gap: var(--gap-5xs);
                  &:hover {
                    display: flex;
                    width: auto;
                    align-self: unset;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-5xs);
                    align-items: center;
                    justify-content: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 53;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 53;
                    }
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
            width: auto;
            align-self: unset;
            height: auto;
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: column;
              gap: var(--gap-5xs);
              align-items: flex-start;
              justify-content: center;
            }
          `}
        >
          <div
            className={css`
              width: 34px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: auto;
              gap: var(--gap-5xs);
              &:hover {
                display: flex;
                width: 34px;
                height: auto;
                flex-direction: column;
                gap: var(--gap-5xs);
                align-items: center;
                justify-content: center;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                line-height: 120%;
                display: flex;
                min-width: 34;
                width: auto;
                &:hover {
                  font-family: var(--neue-medium-20);
                  font-size: var(--neue-light-12-size);
                  line-height: 120%;
                  text-align: center;
                  color: var(--whatsapp-white-11);
                  display: flex;
                  align-self: stretch;
                  width: auto;
                  min-width: 34;
                }
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
              width: auto;
              align-self: unset;
              height: auto;
              &:hover {
                display: flex;
                width: auto;
                align-self: unset;
                height: auto;
                flex-direction: column;
                gap: var(--gap-5xs);
                align-items: flex-start;
                justify-content: center;
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
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
                }
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 120%;
                  font-weight: 300;
                  display: flex;
                  min-width: 71;
                  &:hover {
                    font-weight: 300;
                    font-family: var(--neue-medium-20);
                    font-size: var(--neue-light-12-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-white-11);
                    display: flex;
                    min-width: 71;
                  }
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
                }
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 120%;
                  font-weight: 300;
                  display: flex;
                  min-width: 41;
                  &:hover {
                    font-weight: 300;
                    font-family: var(--neue-medium-20);
                    font-size: var(--neue-light-12-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-white-11);
                    display: flex;
                    min-width: 41;
                  }
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
                }
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 120%;
                  font-weight: 300;
                  display: flex;
                  min-width: 99;
                  &:hover {
                    font-weight: 300;
                    font-family: var(--neue-medium-20);
                    font-size: var(--neue-light-12-size);
                    line-height: 120%;
                    text-align: center;
                    color: var(--whatsapp-white-11);
                    display: flex;
                    min-width: 99;
                  }
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
            width: auto;
            align-self: unset;
            height: auto;
            &:hover {
              display: flex;
              width: auto;
              align-self: unset;
              height: auto;
              flex-direction: column;
              gap: var(--gap-5xs);
              align-items: flex-start;
              justify-content: center;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
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
              }
            `}
          >
            <div
              className={css`
                width: 44px;
                position: relative;
                line-height: 120%;
                display: flex;
                min-width: 44;
                &:hover {
                  font-family: var(--neue-medium-20);
                  font-size: var(--neue-light-12-size);
                  line-height: 120%;
                  text-align: center;
                  color: var(--whatsapp-white-11);
                  display: flex;
                  width: 44px;
                  min-width: 44;
                }
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
                width: auto;
                align-self: unset;
                height: auto;
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-5xs);
                  align-items: flex-start;
                  justify-content: center;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 38;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 38;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 42;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 42;
                    }
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
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 120%;
                    font-weight: 300;
                    display: flex;
                    min-width: 41;
                    &:hover {
                      font-weight: 300;
                      font-family: var(--neue-medium-20);
                      font-size: var(--neue-light-12-size);
                      line-height: 120%;
                      text-align: center;
                      color: var(--whatsapp-white-11);
                      display: flex;
                      min-width: 41;
                    }
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
          align-items: flex-start;
          justify-content: center;
          gap: var(--gap-5xs);
          min-width: 615;
          max-width: 100%;
          height: auto;
          font-size: var(--garamond-bold-20-size);
          &:hover {
            display: flex;
            width: 615px;
            height: auto;
            flex-direction: column;
            gap: var(--gap-5xs);
            align-items: flex-start;
            justify-content: center;
            min-width: 615;
            max-width: 100%;
          }
          @media screen and (max-width: 1225px) {
            flex: 1;
          }
          @media screen and (max-width: 750px) {
            min-width: 100%;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
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
            }
          `}
        >
          <h2
            className={css`
              margin: 0;
              width: 89px;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 400;
              font-family: inherit;
              display: flex;
              min-width: 89;
              &:hover {
                font-family: var(--neue-medium-20);
                font-size: var(--garamond-bold-20-size);
                line-height: 120%;
                text-align: center;
                color: var(--whatsapp-white-11);
                display: flex;
                width: 89px;
                min-width: 89;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            Follow us
          </h2>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            max-width: 100%;
            width: auto;
            height: auto;
            gap: var(--gap-13xl);
            text-align: left;
            font-size: var(--display-medium-24-size);
            color: var(--primary-grey-wolf-10);
            font-family: var(--display-medium-24);
            &:hover {
              display: flex;
              align-self: stretch;
              width: auto;
              height: auto;
              flex-direction: row;
              gap: var(--gap-13xl);
              align-items: center;
              justify-content: flex-start;
              max-width: 100%;
            }
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
              height: auto;
              &:hover {
                display: flex;
                flex: 1;
                height: auto;
                flex-direction: row;
                gap: var(--gap-45xl);
                align-items: center;
                justify-content: center;
                max-width: 100%;
              }
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
                min-width: 224;
                max-width: 100%;
                height: auto;
                &:hover {
                  display: flex;
                  flex: 1;
                  height: auto;
                  flex-direction: row;
                  gap: var(--gap-base);
                  align-items: center;
                  justify-content: flex-start;
                  min-width: 224;
                  max-width: 100%;
                }
                @media screen and (max-width: 450px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <div
                className={css`
                  border-radius: var(--br-9xs);
                  border: 1px solid var(--primary-arctic-white-03);
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: var(--padding-7xs) var(--padding-6xs);
                  white-space: nowrap;
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
                    border-radius: var(--br-9xs);
                    padding: var(--padding-7xs) var(--padding-6xs);
                    box-sizing: border-box;
                    border: 1px solid var(--primary-arctic-white-03);
                    white-space: nowrap;
                  }
                `}
              >
                <h1
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    line-height: 32px;
                    font-weight: 500;
                    font-family: inherit;
                    display: flex;
                    &:hover {
                      font-weight: 500;
                      font-family: var(--display-medium-24);
                      font-size: var(--display-medium-24-size);
                      line-height: 32px;
                      text-align: left;
                      color: var(--primary-grey-wolf-10);
                      display: flex;
                    }
                  `}
                >
                  Download our app
                </h1>
              </div>
              <div
                className={css`
                  width: 112px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-9xs);
                  height: auto;
                  &:hover {
                    display: flex;
                    width: 112px;
                    height: auto;
                    flex-direction: column;
                    gap: var(--gap-9xs);
                    align-items: flex-start;
                    justify-content: flex-start;
                  }
                `}
              >
                <button
                  className={css`
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    background-color: var(--primary-grey-wolf-10);
                    align-self: stretch;
                    border-radius: var(--br-9xs);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: auto;
                    height: auto;
                    gap: var(--gap-5xs);
                    &:hover {
                      background-color: var(--primary-grey-wolf-10);
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      height: auto;
                      flex-direction: column;
                      gap: var(--gap-5xs);
                      align-items: flex-start;
                      justify-content: flex-start;
                      border-radius: var(--br-9xs);
                    }
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
                      display: flex;
                      width: auto;
                      &:hover {
                        display: flex;
                        align-self: stretch;
                        width: auto;
                        height: 40px;
                      }
                    `}
                    alt=""
                    src="/r-2-1@2x.png"
                  />
                </button>
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
                    display: flex;
                    width: auto;
                    &:hover {
                      display: flex;
                      align-self: stretch;
                      width: auto;
                      height: 41px;
                      border-radius: var(--br-9xs);
                    }
                  `}
                  loading="lazy"
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
                width: auto;
                align-self: unset;
                height: auto;
                font-size: var(--garamond-bold-20-size);
                font-family: var(--garamond-bold-20);
                &:hover {
                  display: flex;
                  width: auto;
                  align-self: unset;
                  height: auto;
                  flex-direction: column;
                  gap: var(--gap-5xs);
                  align-items: center;
                  justify-content: center;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: center;
                  padding: 0px var(--padding-8xs);
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
                    align-items: flex-start;
                    justify-content: center;
                    padding: 0px var(--padding-8xs);
                    box-sizing: border-box;
                  }
                `}
              >
                <h2
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    line-height: 24px;
                    font-weight: 700;
                    font-family: inherit;
                    display: flex;
                    &:hover {
                      font-weight: 700;
                      font-family: var(--garamond-bold-20);
                      font-size: var(--garamond-bold-20-size);
                      line-height: 24px;
                      text-align: left;
                      color: var(--primary-grey-wolf-10);
                      display: flex;
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--neue-medium-16-size);
                      line-height: 19px;
                    }
                  `}
                >
                  Follow on social media
                </h2>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-7xs);
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
                    padding: 0px var(--padding-7xs);
                    box-sizing: border-box;
                  }
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
                    gap: var(--gap-base);
                    &:hover {
                      background-color: var(--iris-100);
                      display: flex;
                      width: 32.4px;
                      height: 29px;
                      flex-direction: column;
                      gap: var(--gap-base);
                      align-items: center;
                      justify-content: center;
                      border-radius: var(--br-45xl);
                      padding: var(--padding-10xs-5) var(--padding-9xs);
                      box-sizing: border-box;
                    }
                  `}
                >
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      position: relative;
                      display: flex;
                      &:hover {
                        display: flex;
                        width: 24px;
                        height: 24px;
                      }
                    `}
                    loading="lazy"
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
                    gap: var(--gap-base);
                    &:hover {
                      background-color: var(--stroke-green-deep);
                      display: flex;
                      width: 32.4px;
                      height: 29px;
                      flex-direction: column;
                      gap: var(--gap-base);
                      align-items: center;
                      justify-content: center;
                      border-radius: var(--br-45xl);
                      padding: var(--padding-10xs-5) var(--padding-9xs);
                      box-sizing: border-box;
                    }
                  `}
                >
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      position: relative;
                      display: flex;
                      &:hover {
                        display: flex;
                        width: 24px;
                        height: 24px;
                      }
                    `}
                    loading="lazy"
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
                    gap: var(--gap-base);
                    &:hover {
                      background-color: var(--fuschia-100);
                      display: flex;
                      width: 32.4px;
                      height: 29px;
                      flex-direction: column;
                      gap: var(--gap-base);
                      align-items: center;
                      justify-content: center;
                      border-radius: var(--br-45xl);
                      padding: var(--padding-10xs-5) var(--padding-9xs);
                      box-sizing: border-box;
                    }
                  `}
                >
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      position: relative;
                      display: flex;
                      &:hover {
                        display: flex;
                        width: 24px;
                        height: 24px;
                      }
                    `}
                    loading="lazy"
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
                    gap: var(--gap-base);
                    &:hover {
                      background-color: var(--accent-link);
                      display: flex;
                      width: 32.4px;
                      height: 29px;
                      flex-direction: column;
                      gap: var(--gap-base);
                      align-items: center;
                      justify-content: center;
                      border-radius: var(--br-45xl);
                      padding: var(--padding-10xs-5) var(--padding-9xs);
                      box-sizing: border-box;
                    }
                  `}
                >
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      position: relative;
                      display: flex;
                      &:hover {
                        display: flex;
                        width: 24px;
                        height: 24px;
                      }
                    `}
                    loading="lazy"
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
                    gap: var(--gap-base);
                    &:hover {
                      background-color: var(--accent-error);
                      display: flex;
                      width: 32.4px;
                      height: 29px;
                      flex-direction: column;
                      gap: var(--gap-base);
                      align-items: center;
                      justify-content: center;
                      border-radius: var(--br-45xl);
                      padding: var(--padding-10xs-5) var(--padding-9xs);
                      box-sizing: border-box;
                    }
                  `}
                >
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      position: relative;
                      display: flex;
                      &:hover {
                        display: flex;
                        width: 24px;
                        height: 24px;
                      }
                    `}
                    loading="lazy"
                    alt=""
                    src="/youtube.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
