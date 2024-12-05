# `dataOciCoreAppCatalogListingResourceVersions` Submodule <a name="`dataOciCoreAppCatalogListingResourceVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogListingResourceVersions <a name="DataOciCoreAppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions oci_core_app_catalog_listing_resource_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersions;

DataOciCoreAppCatalogListingResourceVersions.Builder.create(Construct scope, java.lang.String id)
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
    .listingId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreAppCatalogListingResourceVersionsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.listingId">listingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.listingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#filter DataOciCoreAppCatalogListingResourceVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreAppCatalogListingResourceVersionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersions;

DataOciCoreAppCatalogListingResourceVersions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersions;

DataOciCoreAppCatalogListingResourceVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersions;

DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersions;

DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreAppCatalogListingResourceVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreAppCatalogListingResourceVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreAppCatalogListingResourceVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogListingResourceVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.appCatalogListingResourceVersions">appCatalogListingResourceVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList">DataOciCoreAppCatalogListingResourceVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingIdInput">listingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingId">listingId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `appCatalogListingResourceVersions`<sup>Required</sup> <a name="appCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.appCatalogListingResourceVersions"></a>

```java
public DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList getAppCatalogListingResourceVersions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filter"></a>

```java
public DataOciCoreAppCatalogListingResourceVersionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList">DataOciCoreAppCatalogListingResourceVersionsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingIdInput"></a>

```java
public java.lang.String getListingIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions;

DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions.builder()
    .build();
```


### DataOciCoreAppCatalogListingResourceVersionsConfig <a name="DataOciCoreAppCatalogListingResourceVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsConfig;

DataOciCoreAppCatalogListingResourceVersionsConfig.builder()
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
    .listingId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreAppCatalogListingResourceVersionsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.listingId">listingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#listing_id DataOciCoreAppCatalogListingResourceVersions#listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#filter DataOciCoreAppCatalogListingResourceVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#id DataOciCoreAppCatalogListingResourceVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreAppCatalogListingResourceVersionsFilter <a name="DataOciCoreAppCatalogListingResourceVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsFilter;

DataOciCoreAppCatalogListingResourceVersionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#name DataOciCoreAppCatalogListingResourceVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#values DataOciCoreAppCatalogListingResourceVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#regex DataOciCoreAppCatalogListingResourceVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#name DataOciCoreAppCatalogListingResourceVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#values DataOciCoreAppCatalogListingResourceVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_listing_resource_versions#regex DataOciCoreAppCatalogListingResourceVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList;

new DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get"></a>

```java
public DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference <a name="DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference;

new DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.accessiblePorts">accessiblePorts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.allowedActions">allowedActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.availableRegions">availableRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.compatibleShapes">compatibleShapes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingId">listingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceId">listingResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceVersion">listingResourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.timePublished">timePublished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessiblePorts`<sup>Required</sup> <a name="accessiblePorts" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.accessiblePorts"></a>

```java
public java.util.List<java.lang.Number> getAccessiblePorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.allowedActions"></a>

```java
public java.util.List<java.lang.String> getAllowedActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availableRegions`<sup>Required</sup> <a name="availableRegions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.availableRegions"></a>

```java
public java.util.List<java.lang.String> getAvailableRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compatibleShapes`<sup>Required</sup> <a name="compatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.compatibleShapes"></a>

```java
public java.util.List<java.lang.String> getCompatibleShapes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

---

##### `listingResourceId`<sup>Required</sup> <a name="listingResourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceId"></a>

```java
public java.lang.String getListingResourceId();
```

- *Type:* java.lang.String

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.listingResourceVersion"></a>

```java
public java.lang.String getListingResourceVersion();
```

- *Type:* java.lang.String

---

##### `timePublished`<sup>Required</sup> <a name="timePublished" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.timePublished"></a>

```java
public java.lang.String getTimePublished();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions">DataOciCoreAppCatalogListingResourceVersionsAppCatalogListingResourceVersions</a>

---


### DataOciCoreAppCatalogListingResourceVersionsFilterList <a name="DataOciCoreAppCatalogListingResourceVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsFilterList;

new DataOciCoreAppCatalogListingResourceVersionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get"></a>

```java
public DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>>

---


### DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference <a name="DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_listing_resource_versions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference;

new DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogListingResourceVersions.DataOciCoreAppCatalogListingResourceVersionsFilter">DataOciCoreAppCatalogListingResourceVersionsFilter</a>

---



