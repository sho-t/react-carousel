import styled from 'styled-components';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import { Carousel} from 'components/Carousel';

const accountingImages = [
  { title: "faa", url: "https://dummyimage.com/700x400/ffaaaa/444444" },
  { title: "fba", url: "https://dummyimage.com/700x400/ffbbaa/444444" },
  { title: "fca", url: "https://dummyimage.com/700x400/ffccaa/444444" },
] as const

export const AccountingCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel totalContents={accountingImages.length}>
        <Carousel.PrevButton>
          <IoIosArrowDropleft color="#59A0D9" size={50}/>
        </Carousel.PrevButton>
        <ContentWrapper>
          {accountingImages.map((item, index) => {
            return (
              <Carousel.Content index={index}>
                <Image src={item.url} alt={item.title} />
              </Carousel.Content>
            )
          })}
        </ContentWrapper>
        <Carousel.NextButton>
          <IoIosArrowDropright color="#59A0D9" size={50}/>
        </Carousel.NextButton>
      </Carousel>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  display: flex;
  padding: 30px 0;
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Image = styled.img`
    max-width: 100%;
    height: auto;
`