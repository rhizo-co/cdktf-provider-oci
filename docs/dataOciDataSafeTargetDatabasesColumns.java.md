# `dataOciDataSafeTargetDatabasesColumns` Submodule <a name="`dataOciDataSafeTargetDatabasesColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasesColumns <a name="DataOciDataSafeTargetDatabasesColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns oci_data_safe_target_databases_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumns;

DataOciDataSafeTargetDatabasesColumns.Builder.create(Construct scope, java.lang.String id)
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
    .targetDatabaseId(java.lang.String)
//  .columnName(java.util.List<java.lang.String>)
//  .columnNameContains(java.lang.String)
//  .datatype(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeTargetDatabasesColumnsFilter>)
//  .id(java.lang.String)
//  .schemaName(java.util.List<java.lang.String>)
//  .schemaNameContains(java.lang.String)
//  .tableName(java.util.List<java.lang.String>)
//  .tableNameContains(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnNameContains">columnNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.datatype">datatype</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaNameContains">schemaNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableName">tableName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableNameContains">tableNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.targetDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}.

---

##### `columnNameContains`<sup>Optional</sup> <a name="columnNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.columnNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}.

---

##### `datatype`<sup>Optional</sup> <a name="datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.datatype"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#filter DataOciDataSafeTargetDatabasesColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}.

---

##### `schemaNameContains`<sup>Optional</sup> <a name="schemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.schemaNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}.

---

##### `tableNameContains`<sup>Optional</sup> <a name="tableNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.Initializer.parameter.tableNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnNameContains">resetColumnNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetDatatype">resetDatatype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaNameContains">resetSchemaNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableNameContains">resetTableNameContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeTargetDatabasesColumnsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>>

---

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetColumnNameContains` <a name="resetColumnNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetColumnNameContains"></a>

```java
public void resetColumnNameContains()
```

##### `resetDatatype` <a name="resetDatatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetDatatype"></a>

```java
public void resetDatatype()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetId"></a>

```java
public void resetId()
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetSchemaNameContains` <a name="resetSchemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetSchemaNameContains"></a>

```java
public void resetSchemaNameContains()
```

##### `resetTableName` <a name="resetTableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTableNameContains` <a name="resetTableNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.resetTableNameContains"></a>

```java
public void resetTableNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesColumns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumns;

DataOciDataSafeTargetDatabasesColumns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumns;

DataOciDataSafeTargetDatabasesColumns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumns;

DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumns;

DataOciDataSafeTargetDatabasesColumns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeTargetDatabasesColumns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasesColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeTargetDatabasesColumns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeTargetDatabasesColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasesColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columns">columns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList">DataOciDataSafeTargetDatabasesColumnsColumnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList">DataOciDataSafeTargetDatabasesColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContainsInput">columnNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameInput">columnNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatypeInput">datatypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContainsInput">schemaNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameInput">schemaNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContainsInput">tableNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameInput">tableNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseIdInput">targetDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContains">columnNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatype">datatype</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContains">schemaNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableName">tableName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContains">tableNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `columns`<sup>Required</sup> <a name="columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columns"></a>

```java
public DataOciDataSafeTargetDatabasesColumnsColumnsList getColumns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList">DataOciDataSafeTargetDatabasesColumnsColumnsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filter"></a>

```java
public DataOciDataSafeTargetDatabasesColumnsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList">DataOciDataSafeTargetDatabasesColumnsFilterList</a>

---

##### `columnNameContainsInput`<sup>Optional</sup> <a name="columnNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContainsInput"></a>

```java
public java.lang.String getColumnNameContainsInput();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameInput"></a>

```java
public java.util.List<java.lang.String> getColumnNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datatypeInput`<sup>Optional</sup> <a name="datatypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatypeInput"></a>

```java
public java.util.List<java.lang.String> getDatatypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `schemaNameContainsInput`<sup>Optional</sup> <a name="schemaNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContainsInput"></a>

```java
public java.lang.String getSchemaNameContainsInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameInput"></a>

```java
public java.util.List<java.lang.String> getSchemaNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableNameContainsInput`<sup>Optional</sup> <a name="tableNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContainsInput"></a>

```java
public java.lang.String getTableNameContainsInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameInput"></a>

```java
public java.util.List<java.lang.String> getTableNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetDatabaseIdInput`<sup>Optional</sup> <a name="targetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseIdInput"></a>

```java
public java.lang.String getTargetDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnName"></a>

```java
public java.util.List<java.lang.String> getColumnName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnNameContains`<sup>Required</sup> <a name="columnNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.columnNameContains"></a>

```java
public java.lang.String getColumnNameContains();
```

- *Type:* java.lang.String

---

##### `datatype`<sup>Required</sup> <a name="datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.datatype"></a>

```java
public java.util.List<java.lang.String> getDatatype();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaName"></a>

```java
public java.util.List<java.lang.String> getSchemaName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaNameContains`<sup>Required</sup> <a name="schemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.schemaNameContains"></a>

```java
public java.lang.String getSchemaNameContains();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableName"></a>

```java
public java.util.List<java.lang.String> getTableName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableNameContains`<sup>Required</sup> <a name="tableNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tableNameContains"></a>

```java
public java.lang.String getTableNameContains();
```

- *Type:* java.lang.String

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.targetDatabaseId"></a>

```java
public java.lang.String getTargetDatabaseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasesColumnsColumns <a name="DataOciDataSafeTargetDatabasesColumnsColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsColumns;

DataOciDataSafeTargetDatabasesColumnsColumns.builder()
    .build();
```


### DataOciDataSafeTargetDatabasesColumnsConfig <a name="DataOciDataSafeTargetDatabasesColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsConfig;

DataOciDataSafeTargetDatabasesColumnsConfig.builder()
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
    .targetDatabaseId(java.lang.String)
//  .columnName(java.util.List<java.lang.String>)
//  .columnNameContains(java.lang.String)
//  .datatype(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeTargetDatabasesColumnsFilter>)
//  .id(java.lang.String)
//  .schemaName(java.util.List<java.lang.String>)
//  .schemaNameContains(java.lang.String)
//  .tableName(java.util.List<java.lang.String>)
//  .tableNameContains(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnNameContains">columnNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.datatype">datatype</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaNameContains">schemaNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableName">tableName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableNameContains">tableNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.targetDatabaseId"></a>

```java
public java.lang.String getTargetDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnName"></a>

```java
public java.util.List<java.lang.String> getColumnName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}.

---

##### `columnNameContains`<sup>Optional</sup> <a name="columnNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.columnNameContains"></a>

```java
public java.lang.String getColumnNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}.

---

##### `datatype`<sup>Optional</sup> <a name="datatype" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.datatype"></a>

```java
public java.util.List<java.lang.String> getDatatype();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#filter DataOciDataSafeTargetDatabasesColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaName"></a>

```java
public java.util.List<java.lang.String> getSchemaName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}.

---

##### `schemaNameContains`<sup>Optional</sup> <a name="schemaNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.schemaNameContains"></a>

```java
public java.lang.String getSchemaNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableName"></a>

```java
public java.util.List<java.lang.String> getTableName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}.

---

##### `tableNameContains`<sup>Optional</sup> <a name="tableNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsConfig.property.tableNameContains"></a>

```java
public java.lang.String getTableNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}.

---

### DataOciDataSafeTargetDatabasesColumnsFilter <a name="DataOciDataSafeTargetDatabasesColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsFilter;

DataOciDataSafeTargetDatabasesColumnsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#name DataOciDataSafeTargetDatabasesColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#values DataOciDataSafeTargetDatabasesColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#regex DataOciDataSafeTargetDatabasesColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#name DataOciDataSafeTargetDatabasesColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#values DataOciDataSafeTargetDatabasesColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#regex DataOciDataSafeTargetDatabasesColumns#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasesColumnsColumnsList <a name="DataOciDataSafeTargetDatabasesColumnsColumnsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsColumnsList;

new DataOciDataSafeTargetDatabasesColumnsColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.get"></a>

```java
public DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference <a name="DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference;

new DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.characterLength">characterLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.length">length</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.precision">precision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.scale">scale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns">DataOciDataSafeTargetDatabasesColumnsColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `characterLength`<sup>Required</sup> <a name="characterLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.characterLength"></a>

```java
public java.lang.Number getCharacterLength();
```

- *Type:* java.lang.Number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.length"></a>

```java
public java.lang.String getLength();
```

- *Type:* java.lang.String

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.precision"></a>

```java
public java.lang.Number getPrecision();
```

- *Type:* java.lang.Number

---

##### `scale`<sup>Required</sup> <a name="scale" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.scale"></a>

```java
public java.lang.Number getScale();
```

- *Type:* java.lang.Number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeTargetDatabasesColumnsColumns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsColumns">DataOciDataSafeTargetDatabasesColumnsColumns</a>

---


### DataOciDataSafeTargetDatabasesColumnsFilterList <a name="DataOciDataSafeTargetDatabasesColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsFilterList;

new DataOciDataSafeTargetDatabasesColumnsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.get"></a>

```java
public DataOciDataSafeTargetDatabasesColumnsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>>

---


### DataOciDataSafeTargetDatabasesColumnsFilterOutputReference <a name="DataOciDataSafeTargetDatabasesColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_databases_columns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference;

new DataOciDataSafeTargetDatabasesColumnsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasesColumns.DataOciDataSafeTargetDatabasesColumnsFilter">DataOciDataSafeTargetDatabasesColumnsFilter</a>

---



