# `dataOciMysqlMysqlBackups` Submodule <a name="`dataOciMysqlMysqlBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlBackups <a name="DataOciMysqlMysqlBackups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups oci_mysql_mysql_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackups;

DataOciMysqlMysqlBackups.Builder.create(Construct scope, java.lang.String id)
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
//  .backupId(java.lang.String)
//  .creationType(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMysqlMysqlBackupsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.creationType">creationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.backupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}.

---

##### `creationType`<sup>Optional</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.creationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#filter DataOciMysqlMysqlBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetCreationType">resetCreationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMysqlMysqlBackupsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>>

---

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetCreationType` <a name="resetCreationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetCreationType"></a>

```java
public void resetCreationType()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlBackups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackups;

DataOciMysqlMysqlBackups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackups;

DataOciMysqlMysqlBackups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackups;

DataOciMysqlMysqlBackups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackups;

DataOciMysqlMysqlBackups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMysqlMysqlBackups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMysqlMysqlBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMysqlMysqlBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backups">backups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList">DataOciMysqlMysqlBackupsBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList">DataOciMysqlMysqlBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationTypeInput">creationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backups`<sup>Required</sup> <a name="backups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backups"></a>

```java
public DataOciMysqlMysqlBackupsBackupsList getBackups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList">DataOciMysqlMysqlBackupsBackupsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filter"></a>

```java
public DataOciMysqlMysqlBackupsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList">DataOciMysqlMysqlBackupsFilterList</a>

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `creationTypeInput`<sup>Optional</sup> <a name="creationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationTypeInput"></a>

```java
public java.lang.String getCreationTypeInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlBackupsBackups <a name="DataOciMysqlMysqlBackupsBackups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackups;

DataOciMysqlMysqlBackupsBackups.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary;

DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary.builder()
    .build();
```


### DataOciMysqlMysqlBackupsBackupsSourceDetails <a name="DataOciMysqlMysqlBackupsBackupsSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsSourceDetails;

DataOciMysqlMysqlBackupsBackupsSourceDetails.builder()
    .build();
```


### DataOciMysqlMysqlBackupsConfig <a name="DataOciMysqlMysqlBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsConfig;

DataOciMysqlMysqlBackupsConfig.builder()
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
//  .backupId(java.lang.String)
//  .creationType(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMysqlMysqlBackupsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.creationType">creationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}.

---

##### `creationType`<sup>Optional</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#filter DataOciMysqlMysqlBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}.

---

### DataOciMysqlMysqlBackupsFilter <a name="DataOciMysqlMysqlBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsFilter;

DataOciMysqlMysqlBackupsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#name DataOciMysqlMysqlBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#values DataOciMysqlMysqlBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#regex DataOciMysqlMysqlBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#name DataOciMysqlMysqlBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#values DataOciMysqlMysqlBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#regex DataOciMysqlMysqlBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList getPitrPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList</a>

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```java
public java.lang.Number getAllocatedStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```java
public java.lang.Number getDataStorageSizeLimitInGbs();
```

- *Type:* java.lang.Number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```java
public IResolvable getIsAutoExpandStorageEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```java
public java.lang.Number getMaxStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```java
public java.lang.String getAutomaticBackupRetention();
```

- *Type:* java.lang.String

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup"></a>

```java
public java.lang.String getFinalBackup();
```

- *Type:* java.lang.String

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```java
public IResolvable getIsDeleteProtected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.modes">modes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.portX">portX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.modes"></a>

```java
public java.util.List<java.lang.String> getModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.statusDetails"></a>

```java
public java.lang.String getStatusDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.crashRecovery">crashRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.databaseManagement">databaseManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.portX">portX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.backupPolicy"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.crashRecovery"></a>

```java
public java.lang.String getCrashRecovery();
```

- *Type:* java.lang.String

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.databaseManagement"></a>

```java
public java.lang.String getDatabaseManagement();
```

- *Type:* java.lang.String

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorage"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList getDataStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList</a>

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.deletionPolicy"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList getDeletionPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.endpoints"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList getEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.isHighlyAvailable"></a>

```java
public IResolvable getIsHighlyAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.maintenance"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList getMaintenance();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList</a>

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.mysqlVersion"></a>

```java
public java.lang.String getMysqlVersion();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.secureConnections"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList getSecureConnections();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference;

new DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary</a>

---


### DataOciMysqlMysqlBackupsBackupsList <a name="DataOciMysqlMysqlBackupsBackupsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsList;

new DataOciMysqlMysqlBackupsBackupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsOutputReference;

new DataOciMysqlMysqlBackupsBackupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupSizeInGbs">backupSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshot">dbSystemSnapshot</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshotSummary">dbSystemSnapshotSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.immediateSourceBackupId">immediateSourceBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.originalSourceBackupId">originalSourceBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList">DataOciMysqlMysqlBackupsBackupsSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCopyCreated">timeCopyCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups">DataOciMysqlMysqlBackupsBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupSizeInGbs`<sup>Required</sup> <a name="backupSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupSizeInGbs"></a>

```java
public java.lang.Number getBackupSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `dbSystemSnapshot`<sup>Required</sup> <a name="dbSystemSnapshot" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshot"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList getDbSystemSnapshot();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList</a>

---

##### `dbSystemSnapshotSummary`<sup>Required</sup> <a name="dbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshotSummary"></a>

```java
public DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList getDbSystemSnapshotSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `immediateSourceBackupId`<sup>Required</sup> <a name="immediateSourceBackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.immediateSourceBackupId"></a>

```java
public java.lang.String getImmediateSourceBackupId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.mysqlVersion"></a>

```java
public java.lang.String getMysqlVersion();
```

- *Type:* java.lang.String

---

##### `originalSourceBackupId`<sup>Required</sup> <a name="originalSourceBackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.originalSourceBackupId"></a>

```java
public java.lang.String getOriginalSourceBackupId();
```

- *Type:* java.lang.String

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.sourceDetails"></a>

```java
public DataOciMysqlMysqlBackupsBackupsSourceDetailsList getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList">DataOciMysqlMysqlBackupsBackupsSourceDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCopyCreated`<sup>Required</sup> <a name="timeCopyCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCopyCreated"></a>

```java
public java.lang.String getTimeCopyCreated();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups">DataOciMysqlMysqlBackupsBackups</a>

---


### DataOciMysqlMysqlBackupsBackupsSourceDetailsList <a name="DataOciMysqlMysqlBackupsBackupsSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList;

new DataOciMysqlMysqlBackupsBackupsSourceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get"></a>

```java
public DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference;

new DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails">DataOciMysqlMysqlBackupsBackupsSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlBackupsBackupsSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails">DataOciMysqlMysqlBackupsBackupsSourceDetails</a>

---


### DataOciMysqlMysqlBackupsFilterList <a name="DataOciMysqlMysqlBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsFilterList;

new DataOciMysqlMysqlBackupsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get"></a>

```java
public DataOciMysqlMysqlBackupsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>>

---


### DataOciMysqlMysqlBackupsFilterOutputReference <a name="DataOciMysqlMysqlBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_backups.DataOciMysqlMysqlBackupsFilterOutputReference;

new DataOciMysqlMysqlBackupsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>

---



