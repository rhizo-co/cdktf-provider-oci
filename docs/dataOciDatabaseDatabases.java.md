# `dataOciDatabaseDatabases` Submodule <a name="`dataOciDatabaseDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabases <a name="DataOciDatabaseDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases oci_database_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabases;

DataOciDatabaseDatabases.Builder.create(Construct scope, java.lang.String id)
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
//  .dbHomeId(java.lang.String)
//  .dbName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDatabasesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .systemId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#compartment_id DataOciDatabaseDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_home_id DataOciDatabaseDatabases#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_name DataOciDatabaseDatabases#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#id DataOciDatabaseDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#state DataOciDatabaseDatabases#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.systemId">systemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#system_id DataOciDatabaseDatabases#system_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#compartment_id DataOciDatabaseDatabases#compartment_id}.

---

##### `dbHomeId`<sup>Optional</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.dbHomeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_home_id DataOciDatabaseDatabases#db_home_id}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_name DataOciDatabaseDatabases#db_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#filter DataOciDatabaseDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#id DataOciDatabaseDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#state DataOciDatabaseDatabases#state}.

---

##### `systemId`<sup>Optional</sup> <a name="systemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.Initializer.parameter.systemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#system_id DataOciDatabaseDatabases#system_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetDbHomeId">resetDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetSystemId">resetSystemId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDatabasesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>>

---

##### `resetDbHomeId` <a name="resetDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetDbHomeId"></a>

```java
public void resetDbHomeId()
```

##### `resetDbName` <a name="resetDbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetState"></a>

```java
public void resetState()
```

##### `resetSystemId` <a name="resetSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.resetSystemId"></a>

```java
public void resetSystemId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabases;

DataOciDatabaseDatabases.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabases;

DataOciDatabaseDatabases.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabases;

DataOciDatabaseDatabases.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabases;

DataOciDatabaseDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.databases">databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList">DataOciDatabaseDatabasesDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList">DataOciDatabaseDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbHomeIdInput">dbHomeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.systemIdInput">systemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.systemId">systemId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `databases`<sup>Required</sup> <a name="databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.databases"></a>

```java
public DataOciDatabaseDatabasesDatabasesList getDatabases();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList">DataOciDatabaseDatabasesDatabasesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.filter"></a>

```java
public DataOciDatabaseDatabasesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList">DataOciDatabaseDatabasesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dbHomeIdInput`<sup>Optional</sup> <a name="dbHomeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbHomeIdInput"></a>

```java
public java.lang.String getDbHomeIdInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `systemIdInput`<sup>Optional</sup> <a name="systemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.systemIdInput"></a>

```java
public java.lang.String getSystemIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbHomeId"></a>

```java
public java.lang.String getDbHomeId();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemId`<sup>Required</sup> <a name="systemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.systemId"></a>

```java
public java.lang.String getSystemId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabases.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabasesConfig <a name="DataOciDatabaseDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesConfig;

DataOciDatabaseDatabasesConfig.builder()
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
//  .dbHomeId(java.lang.String)
//  .dbName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDatabasesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .systemId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#compartment_id DataOciDatabaseDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_home_id DataOciDatabaseDatabases#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_name DataOciDatabaseDatabases#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#id DataOciDatabaseDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#state DataOciDatabaseDatabases#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.systemId">systemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#system_id DataOciDatabaseDatabases#system_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#compartment_id DataOciDatabaseDatabases#compartment_id}.

---

##### `dbHomeId`<sup>Optional</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.dbHomeId"></a>

```java
public java.lang.String getDbHomeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_home_id DataOciDatabaseDatabases#db_home_id}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#db_name DataOciDatabaseDatabases#db_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#filter DataOciDatabaseDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#id DataOciDatabaseDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#state DataOciDatabaseDatabases#state}.

---

##### `systemId`<sup>Optional</sup> <a name="systemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesConfig.property.systemId"></a>

```java
public java.lang.String getSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#system_id DataOciDatabaseDatabases#system_id}.

---

### DataOciDatabaseDatabasesDatabases <a name="DataOciDatabaseDatabasesDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabases;

DataOciDatabaseDatabasesDatabases.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesConnectionStrings <a name="DataOciDatabaseDatabasesDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesConnectionStrings;

DataOciDatabaseDatabasesDatabasesConnectionStrings.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesDatabase <a name="DataOciDatabaseDatabasesDatabasesDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabase;

DataOciDatabaseDatabasesDatabasesDatabase.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig <a name="DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig;

DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails <a name="DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails;

DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig <a name="DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig;

DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesDbBackupConfig <a name="DataOciDatabaseDatabasesDatabasesDbBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDbBackupConfig;

DataOciDatabaseDatabasesDatabasesDbBackupConfig.builder()
    .build();
```


### DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails <a name="DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails;

DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails.builder()
    .build();
```


### DataOciDatabaseDatabasesFilter <a name="DataOciDatabaseDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesFilter;

DataOciDatabaseDatabasesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#name DataOciDatabaseDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#values DataOciDatabaseDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#regex DataOciDatabaseDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#name DataOciDatabaseDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#values DataOciDatabaseDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_databases#regex DataOciDatabaseDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabasesDatabasesConnectionStringsList <a name="DataOciDatabaseDatabasesDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesConnectionStringsList;

new DataOciDatabaseDatabasesDatabasesConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference <a name="DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference;

new DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.cdbDefault">cdbDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.cdbIpDefault">cdbIpDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStrings">DataOciDatabaseDatabasesDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public StringMap getAllConnectionStrings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `cdbDefault`<sup>Required</sup> <a name="cdbDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.cdbDefault"></a>

```java
public java.lang.String getCdbDefault();
```

- *Type:* java.lang.String

---

##### `cdbIpDefault`<sup>Required</sup> <a name="cdbIpDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.cdbIpDefault"></a>

```java
public java.lang.String getCdbIpDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesConnectionStrings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStrings">DataOciDatabaseDatabasesDatabasesConnectionStrings</a>

---


### DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList;

new DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference;

new DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbrsPolicyId`<sup>Required</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```java
public java.lang.String getDbrsPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList <a name="DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList;

new DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference <a name="DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference;

new DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">autoBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">runImmediateFullBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoBackupEnabled`<sup>Required</sup> <a name="autoBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```java
public IResolvable getAutoBackupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoBackupWindow`<sup>Required</sup> <a name="autoBackupWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```java
public java.lang.String getAutoBackupWindow();
```

- *Type:* java.lang.String

---

##### `autoFullBackupDay`<sup>Required</sup> <a name="autoFullBackupDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```java
public java.lang.String getAutoFullBackupDay();
```

- *Type:* java.lang.String

---

##### `autoFullBackupWindow`<sup>Required</sup> <a name="autoFullBackupWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```java
public java.lang.String getAutoFullBackupWindow();
```

- *Type:* java.lang.String

---

##### `backupDeletionPolicy`<sup>Required</sup> <a name="backupDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```java
public java.lang.String getBackupDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `runImmediateFullBackup`<sup>Required</sup> <a name="runImmediateFullBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```java
public IResolvable getRunImmediateFullBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig</a>

---


### DataOciDatabaseDatabasesDatabasesDatabaseList <a name="DataOciDatabaseDatabasesDatabasesDatabaseList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseList;

new DataOciDatabaseDatabasesDatabasesDatabaseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList <a name="DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList;

new DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference <a name="DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference;

new DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.managementType">managementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig">DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```java
public java.lang.String getManagementStatus();
```

- *Type:* java.lang.String

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig">DataOciDatabaseDatabasesDatabasesDatabaseManagementConfig</a>

---


### DataOciDatabaseDatabasesDatabasesDatabaseOutputReference <a name="DataOciDatabaseDatabasesDatabasesDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference;

new DataOciDatabaseDatabasesDatabasesDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.backupTdePassword">backupTdePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.pluggableDatabases">pluggableDatabases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.sidPrefix">sidPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabase">DataOciDatabaseDatabasesDatabasesDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `backupTdePassword`<sup>Required</sup> <a name="backupTdePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.backupTdePassword"></a>

```java
public java.lang.String getBackupTdePassword();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dbBackupConfig`<sup>Required</sup> <a name="dbBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbBackupConfig"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList getDbBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList">DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigList</a>

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `pluggableDatabases`<sup>Required</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.pluggableDatabases"></a>

```java
public java.util.List<java.lang.String> getPluggableDatabases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sidPrefix`<sup>Required</sup> <a name="sidPrefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.sidPrefix"></a>

```java
public java.lang.String getSidPrefix();
```

- *Type:* java.lang.String

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabase getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabase">DataOciDatabaseDatabasesDatabasesDatabase</a>

---


### DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList <a name="DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList;

new DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference <a name="DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference;

new DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails">DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbrsPolicyId`<sup>Required</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```java
public java.lang.String getDbrsPolicyId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```java
public java.lang.String getVpcUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails">DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails</a>

---


### DataOciDatabaseDatabasesDatabasesDbBackupConfigList <a name="DataOciDatabaseDatabasesDatabasesDbBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList;

new DataOciDatabaseDatabasesDatabasesDbBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference <a name="DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference;

new DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoBackupWindow">autoBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList">DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.runImmediateFullBackup">runImmediateFullBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfig">DataOciDatabaseDatabasesDatabasesDbBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoBackupEnabled`<sup>Required</sup> <a name="autoBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```java
public IResolvable getAutoBackupEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoBackupWindow`<sup>Required</sup> <a name="autoBackupWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```java
public java.lang.String getAutoBackupWindow();
```

- *Type:* java.lang.String

---

##### `autoFullBackupDay`<sup>Required</sup> <a name="autoFullBackupDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```java
public java.lang.String getAutoFullBackupDay();
```

- *Type:* java.lang.String

---

##### `autoFullBackupWindow`<sup>Required</sup> <a name="autoFullBackupWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```java
public java.lang.String getAutoFullBackupWindow();
```

- *Type:* java.lang.String

---

##### `backupDeletionPolicy`<sup>Required</sup> <a name="backupDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```java
public java.lang.String getBackupDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```java
public DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList getBackupDestinationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList">DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetailsList</a>

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```java
public java.lang.Number getRecoveryWindowInDays();
```

- *Type:* java.lang.Number

---

##### `runImmediateFullBackup`<sup>Required</sup> <a name="runImmediateFullBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```java
public IResolvable getRunImmediateFullBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabasesDbBackupConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfig">DataOciDatabaseDatabasesDatabasesDbBackupConfig</a>

---


### DataOciDatabaseDatabasesDatabasesList <a name="DataOciDatabaseDatabasesDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesList;

new DataOciDatabaseDatabasesDatabasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.get"></a>

```java
public DataOciDatabaseDatabasesDatabasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabasesDatabasesOutputReference <a name="DataOciDatabaseDatabasesDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesDatabasesOutputReference;

new DataOciDatabaseDatabasesDatabasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList">DataOciDatabaseDatabasesDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList">DataOciDatabaseDatabasesDatabasesDatabaseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList">DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList">DataOciDatabaseDatabasesDatabasesDbBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbHomeId">dbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.isCdb">isCdb</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.keyStoreId">keyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyMigration">kmsKeyMigration</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyRotation">kmsKeyRotation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lastBackupDurationInSeconds">lastBackupDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lastBackupTimestamp">lastBackupTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lastFailedBackupTimestamp">lastFailedBackupTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.sidPrefix">sidPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.sourceDatabasePointInTimeRecoveryTimestamp">sourceDatabasePointInTimeRecoveryTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabases">DataOciDatabaseDatabasesDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.connectionStrings"></a>

```java
public DataOciDatabaseDatabasesDatabasesConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesConnectionStringsList">DataOciDatabaseDatabasesDatabasesConnectionStringsList</a>

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.database"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseList getDatabase();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseList">DataOciDatabaseDatabasesDatabasesDatabaseList</a>

---

##### `databaseManagementConfig`<sup>Required</sup> <a name="databaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.databaseManagementConfig"></a>

```java
public DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList getDatabaseManagementConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList">DataOciDatabaseDatabasesDatabasesDatabaseManagementConfigList</a>

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dbBackupConfig`<sup>Required</sup> <a name="dbBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbBackupConfig"></a>

```java
public DataOciDatabaseDatabasesDatabasesDbBackupConfigList getDbBackupConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesDbBackupConfigList">DataOciDatabaseDatabasesDatabasesDbBackupConfigList</a>

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbHomeId"></a>

```java
public java.lang.String getDbHomeId();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCdb`<sup>Required</sup> <a name="isCdb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.isCdb"></a>

```java
public IResolvable getIsCdb();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.keyStoreId"></a>

```java
public java.lang.String getKeyStoreId();
```

- *Type:* java.lang.String

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.keyStoreWalletName"></a>

```java
public java.lang.String getKeyStoreWalletName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `kmsKeyMigration`<sup>Required</sup> <a name="kmsKeyMigration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyMigration"></a>

```java
public IResolvable getKmsKeyMigration();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyRotation`<sup>Required</sup> <a name="kmsKeyRotation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyRotation"></a>

```java
public java.lang.Number getKmsKeyRotation();
```

- *Type:* java.lang.Number

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `lastBackupDurationInSeconds`<sup>Required</sup> <a name="lastBackupDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lastBackupDurationInSeconds"></a>

```java
public java.lang.Number getLastBackupDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `lastBackupTimestamp`<sup>Required</sup> <a name="lastBackupTimestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lastBackupTimestamp"></a>

```java
public java.lang.String getLastBackupTimestamp();
```

- *Type:* java.lang.String

---

##### `lastFailedBackupTimestamp`<sup>Required</sup> <a name="lastFailedBackupTimestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lastFailedBackupTimestamp"></a>

```java
public java.lang.String getLastFailedBackupTimestamp();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `sidPrefix`<sup>Required</sup> <a name="sidPrefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.sidPrefix"></a>

```java
public java.lang.String getSidPrefix();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceDatabasePointInTimeRecoveryTimestamp`<sup>Required</sup> <a name="sourceDatabasePointInTimeRecoveryTimestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.sourceDatabasePointInTimeRecoveryTimestamp"></a>

```java
public java.lang.String getSourceDatabasePointInTimeRecoveryTimestamp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabasesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabasesDatabases getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesDatabases">DataOciDatabaseDatabasesDatabases</a>

---


### DataOciDatabaseDatabasesFilterList <a name="DataOciDatabaseDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesFilterList;

new DataOciDatabaseDatabasesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.get"></a>

```java
public DataOciDatabaseDatabasesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>>

---


### DataOciDatabaseDatabasesFilterOutputReference <a name="DataOciDatabaseDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_databases.DataOciDatabaseDatabasesFilterOutputReference;

new DataOciDatabaseDatabasesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabases.DataOciDatabaseDatabasesFilter">DataOciDatabaseDatabasesFilter</a>

---



