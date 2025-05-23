import { HistoryData, HistoryDataTypeValue } from "@/types/ListType";
import { formatDate } from "@/utils/formatDate";
import ListTableComponent from "@/components/ListTableComponent";

interface HistoryListProp {
  userHistoryData: HistoryData[];
  setObserverRef: (node: HTMLTableRowElement) => void;
  isScrollLoading: boolean;
}

const HistoryList = ({
  userHistoryData,
  setObserverRef,
  isScrollLoading,
}: HistoryListProp) => {
  const columns = [
    {
      key: "startDate",
      label: "대여일",
      render: (value: HistoryDataTypeValue) =>
        value ? formatDate(value as string) : "날짜 정보를 불러올 수 없습니다.",
    },
    {
      key: "endDate",
      label: "반납일",
      render: (value: HistoryDataTypeValue) =>
        value ? formatDate(value as string) : "날짜 정보를 불러올 수 없습니다.",
    },
  ];
  return (
    <ListTableComponent
      columns={columns}
      data={userHistoryData}
      setObserverRef={setObserverRef}
      isScrollLoading={isScrollLoading}
      theadClassName="text-xl"
      thClassName="p-5"
      tdClassName="p-5"
    />
  );
};

export default HistoryList;
