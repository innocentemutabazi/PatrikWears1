import { FunctionComponent } from "react";
import NewsLetterVariant from "./NewsLetterVariant";
import { css } from "@emotion/css";

export type FrameComponent3Type = {
  className?: string;
  arrowRight?: string;
  r21?: string;
  downloadOnTheAppStoreLogo?: string;
  facebook?: string;
  x?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  arrowRight,
  r21,
  downloadOnTheAppStoreLogo,
  facebook,
  x,
  instagram,
  linkedin,
  youtube,
}) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px;
          box-sizing: border-box;
          max-width: 100%;
          text-align: center;
          font-size: var(--neue-medium-32-size);
          color: var(--color-white);
          font-family: var(--neue-medium-20);
        `,
        className,
      ].join(" ")}
    >
      <NewsLetterVariant />
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
                      src={r21}
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
                    src={downloadOnTheAppStoreLogo}
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
                      src={facebook}
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
                      src={x}
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
                      src={instagram}
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
                      src={linkedin}
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
                      src={youtube}
                    />
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

export default FrameComponent3;