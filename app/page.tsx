import '../src/style.module.css';
import Image from 'next/image'

export default function Page() {
  return 	<div className="scroll-container">
	<Image src="/img/logo.png" width= ".30" height=".10" alt="alt text"/>
	<Image src="/img/tacos/firefly_classic_beef taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_grilled_chicken_taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_classic_beef taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_classic_beef taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_classic_beef taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_grilled_chicken_taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_classic_beef taco.jpg" width= ".15" alt="alt text" />
	<Image src="/img/tacos/firefly_classic_beef taco.jpg" width= ".15" alt="alt text"/>
	</div>
}