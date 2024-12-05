# `dataOciServiceMeshIngressGatewayRouteTables` Submodule <a name="`dataOciServiceMeshIngressGatewayRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGatewayRouteTables <a name="DataOciServiceMeshIngressGatewayRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables oci_service_mesh_ingress_gateway_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTables;

DataOciServiceMeshIngressGatewayRouteTables.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciServiceMeshIngressGatewayRouteTablesFilter>)
//  .id(java.lang.String)
//  .ingressGatewayId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressGatewayId`<sup>Optional</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.ingressGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId">resetIngressGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciServiceMeshIngressGatewayRouteTablesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId"></a>

```java
public void resetId()
```

##### `resetIngressGatewayId` <a name="resetIngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId"></a>

```java
public void resetIngressGatewayId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTables;

DataOciServiceMeshIngressGatewayRouteTables.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTables;

DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTables;

DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTables;

DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceMeshIngressGatewayRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection">ingressGatewayRouteTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput">ingressGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a>

---

##### `ingressGatewayRouteTableCollection`<sup>Required</sup> <a name="ingressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList getIngressGatewayRouteTableCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressGatewayIdInput`<sup>Optional</sup> <a name="ingressGatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput"></a>

```java
public java.lang.String getIngressGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayRouteTablesConfig <a name="DataOciServiceMeshIngressGatewayRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesConfig;

DataOciServiceMeshIngressGatewayRouteTablesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciServiceMeshIngressGatewayRouteTablesFilter>)
//  .id(java.lang.String)
//  .ingressGatewayId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressGatewayId`<sup>Optional</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}.

---

### DataOciServiceMeshIngressGatewayRouteTablesFilter <a name="DataOciServiceMeshIngressGatewayRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesFilter;

DataOciServiceMeshIngressGatewayRouteTablesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}.

---

### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection;

DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection.builder()
    .build();
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems;

DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems.builder()
    .build();
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules;

DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules.builder()
    .build();
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations;

DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations.builder()
    .build();
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost;

DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayRouteTablesFilterList <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesFilterList;

new DataOciServiceMeshIngressGatewayRouteTablesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>>

---


### DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference;

new DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter">DataOciServiceMeshIngressGatewayRouteTablesFilter</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules">routeRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList getRouteRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost">ingressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">isGrpc</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled">isHostRewriteEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled">isPathRewriteEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">pathType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList getDestinations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `ingressGatewayHost`<sup>Required</sup> <a name="ingressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList getIngressGatewayHost();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a>

---

##### `isGrpc`<sup>Required</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```java
public IResolvable getIsGrpc();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHostRewriteEnabled`<sup>Required</sup> <a name="isHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```java
public IResolvable getIsHostRewriteEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPathRewriteEnabled`<sup>Required</sup> <a name="isPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```java
public IResolvable getIsPathRewriteEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```java
public java.lang.String getPathType();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```java
public java.lang.String getRequestTimeoutInMs();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateway_route_tables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a>

---



