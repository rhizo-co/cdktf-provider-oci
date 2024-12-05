# `dataOciServiceMeshVirtualServiceRouteTables` Submodule <a name="`dataOciServiceMeshVirtualServiceRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServiceRouteTables <a name="DataOciServiceMeshVirtualServiceRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables oci_service_mesh_virtual_service_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTables;

DataOciServiceMeshVirtualServiceRouteTables.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciServiceMeshVirtualServiceRouteTablesFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
//  .virtualServiceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#filter DataOciServiceMeshVirtualServiceRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}.

---

##### `virtualServiceId`<sup>Optional</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.virtualServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId">resetVirtualServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciServiceMeshVirtualServiceRouteTablesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState"></a>

```java
public void resetState()
```

##### `resetVirtualServiceId` <a name="resetVirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId"></a>

```java
public void resetVirtualServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTables;

DataOciServiceMeshVirtualServiceRouteTables.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTables;

DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTables;

DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTables;

DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceMeshVirtualServiceRouteTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceMeshVirtualServiceRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServiceRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection">virtualServiceRouteTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a>

---

##### `virtualServiceRouteTableCollection`<sup>Required</sup> <a name="virtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList getVirtualServiceRouteTableCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput"></a>

```java
public java.lang.String getVirtualServiceIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServiceRouteTablesConfig <a name="DataOciServiceMeshVirtualServiceRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesConfig;

DataOciServiceMeshVirtualServiceRouteTablesConfig.builder()
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
//  .filter(java.util.List<DataOciServiceMeshVirtualServiceRouteTablesFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
//  .virtualServiceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#filter DataOciServiceMeshVirtualServiceRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}.

---

##### `virtualServiceId`<sup>Optional</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}.

---

### DataOciServiceMeshVirtualServiceRouteTablesFilter <a name="DataOciServiceMeshVirtualServiceRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesFilter;

DataOciServiceMeshVirtualServiceRouteTablesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}.

---

### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection;

DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection.builder()
    .build();
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems;

DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems.builder()
    .build();
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules;

DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules.builder()
    .build();
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations;

DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServiceRouteTablesFilterList <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesFilterList;

new DataOciServiceMeshVirtualServiceRouteTablesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>>

---


### DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference;

new DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter">DataOciServiceMeshVirtualServiceRouteTablesFilter</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules">routeRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `routeRules`<sup>Required</sup> <a name="routeRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList getRouteRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId">virtualDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualDeploymentId`<sup>Required</sup> <a name="virtualDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```java
public java.lang.String getVirtualDeploymentId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">isGrpc</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">pathType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList getDestinations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `isGrpc`<sup>Required</sup> <a name="isGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```java
public IResolvable getIsGrpc();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```java
public java.lang.String getPathType();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```java
public java.lang.String getRequestTimeoutInMs();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_service_route_tables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a>

---



