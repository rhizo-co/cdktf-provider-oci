# `dataOciMarketplacePublications` Submodule <a name="`dataOciMarketplacePublications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplacePublications <a name="DataOciMarketplacePublications" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications oci_marketplace_publications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublications;

DataOciMarketplacePublications.Builder.create(Construct scope, java.lang.String id)
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
    .listingType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMarketplacePublicationsFilter>)
//  .id(java.lang.String)
//  .name(java.util.List<java.lang.String>)
//  .operatingSystems(java.util.List<java.lang.String>)
//  .publicationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.listingType">listingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.name">name</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.publicationId">publicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}.

---

##### `listingType`<sup>Required</sup> <a name="listingType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.listingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#filter DataOciMarketplacePublications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.name"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}.

---

##### `operatingSystems`<sup>Optional</sup> <a name="operatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.operatingSystems"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}.

---

##### `publicationId`<sup>Optional</sup> <a name="publicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.Initializer.parameter.publicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOperatingSystems">resetOperatingSystems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetPublicationId">resetPublicationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMarketplacePublicationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetName"></a>

```java
public void resetName()
```

##### `resetOperatingSystems` <a name="resetOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetOperatingSystems"></a>

```java
public void resetOperatingSystems()
```

##### `resetPublicationId` <a name="resetPublicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.resetPublicationId"></a>

```java
public void resetPublicationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplacePublications resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublications;

DataOciMarketplacePublications.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublications;

DataOciMarketplacePublications.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublications;

DataOciMarketplacePublications.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublications;

DataOciMarketplacePublications.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMarketplacePublications.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMarketplacePublications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMarketplacePublications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMarketplacePublications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplacePublications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList">DataOciMarketplacePublicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publications">publications</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList">DataOciMarketplacePublicationsPublicationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingTypeInput">listingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystemsInput">operatingSystemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationIdInput">publicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingType">listingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationId">publicationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filter"></a>

```java
public DataOciMarketplacePublicationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList">DataOciMarketplacePublicationsFilterList</a>

---

##### `publications`<sup>Required</sup> <a name="publications" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publications"></a>

```java
public DataOciMarketplacePublicationsPublicationsList getPublications();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList">DataOciMarketplacePublicationsPublicationsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listingTypeInput`<sup>Optional</sup> <a name="listingTypeInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingTypeInput"></a>

```java
public java.lang.String getListingTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operatingSystemsInput`<sup>Optional</sup> <a name="operatingSystemsInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystemsInput"></a>

```java
public java.util.List<java.lang.String> getOperatingSystemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicationIdInput`<sup>Optional</sup> <a name="publicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationIdInput"></a>

```java
public java.lang.String getPublicationIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listingType`<sup>Required</sup> <a name="listingType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.listingType"></a>

```java
public java.lang.String getListingType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operatingSystems`<sup>Required</sup> <a name="operatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.operatingSystems"></a>

```java
public java.util.List<java.lang.String> getOperatingSystems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicationId`<sup>Required</sup> <a name="publicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.publicationId"></a>

```java
public java.lang.String getPublicationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublications.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplacePublicationsConfig <a name="DataOciMarketplacePublicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsConfig;

DataOciMarketplacePublicationsConfig.builder()
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
    .listingType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMarketplacePublicationsFilter>)
//  .id(java.lang.String)
//  .name(java.util.List<java.lang.String>)
//  .operatingSystems(java.util.List<java.lang.String>)
//  .publicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.listingType">listingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.publicationId">publicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#compartment_id DataOciMarketplacePublications#compartment_id}.

---

##### `listingType`<sup>Required</sup> <a name="listingType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.listingType"></a>

```java
public java.lang.String getListingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#listing_type DataOciMarketplacePublications#listing_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#filter DataOciMarketplacePublications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#id DataOciMarketplacePublications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}.

---

##### `operatingSystems`<sup>Optional</sup> <a name="operatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.operatingSystems"></a>

```java
public java.util.List<java.lang.String> getOperatingSystems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#operating_systems DataOciMarketplacePublications#operating_systems}.

---

##### `publicationId`<sup>Optional</sup> <a name="publicationId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsConfig.property.publicationId"></a>

```java
public java.lang.String getPublicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#publication_id DataOciMarketplacePublications#publication_id}.

---

### DataOciMarketplacePublicationsFilter <a name="DataOciMarketplacePublicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsFilter;

DataOciMarketplacePublicationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#values DataOciMarketplacePublications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#regex DataOciMarketplacePublications#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#name DataOciMarketplacePublications#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#values DataOciMarketplacePublications#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_publications#regex DataOciMarketplacePublications#regex}.

---

### DataOciMarketplacePublicationsPublications <a name="DataOciMarketplacePublicationsPublications" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublications;

DataOciMarketplacePublicationsPublications.builder()
    .build();
```


### DataOciMarketplacePublicationsPublicationsIcon <a name="DataOciMarketplacePublicationsPublicationsIcon" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsIcon;

DataOciMarketplacePublicationsPublicationsIcon.builder()
    .build();
```


### DataOciMarketplacePublicationsPublicationsPackageDetails <a name="DataOciMarketplacePublicationsPublicationsPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetails;

DataOciMarketplacePublicationsPublicationsPackageDetails.builder()
    .build();
```


### DataOciMarketplacePublicationsPublicationsPackageDetailsEula <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsEula" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula;

DataOciMarketplacePublicationsPublicationsPackageDetailsEula.builder()
    .build();
```


### DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem;

DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem.builder()
    .build();
```


### DataOciMarketplacePublicationsPublicationsSupportContacts <a name="DataOciMarketplacePublicationsPublicationsSupportContacts" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsSupportContacts;

DataOciMarketplacePublicationsPublicationsSupportContacts.builder()
    .build();
```


### DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems <a name="DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems;

DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplacePublicationsFilterList <a name="DataOciMarketplacePublicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsFilterList;

new DataOciMarketplacePublicationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.get"></a>

```java
public DataOciMarketplacePublicationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>>

---


### DataOciMarketplacePublicationsFilterOutputReference <a name="DataOciMarketplacePublicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsFilterOutputReference;

new DataOciMarketplacePublicationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsFilter">DataOciMarketplacePublicationsFilter</a>

---


### DataOciMarketplacePublicationsPublicationsIconList <a name="DataOciMarketplacePublicationsPublicationsIconList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsIconList;

new DataOciMarketplacePublicationsPublicationsIconList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsIconOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsIconOutputReference <a name="DataOciMarketplacePublicationsPublicationsIconOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsIconOutputReference;

new DataOciMarketplacePublicationsPublicationsIconOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.contentUrl">contentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fileExtension">fileExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon">DataOciMarketplacePublicationsPublicationsIcon</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.contentUrl"></a>

```java
public java.lang.String getContentUrl();
```

- *Type:* java.lang.String

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.fileExtension"></a>

```java
public java.lang.String getFileExtension();
```

- *Type:* java.lang.String

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublicationsIcon getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIcon">DataOciMarketplacePublicationsPublicationsIcon</a>

---


### DataOciMarketplacePublicationsPublicationsList <a name="DataOciMarketplacePublicationsPublicationsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsList;

new DataOciMarketplacePublicationsPublicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsOutputReference <a name="DataOciMarketplacePublicationsPublicationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsOutputReference;

new DataOciMarketplacePublicationsPublicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.icon">icon</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList">DataOciMarketplacePublicationsPublicationsIconList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.isAgreementAcknowledged">isAgreementAcknowledged</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.listingType">listingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageDetails">packageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList">DataOciMarketplacePublicationsPublicationsPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportContacts">supportContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList">DataOciMarketplacePublicationsPublicationsSupportContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportedOperatingSystems">supportedOperatingSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications">DataOciMarketplacePublicationsPublications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `icon`<sup>Required</sup> <a name="icon" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.icon"></a>

```java
public DataOciMarketplacePublicationsPublicationsIconList getIcon();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsIconList">DataOciMarketplacePublicationsPublicationsIconList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAgreementAcknowledged`<sup>Required</sup> <a name="isAgreementAcknowledged" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.isAgreementAcknowledged"></a>

```java
public IResolvable getIsAgreementAcknowledged();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `listingType`<sup>Required</sup> <a name="listingType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.listingType"></a>

```java
public java.lang.String getListingType();
```

- *Type:* java.lang.String

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packageDetails`<sup>Required</sup> <a name="packageDetails" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageDetails"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsList getPackageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList">DataOciMarketplacePublicationsPublicationsPackageDetailsList</a>

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportContacts`<sup>Required</sup> <a name="supportContacts" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportContacts"></a>

```java
public DataOciMarketplacePublicationsPublicationsSupportContactsList getSupportContacts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList">DataOciMarketplacePublicationsPublicationsSupportContactsList</a>

---

##### `supportedOperatingSystems`<sup>Required</sup> <a name="supportedOperatingSystems" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.supportedOperatingSystems"></a>

```java
public DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList getSupportedOperatingSystems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublications getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublications">DataOciMarketplacePublicationsPublications</a>

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList;

new DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference;

new DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.eulaType">eulaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.licenseText">licenseText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula">DataOciMarketplacePublicationsPublicationsPackageDetailsEula</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eulaType`<sup>Required</sup> <a name="eulaType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.eulaType"></a>

```java
public java.lang.String getEulaType();
```

- *Type:* java.lang.String

---

##### `licenseText`<sup>Required</sup> <a name="licenseText" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.licenseText"></a>

```java
public java.lang.String getLicenseText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsEula getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEula">DataOciMarketplacePublicationsPublicationsPackageDetailsEula</a>

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsList <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsList;

new DataOciMarketplacePublicationsPublicationsPackageDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList;

new DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference;

new DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystem</a>

---


### DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference <a name="DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference;

new DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.eula">eula</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList">DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails">DataOciMarketplacePublicationsPublicationsPackageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eula`<sup>Required</sup> <a name="eula" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.eula"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList getEula();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList">DataOciMarketplacePublicationsPublicationsPackageDetailsEulaList</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.operatingSystem"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList getOperatingSystem();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList">DataOciMarketplacePublicationsPublicationsPackageDetailsOperatingSystemList</a>

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetailsOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublicationsPackageDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsPackageDetails">DataOciMarketplacePublicationsPublicationsPackageDetails</a>

---


### DataOciMarketplacePublicationsPublicationsSupportContactsList <a name="DataOciMarketplacePublicationsPublicationsSupportContactsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsSupportContactsList;

new DataOciMarketplacePublicationsPublicationsSupportContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference <a name="DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference;

new DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.phone">phone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts">DataOciMarketplacePublicationsPublicationsSupportContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContactsOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublicationsSupportContacts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportContacts">DataOciMarketplacePublicationsPublicationsSupportContacts</a>

---


### DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList <a name="DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList;

new DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.get"></a>

```java
public DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference <a name="DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_marketplace_publications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference;

new DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystemsOutputReference.property.internalValue"></a>

```java
public DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplacePublications.DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems">DataOciMarketplacePublicationsPublicationsSupportedOperatingSystems</a>

---



