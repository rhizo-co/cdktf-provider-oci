# `dataOciDatabaseManagementExternalExadataStorageServers` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServers <a name="DataOciDatabaseManagementExternalExadataStorageServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers oci_database_management_external_exadata_storage_servers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServers;

DataOciDatabaseManagementExternalExadataStorageServers.Builder.create(Construct scope, java.lang.String id)
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
    .externalExadataInfrastructureId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementExternalExadataStorageServersFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#compartment_id DataOciDatabaseManagementExternalExadataStorageServers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageServers#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#display_name DataOciDatabaseManagementExternalExadataStorageServers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#id DataOciDatabaseManagementExternalExadataStorageServers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#compartment_id DataOciDatabaseManagementExternalExadataStorageServers#compartment_id}.

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.externalExadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageServers#external_exadata_infrastructure_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#display_name DataOciDatabaseManagementExternalExadataStorageServers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#filter DataOciDatabaseManagementExternalExadataStorageServers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#id DataOciDatabaseManagementExternalExadataStorageServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseManagementExternalExadataStorageServersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServers;

DataOciDatabaseManagementExternalExadataStorageServers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServers;

DataOciDatabaseManagementExternalExadataStorageServers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServers;

DataOciDatabaseManagementExternalExadataStorageServers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServers;

DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseManagementExternalExadataStorageServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.externalExadataStorageServerCollection">externalExadataStorageServerCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList">DataOciDatabaseManagementExternalExadataStorageServersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.externalExadataInfrastructureIdInput">externalExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `externalExadataStorageServerCollection`<sup>Required</sup> <a name="externalExadataStorageServerCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.externalExadataStorageServerCollection"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList getExternalExadataStorageServerCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.filter"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList">DataOciDatabaseManagementExternalExadataStorageServersFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="externalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.externalExadataInfrastructureIdInput"></a>

```java
public java.lang.String getExternalExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.externalExadataInfrastructureId"></a>

```java
public java.lang.String getExternalExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServersConfig <a name="DataOciDatabaseManagementExternalExadataStorageServersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersConfig;

DataOciDatabaseManagementExternalExadataStorageServersConfig.builder()
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
    .externalExadataInfrastructureId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseManagementExternalExadataStorageServersFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#compartment_id DataOciDatabaseManagementExternalExadataStorageServers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageServers#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#display_name DataOciDatabaseManagementExternalExadataStorageServers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#id DataOciDatabaseManagementExternalExadataStorageServers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#compartment_id DataOciDatabaseManagementExternalExadataStorageServers#compartment_id}.

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.externalExadataInfrastructureId"></a>

```java
public java.lang.String getExternalExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageServers#external_exadata_infrastructure_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#display_name DataOciDatabaseManagementExternalExadataStorageServers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#filter DataOciDatabaseManagementExternalExadataStorageServers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#id DataOciDatabaseManagementExternalExadataStorageServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection <a name="DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection;

DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection.builder()
    .build();
```


### DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems <a name="DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems;

DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems.builder()
    .build();
```


### DataOciDatabaseManagementExternalExadataStorageServersFilter <a name="DataOciDatabaseManagementExternalExadataStorageServersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersFilter;

DataOciDatabaseManagementExternalExadataStorageServersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#name DataOciDatabaseManagementExternalExadataStorageServers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#values DataOciDatabaseManagementExternalExadataStorageServers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#regex DataOciDatabaseManagementExternalExadataStorageServers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#name DataOciDatabaseManagementExternalExadataStorageServers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#values DataOciDatabaseManagementExternalExadataStorageServers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_servers#regex DataOciDatabaseManagementExternalExadataStorageServers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList;

new DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.get"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference;

new DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.internalId">internalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.makeModel">makeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxFlashDiskIops">maxFlashDiskIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxFlashDiskThroughput">maxFlashDiskThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxHardDiskIops">maxHardDiskIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxHardDiskThroughput">maxHardDiskThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.memoryGb">memoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.storageGridId">storageGridId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.additionalDetails"></a>

```java
public StringMap getAdditionalDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.internalId"></a>

```java
public java.lang.String getInternalId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `makeModel`<sup>Required</sup> <a name="makeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.makeModel"></a>

```java
public java.lang.String getMakeModel();
```

- *Type:* java.lang.String

---

##### `maxFlashDiskIops`<sup>Required</sup> <a name="maxFlashDiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxFlashDiskIops"></a>

```java
public java.lang.Number getMaxFlashDiskIops();
```

- *Type:* java.lang.Number

---

##### `maxFlashDiskThroughput`<sup>Required</sup> <a name="maxFlashDiskThroughput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxFlashDiskThroughput"></a>

```java
public java.lang.Number getMaxFlashDiskThroughput();
```

- *Type:* java.lang.Number

---

##### `maxHardDiskIops`<sup>Required</sup> <a name="maxHardDiskIops" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxHardDiskIops"></a>

```java
public java.lang.Number getMaxHardDiskIops();
```

- *Type:* java.lang.Number

---

##### `maxHardDiskThroughput`<sup>Required</sup> <a name="maxHardDiskThroughput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.maxHardDiskThroughput"></a>

```java
public java.lang.Number getMaxHardDiskThroughput();
```

- *Type:* java.lang.Number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.memoryGb"></a>

```java
public java.lang.Number getMemoryGb();
```

- *Type:* java.lang.Number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageGridId`<sup>Required</sup> <a name="storageGridId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.storageGridId"></a>

```java
public java.lang.String getStorageGridId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList <a name="DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList;

new DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.get"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference;

new DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection">DataOciDatabaseManagementExternalExadataStorageServersExternalExadataStorageServerCollection</a>

---


### DataOciDatabaseManagementExternalExadataStorageServersFilterList <a name="DataOciDatabaseManagementExternalExadataStorageServersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersFilterList;

new DataOciDatabaseManagementExternalExadataStorageServersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.get"></a>

```java
public DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>>

---


### DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_management_external_exadata_storage_servers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference;

new DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServers.DataOciDatabaseManagementExternalExadataStorageServersFilter">DataOciDatabaseManagementExternalExadataStorageServersFilter</a>

---



