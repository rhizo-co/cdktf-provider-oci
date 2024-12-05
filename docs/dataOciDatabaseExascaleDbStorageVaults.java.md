# `dataOciDatabaseExascaleDbStorageVaults` Submodule <a name="`dataOciDatabaseExascaleDbStorageVaults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults oci_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaults;

DataOciDatabaseExascaleDbStorageVaults.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseExascaleDbStorageVaultsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseExascaleDbStorageVaultsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaults;

DataOciDatabaseExascaleDbStorageVaults.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaults;

DataOciDatabaseExascaleDbStorageVaults.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaults;

DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaults;

DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">exascaleDbStorageVaults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `exascaleDbStorageVaults`<sup>Required</sup> <a name="exascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList getExascaleDbStorageVaults();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filter"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList">DataOciDatabaseExascaleDbStorageVaultsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExascaleDbStorageVaultsConfig <a name="DataOciDatabaseExascaleDbStorageVaultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsConfig;

DataOciDatabaseExascaleDbStorageVaultsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseExascaleDbStorageVaultsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}.

---

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults;

DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.builder()
    .build();
```


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage;

DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage.builder()
    .build();
```


### DataOciDatabaseExascaleDbStorageVaultsFilter <a name="DataOciDatabaseExascaleDbStorageVaultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsFilter;

DataOciDatabaseExascaleDbStorageVaultsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">availableSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">totalSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableSizeInGbs`<sup>Required</sup> <a name="availableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```java
public java.lang.Number getAvailableSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `totalSizeInGbs`<sup>Required</sup> <a name="totalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```java
public java.lang.Number getTotalSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage</a>

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference;

new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent">additionalFlashCacheInPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount">vmClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalFlashCacheInPercent`<sup>Required</sup> <a name="additionalFlashCacheInPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.additionalFlashCacheInPercent"></a>

```java
public java.lang.Number getAdditionalFlashCacheInPercent();
```

- *Type:* java.lang.Number

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.highCapacityDatabaseStorage"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList getHighCapacityDatabaseStorage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterCount"></a>

```java
public java.lang.Number getVmClusterCount();
```

- *Type:* java.lang.Number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.vmClusterIds"></a>

```java
public java.util.List<java.lang.String> getVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataOciDatabaseExascaleDbStorageVaultsFilterList <a name="DataOciDatabaseExascaleDbStorageVaultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsFilterList;

new DataOciDatabaseExascaleDbStorageVaultsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get"></a>

```java
public DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>>

---


### DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference <a name="DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exascale_db_storage_vaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference;

new DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExascaleDbStorageVaults.DataOciDatabaseExascaleDbStorageVaultsFilter">DataOciDatabaseExascaleDbStorageVaultsFilter</a>

---



