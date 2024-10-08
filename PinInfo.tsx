interface Props {
  description: string;
}

const PinInfo = ({ description }: Props) => {
  return (
    <div className="card p-4">
      <p className="card-text text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default PinInfo;
