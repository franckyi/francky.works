// "use client";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";

type ViewHandlerProps = {
  handleListViewClick: () => void;
  handleGridViewClick: () => void;
};

export default function ViewHandler({
  handleListViewClick,
  handleGridViewClick,
}: ViewHandlerProps) {
  return (
    <div className="text-center mt-20 mb-0">
      <TableRowsSharpIcon onClick={handleListViewClick} />
      <ViewModuleSharpIcon onClick={handleGridViewClick} />
    </div>
  );
}
