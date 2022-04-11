import React from "react";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Up from "../../styles/img/Button/Up.svg";
import Down from "../../styles/img/Button/Downs.svg";
import { useRouter } from "next/router";
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
              autoPlay={true}
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
            <IconButton sx={{ marginLeft: 1 }}>
              <Image src={Down} />
            </IconButton>
            <TextField id="outlined-basic" label="Promotion Code" variant="outlined" sx ={{marginLeft: 1 }}/>
          </Box>
          <Button variant="contained"> Checkout</Button>
          <Box sx={{ visibility: 'visible' ,width: '60%',height: '30%' ,overflow:"auto",marginTop:3}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium doloremque asperiores est nam sapiente, voluptates maxime tenetur, nobis dignissimos doloribus, ullam consequuntur ratione. Rem tempore temporibus harum praesentium quas? Quae ipsa, nisi quam temporibus, voluptatem ipsum nesciunt porro et delectus error, a rem officiis modi excepturi necessitatibus itaque corrupti vel. Odio, ea nesciunt nobis id optio tenetur nihil incidunt maiores pariatur et, distinctio sequi tempore, rem enim perspiciatis. Pariatur provident est sint magnam quas voluptates soluta ipsa similique ea. Vitae ipsum consequuntur sint libero quaerat illum vel aliquid a, quos, tempore voluptates rerum perspiciatis inventore. Culpa ad eius odit? Ipsam dolores veniam, consequuntur fugiat nihil reprehenderit temporibus atque beatae illo magnam vero rerum laboriosam, praesentium ad harum quo molestiae maiores aliquam. Ipsa, reprehenderit minus dolores eos voluptate accusantium modi velit labore earum laborum voluptatibus ullam aspernatur dolorem iusto tenetur, voluptates, amet enim atque pariatur molestiae error maxime! Ratione soluta qui optio? Unde aliquid deleniti error ea modi labore adipisci odit non, eum consequuntur, eveniet est, vitae aperiam ipsa. Beatae commodi ex quam iure minus dolorem porro mollitia labore nesciunt, quibusdam blanditiis id exercitationem alias ad, eos itaque necessitatibus animi. Quis sint doloribus libero officiis ad consequatur animi in vel inventore? Sed doloribus voluptas quidem ab veritatis cupiditate explicabo quae nemo. Nostrum a velit provident ipsa, rem earum quisquam quo molestiae doloremque quas voluptatum tenetur, modi reprehenderit magni est voluptatibus, qui vel in soluta aspernatur iusto repellat! Esse odio optio nihil delectus, quaerat dolor hic blanditiis illo fugit corrupti possimus odit aspernatur libero maiores consectetur magnam eum omnis sed ipsam veniam? Nemo dolorem cumque autem quos explicabo optio nobis aliquid perspiciatis tenetur assumenda illo delectus accusamus numquam, illum, voluptatum saepe fugiat? Accusamus sapiente laudantium quasi eligendi nulla? Ipsam libero assumenda numquam animi a, sunt ad ex, enim provident quidem non eos architecto? Nesciunt dignissimos corrupti nemo eaque earum, eligendi fuga voluptate alias aliquid consequuntur error, voluptatem sequi sit. Praesentium in magni, animi inventore esse earum nobis ipsam dolore eius veniam? Non doloribus eius unde voluptatibus saepe magnam ducimus, cumque voluptates totam aspernatur repudiandae molestiae eum quam consequuntur deleniti laborum ab veniam modi repellendus nostrum tempore eaque? Dignissimos libero non itaque laudantium eligendi sequi, odit facere pariatur laborum nobis ad magnam ex repudiandae animi. Pariatur voluptates nobis quae a laboriosam veritatis id adipisci eos quaerat quis distinctio et, modi quo fuga, voluptatum iusto voluptatem illum, saepe suscipit veniam eius ratione obcaecati fugit magnam! Vitae accusamus suscipit dolorem totam eveniet cum. Sint dignissimos ex perferendis, praesentium architecto soluta deserunt nobis ea quas porro eum, assumenda voluptatem aliquam labore odit provident sed distinctio aliquid beatae veritatis inventore minus quaerat illo sunt. Eligendi doloribus, in quod molestias natus illo aliquid sit, hic reprehenderit qui quidem praesentium? Animi, veniam tenetur quod numquam doloribus quisquam nam similique beatae, a ducimus, necessitatibus inventore ut officiis. Odit, repudiandae enim incidunt, et nobis quasi cupiditate vel amet maiores, itaque accusamus consectetur laudantium nesciunt laborum sunt! Autem facere quo nisi ducimus, sunt dicta, nihil ratione labore, voluptatem molestiae blanditiis quos.

          </Box>
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <p>{product.attributes.description}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default id;
