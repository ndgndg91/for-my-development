package Fitple;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import Fitple.Fitplebean;

public class Fitpledao {
	private String DB_SERVER = "localhost:3306";
	private String DB_USERNAME = "test_user";
	private String DB_PASSWORD = "test_password";
	private String DB_DATABASE = "test_db";
	private String DB_TABLE = "test_table";

	private Connection conn = null;
	
	String jdbcUrl = "jdbc:mysql://" + DB_SERVER + "/" + DB_DATABASE+"?autoReconnect=true&useSSL=false";
	  public Fitpledao(){
			try{
				Class.forName("com.mysql.jdbc.Driver");
				conn = DriverManager.getConnection(jdbcUrl, DB_USERNAME, DB_PASSWORD);
			}catch(Exception e){
				e.printStackTrace();
				System.out.println("jar 파일 없음");
			}
		}
	  public Connection getConnection(){
			try{
				conn = DriverManager.getConnection(jdbcUrl, DB_USERNAME, DB_PASSWORD);
			}catch(Exception e){
				e.printStackTrace();
				System.out.println("커넥션 오류");
			}
			return conn;
		}

	    private void closeConnection() {
	        try {
	            if (conn != null) {
	                conn.close();
	            }
	        } catch (Exception e2) {
	            e2.printStackTrace();
	        }
	    }
		
		public ArrayList<Fitplebean> searchdata(float leng,float waist,float thigh,float crotch,float hem){
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			String sql = "select * from table1 t1,table2 t2 where t1.pantno=t2.pantno and "
					+ "length between ? and ? and "
					+ "waist between ? and ? and "
					+ "thigh between ? and ? and "
					+ "crotch between ? and ? and "
					+ "hem between ? and ?";
			ArrayList<Fitplebean> search = new ArrayList<Fitplebean>();
			try{
				pstmt = conn.prepareStatement(sql);
				pstmt.setFloat(1,leng-5);
				pstmt.setFloat(2, leng+5);
				pstmt.setFloat(3, waist-1);
				pstmt.setFloat(4, waist+1);
				pstmt.setFloat(5, thigh-1);
				pstmt.setFloat(6, thigh+1);
				pstmt.setFloat(7, crotch-1);
				pstmt.setFloat(8, crotch+1);
				pstmt.setFloat(9, hem-0.5F);
				pstmt.setFloat(10, hem+0.5F);
				rs = pstmt.executeQuery();
				while(rs.next()){
					Fitplebean pitple = new Fitplebean();
					pitple.setBrandname(rs.getString("BrandName"));
					pitple.setLength(rs.getFloat("length"));
					pitple.setWaist(rs.getFloat("waist"));
					pitple.setThigh(rs.getFloat("Thigh"));
					pitple.setCrotch(rs.getFloat("crotch"));
					pitple.setHem(rs.getFloat("hem"));
					pitple.setUrl(rs.getString("url"));
					pitple.setImageUrl(rs.getString("imageUrl"));
					search.add(pitple);
				}
				
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				try{
					 if (rs != null) {
		                    rs.close();
		                }
		                if (pstmt != null) {
		                    pstmt.close();
		                }
		                closeConnection();
		            } catch (Exception e2) {
		                e2.printStackTrace();
		            }
		        }
			return search;
		}
		public boolean checkid(String id, String pw) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			boolean check = false;
			String sql = "select * from users where id='"+id+"'and pwd = '"+pw+"'";
					
			try {
				pstmt = conn.prepareStatement(sql);
				rs = pstmt.executeQuery();
				while (rs.next()) {
					check = true;
				}
				System.out.println(check);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return check;
		}
		
}
