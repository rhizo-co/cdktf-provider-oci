# `dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatements <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements oci_database_management_managed_database_cursor_cache_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Builder.create(Construct scope, java.lang.String id)
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
    .managedDatabaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter>)
//  .id(java.lang.String)
//  .limit(java.lang.Number)
//  .opcNamedCredentialId(java.lang.String)
//  .sqlText(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.sqlText">sqlText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.managedDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#filter DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.limit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.opcNamedCredentialId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}.

---

##### `sqlText`<sup>Optional</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.sqlText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText">resetSqlText</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId"></a>

```java
public void resetId()
```

##### `resetLimit` <a name="resetLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId"></a>

```java
public void resetOpcNamedCredentialId()
```

##### `resetSqlText` <a name="resetSqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText"></a>

```java
public void resetSqlText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementManagedDatabaseCursorCacheStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection">cursorCacheStatementCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput">sqlTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText">sqlText</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cursorCacheStatementCollection`<sup>Required</sup> <a name="cursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList getCursorCacheStatementCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput"></a>

```java
public java.lang.String getManagedDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput"></a>

```java
public java.lang.String getOpcNamedCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `sqlTextInput`<sup>Optional</sup> <a name="sqlTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput"></a>

```java
public java.lang.String getSqlTextInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText"></a>

```java
public java.lang.String getSqlText();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.builder()
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
    .managedDatabaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter>)
//  .id(java.lang.String)
//  .limit(java.lang.Number)
//  .opcNamedCredentialId(java.lang.String)
//  .sqlText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText">sqlText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId"></a>

```java
public java.lang.String getManagedDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#filter DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId"></a>

```java
public java.lang.String getOpcNamedCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}.

---

##### `sqlText`<sup>Optional</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText"></a>

```java
public java.lang.String getSqlText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems.builder()
    .build();
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId">sqlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText">sqlText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `sqlId`<sup>Required</sup> <a name="sqlId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId"></a>

```java
public java.lang.String getSqlId();
```

- *Type:* java.lang.String

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText"></a>

```java
public java.lang.String getSqlText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get"></a>

```java
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_managed_database_cursor_cache_statements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter</a>

---



