# `dataOciDatabaseDbSystemsUpgradeHistoryEntries` Submodule <a name="`dataOciDatabaseDbSystemsUpgradeHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntries <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries oci_database_db_systems_upgrade_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntries;

DataOciDatabaseDbSystemsUpgradeHistoryEntries.Builder.create(Construct scope, java.lang.String id)
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
    .dbSystemId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .upgradeAction(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.upgradeAction">upgradeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#filter DataOciDatabaseDbSystemsUpgradeHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}.

---

##### `upgradeAction`<sup>Optional</sup> <a name="upgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.upgradeAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetUpgradeAction">resetUpgradeAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetState"></a>

```java
public void resetState()
```

##### `resetUpgradeAction` <a name="resetUpgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetUpgradeAction"></a>

```java
public void resetUpgradeAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntries;

DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntries;

DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntries;

DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntries;

DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDbSystemsUpgradeHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDbSystemsUpgradeHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemsUpgradeHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemUpgradeHistoryEntries">dbSystemUpgradeHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeActionInput">upgradeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeAction">upgradeAction</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbSystemUpgradeHistoryEntries`<sup>Required</sup> <a name="dbSystemUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemUpgradeHistoryEntries"></a>

```java
public DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList getDbSystemUpgradeHistoryEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filter"></a>

```java
public DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList</a>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `upgradeActionInput`<sup>Optional</sup> <a name="upgradeActionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeActionInput"></a>

```java
public java.lang.String getUpgradeActionInput();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `upgradeAction`<sup>Required</sup> <a name="upgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeAction"></a>

```java
public java.lang.String getUpgradeAction();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig;

DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.builder()
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
    .dbSystemId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .upgradeAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.upgradeAction">upgradeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#filter DataOciDatabaseDbSystemsUpgradeHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}.

---

##### `upgradeAction`<sup>Optional</sup> <a name="upgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.upgradeAction"></a>

```java
public java.lang.String getUpgradeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}.

---

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries;

DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries.builder()
    .build();
```


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter;

DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#name DataOciDatabaseDbSystemsUpgradeHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#values DataOciDatabaseDbSystemsUpgradeHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#regex DataOciDatabaseDbSystemsUpgradeHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#name DataOciDatabaseDbSystemsUpgradeHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#values DataOciDatabaseDbSystemsUpgradeHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#regex DataOciDatabaseDbSystemsUpgradeHistoryEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList;

new DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get"></a>

```java
public DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference;

new DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newGiVersion">newGiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newOsVersion">newOsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldGiVersion">oldGiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldOsVersion">oldOsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `newGiVersion`<sup>Required</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newGiVersion"></a>

```java
public java.lang.String getNewGiVersion();
```

- *Type:* java.lang.String

---

##### `newOsVersion`<sup>Required</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newOsVersion"></a>

```java
public java.lang.String getNewOsVersion();
```

- *Type:* java.lang.String

---

##### `oldGiVersion`<sup>Required</sup> <a name="oldGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldGiVersion"></a>

```java
public java.lang.String getOldGiVersion();
```

- *Type:* java.lang.String

---

##### `oldOsVersion`<sup>Required</sup> <a name="oldOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldOsVersion"></a>

```java
public java.lang.String getOldOsVersion();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.snapshotRetentionPeriodInDays"></a>

```java
public java.lang.Number getSnapshotRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries</a>

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList;

new DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get"></a>

```java
public DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>>

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_systems_upgrade_history_entries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference;

new DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter</a>

---



