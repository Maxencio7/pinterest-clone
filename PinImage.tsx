interface PinImageProps {
  image: string;
}

const PinImage = ({ image }: PinImageProps) => {
  return (
    <img
      src={image}
      alt="Pin image"
      className="w-full h-48 object-cover rounded-t-md"
    />
  );
};

export default PinImage;
