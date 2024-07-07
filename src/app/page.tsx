const styles = require('/src/app/test/style.module.css');
import Image from 'next/image'

export default function Page() {
	const widthValue = '30%';
	const heightValue = '15%';
  return 	(
	<Image src="/img/logo.png" style={{ width: widthValue , height: heightValue }} alt="alt text"/>
	);
}