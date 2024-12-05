# `dataOciDatabaseDatabaseUpgradeHistoryEntry` Submodule <a name="`dataOciDatabaseDatabaseUpgradeHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntry <a name="DataOciDatabaseDatabaseUpgradeHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry oci_database_database_upgrade_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entry.DataOciDatabaseDatabaseUpgradeHistoryEntry;

DataOciDatabaseDatabaseUpgradeHistoryEntry.Builder.create(Construct scope, java.lang.String id)
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
    .upgradeHistoryEntryId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.upgradeHistoryEntryId">upgradeHistoryEntryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}.

---

##### `upgradeHistoryEntryId`<sup>Required</sup> <a name="upgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.upgradeHistoryEntryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entry.DataOciDatabaseDatabaseUpgradeHistoryEntry;

DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entry.DataOciDatabaseDatabaseUpgradeHistoryEntry;

DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entry.DataOciDatabaseDatabaseUpgradeHistoryEntry;

DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entry.DataOciDatabaseDatabaseUpgradeHistoryEntry;

DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDatabaseUpgradeHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDatabaseUpgradeHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseUpgradeHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.options">options</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDatabaseSoftwareImageId">targetDatabaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbHomeId">targetDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbVersion">targetDbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput">upgradeHistoryEntryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryId">upgradeHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.options"></a>

```java
public java.lang.String getOptions();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.sourceDbHomeId"></a>

```java
public java.lang.String getSourceDbHomeId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetDatabaseSoftwareImageId`<sup>Required</sup> <a name="targetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDatabaseSoftwareImageId"></a>

```java
public java.lang.String getTargetDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `targetDbHomeId`<sup>Required</sup> <a name="targetDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbHomeId"></a>

```java
public java.lang.String getTargetDbHomeId();
```

- *Type:* java.lang.String

---

##### `targetDbVersion`<sup>Required</sup> <a name="targetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbVersion"></a>

```java
public java.lang.String getTargetDbVersion();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `upgradeHistoryEntryIdInput`<sup>Optional</sup> <a name="upgradeHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput"></a>

```java
public java.lang.String getUpgradeHistoryEntryIdInput();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `upgradeHistoryEntryId`<sup>Required</sup> <a name="upgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryId"></a>

```java
public java.lang.String getUpgradeHistoryEntryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntryConfig <a name="DataOciDatabaseDatabaseUpgradeHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_upgrade_history_entry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig;

DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.builder()
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
    .upgradeHistoryEntryId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId">upgradeHistoryEntryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}.

---

##### `upgradeHistoryEntryId`<sup>Required</sup> <a name="upgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId"></a>

```java
public java.lang.String getUpgradeHistoryEntryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



