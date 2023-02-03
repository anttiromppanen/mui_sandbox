import React from 'react';
import { render } from '@testing-library/react';
import BlogCard from './BlogCard';
import img1 from '../../static/img1.jpg';

const props = {
  author: 'test author',
  dateAdded: '3/1/2022',
  heading: 'test heading',
  bodyText: 'test body',
  imgSrc: img1,
};

let container = null;

beforeEach(() => {
  container = render(<BlogCard
    author={props.author}
    dateAdded={props.dateAdded}
    heading={props.heading}
    bodyText={props.bodyText}
    imgSrc={props.imgSrc}
  />);
});

describe('<BlogCard />', () => {
  it('should render heading with correct parameter', async () => {
    expect(await container.findByText(/test heading/i)).toBeInTheDocument();
  });

  it('should render bodyText with correct parameter', async () => {
    expect(await container.findByText(/test body/i)).toBeInTheDocument();
  });

  it('should render dateAdded with correct parameter', async () => {
    expect(await container.findByText('3/1/2022')).toBeInTheDocument();
  });

  it('should render author with correct parameter', async () => {
    expect(await container.findByText(/test author/i)).toBeInTheDocument();
  });
});
