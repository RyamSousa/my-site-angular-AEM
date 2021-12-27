<%--
  ADOBE CONFIDENTIAL

  Copyright 2015 Adobe Systems Incorporated
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and may be covered by U.S. and Foreign Patents,
  patents in process, and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
--%><%
%><%@include file="/libs/granite/ui/global.jsp" %><%
%><%@page session="false"
          import="com.adobe.granite.ui.components.Config,
          javax.jcr.Node,
          javax.jcr.RepositoryException" %>
          
<%--### ###--%>

<%
    Config cfg = cmp.getConfig();
	final String NAME_PROPERTY = "name";
	final String FIELD_LABEL_PROPERTY = "fieldLabel";

    String path = cfg.get("path", String.class);
	String name = cfg.get("name", String.class);
	String fieldLabel = cfg.get("fieldLabel", String.class);
	
	Resource targetResource = null;

    if (path == null) {
        return;
    }
    
    if (name == null || name.equals("")) {
    	targetResource = resourceResolver.getResource(path);
    } else {
	    targetResource = resourceResolver.getResource(path);
	    Node node = targetResource.adaptTo(Node.class);
	    
	    if (node == null) {
	    	return;
	    }
	    
	    try {
	        node.setProperty(NAME_PROPERTY, name);
	        
	        if (fieldLabel != null && !fieldLabel.equals("")) {
	        	node.setProperty(FIELD_LABEL_PROPERTY, fieldLabel);	
	        }
	        
	        targetResource = resourceResolver.getResource(node.getPath());
	    } catch (RepositoryException e) {
	        e.printStackTrace();
	        return;
	    }    	
    }
    

    // Get the resource using resourceResolver so that the search path is applied.
    //Resource targetResource = resourceResolver.getResource(path);

    if (targetResource == null) {
        return;
    }

    cmp.include(targetResource, cfg.get("resourceType", String.class), cmp.getOptions());
%>