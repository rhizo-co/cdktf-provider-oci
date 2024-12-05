# `dataOciDatabaseVmClusterPatchHistoryEntries` Submodule <a name="`dataOciDatabaseVmClusterPatchHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntries <a name="DataOciDatabaseVmClusterPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries oci_database_vm_cluster_patch_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntries;

DataOciDatabaseVmClusterPatchHistoryEntries.Builder.create(Construct scope, java.lang.String id)
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
    .vmClusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseVmClusterPatchHistoryEntriesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.vmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#filter DataOciDatabaseVmClusterPatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseVmClusterPatchHistoryEntriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntries;

DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntries;

DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntries;

DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntries;

DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseVmClusterPatchHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseVmClusterPatchHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterPatchHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList">DataOciDatabaseVmClusterPatchHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.patchHistoryEntries">patchHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filter"></a>

```java
public DataOciDatabaseVmClusterPatchHistoryEntriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList">DataOciDatabaseVmClusterPatchHistoryEntriesFilterList</a>

---

##### `patchHistoryEntries`<sup>Required</sup> <a name="patchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.patchHistoryEntries"></a>

```java
public DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList getPatchHistoryEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterIdInput"></a>

```java
public java.lang.String getVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntriesConfig <a name="DataOciDatabaseVmClusterPatchHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig;

DataOciDatabaseVmClusterPatchHistoryEntriesConfig.builder()
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
    .vmClusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseVmClusterPatchHistoryEntriesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#filter DataOciDatabaseVmClusterPatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#id DataOciDatabaseVmClusterPatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseVmClusterPatchHistoryEntriesFilter <a name="DataOciDatabaseVmClusterPatchHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter;

DataOciDatabaseVmClusterPatchHistoryEntriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#name DataOciDatabaseVmClusterPatchHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#values DataOciDatabaseVmClusterPatchHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#regex DataOciDatabaseVmClusterPatchHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#name DataOciDatabaseVmClusterPatchHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#values DataOciDatabaseVmClusterPatchHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entries#regex DataOciDatabaseVmClusterPatchHistoryEntries#regex}.

---

### DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries <a name="DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries;

DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterPatchHistoryEntriesFilterList <a name="DataOciDatabaseVmClusterPatchHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList;

new DataOciDatabaseVmClusterPatchHistoryEntriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.get"></a>

```java
public DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>>

---


### DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference <a name="DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference;

new DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesFilter">DataOciDatabaseVmClusterPatchHistoryEntriesFilter</a>

---


### DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList <a name="DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList;

new DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.get"></a>

```java
public DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference <a name="DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_patch_history_entries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference;

new DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId">patchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId"></a>

```java
public java.lang.String getPatchId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntries.DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries</a>

---



