# `dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpoints <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints oci_database_tools_database_tools_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .endpointServiceId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}.

---

##### `endpointServiceId`<sup>Optional</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.endpointServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId">resetEndpointServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndpointServiceId` <a name="resetEndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId"></a>

```java
public void resetEndpointServiceId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState"></a>

```java
public void resetState()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId"></a>

```java
public void resetSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints;

DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseToolsDatabaseToolsPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection">databaseToolsPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput">endpointServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `databaseToolsPrivateEndpointCollection`<sup>Required</sup> <a name="databaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList getDatabaseToolsPrivateEndpointCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointServiceIdInput`<sup>Optional</sup> <a name="endpointServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput"></a>

```java
public java.lang.String getEndpointServiceIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.builder()
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
//  .displayName(java.lang.String)
//  .endpointServiceId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}.

---

##### `endpointServiceId`<sup>Optional</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}.

---

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection.builder()
    .build();
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems.builder()
    .build();
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks.builder()
    .build();
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration.builder()
    .build();
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps.builder()
    .build();
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter;

DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns">additionalFqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn">endpointFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId">privateEndpointVnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration">reverseConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalFqdns`<sup>Required</sup> <a name="additionalFqdns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns"></a>

```java
public java.util.List<java.lang.String> getAdditionalFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn"></a>

```java
public java.lang.String getEndpointFqdn();
```

- *Type:* java.lang.String

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `privateEndpointVnicId`<sup>Required</sup> <a name="privateEndpointVnicId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId"></a>

```java
public java.lang.String getPrivateEndpointVnicId();
```

- *Type:* java.lang.String

---

##### `reverseConnectionConfiguration`<sup>Required</sup> <a name="reverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList getReverseConnectionConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">reverseConnectionsSourceIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reverseConnectionsSourceIps`<sup>Required</sup> <a name="reverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList getReverseConnectionsSourceIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get"></a>

```java
public DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_tools_database_tools_private_endpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference;

new DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter</a>

---



