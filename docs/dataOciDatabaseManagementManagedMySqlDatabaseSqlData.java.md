# `dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlData <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlData;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Builder.create(Construct scope, java.lang.String id)
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
    .endTime(java.lang.String)
    .managedMySqlDatabaseId(java.lang.String)
    .startTime(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter>)
//  .filterColumn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.managedMySqlDatabaseId">managedMySqlDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filterColumn">filterColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `managedMySqlDatabaseId`<sup>Required</sup> <a name="managedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.managedMySqlDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `filterColumn`<sup>Optional</sup> <a name="filterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.filterColumn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn">resetFilterColumn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFilterColumn` <a name="resetFilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn"></a>

```java
public void resetFilterColumn()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlData;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlData;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlData;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlData;

DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseSqlData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection">mySqlDataCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput">filterColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput">managedMySqlDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn">filterColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId">managedMySqlDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a>

---

##### `mySqlDataCollection`<sup>Required</sup> <a name="mySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList getMySqlDataCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `filterColumnInput`<sup>Optional</sup> <a name="filterColumnInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput"></a>

```java
public java.lang.String getFilterColumnInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="managedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput"></a>

```java
public java.lang.String getManagedMySqlDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `filterColumn`<sup>Required</sup> <a name="filterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn"></a>

```java
public java.lang.String getFilterColumn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedMySqlDatabaseId`<sup>Required</sup> <a name="managedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId"></a>

```java
public java.lang.String getManagedMySqlDatabaseId();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig;

DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.builder()
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
    .endTime(java.lang.String)
    .managedMySqlDatabaseId(java.lang.String)
    .startTime(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter>)
//  .filterColumn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId">managedMySqlDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn">filterColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `managedMySqlDatabaseId`<sup>Required</sup> <a name="managedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId"></a>

```java
public java.lang.String getManagedMySqlDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `filterColumn`<sup>Optional</sup> <a name="filterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn"></a>

```java
public java.lang.String getFilterColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter;

DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection;

DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection.builder()
    .build();
```


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems;

DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait">avgTimerWait</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar">countStar</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText">digestText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen">firstSeen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded">heatWaveOffloaded</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory">heatWaveOutOfMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen">lastSeen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait">maxTimerWait</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait">minTimerWait</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95">quantile95</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99">quantile99</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999">quantile999</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables">sumCreatedTempDiskTables</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables">sumCreatedTempTables</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors">sumErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime">sumLockTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed">sumNoGoodIndexUsed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed">sumNoIndexUsed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected">sumRowsAffected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined">sumRowsExamined</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent">sumRowsSent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin">sumSelectFullJoin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin">sumSelectFullRangeJoin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange">sumSelectRange</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck">sumSelectRangeCheck</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan">sumSelectScan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses">sumSortMergePasses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange">sumSortRange</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows">sumSortRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan">sumSortScan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait">sumTimerWait</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings">sumWarnings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avgTimerWait`<sup>Required</sup> <a name="avgTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait"></a>

```java
public java.lang.Number getAvgTimerWait();
```

- *Type:* java.lang.Number

---

##### `countStar`<sup>Required</sup> <a name="countStar" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar"></a>

```java
public java.lang.Number getCountStar();
```

- *Type:* java.lang.Number

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestText`<sup>Required</sup> <a name="digestText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText"></a>

```java
public java.lang.String getDigestText();
```

- *Type:* java.lang.String

---

##### `firstSeen`<sup>Required</sup> <a name="firstSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen"></a>

```java
public java.lang.String getFirstSeen();
```

- *Type:* java.lang.String

---

##### `heatWaveOffloaded`<sup>Required</sup> <a name="heatWaveOffloaded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded"></a>

```java
public java.lang.Number getHeatWaveOffloaded();
```

- *Type:* java.lang.Number

---

##### `heatWaveOutOfMemory`<sup>Required</sup> <a name="heatWaveOutOfMemory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory"></a>

```java
public java.lang.Number getHeatWaveOutOfMemory();
```

- *Type:* java.lang.Number

---

##### `lastSeen`<sup>Required</sup> <a name="lastSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen"></a>

```java
public java.lang.String getLastSeen();
```

- *Type:* java.lang.String

---

##### `maxTimerWait`<sup>Required</sup> <a name="maxTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait"></a>

```java
public java.lang.Number getMaxTimerWait();
```

- *Type:* java.lang.Number

---

##### `minTimerWait`<sup>Required</sup> <a name="minTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait"></a>

```java
public java.lang.Number getMinTimerWait();
```

- *Type:* java.lang.Number

---

##### `quantile95`<sup>Required</sup> <a name="quantile95" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95"></a>

```java
public java.lang.Number getQuantile95();
```

- *Type:* java.lang.Number

---

##### `quantile99`<sup>Required</sup> <a name="quantile99" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99"></a>

```java
public java.lang.Number getQuantile99();
```

- *Type:* java.lang.Number

---

##### `quantile999`<sup>Required</sup> <a name="quantile999" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999"></a>

```java
public java.lang.Number getQuantile999();
```

- *Type:* java.lang.Number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sumCreatedTempDiskTables`<sup>Required</sup> <a name="sumCreatedTempDiskTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables"></a>

```java
public java.lang.Number getSumCreatedTempDiskTables();
```

- *Type:* java.lang.Number

---

##### `sumCreatedTempTables`<sup>Required</sup> <a name="sumCreatedTempTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables"></a>

```java
public java.lang.Number getSumCreatedTempTables();
```

- *Type:* java.lang.Number

---

##### `sumErrors`<sup>Required</sup> <a name="sumErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors"></a>

```java
public java.lang.Number getSumErrors();
```

- *Type:* java.lang.Number

---

##### `sumLockTime`<sup>Required</sup> <a name="sumLockTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime"></a>

```java
public java.lang.Number getSumLockTime();
```

- *Type:* java.lang.Number

---

##### `sumNoGoodIndexUsed`<sup>Required</sup> <a name="sumNoGoodIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed"></a>

```java
public java.lang.Number getSumNoGoodIndexUsed();
```

- *Type:* java.lang.Number

---

##### `sumNoIndexUsed`<sup>Required</sup> <a name="sumNoIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed"></a>

```java
public java.lang.Number getSumNoIndexUsed();
```

- *Type:* java.lang.Number

---

##### `sumRowsAffected`<sup>Required</sup> <a name="sumRowsAffected" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected"></a>

```java
public java.lang.Number getSumRowsAffected();
```

- *Type:* java.lang.Number

---

##### `sumRowsExamined`<sup>Required</sup> <a name="sumRowsExamined" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined"></a>

```java
public java.lang.Number getSumRowsExamined();
```

- *Type:* java.lang.Number

---

##### `sumRowsSent`<sup>Required</sup> <a name="sumRowsSent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent"></a>

```java
public java.lang.Number getSumRowsSent();
```

- *Type:* java.lang.Number

---

##### `sumSelectFullJoin`<sup>Required</sup> <a name="sumSelectFullJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin"></a>

```java
public java.lang.Number getSumSelectFullJoin();
```

- *Type:* java.lang.Number

---

##### `sumSelectFullRangeJoin`<sup>Required</sup> <a name="sumSelectFullRangeJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin"></a>

```java
public java.lang.Number getSumSelectFullRangeJoin();
```

- *Type:* java.lang.Number

---

##### `sumSelectRange`<sup>Required</sup> <a name="sumSelectRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange"></a>

```java
public java.lang.Number getSumSelectRange();
```

- *Type:* java.lang.Number

---

##### `sumSelectRangeCheck`<sup>Required</sup> <a name="sumSelectRangeCheck" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck"></a>

```java
public java.lang.Number getSumSelectRangeCheck();
```

- *Type:* java.lang.Number

---

##### `sumSelectScan`<sup>Required</sup> <a name="sumSelectScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan"></a>

```java
public java.lang.Number getSumSelectScan();
```

- *Type:* java.lang.Number

---

##### `sumSortMergePasses`<sup>Required</sup> <a name="sumSortMergePasses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses"></a>

```java
public java.lang.Number getSumSortMergePasses();
```

- *Type:* java.lang.Number

---

##### `sumSortRange`<sup>Required</sup> <a name="sumSortRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange"></a>

```java
public java.lang.Number getSumSortRange();
```

- *Type:* java.lang.Number

---

##### `sumSortRows`<sup>Required</sup> <a name="sumSortRows" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows"></a>

```java
public java.lang.Number getSumSortRows();
```

- *Type:* java.lang.Number

---

##### `sumSortScan`<sup>Required</sup> <a name="sumSortScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan"></a>

```java
public java.lang.Number getSumSortScan();
```

- *Type:* java.lang.Number

---

##### `sumTimerWait`<sup>Required</sup> <a name="sumTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait"></a>

```java
public java.lang.Number getSumTimerWait();
```

- *Type:* java.lang.Number

---

##### `sumWarnings`<sup>Required</sup> <a name="sumWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings"></a>

```java
public java.lang.Number getSumWarnings();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_my_sql_database_sql_data.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference;

new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a>

---



