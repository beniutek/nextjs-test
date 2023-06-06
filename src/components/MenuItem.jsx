// /src/components/MenuItem.js
import Image from 'next/image';
import Link from 'next/link';

function MenuItem({ item }) {
    return (
        <Link href={`/menu/${item.id}`}>
          <div>
              <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={300}
              />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{`Price: $${item.price.toFixed(2)}`}</p>
          </div>
        </Link>
    );
}

export default MenuItem;
