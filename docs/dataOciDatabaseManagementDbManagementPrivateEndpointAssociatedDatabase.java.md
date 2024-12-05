# `dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database oci_database_management_db_management_private_endpoint_associated_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#compartment_id}.

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.dbManagementPrivateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#db_management_private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointIdInput">dbManagementPrivateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.items"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dbManagementPrivateEndpointIdInput`<sup>Optional</sup> <a name="dbManagementPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointIdInput"></a>

```java
public java.lang.String getDbManagementPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.dbManagementPrivateEndpointId"></a>

```java
public java.lang.String getDbManagementPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dbManagementPrivateEndpointId">dbManagementPrivateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#db_management_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#compartment_id}.

---

##### `dbManagementPrivateEndpointId`<sup>Required</sup> <a name="dbManagementPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.dbManagementPrivateEndpointId"></a>

```java
public java.lang.String getDbManagementPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#db_management_private_endpoint_id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#db_management_private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoint_associated_database#id DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems;

DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.get"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_db_management_private_endpoint_associated_database.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference;

new DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.timeRegistered">timeRegistered</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeRegistered`<sup>Required</sup> <a name="timeRegistered" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.timeRegistered"></a>

```java
public java.lang.String getTimeRegistered();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabase.DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems">DataOciDatabaseManagementDbManagementPrivateEndpointAssociatedDatabaseItems</a>

---



