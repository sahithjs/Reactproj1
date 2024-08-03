export default function CoreConcept({ image, title, description }) {
    return (
      <li>
        <img src={image} alt={description} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }