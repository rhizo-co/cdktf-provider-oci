# `dataOciDatacatalogCatalogTypes` Submodule <a name="`dataOciDatacatalogCatalogTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatacatalogCatalogTypes <a name="DataOciDatacatalogCatalogTypes" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types oci_datacatalog_catalog_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypes;

DataOciDatacatalogCatalogTypes.Builder.create(Construct scope, java.lang.String id)
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
    .catalogId(java.lang.String)
//  .externalTypeName(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatacatalogCatalogTypesFilter>)
//  .id(java.lang.String)
//  .isApproved(java.lang.String)
//  .isInternal(java.lang.String)
//  .isTag(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
//  .typeCategory(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#catalog_id DataOciDatacatalogCatalogTypes#catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.externalTypeName">externalTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#external_type_name DataOciDatacatalogCatalogTypes#external_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#fields DataOciDatacatalogCatalogTypes#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#id DataOciDatacatalogCatalogTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.isApproved">isApproved</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_approved DataOciDatacatalogCatalogTypes#is_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.isInternal">isInternal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_internal DataOciDatacatalogCatalogTypes#is_internal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.isTag">isTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_tag DataOciDatacatalogCatalogTypes#is_tag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#state DataOciDatacatalogCatalogTypes#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.typeCategory">typeCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#type_category DataOciDatacatalogCatalogTypes#type_category}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#catalog_id DataOciDatacatalogCatalogTypes#catalog_id}.

---

##### `externalTypeName`<sup>Optional</sup> <a name="externalTypeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.externalTypeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#external_type_name DataOciDatacatalogCatalogTypes#external_type_name}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.fields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#fields DataOciDatacatalogCatalogTypes#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#filter DataOciDatacatalogCatalogTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#id DataOciDatacatalogCatalogTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isApproved`<sup>Optional</sup> <a name="isApproved" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.isApproved"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_approved DataOciDatacatalogCatalogTypes#is_approved}.

---

##### `isInternal`<sup>Optional</sup> <a name="isInternal" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.isInternal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_internal DataOciDatacatalogCatalogTypes#is_internal}.

---

##### `isTag`<sup>Optional</sup> <a name="isTag" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.isTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_tag DataOciDatacatalogCatalogTypes#is_tag}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#state DataOciDatacatalogCatalogTypes#state}.

---

##### `typeCategory`<sup>Optional</sup> <a name="typeCategory" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.Initializer.parameter.typeCategory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#type_category DataOciDatacatalogCatalogTypes#type_category}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetExternalTypeName">resetExternalTypeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetIsApproved">resetIsApproved</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetIsInternal">resetIsInternal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetIsTag">resetIsTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetTypeCategory">resetTypeCategory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatacatalogCatalogTypesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>>

---

##### `resetExternalTypeName` <a name="resetExternalTypeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetExternalTypeName"></a>

```java
public void resetExternalTypeName()
```

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetFields"></a>

```java
public void resetFields()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetId"></a>

```java
public void resetId()
```

##### `resetIsApproved` <a name="resetIsApproved" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetIsApproved"></a>

```java
public void resetIsApproved()
```

##### `resetIsInternal` <a name="resetIsInternal" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetIsInternal"></a>

```java
public void resetIsInternal()
```

##### `resetIsTag` <a name="resetIsTag" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetIsTag"></a>

```java
public void resetIsTag()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetState"></a>

```java
public void resetState()
```

##### `resetTypeCategory` <a name="resetTypeCategory" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.resetTypeCategory"></a>

```java
public void resetTypeCategory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatacatalogCatalogTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypes;

DataOciDatacatalogCatalogTypes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypes;

DataOciDatacatalogCatalogTypes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypes;

DataOciDatacatalogCatalogTypes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypes;

DataOciDatacatalogCatalogTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatacatalogCatalogTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatacatalogCatalogTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatacatalogCatalogTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatacatalogCatalogTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatacatalogCatalogTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList">DataOciDatacatalogCatalogTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.typeCollection">typeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList">DataOciDatacatalogCatalogTypesTypeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.externalTypeNameInput">externalTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isApprovedInput">isApprovedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isInternalInput">isInternalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isTagInput">isTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.typeCategoryInput">typeCategoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.externalTypeName">externalTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isApproved">isApproved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isInternal">isInternal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isTag">isTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.typeCategory">typeCategory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.filter"></a>

```java
public DataOciDatacatalogCatalogTypesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList">DataOciDatacatalogCatalogTypesFilterList</a>

---

##### `typeCollection`<sup>Required</sup> <a name="typeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.typeCollection"></a>

```java
public DataOciDatacatalogCatalogTypesTypeCollectionList getTypeCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList">DataOciDatacatalogCatalogTypesTypeCollectionList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `externalTypeNameInput`<sup>Optional</sup> <a name="externalTypeNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.externalTypeNameInput"></a>

```java
public java.lang.String getExternalTypeNameInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isApprovedInput`<sup>Optional</sup> <a name="isApprovedInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isApprovedInput"></a>

```java
public java.lang.String getIsApprovedInput();
```

- *Type:* java.lang.String

---

##### `isInternalInput`<sup>Optional</sup> <a name="isInternalInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isInternalInput"></a>

```java
public java.lang.String getIsInternalInput();
```

- *Type:* java.lang.String

---

##### `isTagInput`<sup>Optional</sup> <a name="isTagInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isTagInput"></a>

```java
public java.lang.String getIsTagInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `typeCategoryInput`<sup>Optional</sup> <a name="typeCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.typeCategoryInput"></a>

```java
public java.lang.String getTypeCategoryInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `externalTypeName`<sup>Required</sup> <a name="externalTypeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.externalTypeName"></a>

```java
public java.lang.String getExternalTypeName();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isApproved`<sup>Required</sup> <a name="isApproved" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isApproved"></a>

```java
public java.lang.String getIsApproved();
```

- *Type:* java.lang.String

---

##### `isInternal`<sup>Required</sup> <a name="isInternal" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isInternal"></a>

```java
public java.lang.String getIsInternal();
```

- *Type:* java.lang.String

---

##### `isTag`<sup>Required</sup> <a name="isTag" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.isTag"></a>

```java
public java.lang.String getIsTag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `typeCategory`<sup>Required</sup> <a name="typeCategory" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.typeCategory"></a>

```java
public java.lang.String getTypeCategory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatacatalogCatalogTypesConfig <a name="DataOciDatacatalogCatalogTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesConfig;

DataOciDatacatalogCatalogTypesConfig.builder()
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
    .catalogId(java.lang.String)
//  .externalTypeName(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatacatalogCatalogTypesFilter>)
//  .id(java.lang.String)
//  .isApproved(java.lang.String)
//  .isInternal(java.lang.String)
//  .isTag(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
//  .typeCategory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#catalog_id DataOciDatacatalogCatalogTypes#catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.externalTypeName">externalTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#external_type_name DataOciDatacatalogCatalogTypes#external_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#fields DataOciDatacatalogCatalogTypes#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#id DataOciDatacatalogCatalogTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.isApproved">isApproved</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_approved DataOciDatacatalogCatalogTypes#is_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.isInternal">isInternal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_internal DataOciDatacatalogCatalogTypes#is_internal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.isTag">isTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_tag DataOciDatacatalogCatalogTypes#is_tag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#state DataOciDatacatalogCatalogTypes#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.typeCategory">typeCategory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#type_category DataOciDatacatalogCatalogTypes#type_category}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#catalog_id DataOciDatacatalogCatalogTypes#catalog_id}.

---

##### `externalTypeName`<sup>Optional</sup> <a name="externalTypeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.externalTypeName"></a>

```java
public java.lang.String getExternalTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#external_type_name DataOciDatacatalogCatalogTypes#external_type_name}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#fields DataOciDatacatalogCatalogTypes#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#filter DataOciDatacatalogCatalogTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#id DataOciDatacatalogCatalogTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isApproved`<sup>Optional</sup> <a name="isApproved" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.isApproved"></a>

```java
public java.lang.String getIsApproved();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_approved DataOciDatacatalogCatalogTypes#is_approved}.

---

##### `isInternal`<sup>Optional</sup> <a name="isInternal" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.isInternal"></a>

```java
public java.lang.String getIsInternal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_internal DataOciDatacatalogCatalogTypes#is_internal}.

---

##### `isTag`<sup>Optional</sup> <a name="isTag" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.isTag"></a>

```java
public java.lang.String getIsTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#is_tag DataOciDatacatalogCatalogTypes#is_tag}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#state DataOciDatacatalogCatalogTypes#state}.

---

##### `typeCategory`<sup>Optional</sup> <a name="typeCategory" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesConfig.property.typeCategory"></a>

```java
public java.lang.String getTypeCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#type_category DataOciDatacatalogCatalogTypes#type_category}.

---

### DataOciDatacatalogCatalogTypesFilter <a name="DataOciDatacatalogCatalogTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesFilter;

DataOciDatacatalogCatalogTypesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#values DataOciDatacatalogCatalogTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#regex DataOciDatacatalogCatalogTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#values DataOciDatacatalogCatalogTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_types#regex DataOciDatacatalogCatalogTypes#regex}.

---

### DataOciDatacatalogCatalogTypesTypeCollection <a name="DataOciDatacatalogCatalogTypesTypeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesTypeCollection;

DataOciDatacatalogCatalogTypesTypeCollection.builder()
    .build();
```


### DataOciDatacatalogCatalogTypesTypeCollectionItems <a name="DataOciDatacatalogCatalogTypesTypeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesTypeCollectionItems;

DataOciDatacatalogCatalogTypesTypeCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatacatalogCatalogTypesFilterList <a name="DataOciDatacatalogCatalogTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesFilterList;

new DataOciDatacatalogCatalogTypesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.get"></a>

```java
public DataOciDatacatalogCatalogTypesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>>

---


### DataOciDatacatalogCatalogTypesFilterOutputReference <a name="DataOciDatacatalogCatalogTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesFilterOutputReference;

new DataOciDatacatalogCatalogTypesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesFilter">DataOciDatacatalogCatalogTypesFilter</a>

---


### DataOciDatacatalogCatalogTypesTypeCollectionItemsList <a name="DataOciDatacatalogCatalogTypesTypeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesTypeCollectionItemsList;

new DataOciDatacatalogCatalogTypesTypeCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.get"></a>

```java
public DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference <a name="DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference;

new DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.typeCategory">typeCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItems">DataOciDatacatalogCatalogTypesTypeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `typeCategory`<sup>Required</sup> <a name="typeCategory" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.typeCategory"></a>

```java
public java.lang.String getTypeCategory();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatacatalogCatalogTypesTypeCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItems">DataOciDatacatalogCatalogTypesTypeCollectionItems</a>

---


### DataOciDatacatalogCatalogTypesTypeCollectionList <a name="DataOciDatacatalogCatalogTypesTypeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesTypeCollectionList;

new DataOciDatacatalogCatalogTypesTypeCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.get"></a>

```java
public DataOciDatacatalogCatalogTypesTypeCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatacatalogCatalogTypesTypeCollectionOutputReference <a name="DataOciDatacatalogCatalogTypesTypeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_datacatalog_catalog_types.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference;

new DataOciDatacatalogCatalogTypesTypeCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList">DataOciDatacatalogCatalogTypesTypeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollection">DataOciDatacatalogCatalogTypesTypeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.items"></a>

```java
public DataOciDatacatalogCatalogTypesTypeCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionItemsList">DataOciDatacatalogCatalogTypesTypeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatacatalogCatalogTypesTypeCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogTypes.DataOciDatacatalogCatalogTypesTypeCollection">DataOciDatacatalogCatalogTypesTypeCollection</a>

---



