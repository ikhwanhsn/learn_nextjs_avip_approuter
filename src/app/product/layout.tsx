const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <>
      <h1>Halaman Product Layout</h1>
      {children}
      {/* {modal} */}
    </>
  );
};

export default Layout;
