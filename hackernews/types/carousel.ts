type Story = {
    by: string,
    score: number,
    time: number,
    id:number,
    title: string,
    url: string,  
};

interface CarouselData {
  stories: Story[],
}

export default CarouselData;