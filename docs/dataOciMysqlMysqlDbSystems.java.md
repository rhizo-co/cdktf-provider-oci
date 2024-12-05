# `dataOciMysqlMysqlDbSystems` Submodule <a name="`dataOciMysqlMysqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlDbSystems <a name="DataOciMysqlMysqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems oci_mysql_mysql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystems;

DataOciMysqlMysqlDbSystems.Builder.create(Construct scope, java.lang.String id)
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
//  .configurationId(java.lang.String)
//  .databaseManagement(java.util.List<java.lang.String>)
//  .dbSystemId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMysqlMysqlDbSystemsFilter>)
//  .id(java.lang.String)
//  .isHeatWaveClusterAttached(java.lang.Boolean)
//  .isHeatWaveClusterAttached(IResolvable)
//  .isUpToDate(java.lang.Boolean)
//  .isUpToDate(IResolvable)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.databaseManagement">databaseManagement</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.isUpToDate">isUpToDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}.

---

##### `databaseManagement`<sup>Optional</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.databaseManagement"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#filter DataOciMysqlMysqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isHeatWaveClusterAttached`<sup>Optional</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.isHeatWaveClusterAttached"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}.

---

##### `isUpToDate`<sup>Optional</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.isUpToDate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement">resetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached">resetIsHeatWaveClusterAttached</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate">resetIsUpToDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMysqlMysqlDbSystemsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>>

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetDatabaseManagement` <a name="resetDatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement"></a>

```java
public void resetDatabaseManagement()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId"></a>

```java
public void resetId()
```

##### `resetIsHeatWaveClusterAttached` <a name="resetIsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached"></a>

```java
public void resetIsHeatWaveClusterAttached()
```

##### `resetIsUpToDate` <a name="resetIsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate"></a>

```java
public void resetIsUpToDate()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystems;

DataOciMysqlMysqlDbSystems.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystems;

DataOciMysqlMysqlDbSystems.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystems;

DataOciMysqlMysqlDbSystems.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystems;

DataOciMysqlMysqlDbSystems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMysqlMysqlDbSystems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMysqlMysqlDbSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMysqlMysqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems">dbSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput">databaseManagementInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput">isHeatWaveClusterAttachedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput">isUpToDateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement">databaseManagement</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate">isUpToDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbSystems`<sup>Required</sup> <a name="dbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsList getDbSystems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter"></a>

```java
public DataOciMysqlMysqlDbSystemsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `databaseManagementInput`<sup>Optional</sup> <a name="databaseManagementInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput"></a>

```java
public java.util.List<java.lang.String> getDatabaseManagementInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isHeatWaveClusterAttachedInput`<sup>Optional</sup> <a name="isHeatWaveClusterAttachedInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput"></a>

```java
public java.lang.Object getIsHeatWaveClusterAttachedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUpToDateInput`<sup>Optional</sup> <a name="isUpToDateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput"></a>

```java
public java.lang.Object getIsUpToDateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement"></a>

```java
public java.util.List<java.lang.String> getDatabaseManagement();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached"></a>

```java
public java.lang.Object getIsHeatWaveClusterAttached();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUpToDate`<sup>Required</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate"></a>

```java
public java.lang.Object getIsUpToDate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlDbSystemsConfig <a name="DataOciMysqlMysqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsConfig;

DataOciMysqlMysqlDbSystemsConfig.builder()
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
//  .configurationId(java.lang.String)
//  .databaseManagement(java.util.List<java.lang.String>)
//  .dbSystemId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMysqlMysqlDbSystemsFilter>)
//  .id(java.lang.String)
//  .isHeatWaveClusterAttached(java.lang.Boolean)
//  .isHeatWaveClusterAttached(IResolvable)
//  .isUpToDate(java.lang.Boolean)
//  .isUpToDate(IResolvable)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement">databaseManagement</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate">isUpToDate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}.

---

##### `databaseManagement`<sup>Optional</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement"></a>

```java
public java.util.List<java.lang.String> getDatabaseManagement();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#filter DataOciMysqlMysqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isHeatWaveClusterAttached`<sup>Optional</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached"></a>

```java
public java.lang.Object getIsHeatWaveClusterAttached();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}.

---

##### `isUpToDate`<sup>Optional</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate"></a>

```java
public java.lang.Object getIsUpToDate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}.

---

### DataOciMysqlMysqlDbSystemsDbSystems <a name="DataOciMysqlMysqlDbSystemsDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystems;

DataOciMysqlMysqlDbSystemsDbSystems.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy;

DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy;

DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannels <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannels;

DataOciMysqlMysqlDbSystemsDbSystemsChannels.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource;

DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling;

DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate;

DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget;

DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters;

DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement;

DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts;

DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorage <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage;

DataOciMysqlMysqlDbSystemsDbSystemsDataStorage.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy;

DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsEndpoints <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints;

DataOciMysqlMysqlDbSystemsDbSystemsEndpoints.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster;

DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenance <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance;

DataOciMysqlMysqlDbSystemsDbSystemsMaintenance.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails;

DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections;

DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsDbSystemsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsSource;

DataOciMysqlMysqlDbSystemsDbSystemsSource.builder()
    .build();
```


### DataOciMysqlMysqlDbSystemsFilter <a name="DataOciMysqlMysqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsFilter;

DataOciMysqlMysqlDbSystemsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList getPitrPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a>

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays"></a>

```java
public java.lang.Number getRetentionInDays();
```

- *Type:* java.lang.Number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList getTarget();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannels getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">lastConfiguredLogFilename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">lastConfiguredLogOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastConfiguredLogFilename`<sup>Required</sup> <a name="lastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```java
public java.lang.String getLastConfiguredLogFilename();
```

- *Type:* java.lang.String

---

##### `lastConfiguredLogOffset`<sup>Required</sup> <a name="lastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```java
public java.lang.String getLastConfiguredLogOffset();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling">anonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymousTransactionsHandling`<sup>Required</sup> <a name="anonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList getAnonymousTransactionsHandling();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList getSslCaCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a>

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents">contents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

---

##### `contents`<sup>Required</sup> <a name="contents" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```java
public java.lang.String getContents();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername">applierUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds">delayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">tablesWithoutPrimaryKeyHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applierUsername`<sup>Required</sup> <a name="applierUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername"></a>

```java
public java.lang.String getApplierUsername();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `delayInSeconds`<sup>Required</sup> <a name="delayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds"></a>

```java
public java.lang.Number getDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList getFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a>

---

##### `tablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="tablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```java
public java.lang.String getTablesWithoutPrimaryKeyHandling();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList;

new DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList;

new DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList;

new DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```java
public java.lang.Number getAllocatedStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```java
public java.lang.Number getDataStorageSizeLimitInGbs();
```

- *Type:* java.lang.Number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```java
public IResolvable getIsAutoExpandStorageEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```java
public java.lang.Number getMaxStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsDataStorage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList;

new DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```java
public java.lang.String getAutomaticBackupRetention();
```

- *Type:* java.lang.String

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup"></a>

```java
public java.lang.String getFinalBackup();
```

- *Type:* java.lang.String

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```java
public IResolvable getIsDeleteProtected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList;

new DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes">modes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX">portX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes"></a>

```java
public java.util.List<java.lang.String> getModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails"></a>

```java
public java.lang.String getStatusDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList;

new DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize">clusterSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled">isLakehouseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize"></a>

```java
public java.lang.Number getClusterSize();
```

- *Type:* java.lang.Number

---

##### `isLakehouseEnabled`<sup>Required</sup> <a name="isLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```java
public IResolvable getIsLakehouseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsList;

new DataOciMysqlMysqlDbSystemsDbSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList;

new DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime"></a>

```java
public java.lang.String getWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsMaintenance getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels">channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery">crashRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement">currentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement">databaseManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster">heatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails">pointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX">portX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType">shutdownType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a>

---

##### `channels`<sup>Required</sup> <a name="channels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsChannelsList getChannels();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery"></a>

```java
public java.lang.String getCrashRecovery();
```

- *Type:* java.lang.String

---

##### `currentPlacement`<sup>Required</sup> <a name="currentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList getCurrentPlacement();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList getCustomerContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a>

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement"></a>

```java
public java.lang.String getDatabaseManagement();
```

- *Type:* java.lang.String

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList getDataStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a>

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList getDeletionPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList getEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `heatWaveCluster`<sup>Required</sup> <a name="heatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList getHeatWaveCluster();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel"></a>

```java
public java.lang.String getHostnameLabel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached"></a>

```java
public IResolvable getIsHeatWaveClusterAttached();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable"></a>

```java
public IResolvable getIsHighlyAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList getMaintenance();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a>

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion"></a>

```java
public java.lang.String getMysqlVersion();
```

- *Type:* java.lang.String

---

##### `pointInTimeRecoveryDetails`<sup>Required</sup> <a name="pointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList getPointInTimeRecoveryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX"></a>

```java
public java.lang.Number getPortX();
```

- *Type:* java.lang.Number

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList getSecureConnections();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `shutdownType`<sup>Required</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType"></a>

```java
public java.lang.String getShutdownType();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsSourceList getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList;

new DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">timeEarliestRecoveryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">timeLatestRecoveryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeEarliestRecoveryPoint`<sup>Required</sup> <a name="timeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```java
public java.lang.String getTimeEarliestRecoveryPoint();
```

- *Type:* java.lang.String

---

##### `timeLatestRecoveryPoint`<sup>Required</sup> <a name="timeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```java
public java.lang.String getTimeLatestRecoveryPoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList;

new DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList;

new DataOciMysqlMysqlDbSystemsDbSystemsSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference;

new DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint">recoveryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `recoveryPoint`<sup>Required</sup> <a name="recoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint"></a>

```java
public java.lang.String getRecoveryPoint();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl"></a>

```java
public java.lang.String getSourceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue"></a>

```java
public DataOciMysqlMysqlDbSystemsDbSystemsSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a>

---


### DataOciMysqlMysqlDbSystemsFilterList <a name="DataOciMysqlMysqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsFilterList;

new DataOciMysqlMysqlDbSystemsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get"></a>

```java
public DataOciMysqlMysqlDbSystemsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>>

---


### DataOciMysqlMysqlDbSystemsFilterOutputReference <a name="DataOciMysqlMysqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_mysql_mysql_db_systems.DataOciMysqlMysqlDbSystemsFilterOutputReference;

new DataOciMysqlMysqlDbSystemsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>

---



