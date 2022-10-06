import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const SingleProductDetail:FC = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="SinglePagebody">
        <Container>
          <div className="main">
            <h6>Heading</h6>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos nihil sapiente labore ut facilis, quod pariatur asperiores quos nobis odio a exercitationem quibusdam, eius nostrum voluptas deserunt qui molestias voluptatum modi sed distinctio doloribus accusamus adipisci! Quisquam laborum eos excepturi officia neque pariatur perferendis explicabo quidem est accusantium aperiam distinctio consectetur officiis, aspernatur rerum voluptates? Autem fugiat tempora ipsam? Ex maxime reiciendis sit? Iste placeat dolorum tenetur asperiores a rerum vitae, nihil similique doloremque, enim expedita incidunt? Quisquam, alias tempora quibusdam, nobis repudiandae blanditiis sequi commodi eligendi quaerat quasi sunt dolores, quas quia sapiente porro eum corrupti culpa et ducimus adipisci similique. Laboriosam cupiditate ad voluptatem, vitae minima adipisci corporis rerum officia, fuga, ipsam numquam minus veritatis iure ratione voluptates eligendi perferendis quasi nisi porro quos voluptatum reiciendis incidunt dolorum pariatur! Quo dolor harum necessitatibus similique et vel atque, itaque reiciendis tempore, rerum sed dolorem reprehenderit aperiam ipsum aliquid inventore. Quibusdam recusandae suscipit saepe placeat accusamus provident aliquid asperiores magni harum hic doloremque tempore soluta, ab ut iste veniam labore! Eligendi, fugit velit voluptatibus est at harum incidunt ea alias. Inventore tenetur quo excepturi sit possimus, iusto, eveniet, expedita molestias soluta iure quisquam hic! Vitae blanditiis corrupti qui, natus distinctio rerum tempora tempore minus quam, iure modi molestiae inventore et aut voluptatem sed quas obcaecati repudiandae voluptas accusantium. Eligendi cupiditate magni esse, autem odit doloribus, totam porro velit pariatur animi deleniti atque ipsam deserunt illo recusandae cumque obcaecati incidunt? Debitis quibusdam fugiat voluptatem cupiditate fuga. Adipisci nisi laborum eius inventore eum beatae! Doloribus earum, aperiam ipsum ea similique eveniet inventore veritatis adipisci natus quo qui? Sequi porro beatae a perferendis suscipit, cupiditate dignissimos voluptas, ex quam voluptatibus numquam culpa eum natus provident, consectetur unde nemo aliquam modi! Ullam doloribus quasi dicta delectus impedit perspiciatis at, voluptatem vitae ad totam.</p>
          </div>
        </Container>
    </div>
  );
};
