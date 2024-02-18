const Layout = ({
  children,
  product,
  analytic,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  analytic: React.ReactNode;
}) => {
  return (
    <main>
      {children}
      {product}
      {analytic}
    </main>
  );
};

export default Layout;
