import Image from 'next/image';
import styled from 'styled-components';

interface ProductImageProps {
  img: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ img }) => {
  return (
    <Wrapper>
      <StyledImage src={img} width={297} height={484} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.figure``;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default ProductImage;
