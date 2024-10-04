// app/layout.js
import "./globals.css"; // Your global styles
export const metadata = {
  title: "Yash",
  description: "Birthday Wishes",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
     
      <body>
      
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
          
            {children}
         
            </main>
          
        </div>
        
       
       
       
      </body>
      
    </html>
   
  );
}
