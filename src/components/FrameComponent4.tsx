import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

export type FrameComponent4Type = {
  className?: string;
  arrowLeft?: string;
  wOMENSSHOESUPTO60OFFTHISW?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  arrowLeft,
  wOMENSSHOESUPTO60OFFTHISW,
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          text-align: left;
          font-size: var(--neue-medium-32-size);
          color: var(--teal-shades-11);
          font-family: var(--neue-medium-20);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 0px var(--padding-11xs);
          box-sizing: border-box;
          max-width: 100%;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-13xl) var(--padding-45xl);
            box-sizing: border-box;
            max-width: 100%;
            gap: var(--gap-xl);
            @media screen and (max-width: 1275px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 750px) {
              padding-left: var(--padding-13xl);
              padding-right: var(--padding-13xl);
              box-sizing: border-box;
            }
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-7xs);
              cursor: pointer;
            `}
            onClick={onFrameContainerClick}
          >
            <img
              className={css`
                height: 28px;
                width: 28px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src={arrowLeft}
            />
          </div>
          <div
            className={css`
              width: 1030px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-107xl) 0px 0px;
              box-sizing: border-box;
              gap: var(--gap-9xs);
              max-width: 100%;
              @media screen and (max-width: 1100px) {
                padding-right: var(--padding-44xl);
                box-sizing: border-box;
              }
              @media screen and (max-width: 750px) {
                padding-right: var(--padding-12xl);
                box-sizing: border-box;
              }
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 120%;
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
                {wOMENSSHOESUPTO60OFFTHISW}
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
                font-size: var(--garamond-bold-20-size);
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 120%;
                  font-weight: 300;
                  display: inline-block;
                  max-width: 100%;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Find women’s athletic sneakers you can wear whether your focus
                for the day is training or chilling. Effortlessly combine the
                best of function and fashion for greatness in every step
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          background-color: var(--color-white);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-13xl) var(--padding-45xl);
          box-sizing: border-box;
          max-width: 100%;
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-11);
          @media screen and (max-width: 750px) {
            padding-left: var(--padding-13xl);
            padding-right: var(--padding-13xl);
            box-sizing: border-box;
          }
        `}
      >
        <div
          className={css`
            flex: 1;
            overflow-x: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: var(--gap-5xs);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              border-bottom: 1px solid var(--cyber-punk-gradient);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              className={css`
                width: 144px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                white-space: nowrap;
              `}
            >
              All women’s collection
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
                width: 61px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 61px;
                white-space: nowrap;
              `}
            >
              Sneakers
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
                width: 116px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 116px;
                white-space: nowrap;
              `}
            >{`Sports & Athletics`}</div>
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
                width: 102px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 102px;
                white-space: nowrap;
              `}
            >{`Gym & Workout`}</div>
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
                width: 54px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 54px;
                white-space: nowrap;
              `}
            >
              Working
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
                width: 98px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 98px;
                white-space: nowrap;
              `}
            >
              Platform shoes
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
                width: 39px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 39px;
                white-space: nowrap;
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
                width: 45px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 45px;
                white-space: nowrap;
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
                width: 34px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 34px;
                white-space: nowrap;
              `}
            >
              Party
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
                width: 42px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 42px;
                white-space: nowrap;
              `}
            >
              Tennis
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
                width: 53px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 53px;
                white-space: nowrap;
              `}
            >
              Slippers
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
                width: 49px;
                position: relative;
                line-height: 17px;
                display: inline-block;
                min-width: 49px;
                white-space: nowrap;
              `}
            >
              Canvas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;