import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHome, FaArrowRight } from "react-icons/fa";
import cn from "classnames";
import { useSelector } from "react-redux";

const Breadcrumb = () => {
  const { recipes } = useSelector((state: any) => state.GeneralReducer);
  const router = useRouter();
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>([]);

  useEffect(() => {
    const breadcrumbIts: string[] = router.asPath.split("/").slice(1);

    if (breadcrumbIts && breadcrumbIts.length > 0 && breadcrumbIts[0] !== "") {
      setBreadcrumbItems(breadcrumbIts);
    } else {
      setBreadcrumbItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const checkForRecipeName = (item: string): string => {
    if (parseInt(item)) {
      return recipes[parseInt(item)]?.name;
    }

    return item;
  };

  return (
    <div className="breadcrumb-wrapper">
      <div className="breadcrumb-link">
        <Link href="/">
          <FaHome /> Home {breadcrumbItems.length > 0 && <FaArrowRight />}
        </Link>
      </div>

      {breadcrumbItems.map((item, index) => {
        const isActive = index === breadcrumbItems.length - 1;

        return (
          <div
            className={cn("breadcrumb-link", {
              active: isActive,
            })}
            key={index}
          >
            <Link href={`/${item}`} className={`${isActive && "disabled"}`}>
              {checkForRecipeName(item)}
              {index < breadcrumbItems.length - 1 && <FaArrowRight />}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
