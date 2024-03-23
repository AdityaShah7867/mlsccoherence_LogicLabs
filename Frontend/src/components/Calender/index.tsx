
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Calender from "../BigMap/Calender"
const Calendar = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Calendar" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
      <div className="bg-white p-2">
      <Calender />
      </div>
    </div>
  );
};

export default Calendar;
