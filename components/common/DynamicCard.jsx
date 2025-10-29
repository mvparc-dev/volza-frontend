"use client";
import { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Pagination, Spinner, Button, Chip } from "@nextui-org/react";
import toast from "react-hot-toast";

const DynamicCard = ({
  title,
  fetchData,
  renderItem,
  handleApprove = null,
  itemsPerPage = 5,
  patientId,
  userId,
  localIdentity,
  updateStats = null,
}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  const loadData = async (page, isPageChange = false) => {
    if (isPageChange) setPageLoading(true);
    else setLoading(true);
    try {
      const result = await fetchData({ page, limit: itemsPerPage, patientId, userId });
      const fetchedData = Array.isArray(result.data) ? result.data : [];
      const total = result.total || fetchedData.length || 0;

      console.log(`${title} - Page: ${page}, Data Length: ${fetchedData.length}, Total: ${total}, Pages: ${Math.ceil(total / itemsPerPage)}`);

      setData(fetchedData);
      setTotalRecords(total);
      setTotalPages(Math.max(Math.ceil(total / itemsPerPage), 1));
      setCurrentPage(page);

      if (updateStats) {
        const pendingCount = fetchedData.filter((item) =>
          ["open", "draft", "inprogress", "waiting_for_approval"].includes(item.state)
        ).length;
        updateStats(title, pendingCount || total); // Pass title to differentiate stats
      }
    } catch (error) {
      console.log(`Error fetching ${title}:`, error);
      setData([]);
      setTotalRecords(0);
      setTotalPages(1);
    } finally {
      if (isPageChange) setPageLoading(false);
      else setLoading(false);
    }
  };

  useEffect(() => {
    loadData(currentPage);
  }, [currentPage, loadData]);

  const handlePageChange = (page) => {
    console.log(`${title} - Changing to page: ${page}`);
    if (page !== currentPage) {
      loadData(page, true);
    }
  };

  const refreshData = () => {
    loadData(currentPage, true);
  };

  const shouldShowPagination = !loading && !pageLoading && data.length > 0 && totalRecords > itemsPerPage;

  return (
    <Card className="shadow-sm border border-gray-50 w-full relative">
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <h2 className="">{title}</h2>
      </div>
      <CardBody className="p-0">
        {loading ? (
          <div className="p-4 text-center text-gray-500">Loading...</div>
        ) : data.length ? (
          data.map((item, index) => (
            <div key={index} className="p-4 border-b border-gray-50 last:border-0">
              {renderItem(item, localIdentity)}
              {handleApprove && item.state !== "approved" && item.state !== "inprogress" && item.state !== "draft" && (
                <Button
                  size="xs"
                  color="primary"
                  onClick={async () => {
                    try {
                      const result = await handleApprove(item.id);
                      if (result) {
                        toast.success(`${title} approved successfully`);
                        refreshData();
                      } else {
                        throw new Error(`Failed to approve ${title.toLowerCase()}`);
                      }
                    } catch (error) {
                      console.log(`Error approving ${title}:`, error);
                      toast.error(error.message || `Failed to approve ${title.toLowerCase()}`);
                    }
                  }}
                  className="mt-2"
                >
                  Approve
                </Button>
              )}
            </div>
          ))
        ) : (
          <h3 className="text-gray-500 text-center p-4">No {title.toLowerCase()} found.</h3>
        )}
      </CardBody>
      {pageLoading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center">
          <Spinner size="lg" color="primary" label="Loading..." />
        </div>
      )}
      {shouldShowPagination && (
        <CardFooter className="px-4 py-3 border-t border-gray-200 flex justify-center">
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="sm"
            showControls
            color="primary"
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default DynamicCard;