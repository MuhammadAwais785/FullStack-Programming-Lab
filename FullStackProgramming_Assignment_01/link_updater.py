import os
import glob
import re

html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace specific links based on text
    content = re.sub(r'<a href="[^"]*"([^>]*)>ABOUT US</a>', r'<a href="AboutUs.html"\1>ABOUT US</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>CONTACT US</a>', r'<a href="Cotact Us.html"\1>CONTACT US</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>SIGN IN</a>', r'<a href="LoginPage.html"\1>SIGN IN</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>VIEW CART</a>', r'<a href="Shopping Cart.html"\1>VIEW CART</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>CATEGORY</a>', r'<a href="category.html"\1>CATEGORY</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>BRAND</a>', r'<a href="category.html"\1>BRAND</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>My Account</a>', r'<a href="MyAccount.html"\1>My Account</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>To Checkout</a>', r'<a href="Shopping Cart.html"\1>To Checkout</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>Home</a>', r'<a href="Hottub_main.html"\1>Home</a>', content)
    content = re.sub(r'<a href="[^"]*"([^>]*)>Wishlist</a>', r'<a href="MyAccount.html"\1>Wishlist</a>', content)
    
    # Write back
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Linked all HTML files successfully.")
