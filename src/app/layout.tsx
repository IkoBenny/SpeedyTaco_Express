const styles = require('/src/app/test/style.module.css');

console.log(styles.gridContainer);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
			<div className= {styles.gridContainer}>
			<button className= {styles.gridItem}>Tacos</button>
			<button className= {styles.gridItem}>Burritos</button>
			<button className={styles.gridItem}>Quesadillas</button>  
			<button className={styles.gridItem}>Sides</button>
			<button className={styles.gridItem}>Drinks</button>
			<button className={styles.gridItem}>Desserts</button>  
			<button className={styles.gridItem}>Specials</button>	
		</div>
			{children}
	  </body>
    </html>
  )
}