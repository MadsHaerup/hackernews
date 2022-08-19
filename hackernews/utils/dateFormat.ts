const dateFormat = (timeStamp: number) => (new Date(timeStamp * 1000).toLocaleDateString('da-DK'));

export default dateFormat;
