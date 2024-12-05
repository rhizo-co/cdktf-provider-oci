# `dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases oci_database_management_db_management_private_endpoint_associated_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Builder.create(Construct scope, java.lang.String id)
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
    .dbManagementPrivateEndpointId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}.

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.dbManagementPrivateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#filter DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.associatedDatabaseCollection">associatedDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointIdInput">dbManagementPrivateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `associatedDatabaseCollection`<sup>Required</sup> <a name="associatedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.associatedDatabaseCollection"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList getAssociatedDatabaseCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filter"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dbManagementPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbManagementPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointIdInput"></a>

```java
public java.lang.String getDbManagementPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.dbManagementPrivateEndpointId"></a>

```java
public java.lang.String getDbManagementPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection.builder()
    .build();
```


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems.builder()
    .build();
```


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.builder()
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
    .dbManagementPrivateEndpointId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#compartment_id}.

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.dbManagementPrivateEndpointId"></a>

```java
public java.lang.String getDbManagementPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#db_management_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#filter DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#name DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#values DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#regex DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#name DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#values DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_databases#regex DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.timeRegistered">timeRegistered</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeRegistered`<sup>Required</sup> <a name="timeRegistered" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.timeRegistered"></a>

```java
public java.lang.String getTimeRegistered();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItems</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_databases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter</a>

---



