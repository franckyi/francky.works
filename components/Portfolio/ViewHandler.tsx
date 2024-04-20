// "use client";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";

const buttonClasses = "hover:text-accent cursor-pointer";

type ViewHandlerProps = {
  handleListViewClick: () => void;
  handleGridViewClick: () => void;
};

export default function ViewHandler({
  handleListViewClick,
  handleGridViewClick,
}: ViewHandlerProps) {
  return (
    <div className="text-center text-lightGray dark:text-gray mt-20 mb-8">
      <TableRowsSharpIcon
        className={buttonClasses}
        onClick={handleListViewClick}
      />
      <ViewModuleSharpIcon
        className={buttonClasses}
        onClick={handleGridViewClick}
      />
    </div>
  );
}
