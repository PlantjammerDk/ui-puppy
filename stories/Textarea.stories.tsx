import React from "react";
import { Textarea } from "../src/Textarea";

export default {
  title: "Textarea",
  component: Textarea,
};

export const Status = () => (
  <div className="flex flex-col p-8 space-y-4">
    <Textarea label="Primary" caption="This is a caption" status="primary">
      Some text content
    </Textarea>
    <Textarea label="Success" caption="This is a caption" status="success">
      Some text content
    </Textarea>
    <Textarea label="Info" caption="This is a caption" status="info">
      Some text content
    </Textarea>
    <Textarea label="Warning" caption="This is a caption" status="warning">
      Some text content
    </Textarea>
    <Textarea label="Danger" caption="This is a caption" status="danger">
      Some text content
    </Textarea>
    <Textarea label="Basic" caption="This is a caption" status="basic">
      Some text content
    </Textarea>
  </div>
);

export const LongText = () => (
  <div className="flex flex-col p-8 space-y-4">
    <Textarea label="Long text">
      Bar skinny in americano wings turkish extraction, foam sit bar aromatic
      cultivar. Ristretto con panna skinny carajillo, macchiato irish flavour
      foam to go filter variety. Cup skinny, organic, java instant latte, aroma
      mazagran white as skinny single shot. Redeye, caffeine organic, americano
      in variety that affogato steamed. Ristretto, viennese, java cup sit latte
      blue mountain. Variety, plunger pot dripper macchiato cinnamon crema
      caffeine redeye steamed whipped organic. Filter viennese, to go, affogato
      coffee java barista white dark beans. A that java, est sweet grounds
      mocha, foam spoon trifecta et single shot. White, filter single shot blue
      mountain ut barista doppio. Extra qui, and acerbic caffeine affogato cream
      instant est acerbic qui caffeine. Turkish aroma, blue mountain mazagran
      affogato est saucer aftertaste instant white. Black, shop espresso, doppio
      wings foam kopi-luwak sit instant. Beans trifecta, acerbic, carajillo,
      irish aftertaste ut instant kopi-luwak. Chicory french press, macchiato
      cinnamon to go, caffeine cappuccino, white percolator extraction seasonal
      strong. As so in black robust single shot caffeine et variety roast.
      Strong decaffeinated so arabica so cup, sugar body organic wings so aroma.
      Cinnamon french press siphon blue mountain espresso variety shop trifecta
      caramelization. Id half and half cinnamon, saucer plunger pot single
      origin coffee body caramelization beans caffeine. Strong rich, redeye
      dark, blue mountain caffeine sweet sit et grounds. And blue mountain latte
      irish flavour wings coffee breve.
    </Textarea>
  </div>
);
