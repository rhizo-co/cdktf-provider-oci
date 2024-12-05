# `dataOciDatabaseExadbVmClusters` Submodule <a name="`dataOciDatabaseExadbVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusters <a name="DataOciDatabaseExadbVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters oci_database_exadb_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClusters;

DataOciDatabaseExadbVmClusters.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .exascaleDbStorageVaultId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseExadbVmClustersFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#compartment_id DataOciDatabaseExadbVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#display_name DataOciDatabaseExadbVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#exascale_db_storage_vault_id DataOciDatabaseExadbVmClusters#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#id DataOciDatabaseExadbVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#state DataOciDatabaseExadbVmClusters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#compartment_id DataOciDatabaseExadbVmClusters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#display_name DataOciDatabaseExadbVmClusters#display_name}.

---

##### `exascaleDbStorageVaultId`<sup>Optional</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.exascaleDbStorageVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#exascale_db_storage_vault_id DataOciDatabaseExadbVmClusters#exascale_db_storage_vault_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#filter DataOciDatabaseExadbVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#id DataOciDatabaseExadbVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#state DataOciDatabaseExadbVmClusters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetExascaleDbStorageVaultId">resetExascaleDbStorageVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseExadbVmClustersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExascaleDbStorageVaultId` <a name="resetExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetExascaleDbStorageVaultId"></a>

```java
public void resetExascaleDbStorageVaultId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClusters;

DataOciDatabaseExadbVmClusters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClusters;

DataOciDatabaseExadbVmClusters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClusters;

DataOciDatabaseExadbVmClusters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClusters;

DataOciDatabaseExadbVmClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseExadbVmClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseExadbVmClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseExadbVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exadbVmClusters">exadbVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList">DataOciDatabaseExadbVmClustersExadbVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList">DataOciDatabaseExadbVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `exadbVmClusters`<sup>Required</sup> <a name="exadbVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exadbVmClusters"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersList getExadbVmClusters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList">DataOciDatabaseExadbVmClustersExadbVmClustersList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filter"></a>

```java
public DataOciDatabaseExadbVmClustersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList">DataOciDatabaseExadbVmClustersFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultIdInput"></a>

```java
public java.lang.String getExascaleDbStorageVaultIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClustersConfig <a name="DataOciDatabaseExadbVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersConfig;

DataOciDatabaseExadbVmClustersConfig.builder()
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
//  .displayName(java.lang.String)
//  .exascaleDbStorageVaultId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseExadbVmClustersFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#compartment_id DataOciDatabaseExadbVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#display_name DataOciDatabaseExadbVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#exascale_db_storage_vault_id DataOciDatabaseExadbVmClusters#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#id DataOciDatabaseExadbVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#state DataOciDatabaseExadbVmClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#compartment_id DataOciDatabaseExadbVmClusters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#display_name DataOciDatabaseExadbVmClusters#display_name}.

---

##### `exascaleDbStorageVaultId`<sup>Optional</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#exascale_db_storage_vault_id DataOciDatabaseExadbVmClusters#exascale_db_storage_vault_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#filter DataOciDatabaseExadbVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#id DataOciDatabaseExadbVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#state DataOciDatabaseExadbVmClusters#state}.

---

### DataOciDatabaseExadbVmClustersExadbVmClusters <a name="DataOciDatabaseExadbVmClustersExadbVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClusters;

DataOciDatabaseExadbVmClustersExadbVmClusters.builder()
    .build();
```


### DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions <a name="DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions;

DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions.builder()
    .build();
```


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache;

DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache.builder()
    .build();
```


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans;

DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans.builder()
    .build();
```


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig;

DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig.builder()
    .build();
```


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource;

DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource.builder()
    .build();
```


### DataOciDatabaseExadbVmClustersFilter <a name="DataOciDatabaseExadbVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersFilter;

DataOciDatabaseExadbVmClustersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#name DataOciDatabaseExadbVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#values DataOciDatabaseExadbVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#regex DataOciDatabaseExadbVmClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#name DataOciDatabaseExadbVmClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#values DataOciDatabaseExadbVmClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#regex DataOciDatabaseExadbVmClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList;

new DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.get"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference;

new DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public IResolvable getIsIncidentLogsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList;

new DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.get"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference;

new DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList;

new DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.get"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference;

new DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.dbPlans"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersList;

new DataOciDatabaseExadbVmClustersExadbVmClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.get"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList;

new DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.get"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference;

new DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.memorySizeInGbsPerNode">memorySizeInGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode">snapshotFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalEcpuCountPerNode">totalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode">totalFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode">vmFileSystemStorageSizeGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbsPerNode`<sup>Required</sup> <a name="memorySizeInGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.memorySizeInGbsPerNode"></a>

```java
public java.lang.Number getMemorySizeInGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `snapshotFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="snapshotFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getSnapshotFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `totalEcpuCountPerNode`<sup>Required</sup> <a name="totalEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalEcpuCountPerNode"></a>

```java
public java.lang.Number getTotalEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `totalFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="totalFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getTotalFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `vmFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="vmFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode"></a>

```java
public java.lang.Number getVmFileSystemStorageSizeGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList;

new DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.get"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference;

new DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeHostname">nodeHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeHostname`<sup>Required</sup> <a name="nodeHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeHostname"></a>

```java
public java.lang.String getNodeHostname();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference;

new DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageType">gridImageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lastUpdateHistoryEntryId">lastUpdateHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.listenerPort">listenerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeConfig">nodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeResource">nodeResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.privateZoneId">privateZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemVersion">systemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters">DataOciDatabaseExadbVmClustersExadbVmClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.dataCollectionOptions"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

---

##### `gridImageType`<sup>Required</sup> <a name="gridImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageType"></a>

```java
public java.lang.String getGridImageType();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.iormConfigCache"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList getIormConfigCache();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList</a>

---

##### `lastUpdateHistoryEntryId`<sup>Required</sup> <a name="lastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lastUpdateHistoryEntryId"></a>

```java
public java.lang.String getLastUpdateHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.listenerPort"></a>

```java
public java.lang.String getListenerPort();
```

- *Type:* java.lang.String

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeConfig"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList getNodeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList</a>

---

##### `nodeResource`<sup>Required</sup> <a name="nodeResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeResource"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList getNodeResource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateZoneId`<sup>Required</sup> <a name="privateZoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.privateZoneId"></a>

```java
public java.lang.String getPrivateZoneId();
```

- *Type:* java.lang.String

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsRecordId"></a>

```java
public java.lang.String getScanDnsRecordId();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcpSsl"></a>

```java
public java.lang.Number getScanListenerPortTcpSsl();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.securityAttributes"></a>

```java
public StringMap getSecurityAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemVersion"></a>

```java
public java.lang.String getSystemVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClustersExadbVmClusters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters">DataOciDatabaseExadbVmClustersExadbVmClusters</a>

---


### DataOciDatabaseExadbVmClustersFilterList <a name="DataOciDatabaseExadbVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersFilterList;

new DataOciDatabaseExadbVmClustersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.get"></a>

```java
public DataOciDatabaseExadbVmClustersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>>

---


### DataOciDatabaseExadbVmClustersFilterOutputReference <a name="DataOciDatabaseExadbVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_clusters.DataOciDatabaseExadbVmClustersFilterOutputReference;

new DataOciDatabaseExadbVmClustersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter">DataOciDatabaseExadbVmClustersFilter</a>

---



