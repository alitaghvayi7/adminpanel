import './homePage.css';
import Layout from '../../layout/Layout';
import Feature from '../../components/Feature/Feature';
import Chart from '../../components/Chart/Chart';
import NewMembers from '../../components/NewMembers/NewMembers';
import LastTransactions from '../../components/LastTransactions/LastTransactions';
const data = [
  {
    name: "Jan",
    ActiveUser: 4000,
  },
  {
    name: "Feb",
    ActiveUser: 3000,
  },
  {
    name: "Mar",
    ActiveUser: 2000,
  },
  {
    name: "Apr",
    ActiveUser: 2780,
  },
  {
    name: "May",
    ActiveUser: 1890,
  },
  {
    name: "Jun",
    ActiveUser: 2390,
  },
  {
    name: "Aug",
    ActiveUser: 3490,
  },
  {
    name: "Sep",
    ActiveUser: 5730,
  },
  {
    name: "Nov",
    ActiveUser: 4970,
  },
  {
    name: "Dec",
    ActiveUser: 5240,
  },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="featureContainer">
        <Feature arrowType={'negative'}/>
        <Feature arrowType={'negative'}/>
        <Feature arrowType={'positive'}/>
        <Feature arrowType={'negative'}/>
      </div>
      <div className="chartContainer">
        <h5 className='chartTitle'>Active Users</h5>
        <Chart data={data} dataKey={"ActiveUser"}/>
      </div>
      <div className="homePageInfoFooter">
        <div className="lefthomePageInfoFooter">
          <h5>New Join Members</h5>
          <NewMembers />
        </div>
        <div className="righthomePageInfoFooter">
          <h5>Last TransActions</h5>
          <LastTransactions />
        </div>
      </div>
    </Layout>
  )
}
