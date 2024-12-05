# `dataOciDatabaseDbHomePatchHistoryEntries` Submodule <a name="`dataOciDatabaseDbHomePatchHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbHomePatchHistoryEntries <a name="DataOciDatabaseDbHomePatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries oci_database_db_home_patch_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntries;

DataOciDatabaseDbHomePatchHistoryEntries.Builder.create(Construct scope, java.lang.String id)
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
    .dbHomeId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDbHomePatchHistoryEntriesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#db_home_id DataOciDatabaseDbHomePatchHistoryEntries#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#id DataOciDatabaseDbHomePatchHistoryEntries#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.dbHomeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#db_home_id DataOciDatabaseDbHomePatchHistoryEntries#db_home_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#filter DataOciDatabaseDbHomePatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#id DataOciDatabaseDbHomePatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDbHomePatchHistoryEntriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbHomePatchHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntries;

DataOciDatabaseDbHomePatchHistoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntries;

DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntries;

DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntries;

DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDbHomePatchHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDbHomePatchHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDbHomePatchHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbHomePatchHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList">DataOciDatabaseDbHomePatchHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.patchHistoryEntries">patchHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeIdInput">dbHomeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filter"></a>

```java
public DataOciDatabaseDbHomePatchHistoryEntriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList">DataOciDatabaseDbHomePatchHistoryEntriesFilterList</a>

---

##### `patchHistoryEntries`<sup>Required</sup> <a name="patchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.patchHistoryEntries"></a>

```java
public DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList getPatchHistoryEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList</a>

---

##### `dbHomeIdInput`<sup>Optional</sup> <a name="dbHomeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeIdInput"></a>

```java
public java.lang.String getDbHomeIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeId"></a>

```java
public java.lang.String getDbHomeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbHomePatchHistoryEntriesConfig <a name="DataOciDatabaseDbHomePatchHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesConfig;

DataOciDatabaseDbHomePatchHistoryEntriesConfig.builder()
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
    .dbHomeId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDbHomePatchHistoryEntriesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#db_home_id DataOciDatabaseDbHomePatchHistoryEntries#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#id DataOciDatabaseDbHomePatchHistoryEntries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dbHomeId"></a>

```java
public java.lang.String getDbHomeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#db_home_id DataOciDatabaseDbHomePatchHistoryEntries#db_home_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#filter DataOciDatabaseDbHomePatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#id DataOciDatabaseDbHomePatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbHomePatchHistoryEntriesFilter <a name="DataOciDatabaseDbHomePatchHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesFilter;

DataOciDatabaseDbHomePatchHistoryEntriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#name DataOciDatabaseDbHomePatchHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#values DataOciDatabaseDbHomePatchHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#regex DataOciDatabaseDbHomePatchHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#name DataOciDatabaseDbHomePatchHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#values DataOciDatabaseDbHomePatchHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#regex DataOciDatabaseDbHomePatchHistoryEntries#regex}.

---

### DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries <a name="DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries;

DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbHomePatchHistoryEntriesFilterList <a name="DataOciDatabaseDbHomePatchHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList;

new DataOciDatabaseDbHomePatchHistoryEntriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.get"></a>

```java
public DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>>

---


### DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference;

new DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>

---


### DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList <a name="DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList;

new DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.get"></a>

```java
public DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference <a name="DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_home_patch_history_entries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference;

new DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId">patchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType">patchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId"></a>

```java
public java.lang.String getPatchId();
```

- *Type:* java.lang.String

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType"></a>

```java
public java.lang.String getPatchType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries</a>

---



