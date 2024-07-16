import './HelloWorld.css'

export default function HelloWorld({ msg }: { msg: string }) {
  return (
    <>
      <h1>{ msg }</h1>

      <p>
        This is a demo for <strong>ReactStickyToParent</strong> component.
      </p>
      <p>
        Also, check the <code>App.tsx</code> for integration details.
      </p>

      <hr className="hr"/>

      <p>
        <img src="https://picsum.photos/400/300?1" alt="Random image" />
      </p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae dignissimos fuga ea pariatur quis voluptate! Ea, quo animi amet perspiciatis placeat, dolores magni fuga officiis laboriosam harum autem ipsam.
      </div>
      <p>
        <img src="https://picsum.photos/400/300?2" alt="Random image" />
      </p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae dignissimos fuga ea pariatur quis voluptate! Ea, quo animi amet perspiciatis placeat, dolores magni fuga officiis laboriosam harum autem ipsam.
      </div>
      <p>
        <img src="https://picsum.photos/400/300?3" alt="Random image" />
      </p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae dignissimos fuga ea pariatur quis voluptate! Ea, quo animi amet perspiciatis placeat, dolores magni fuga officiis laboriosam harum autem ipsam.
      </div>
      <p>
        <img src="https://picsum.photos/400/300?4" alt="Random image" />
      </p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae dignissimos fuga ea pariatur quis voluptate! Ea, quo animi amet perspiciatis placeat, dolores magni fuga officiis laboriosam harum autem ipsam.
      </div>
      <p>
        <img src="https://picsum.photos/400/300?5" alt="Random image" />
      </p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae dignissimos fuga ea pariatur quis voluptate! Ea, quo animi amet perspiciatis placeat, dolores magni fuga officiis laboriosam harum autem ipsam.
      </div>
    </>
  )
}
