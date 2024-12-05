# `dataOciDatabaseDatabaseUpgradeHistoryEntries` Submodule <a name="`dataOciDatabaseDatabaseUpgradeHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntries <a name="DataOciDatabaseDatabaseUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries oci_database_database_upgrade_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntries;

DataOciDatabaseDatabaseUpgradeHistoryEntries.Builder.create(Construct scope, java.lang.String id)
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
    .databaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .upgradeAction(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#database_id DataOciDatabaseDatabaseUpgradeHistoryEntries#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#id DataOciDatabaseDatabaseUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#state DataOciDatabaseDatabaseUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.upgradeAction">upgradeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#upgrade_action DataOciDatabaseDatabaseUpgradeHistoryEntries#upgrade_action}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#database_id DataOciDatabaseDatabaseUpgradeHistoryEntries#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#filter DataOciDatabaseDatabaseUpgradeHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#id DataOciDatabaseDatabaseUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#state DataOciDatabaseDatabaseUpgradeHistoryEntries#state}.

---

##### `upgradeAction`<sup>Optional</sup> <a name="upgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.Initializer.parameter.upgradeAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#upgrade_action DataOciDatabaseDatabaseUpgradeHistoryEntries#upgrade_action}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetUpgradeAction">resetUpgradeAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetState"></a>

```java
public void resetState()
```

##### `resetUpgradeAction` <a name="resetUpgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.resetUpgradeAction"></a>

```java
public void resetUpgradeAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntries;

DataOciDatabaseDatabaseUpgradeHistoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntries;

DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntries;

DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntries;

DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDatabaseUpgradeHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDatabaseUpgradeHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseUpgradeHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.databaseUpgradeHistoryEntries">databaseUpgradeHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList">DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.upgradeActionInput">upgradeActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.upgradeAction">upgradeAction</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `databaseUpgradeHistoryEntries`<sup>Required</sup> <a name="databaseUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.databaseUpgradeHistoryEntries"></a>

```java
public DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList getDatabaseUpgradeHistoryEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList">DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.filter"></a>

```java
public DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList</a>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `upgradeActionInput`<sup>Optional</sup> <a name="upgradeActionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.upgradeActionInput"></a>

```java
public java.lang.String getUpgradeActionInput();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `upgradeAction`<sup>Required</sup> <a name="upgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.upgradeAction"></a>

```java
public java.lang.String getUpgradeAction();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig;

DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.builder()
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
    .databaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .upgradeAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#database_id DataOciDatabaseDatabaseUpgradeHistoryEntries#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#id DataOciDatabaseDatabaseUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#state DataOciDatabaseDatabaseUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.upgradeAction">upgradeAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#upgrade_action DataOciDatabaseDatabaseUpgradeHistoryEntries#upgrade_action}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#database_id DataOciDatabaseDatabaseUpgradeHistoryEntries#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#filter DataOciDatabaseDatabaseUpgradeHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#id DataOciDatabaseDatabaseUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#state DataOciDatabaseDatabaseUpgradeHistoryEntries#state}.

---

##### `upgradeAction`<sup>Optional</sup> <a name="upgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesConfig.property.upgradeAction"></a>

```java
public java.lang.String getUpgradeAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#upgrade_action DataOciDatabaseDatabaseUpgradeHistoryEntries#upgrade_action}.

---

### DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries;

DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries.builder()
    .build();
```


### DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter;

DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#name DataOciDatabaseDatabaseUpgradeHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#values DataOciDatabaseDatabaseUpgradeHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#regex DataOciDatabaseDatabaseUpgradeHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#name DataOciDatabaseDatabaseUpgradeHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#values DataOciDatabaseDatabaseUpgradeHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entries#regex DataOciDatabaseDatabaseUpgradeHistoryEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList;

new DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.get"></a>

```java
public DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference;

new DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.targetDatabaseSoftwareImageId">targetDatabaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.targetDbHomeId">targetDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.targetDbVersion">targetDbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries">DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.sourceDbHomeId"></a>

```java
public java.lang.String getSourceDbHomeId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetDatabaseSoftwareImageId`<sup>Required</sup> <a name="targetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.targetDatabaseSoftwareImageId"></a>

```java
public java.lang.String getTargetDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `targetDbHomeId`<sup>Required</sup> <a name="targetDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.targetDbHomeId"></a>

```java
public java.lang.String getTargetDbHomeId();
```

- *Type:* java.lang.String

---

##### `targetDbVersion`<sup>Required</sup> <a name="targetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.targetDbVersion"></a>

```java
public java.lang.String getTargetDbVersion();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries">DataOciDatabaseDatabaseUpgradeHistoryEntriesDatabaseUpgradeHistoryEntries</a>

---


### DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList;

new DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.get"></a>

```java
public DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>>

---


### DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference;

new DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntries.DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter">DataOciDatabaseDatabaseUpgradeHistoryEntriesFilter</a>

---



