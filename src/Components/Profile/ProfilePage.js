import React from 'react';

const ProfilePage = (props) => {
  const { match } = props;
  return(
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          This is Profile Page. The Profile ID is: {match.params.id}
        </div>
        <div className="col-sm-12 col-lg-4">
          Profile Page Sidebar.
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;