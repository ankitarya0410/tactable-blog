import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import React from 'react';
import Card from 'common/card/card';
import '@testing-library/jest-dom';

const sampleData = {
  title: "title 12",
  description: "Et debitis occaecati veritatis similique omnis sed. Repellat pariatur vitae iure autem impedit deleniti libero. Deserunt praesentium voluptas iste impedit nisi harum expedita. Non earum voluptas fugit sit est. Ad quisquam minus.",
  createdAt: "2021-07-13T12:50:02.951Z",
  updatedAt: "2021-09-16T22:32:10.602Z",
  id: 12,
  authors: [
    {
      createdAt: "2020-10-27T18:41:54.186Z",
      name: "Darrin Wuckert",
      avatar: "https://cdn.fakercloud.com/avatars/dhrubo_128.jpg",
      updatedAt: "2021-09-17T15:17:06.779Z",
      id: 12,
      postId: 12
    }
  ],
    comments: [
    {
      createdAt: "2021-02-23T23:09:15.912Z",
      title: "Sed quis omnis.",
      description: "Ipsa sapiente aut qui quo enim officiis. Quis dolor cum aut dolores impedit error dolore. Accusantium unde voluptatibus iure laudantium recusandae sit incidunt odio rerum. Rem dolor necessitatibus eum rerum minus.",
      updatedAt: "2021-09-17T05:21:04.864Z",
      id: 12,
      postId: 12
    }
  ]
};

describe('Card', () => {
  it('renders a card with author name', () => {

    const { asFragment, getByText } = render(<Card
      id={sampleData.id}
      title={sampleData.title}
      description={sampleData.description}
      createdAt={sampleData.createdAt}
      authors={sampleData.authors}
      comments={sampleData.comments}
      isMobile={false}
      key={sampleData.id}
    />)
    expect(getByText('Darrin Wuckert')).toBeInTheDocument()
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="sc-bczRLJ blnZMb"
  >
    <div
      class="sc-gsnTZi gaQnzH"
    >
      <img
        alt="title 12"
        src=""
      />
    </div>
    <div
      class="sc-dkzDqf dIlGAR"
    >
      <div
        class="sc-eCYdqJ lmqWzR"
      >
        <div
          class="sc-jqUVSM JmJXS"
        >
          Created on   07/13/2021
        </div>
        <div
          class="sc-jSMfEi fpEtes"
        >
          <img
            class="sc-hKMtZM fUtKCn"
            src="https://cdn.fakercloud.com/avatars/dhrubo_128.jpg"
          />
          <span>
            Darrin Wuckert
          </span>
        </div>
      </div>
      <h3>
        title 12
      </h3>
      <p>
        Et debitis occaecati veritatis similique omnis sed. Repellat pariatur vitae iure autem impedit deleniti libero. Deserunt praesentium voluptas iste impedit nisi harum expedita. Non earum voluptas fugit sit est. Ad quisquam minus.
      </p>
      <div>
        <button
          class="sc-gKXOVf khxqTS"
          role="button"
        >
          <div>
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-angles-down "
              data-icon="angles-down"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
                fill="currentColor"
              />
            </svg>
            <span>
              Show Comments
            </span>
          </div>
        </button>
        <div />
      </div>
    </div>
  </div>
</DocumentFragment>
`)
  })

  it('renders a card with comment title on click event', async () => {

    render(<Card
      id={sampleData.id}
      title={sampleData.title}
      description={sampleData.description}
      createdAt={sampleData.createdAt}
      authors={sampleData.authors}
      comments={sampleData.comments}
      isMobile={false}
      key={sampleData.id}
    />)

    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => screen.getByText('Sed quis omnis.'))
    expect(screen.getByText('Sed quis omnis.')).toBeInTheDocument()
  })

  it(' does not render an active show comments button when comments array is empty', async () => {

    render(<Card
      id={sampleData.id}
      title={sampleData.title}
      description={sampleData.description}
      createdAt={sampleData.createdAt}
      authors={sampleData.authors}
      comments={[]}
      isMobile={false}
      key={sampleData.id}
    />)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it(' does not render any authors when authors array is empty', async () => {

    render(<Card
      id={sampleData.id}
      title={sampleData.title}
      description={sampleData.description}
      createdAt={sampleData.createdAt}
      authors={[]}
      comments={sampleData.comments}
      isMobile={false}
      key={sampleData.id}
    />)

    const authorName = screen.queryByText('Darrin Wuckert')
    expect(authorName).toBeNull()
  })
})