# `dataOciDatabaseExternalNonContainerDatabases` Submodule <a name="`dataOciDatabaseExternalNonContainerDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalNonContainerDatabases <a name="DataOciDatabaseExternalNonContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases oci_database_external_non_container_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabases;

DataOciDatabaseExternalNonContainerDatabases.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatabaseExternalNonContainerDatabasesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#compartment_id DataOciDatabaseExternalNonContainerDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#display_name DataOciDatabaseExternalNonContainerDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#id DataOciDatabaseExternalNonContainerDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#state DataOciDatabaseExternalNonContainerDatabases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#compartment_id DataOciDatabaseExternalNonContainerDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#display_name DataOciDatabaseExternalNonContainerDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#filter DataOciDatabaseExternalNonContainerDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#id DataOciDatabaseExternalNonContainerDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#state DataOciDatabaseExternalNonContainerDatabases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseExternalNonContainerDatabasesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabases;

DataOciDatabaseExternalNonContainerDatabases.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabases;

DataOciDatabaseExternalNonContainerDatabases.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabases;

DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabases;

DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseExternalNonContainerDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseExternalNonContainerDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalNonContainerDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.externalNonContainerDatabases">externalNonContainerDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList">DataOciDatabaseExternalNonContainerDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `externalNonContainerDatabases`<sup>Required</sup> <a name="externalNonContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.externalNonContainerDatabases"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList getExternalNonContainerDatabases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filter"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList">DataOciDatabaseExternalNonContainerDatabasesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabases.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalNonContainerDatabasesConfig <a name="DataOciDatabaseExternalNonContainerDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesConfig;

DataOciDatabaseExternalNonContainerDatabasesConfig.builder()
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
//  .filter(java.util.List<DataOciDatabaseExternalNonContainerDatabasesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#compartment_id DataOciDatabaseExternalNonContainerDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#display_name DataOciDatabaseExternalNonContainerDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#id DataOciDatabaseExternalNonContainerDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#state DataOciDatabaseExternalNonContainerDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#compartment_id DataOciDatabaseExternalNonContainerDatabases#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#display_name DataOciDatabaseExternalNonContainerDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#filter DataOciDatabaseExternalNonContainerDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#id DataOciDatabaseExternalNonContainerDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#state DataOciDatabaseExternalNonContainerDatabases#state}.

---

### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases;

DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases.builder()
    .build();
```


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig;

DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig.builder()
    .build();
```


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig;

DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig.builder()
    .build();
```


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig;

DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig.builder()
    .build();
```


### DataOciDatabaseExternalNonContainerDatabasesFilter <a name="DataOciDatabaseExternalNonContainerDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesFilter;

DataOciDatabaseExternalNonContainerDatabasesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#name DataOciDatabaseExternalNonContainerDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#values DataOciDatabaseExternalNonContainerDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#regex DataOciDatabaseExternalNonContainerDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#name DataOciDatabaseExternalNonContainerDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#values DataOciDatabaseExternalNonContainerDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_databases#regex DataOciDatabaseExternalNonContainerDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.get"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">databaseManagementConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseManagementConnectionId`<sup>Required</sup> <a name="databaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```java
public java.lang.String getDatabaseManagementConnectionId();
```

- *Type:* java.lang.String

---

##### `databaseManagementStatus`<sup>Required</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```java
public java.lang.String getDatabaseManagementStatus();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.get"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.get"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">operationsInsightsConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationsInsightsConnectorId`<sup>Required</sup> <a name="operationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```java
public java.lang.String getOperationsInsightsConnectorId();
```

- *Type:* java.lang.String

---

##### `operationsInsightsStatus`<sup>Required</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```java
public java.lang.String getOperationsInsightsStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseConfiguration">databaseConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbId">dbId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbPacks">dbPacks</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.operationsInsightsConfig">operationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.stackMonitoringConfig">stackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseConfiguration`<sup>Required</sup> <a name="databaseConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseConfiguration"></a>

```java
public java.lang.String getDatabaseConfiguration();
```

- *Type:* java.lang.String

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `databaseManagementConfig`<sup>Required</sup> <a name="databaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseManagementConfig"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList getDatabaseManagementConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesDatabaseManagementConfigList</a>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `dbId`<sup>Required</sup> <a name="dbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbId"></a>

```java
public java.lang.String getDbId();
```

- *Type:* java.lang.String

---

##### `dbPacks`<sup>Required</sup> <a name="dbPacks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbPacks"></a>

```java
public java.lang.String getDbPacks();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `operationsInsightsConfig`<sup>Required</sup> <a name="operationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.operationsInsightsConfig"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList getOperationsInsightsConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOperationsInsightsConfigList</a>

---

##### `stackMonitoringConfig`<sup>Required</sup> <a name="stackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.stackMonitoringConfig"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList getStackMonitoringConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabases</a>

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.get"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference;

new DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">stackMonitoringConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus">stackMonitoringStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stackMonitoringConnectorId`<sup>Required</sup> <a name="stackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```java
public java.lang.String getStackMonitoringConnectorId();
```

- *Type:* java.lang.String

---

##### `stackMonitoringStatus`<sup>Required</sup> <a name="stackMonitoringStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```java
public java.lang.String getStackMonitoringStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabasesExternalNonContainerDatabasesStackMonitoringConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabasesFilterList <a name="DataOciDatabaseExternalNonContainerDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesFilterList;

new DataOciDatabaseExternalNonContainerDatabasesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.get"></a>

```java
public DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>>

---


### DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference <a name="DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_external_non_container_databases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference;

new DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabases.DataOciDatabaseExternalNonContainerDatabasesFilter">DataOciDatabaseExternalNonContainerDatabasesFilter</a>

---



