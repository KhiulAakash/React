// About.js
import React, { useContext } from 'react';
import "./style.css"
import UserContext from '../../Context/UserContext';

const About = () => {
    const{user}=useContext(UserContext)
  return (
    <div className='About'style={{backgroundColor:user?"#242424":"white",color:user?"white":"black"}}>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, doloremque cum qui dolorum iure ratione, ullam, maiores quis totam tempora numquam aperiam similique quisquam minus laudantium iusto et esse officiis!
      Aliquid est nulla expedita eum officia maxime laudantium ducimus labore voluptates possimus veritatis alias repellat sed, illum id libero exercitationem eius magni nam odio. Nihil at veniam tempore explicabo? Soluta.
      At temporibus quod ipsa ipsam, consequuntur doloremque excepturi molestiae velit, quasi ad, dolorem sed. Nam architecto quod hic voluptate fuga, veritatis beatae eos cupiditate dignissimos? Itaque harum eos nisi dignissimos.
      Inventore eius doloribus beatae perferendis? Impedit veniam neque, molestiae, deserunt ducimus earum quae unde laborum tenetur, ad perspiciatis. Totam harum reiciendis cum rerum dolorum nam impedit excepturi laboriosam voluptas enim.
      Rerum illo perspiciatis explicabo eaque cumque iusto cum, voluptatibus reprehenderit sint fuga unde alias. Temporibus laborum ipsam ex, incidunt harum nesciunt iure magnam hic saepe optio. Suscipit quia molestiae eos.
      Eaque modi, consectetur voluptatibus illum veritatis vel culpa quibusdam nisi nesciunt dicta adipisci quaerat, quam praesentium eligendi tempore ex perspiciatis iste minus. Inventore perferendis alias nobis officiis soluta amet ratione?
      Unde neque quos, natus vel iusto aspernatur? Eveniet ab quasi veniam. Perspiciatis voluptate dolor optio soluta numquam quis et quae illo, nihil quibusdam non, unde consequatur repellendus laborum quisquam eum?
      Cumque accusamus consequatur, aliquam natus, eveniet porro tempore nihil fugit minima ea perferendis, quo animi corporis numquam odit? Provident ducimus illo nobis rem quidem placeat ut deserunt explicabo cum velit.
      Sit numquam facere eligendi nobis quo cupiditate dolores qui iure libero deserunt laudantium eos at illum magni magnam, adipisci ad ex enim incidunt! Aperiam, pariatur deleniti laborum sit dignissimos perspiciatis!
      Inventore, illo voluptates dolorem quae rerum pariatur in ratione laboriosam iusto adipisci perferendis provident voluptatibus fugit laborum unde. Itaque in similique quaerat error quae, iusto nam voluptatum vel amet veritatis?</p>
    </div>
  );
};

export default About;
