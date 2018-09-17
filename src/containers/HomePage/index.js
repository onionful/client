import { ContentWrapper } from 'components';
import { glamorous, React } from 'utils/create';
import config from 'config';

const HomePageWrapper = glamorous.div({
  marginTop: config.ui.headerHeightPx,
  overflow: 'hidden',
});

const HomePage = () => (
  <HomePageWrapper>
    <section>
      <ContentWrapper>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in magnam odio unde
          vitae. At commodi corporis delectus dolorem exercitationem expedita facilis optio quia,
          quis quisquam rem repellendus vitae, voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis ducimus
          laudantium nesciunt placeat? Amet cupiditate deleniti dolor earum eos harum iure libero,
          nesciunt quos sequi soluta voluptate. Culpa, incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, aliquid animi blanditiis
          consequuntur, delectus eum fugiat impedit nihil odit quam rem saepe tempora ullam vel.
          Aliquid architecto dolores suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi atque beatae
          consectetur doloremque earum excepturi explicabo illo maiores nihil odio, odit omnis quasi
          quidem repellat sapiente temporibus veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis cupiditate ea
          eligendi et ex, facere iusto neque nesciunt obcaecati pariatur quam qui quibusdam quo
          repellendus sed tempora tenetur, voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dolore
          expedita! Accusantium adipisci asperiores blanditiis error est facilis fugiat nisi nostrum
          officiis quae, quibusdam, quo recusandae suscipit ullam velit? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Impedit in magnam odio unde vitae. At commodi corporis
          delectus dolorem exercitationem expedita facilis optio quia, quis quisquam rem repellendus
          vitae, voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis ducimus
          laudantium nesciunt placeat? Amet cupiditate deleniti dolor earum eos harum iure libero,
          nesciunt quos sequi soluta voluptate. Culpa, incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, aliquid animi blanditiis
          consequuntur, delectus eum fugiat impedit nihil odit quam rem saepe tempora ullam vel.
          Aliquid architecto dolores suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi atque beatae
          consectetur doloremque earum excepturi explicabo illo maiores nihil odio, odit omnis quasi
          quidem repellat sapiente temporibus veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis cupiditate ea
          eligendi et ex, facere iusto neque nesciunt obcaecati pariatur quam qui quibusdam quo
          repellendus sed tempora tenetur, voluptatum!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis dolore
          expedita! Accusantium adipisci asperiores blanditiis error est facilis fugiat nisi nostrum
          officiis quae, quibusdam, quo recusandae suscipit ullam velit?
        </p>
      </ContentWrapper>
    </section>
  </HomePageWrapper>
);

export default HomePage;
