# `dataOciDatabaseManagementJobExecutionsStatus` Submodule <a name="`dataOciDatabaseManagementJobExecutionsStatus` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementJobExecutionsStatus <a name="DataOciDatabaseManagementJobExecutionsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status oci_database_management_job_executions_status}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatus;

DataOciDatabaseManagementJobExecutionsStatus.Builder.create(Construct scope, java.lang.String id)
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
    .endTime(java.lang.String)
    .startTime(java.lang.String)
//  .id(java.lang.String)
//  .managedDatabaseGroupId(java.lang.String)
//  .managedDatabaseId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#compartment_id DataOciDatabaseManagementJobExecutionsStatus#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#end_time DataOciDatabaseManagementJobExecutionsStatus#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#start_time DataOciDatabaseManagementJobExecutionsStatus#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#id DataOciDatabaseManagementJobExecutionsStatus#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.managedDatabaseGroupId">managedDatabaseGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#name DataOciDatabaseManagementJobExecutionsStatus#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#compartment_id DataOciDatabaseManagementJobExecutionsStatus#compartment_id}.

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#end_time DataOciDatabaseManagementJobExecutionsStatus#end_time}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#start_time DataOciDatabaseManagementJobExecutionsStatus#start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#id DataOciDatabaseManagementJobExecutionsStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDatabaseGroupId`<sup>Optional</sup> <a name="managedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.managedDatabaseGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_group_id}.

---

##### `managedDatabaseId`<sup>Optional</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#name DataOciDatabaseManagementJobExecutionsStatus#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseGroupId">resetManagedDatabaseGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseId">resetManagedDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetId"></a>

```java
public void resetId()
```

##### `resetManagedDatabaseGroupId` <a name="resetManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseGroupId"></a>

```java
public void resetManagedDatabaseGroupId()
```

##### `resetManagedDatabaseId` <a name="resetManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetManagedDatabaseId"></a>

```java
public void resetManagedDatabaseId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatus;

DataOciDatabaseManagementJobExecutionsStatus.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatus;

DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatus;

DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatus;

DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementJobExecutionsStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementJobExecutionsStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementJobExecutionsStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList">DataOciDatabaseManagementJobExecutionsStatusItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupIdInput">managedDatabaseGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupId">managedDatabaseGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.items"></a>

```java
public DataOciDatabaseManagementJobExecutionsStatusItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList">DataOciDatabaseManagementJobExecutionsStatusItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseGroupIdInput`<sup>Optional</sup> <a name="managedDatabaseGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupIdInput"></a>

```java
public java.lang.String getManagedDatabaseGroupIdInput();
```

- *Type:* java.lang.String

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseGroupId`<sup>Required</sup> <a name="managedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseGroupId"></a>

```java
public java.lang.String getManagedDatabaseGroupId();
```

- *Type:* java.lang.String

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementJobExecutionsStatusConfig <a name="DataOciDatabaseManagementJobExecutionsStatusConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatusConfig;

DataOciDatabaseManagementJobExecutionsStatusConfig.builder()
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
    .endTime(java.lang.String)
    .startTime(java.lang.String)
//  .id(java.lang.String)
//  .managedDatabaseGroupId(java.lang.String)
//  .managedDatabaseId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#compartment_id DataOciDatabaseManagementJobExecutionsStatus#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#end_time DataOciDatabaseManagementJobExecutionsStatus#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#start_time DataOciDatabaseManagementJobExecutionsStatus#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#id DataOciDatabaseManagementJobExecutionsStatus#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseGroupId">managedDatabaseGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#name DataOciDatabaseManagementJobExecutionsStatus#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#compartment_id DataOciDatabaseManagementJobExecutionsStatus#compartment_id}.

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#end_time DataOciDatabaseManagementJobExecutionsStatus#end_time}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#start_time DataOciDatabaseManagementJobExecutionsStatus#start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#id DataOciDatabaseManagementJobExecutionsStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDatabaseGroupId`<sup>Optional</sup> <a name="managedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseGroupId"></a>

```java
public java.lang.String getManagedDatabaseGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_group_id}.

---

##### `managedDatabaseId`<sup>Optional</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#managed_database_id DataOciDatabaseManagementJobExecutionsStatus#managed_database_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_status#name DataOciDatabaseManagementJobExecutionsStatus#name}.

---

### DataOciDatabaseManagementJobExecutionsStatusItems <a name="DataOciDatabaseManagementJobExecutionsStatusItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatusItems;

DataOciDatabaseManagementJobExecutionsStatusItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementJobExecutionsStatusItemsList <a name="DataOciDatabaseManagementJobExecutionsStatusItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatusItemsList;

new DataOciDatabaseManagementJobExecutionsStatusItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.get"></a>

```java
public DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_job_executions_status.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference;

new DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems">DataOciDatabaseManagementJobExecutionsStatusItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementJobExecutionsStatusItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatus.DataOciDatabaseManagementJobExecutionsStatusItems">DataOciDatabaseManagementJobExecutionsStatusItems</a>

---



