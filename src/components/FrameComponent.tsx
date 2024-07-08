import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type FrameComponentType = {
  className?: string;
  imageShape?: string;
  doubledImages?: string;
  doubledImages1?: string;
  arrowRight?: string;
  arrowRight1?: string;
  arrowRight2?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  imageShape,
  doubledImages,
  doubledImages1,
  arrowRight,
  arrowRight1,
  arrowRight2,
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
          padding: 0px 0px var(--padding-23xl);
          box-sizing: border-box;
          max-width: 100%;
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-01);
          font-family: var(--neue-medium-20);
          @media screen and (max-width: 450px) {
            padding-bottom: var(--padding-8xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          background-color: var(--iris-100);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-base) var(--padding-xl);
        `}
      >
        <div
          className={css`
            width: 435px;
            position: relative;
            line-height: 17px;
            display: inline-block;
          `}
        >
          SAVE UP TO 60% WHEN YOU PURCHASE FROM OUR PATRIKLUB
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          row-gap: 20px;
          max-width: 100%;
          font-size: var(--garamond-bold-20-size);
          color: var(--color-white);
          @media screen and (max-width: 1275px) {
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      >
        <img
          className={css`
            align-self: stretch;
            width: 426.7px;
            position: relative;
            max-height: 100%;
            object-fit: cover;
            min-height: 570px;
            max-width: 100%;
            flex-shrink: 0;
          `}
          alt=""
          src={imageShape}
        />
        <div
          className={css`
            height: 570px;
            width: 1280px;
            position: relative;
            max-width: 100%;
            flex-shrink: 0;
          `}
        >
          <img
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              bottom: 0px;
              left: 0px;
              max-height: 100%;
              width: 426.7px;
              object-fit: cover;
            `}
            alt=""
            src={doubledImages}
          />
          <img
            className={css`
              position: absolute;
              height: 100%;
              top: 0px;
              bottom: 0px;
              left: 853.3px;
              max-height: 100%;
              width: 426.7px;
              object-fit: cover;
              z-index: 1;
            `}
            alt=""
            src={doubledImages1}
          />
        </div>
        <div
          className={css`
            width: 996px;
            margin: 0 !important;
            position: absolute;
            top: 394px;
            left: 40px;
            background-color: var(--color-gray-100);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: var(--padding-base);
            box-sizing: border-box;
            gap: var(--gap-5xs);
            max-width: 100%;
            z-index: 2;
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
            `}
          >
            <div
              className={css`
                width: 409px;
                position: relative;
                line-height: 120%;
                display: inline-block;
                @media screen and (max-width: 750px) {
                  font-size: var(--neue-medium-16-size);
                  line-height: 19px;
                }
              `}
            >
              MAINTAIN YOUR STEEZ AND COMPOSURE
            </div>
          </div>
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
                  font-size: var(--neue-medium-16-size);
                  line-height: 19px;
                }
              `}
            >
              From backpacks to sneakers. These are the best in the market of
              wears to help you look fresh and smart
            </div>
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
              color: var(--whatsapp-black-11);
              @media screen and (max-width: 450px) {
                flex-wrap: wrap;
              }
            `}
          >
            <div
              className={css`
                background-color: var(--electric-lime);
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
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 95px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 95px;
                    @media screen and (max-width: 750px) {
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
                  `}
                  alt=""
                  src={arrowRight}
                />
              </div>
            </div>
            <div
              className={css`
                background-color: var(--electric-lime);
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
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 125px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 125px;
                    @media screen and (max-width: 750px) {
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
                    width: 32px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                  `}
                  alt=""
                  src={arrowRight1}
                />
              </div>
            </div>
            <div
              className={css`
                background-color: var(--electric-lime);
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
                  gap: var(--gap-5xs);
                `}
              >
                <div
                  className={css`
                    width: 96px;
                    position: relative;
                    line-height: 120%;
                    display: inline-block;
                    min-width: 96px;
                    @media screen and (max-width: 750px) {
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
                  `}
                  alt=""
                  src={arrowRight2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;