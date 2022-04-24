import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Up from "../../styles/img/Button/Up.svg";
import Down from "../../styles/img/Button/Downs.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/Reducer";
import { RootState } from "../../redux/Store";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
interface State {
  original: string;
}
const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.up("md")]: {
    position: "relative",

    paddingLeft: 100,
  },
}));
function id() {
  const router = useRouter();
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const { id } = router.query;
  const product = useSelector((state: RootState) =>
    state.counter.products.find((p: { id: any }) => p.id == id)
  );

  console.log(product);
  useEffect(() => {
    product.attributes.coverimage.data.map(
      (item: { attributes: { url: string } }) =>
        setState(
          //FIXME:ANY type
          (oldstate): any => [
            ...oldstate,
            {
              original: `${process.env.NEXT_PUBLIC_URL}${item.attributes.url}`,
              thumbnail: `${process.env.NEXT_PUBLIC_URL}${item.attributes.url}`,
            },
          ]
        )
    );
  }, []);

  console.log(state);
  return (
    <div>
      <Navbar />

      <Grid container sx={{ marginTop: 5 }}>
        <Root>
          <Grid item lg={4} md={12} xs={12}>
            <ImageGallery
              items={state}
              autoPlay={false}
              showPlayButton={false}
            />
          </Grid>
        </Root>
        <Grid item lg={4} md={12} xs={12} sx={{ marginLeft: 10 }}>
          <h1>{product.attributes.name}</h1>

          <h1 style={{ marginLeft: "40%" }}>{product.attributes.price} บาท</h1>
          <Box sx={{ display: "flex", marginLeft: "20%" }}>
            <IconButton
              sx={{ marginRight: 1 }}
              onClick={() =>
                dispatch(
                  increment({
                    price: product.attributes.price,
                    product: product,
                  })
                )
              }
            >
              <Image src={Up} />
            </IconButton>
            <h1>{product.quantity}</h1>
            <IconButton sx={{ marginLeft: 1 }} onClick={() =>
                dispatch(
                  decrement({
                    price: product.attributes.price,
                    product: product,
                  })
                )
              }>
              <Image src={Down} />
            </IconButton>
           
          </Box>
          <Link href ="/explore/checkout">

          <Button variant="contained"> Checkout</Button>
          </Link>
          <Box
            sx={{
              visibility: "visible",
              width: "70%",
              height: "30%",
              overflow: "auto",
              marginTop: 3,
            }}
            className = "description"
          >
            ยินดีต้อนรับเข้าสู่ Readery — ร้านหนังสือเล็กๆ

ทางร้านจัดส่งสินค้า
🚚 วันจันทร์-ศุกร์ (ยกเว้นวันหยุดนักขัตฤกษ์)

สอบถามเพิ่มเติม
📚 จันทร์-ศุกร์ เวลา 09:00-17:00

** หากสั่งหนังสือเล่มอื่นๆ พร้อมกับหนังสือ Pre-Order ทางร้านจะจัดส่งพร้อมกันเมื่อหนังสือเล่มพรีออเดอร์พร้อมส่ง **

** กดติดตาม Readery เพื่อรับข่าวสาร และส่วนลดพิเศษจากทางร้าน :)

--------------------------------------------------------------------

รายละเอียดหนังสือ

เล่มแรกในชุดหนังสือประวัติศาสตร์มนุษยชาติฉบับกราฟิกที่ยิ่งใหญ่ ภาพประกอบงดงาม เนื้อหาจากหนังสือที่สร้างปรากฏารณ์ระดับนานาชาติของ ยูวัล โนอาห์ แฮรารี

นี่คือเรื่องราวของวานรที่ไม่สลักสำคัญซึ่งกลายเป็นเจ้าผู้ครอบครองโลก ผู้สามารถแบ่งแยกอะตอม บินไปยังดวงจันทร์ และควบคุมจัดการรหัสพันธุกรรมของชีวิต

ยูวัล โนอาห์ แฮรารี ทำหน้าที่เป็นมัคคุเทศก์ ร่วมกับตัวละครอย่างบิล ผู้เกิดก่อนประวัติศาสตร์ ดร. ฟิกชั่น และนักสืบโลเปซ นำพาผู้อ่านเดินทางกลับไปยังประวัติศาสตร์ที่ดิบเถื่อน วิวัฒนาการของมนุษย์ที่มาในรูปของรายการเกมโชว์แบบเรียลิตี้ สำรวจการเผชิญหน้าครั้งแรกระหว่างเซเปียนส์และนีแอนเดอร์ธัลส์ผ่านผลงานชิ้นเอกของศิลปะสมัยใหม่ การสูญพันธุ์ของแมมมอธและเสือเขี้ยวดาบที่บอกเล่าใหม่ในรูปแบบของภาพยนตร์เบื้องหลังเหตุฆาตกรรม

เซเปียนส์ ประวัติศาสตร์ฉบับกราฟิก หนังสือที่ลึกซึ้งถึงรากฐานและตลกอย่างร้ายกาจ วาดภาพเรื่องราวของมนุษยชาติขึ้นใหม่ อัดแน่นด้วยความรู้และอารมณ์ขันอย่างทรงพลัง
          </Box>
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <Box sx={{ backgroundcolor: "#000" }}>dfdfdf</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default id;
