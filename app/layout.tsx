import '../src/style.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
	  
	  
	  <div className="grid-container">
	  		<button className="grid-item">Tacos</button>
			<button className="grid-item">Burritos</button>
			<button className="grid-item">Quesadillas</button>  
			<button className="grid-item">Sides</button>
			<button className="grid-item">Drinks</button>
			<button className="grid-item">Desserts</button>  
			<button className="grid-item">Specials</button>
		</div>
	
	  {children}
	  </body>
    </html>
  )
}