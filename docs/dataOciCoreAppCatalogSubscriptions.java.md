# `dataOciCoreAppCatalogSubscriptions` Submodule <a name="`dataOciCoreAppCatalogSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreAppCatalogSubscriptions <a name="DataOciCoreAppCatalogSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions oci_core_app_catalog_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptions;

DataOciCoreAppCatalogSubscriptions.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreAppCatalogSubscriptionsFilter>)
//  .id(java.lang.String)
//  .listingId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.listingId">listingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#filter DataOciCoreAppCatalogSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listingId`<sup>Optional</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.Initializer.parameter.listingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetListingId">resetListingId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreAppCatalogSubscriptionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetId"></a>

```java
public void resetId()
```

##### `resetListingId` <a name="resetListingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.resetListingId"></a>

```java
public void resetListingId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreAppCatalogSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptions;

DataOciCoreAppCatalogSubscriptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptions;

DataOciCoreAppCatalogSubscriptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptions;

DataOciCoreAppCatalogSubscriptions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptions;

DataOciCoreAppCatalogSubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreAppCatalogSubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreAppCatalogSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreAppCatalogSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreAppCatalogSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreAppCatalogSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.appCatalogSubscriptions">appCatalogSubscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList">DataOciCoreAppCatalogSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingIdInput">listingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingId">listingId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `appCatalogSubscriptions`<sup>Required</sup> <a name="appCatalogSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.appCatalogSubscriptions"></a>

```java
public DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList getAppCatalogSubscriptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filter"></a>

```java
public DataOciCoreAppCatalogSubscriptionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList">DataOciCoreAppCatalogSubscriptionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingIdInput"></a>

```java
public java.lang.String getListingIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions <a name="DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions;

DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions.builder()
    .build();
```


### DataOciCoreAppCatalogSubscriptionsConfig <a name="DataOciCoreAppCatalogSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsConfig;

DataOciCoreAppCatalogSubscriptionsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreAppCatalogSubscriptionsFilter>)
//  .id(java.lang.String)
//  .listingId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.listingId">listingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#compartment_id DataOciCoreAppCatalogSubscriptions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#filter DataOciCoreAppCatalogSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#id DataOciCoreAppCatalogSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listingId`<sup>Optional</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsConfig.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#listing_id DataOciCoreAppCatalogSubscriptions#listing_id}.

---

### DataOciCoreAppCatalogSubscriptionsFilter <a name="DataOciCoreAppCatalogSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsFilter;

DataOciCoreAppCatalogSubscriptionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#name DataOciCoreAppCatalogSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#values DataOciCoreAppCatalogSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#regex DataOciCoreAppCatalogSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#name DataOciCoreAppCatalogSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#values DataOciCoreAppCatalogSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_app_catalog_subscriptions#regex DataOciCoreAppCatalogSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList <a name="DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList;

new DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.get"></a>

```java
public DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference <a name="DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference;

new DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.eulaLink">eulaLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingId">listingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceId">listingResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceVersion">listingResourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.oracleTermsOfUseLink">oracleTermsOfUseLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.publisherName">publisherName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeRetrieved">timeRetrieved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `eulaLink`<sup>Required</sup> <a name="eulaLink" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.eulaLink"></a>

```java
public java.lang.String getEulaLink();
```

- *Type:* java.lang.String

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingId"></a>

```java
public java.lang.String getListingId();
```

- *Type:* java.lang.String

---

##### `listingResourceId`<sup>Required</sup> <a name="listingResourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceId"></a>

```java
public java.lang.String getListingResourceId();
```

- *Type:* java.lang.String

---

##### `listingResourceVersion`<sup>Required</sup> <a name="listingResourceVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.listingResourceVersion"></a>

```java
public java.lang.String getListingResourceVersion();
```

- *Type:* java.lang.String

---

##### `oracleTermsOfUseLink`<sup>Required</sup> <a name="oracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.oracleTermsOfUseLink"></a>

```java
public java.lang.String getOracleTermsOfUseLink();
```

- *Type:* java.lang.String

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.publisherName"></a>

```java
public java.lang.String getPublisherName();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeRetrieved`<sup>Required</sup> <a name="timeRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.timeRetrieved"></a>

```java
public java.lang.String getTimeRetrieved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions">DataOciCoreAppCatalogSubscriptionsAppCatalogSubscriptions</a>

---


### DataOciCoreAppCatalogSubscriptionsFilterList <a name="DataOciCoreAppCatalogSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsFilterList;

new DataOciCoreAppCatalogSubscriptionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.get"></a>

```java
public DataOciCoreAppCatalogSubscriptionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>>

---


### DataOciCoreAppCatalogSubscriptionsFilterOutputReference <a name="DataOciCoreAppCatalogSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_app_catalog_subscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference;

new DataOciCoreAppCatalogSubscriptionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreAppCatalogSubscriptions.DataOciCoreAppCatalogSubscriptionsFilter">DataOciCoreAppCatalogSubscriptionsFilter</a>

---



