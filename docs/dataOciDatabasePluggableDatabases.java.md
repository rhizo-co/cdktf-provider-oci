# `dataOciDatabasePluggableDatabases` Submodule <a name="`dataOciDatabasePluggableDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabasePluggableDatabases <a name="DataOciDatabasePluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases oci_database_pluggable_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabases;

DataOciDatabasePluggableDatabases.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .databaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabasePluggableDatabasesFilter>)
//  .id(java.lang.String)
//  .pdbName(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#filter DataOciDatabasePluggableDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.pdbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetPdbName">resetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabasePluggableDatabasesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetId"></a>

```java
public void resetId()
```

##### `resetPdbName` <a name="resetPdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetPdbName"></a>

```java
public void resetPdbName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabasePluggableDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabases;

DataOciDatabasePluggableDatabases.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabases;

DataOciDatabasePluggableDatabases.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabases;

DataOciDatabasePluggableDatabases.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabases;

DataOciDatabasePluggableDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabasePluggableDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabasePluggableDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabasePluggableDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabasePluggableDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabasePluggableDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList">DataOciDatabasePluggableDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pluggableDatabases">pluggableDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList">DataOciDatabasePluggableDatabasesPluggableDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbNameInput">pdbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filter"></a>

```java
public DataOciDatabasePluggableDatabasesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList">DataOciDatabasePluggableDatabasesFilterList</a>

---

##### `pluggableDatabases`<sup>Required</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pluggableDatabases"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesList getPluggableDatabases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList">DataOciDatabasePluggableDatabasesPluggableDatabasesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbNameInput"></a>

```java
public java.lang.String getPdbNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabasePluggableDatabasesConfig <a name="DataOciDatabasePluggableDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesConfig;

DataOciDatabasePluggableDatabasesConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .databaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabasePluggableDatabasesFilter>)
//  .id(java.lang.String)
//  .pdbName(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#filter DataOciDatabasePluggableDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}.

---

### DataOciDatabasePluggableDatabasesFilter <a name="DataOciDatabasePluggableDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesFilter;

DataOciDatabasePluggableDatabasesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#name DataOciDatabasePluggableDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#values DataOciDatabasePluggableDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#regex DataOciDatabasePluggableDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#name DataOciDatabasePluggableDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#values DataOciDatabasePluggableDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#regex DataOciDatabasePluggableDatabases#regex}.

---

### DataOciDatabasePluggableDatabasesPluggableDatabases <a name="DataOciDatabasePluggableDatabasesPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabases;

DataOciDatabasePluggableDatabasesPluggableDatabases.builder()
    .build();
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings;

DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings.builder()
    .build();
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails;

DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails.builder()
    .build();
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails;

DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails.builder()
    .build();
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails;

DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails.builder()
    .build();
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig;

DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig.builder()
    .build();
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig;

DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabasePluggableDatabasesFilterList <a name="DataOciDatabasePluggableDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesFilterList;

new DataOciDatabasePluggableDatabasesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get"></a>

```java
public DataOciDatabasePluggableDatabasesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>>

---


### DataOciDatabasePluggableDatabasesFilterOutputReference <a name="DataOciDatabasePluggableDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesFilterOutputReference;

new DataOciDatabasePluggableDatabasesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter">DataOciDatabasePluggableDatabasesFilter</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public StringMap getAllConnectionStrings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbDefault"></a>

```java
public java.lang.String getPdbDefault();
```

- *Type:* java.lang.String

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbIpDefault"></a>

```java
public java.lang.String getPdbIpDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseAdminPassword">containerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseId">containerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.convertToRegularTrigger">convertToRegularTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.isRestricted">isRestricted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbCreationTypeDetails">pdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbNodeLevelDetails">pdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshableCloneConfig">refreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldCreatePdbBackup">shouldCreatePdbBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases">DataOciDatabasePluggableDatabasesPluggableDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.connectionStrings"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList</a>

---

##### `containerDatabaseAdminPassword`<sup>Required</sup> <a name="containerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseAdminPassword"></a>

```java
public java.lang.String getContainerDatabaseAdminPassword();
```

- *Type:* java.lang.String

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseId"></a>

```java
public java.lang.String getContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `convertToRegularTrigger`<sup>Required</sup> <a name="convertToRegularTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.convertToRegularTrigger"></a>

```java
public java.lang.Number getConvertToRegularTrigger();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.isRestricted"></a>

```java
public IResolvable getIsRestricted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `pdbAdminPassword`<sup>Required</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbAdminPassword"></a>

```java
public java.lang.String getPdbAdminPassword();
```

- *Type:* java.lang.String

---

##### `pdbCreationTypeDetails`<sup>Required</sup> <a name="pdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbCreationTypeDetails"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList getPdbCreationTypeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList</a>

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `pdbNodeLevelDetails`<sup>Required</sup> <a name="pdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbNodeLevelDetails"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList getPdbNodeLevelDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList</a>

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pluggableDatabaseManagementConfig"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList getPluggableDatabaseManagementConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList</a>

---

##### `refreshableCloneConfig`<sup>Required</sup> <a name="refreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshableCloneConfig"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList getRefreshableCloneConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList</a>

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshTrigger"></a>

```java
public java.lang.Number getRefreshTrigger();
```

- *Type:* java.lang.Number

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.rotateKeyTrigger"></a>

```java
public java.lang.Number getRotateKeyTrigger();
```

- *Type:* java.lang.Number

---

##### `shouldCreatePdbBackup`<sup>Required</sup> <a name="shouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldCreatePdbBackup"></a>

```java
public IResolvable getShouldCreatePdbBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldPdbAdminAccountBeLocked"></a>

```java
public IResolvable getShouldPdbAdminAccountBeLocked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabases getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases">DataOciDatabasePluggableDatabasesPluggableDatabases</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUsername">dblinkUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">dblinkUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.isThinClone">isThinClone</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">refreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">sourceContainerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">sourcePluggableDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `dblinkUsername`<sup>Required</sup> <a name="dblinkUsername" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```java
public java.lang.String getDblinkUsername();
```

- *Type:* java.lang.String

---

##### `dblinkUserPassword`<sup>Required</sup> <a name="dblinkUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```java
public java.lang.String getDblinkUserPassword();
```

- *Type:* java.lang.String

---

##### `isThinClone`<sup>Required</sup> <a name="isThinClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```java
public IResolvable getIsThinClone();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `refreshableCloneDetails`<sup>Required</sup> <a name="refreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList getRefreshableCloneDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList</a>

---

##### `sourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="sourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```java
public java.lang.String getSourceContainerDatabaseAdminPassword();
```

- *Type:* java.lang.String

---

##### `sourcePluggableDatabaseId`<sup>Required</sup> <a name="sourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```java
public java.lang.String getSourcePluggableDatabaseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```java
public IResolvable getIsRefreshableClone();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```java
public java.lang.String getManagementStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList;

new DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_pluggable_databases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference;

new DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```java
public IResolvable getIsRefreshableClone();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig</a>

---



