import styles from "./page.module.css";


// For Components
import MainBg from "@/app/Components/MainBg/page";
import { Categories } from "@/app/Components/Categories/Categories";
import Wrapper from "@/app/Components/Wrapper/Wrapper";
import { Content } from "@/app/Components/Content/Content";
import { Button } from "@/app/Components/Button/Button";

export default function Home() {
  return (
    <>
      <MainBg />
      <Categories />


      {/* For Custom */}
      <Wrapper>

        <div className={styles.Custom}>
          <Content
            h5Text="TRY HULU (WITH ADS) + LIVE TV FREE FOR 3 DAYS"
            h6Text='Live Tv Makes It Better'
            pText="
            Get 95+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Includes access to endless entertainment with Disney+ and live sports with ESPN+.
            "
          />
          <br /><br />
          <Button
            BtnText="Start Your Free Trial"
          />
        </div>

      </Wrapper>


      {/* For Second Header */}
      <div className={styles.SecondHeader}>

        {/* For Content */}
        <div className={styles.SecondHeaderContent}>
          <h6>Live Sports</h6>
          <p>
            Catch your games at home or on the go. Stream live games from major college and <br /> pro leagues including the NCAA®, NBA, NHL, NFL, and more.
          </p>
        </div>

      </div>

    </>
  );
}
