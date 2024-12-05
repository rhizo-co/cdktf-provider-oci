# `dataOciFunctionsPbfListingVersions` Submodule <a name="`dataOciFunctionsPbfListingVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsPbfListingVersions <a name="DataOciFunctionsPbfListingVersions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions oci_functions_pbf_listing_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersions;

DataOciFunctionsPbfListingVersions.Builder.create(Construct scope, java.lang.String id)
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
    .pbfListingId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFunctionsPbfListingVersionsFilter>)
//  .id(java.lang.String)
//  .isCurrentVersion(java.lang.Boolean)
//  .isCurrentVersion(IResolvable)
//  .name(java.lang.String)
//  .pbfListingVersionId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingId">pbfListingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.isCurrentVersion">isCurrentVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingVersionId">pbfListingVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#filter DataOciFunctionsPbfListingVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCurrentVersion`<sup>Optional</sup> <a name="isCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.isCurrentVersion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `pbfListingVersionId`<sup>Optional</sup> <a name="pbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.pbfListingVersionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion">resetIsCurrentVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId">resetPbfListingVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciFunctionsPbfListingVersionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId"></a>

```java
public void resetId()
```

##### `resetIsCurrentVersion` <a name="resetIsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion"></a>

```java
public void resetIsCurrentVersion()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName"></a>

```java
public void resetName()
```

##### `resetPbfListingVersionId` <a name="resetPbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId"></a>

```java
public void resetPbfListingVersionId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersions;

DataOciFunctionsPbfListingVersions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersions;

DataOciFunctionsPbfListingVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersions;

DataOciFunctionsPbfListingVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersions;

DataOciFunctionsPbfListingVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciFunctionsPbfListingVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciFunctionsPbfListingVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciFunctionsPbfListingVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsPbfListingVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection">pbfListingVersionsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput">isCurrentVersionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput">pbfListingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput">pbfListingVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion">isCurrentVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId">pbfListingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId">pbfListingVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter"></a>

```java
public DataOciFunctionsPbfListingVersionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a>

---

##### `pbfListingVersionsCollection`<sup>Required</sup> <a name="pbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList getPbfListingVersionsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isCurrentVersionInput`<sup>Optional</sup> <a name="isCurrentVersionInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput"></a>

```java
public java.lang.Object getIsCurrentVersionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pbfListingIdInput`<sup>Optional</sup> <a name="pbfListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput"></a>

```java
public java.lang.String getPbfListingIdInput();
```

- *Type:* java.lang.String

---

##### `pbfListingVersionIdInput`<sup>Optional</sup> <a name="pbfListingVersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput"></a>

```java
public java.lang.String getPbfListingVersionIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCurrentVersion`<sup>Required</sup> <a name="isCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion"></a>

```java
public java.lang.Object getIsCurrentVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId"></a>

```java
public java.lang.String getPbfListingId();
```

- *Type:* java.lang.String

---

##### `pbfListingVersionId`<sup>Required</sup> <a name="pbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId"></a>

```java
public java.lang.String getPbfListingVersionId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsPbfListingVersionsConfig <a name="DataOciFunctionsPbfListingVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsConfig;

DataOciFunctionsPbfListingVersionsConfig.builder()
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
    .pbfListingId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFunctionsPbfListingVersionsFilter>)
//  .id(java.lang.String)
//  .isCurrentVersion(java.lang.Boolean)
//  .isCurrentVersion(IResolvable)
//  .name(java.lang.String)
//  .pbfListingVersionId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId">pbfListingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion">isCurrentVersion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId">pbfListingVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId"></a>

```java
public java.lang.String getPbfListingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#filter DataOciFunctionsPbfListingVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCurrentVersion`<sup>Optional</sup> <a name="isCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion"></a>

```java
public java.lang.Object getIsCurrentVersion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `pbfListingVersionId`<sup>Optional</sup> <a name="pbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId"></a>

```java
public java.lang.String getPbfListingVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}.

---

### DataOciFunctionsPbfListingVersionsFilter <a name="DataOciFunctionsPbfListingVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsFilter;

DataOciFunctionsPbfListingVersionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}.

---

### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection;

DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection.builder()
    .build();
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems;

DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems.builder()
    .build();
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig;

DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig.builder()
    .build();
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements;

DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements.builder()
    .build();
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies;

DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies.builder()
    .build();
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers;

DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsPbfListingVersionsFilterList <a name="DataOciFunctionsPbfListingVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsFilterList;

new DataOciFunctionsPbfListingVersionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>>

---


### DataOciFunctionsPbfListingVersionsFilterOutputReference <a name="DataOciFunctionsPbfListingVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsFilterOutputReference;

new DataOciFunctionsPbfListingVersionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional">isOptional</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isOptional`<sup>Required</sup> <a name="isOptional" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional"></a>

```java
public IResolvable getIsOptional();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary">changeSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId">pbfListingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements">requirements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers">triggers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changeSummary`<sup>Required</sup> <a name="changeSummary" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary"></a>

```java
public java.lang.String getChangeSummary();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList getConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId"></a>

```java
public java.lang.String getPbfListingId();
```

- *Type:* java.lang.String

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList getRequirements();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList getTriggers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs">minMemoryRequiredInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minMemoryRequiredInMbs`<sup>Required</sup> <a name="minMemoryRequiredInMbs" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs"></a>

```java
public java.lang.String getMinMemoryRequiredInMbs();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList getPolicies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_functions_pbf_listing_versions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference;

new DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue"></a>

```java
public DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a>

---



