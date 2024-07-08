import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent4 from "../components/FrameComponent4";
import MobileShoppingCard1 from "../components/MobileShoppingCard1";
import { css } from "@emotion/css";
import FrameComponent3 from "../components/FrameComponent3";

const KidHome: FunctionComponent = () => {
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
          wOMENSSHOESUPTO60OFFTHISW="WOMEN’S SHOES: UP TO 60% OFF THIS WEEK"
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
      <FrameComponent3
        arrowRight="/arrow-right.svg"
        r21="/r-2-1@2x.png"
        downloadOnTheAppStoreLogo="/downloadontheappstorelogopng23-1@2x.png"
        facebook="/facebook.svg"
        x="/x.svg"
        instagram="/instagram.svg"
        linkedin="/linkedin.svg"
        youtube="/youtube.svg"
      />
    </div>
  );
};

export default KidHome;