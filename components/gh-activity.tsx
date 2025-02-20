"use client";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { twMerge } from "tailwind-merge";

export default function GhActivity({
  username,
  className,
  errorClassName,
  colorTheme,
  colorScheme,
}: {
  username: string;
  className?: string;
  errorClassName?: string;
  colorTheme?: "light" | "dark";
  colorScheme?: {
    light: string[];
    dark: string[];
  };
}) {
  const [data, setData] = useState<null | []>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github.10xdevlab.in/api/user/${username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const finalData = await response.json();
        setData(finalData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const defaultColorScheme = {
    light: [
      "#f0f0f0",  // Light gray for empty boxes
      "#9BE9A7",
      "#6CC565",
      "#58A250",
      "#3A6E3A"
    ],
    dark: [
      "#161B22",
      "#9BE9A7",
      "#6CC565",
      "#58A250",
      "#3A6E3A"
    ]
  };

  return (
    <div className={twMerge("p-4", className)}>
      {loading ? (
        <div>Loading Data...</div>
      ) : (
        <>
          {data && data.length > 0 ? (
            <ActivityCalendar
            style={{ margin: "auto" }}
            data={data}
            colorScheme={colorTheme || "light"}  // This should be the theme mode
            loading={loading}
            theme={{
              light: colorScheme?.light || defaultColorScheme.light,
              dark: colorScheme?.dark || defaultColorScheme.dark
            }}
          />
          ) : (
            <p className={twMerge("text-white", errorClassName)}>
              {error ? "Error Occurred: No User Found" : "No data available"}
            </p>
          )}
        </>
      )}
    </div>
  );
}
