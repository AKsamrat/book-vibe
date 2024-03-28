import { getStoreApplication } from '../Components/Utility/LocalStorage';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import UseBookData from '../Hooks/UseBookData';

const PagesToRead = () => {
  const allReadData = getStoreApplication('read');
  const { data: bookData, loading } = UseBookData();
  const getData =
    bookData.filter(item => allReadData.includes(item.bookId)) || {};
  // console.log(getData);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // const CustomTooltip = ({ active, payload, label, bookName }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="custom-tooltip" style={{ backgroundColor: '#fff' }}>
  //         <p className="">{`${payload[0].bookName} : ${payload[0].totalPages}`}</p>
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  return (
    <div
      className="mt-5"
      style={{
        width: '100%',
        height: '80vh',
      }}
    >
      <ResponsiveContainer>
        <BarChart
          width={700}
          height={400}
          data={getData}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis
            label={{ value: 'Total Page', angle: -90, position: 'insideLeft' }}
          />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {getData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          {/* <Tooltip content={<CustomTooltip />} />
          <Legend /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
