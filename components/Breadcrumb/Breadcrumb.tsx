import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHome, FaArrowRight } from "react-icons/fa";
import cn from "classnames";

const Breadcrumb = () => {
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

  return (
    <div className="breadcrumb-wrapper">
      <div className="breadcrumb-link">
        <Link href="/">
          <FaHome /> Home {breadcrumbItems.length > 0 && <FaArrowRight />}
        </Link>
      </div>

      {breadcrumbItems.map((item, index) => {
        return (
          <div
            className={cn("breadcrumb-link", {
              active: index === breadcrumbItems.length - 1,
            })}
            key={index}
          >
            <Link href={`/${item}`}>
              {index === breadcrumbItems.length - 1 && router?.query?.id
                ? router?.query?.id
                : item}
              {index < breadcrumbItems.length - 1 && <FaArrowRight />}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
