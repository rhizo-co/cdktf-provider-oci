# `dataOciServiceCatalogPrivateApplications` Submodule <a name="`dataOciServiceCatalogPrivateApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplications <a name="DataOciServiceCatalogPrivateApplications" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications oci_service_catalog_private_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplications;

DataOciServiceCatalogPrivateApplications.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciServiceCatalogPrivateApplicationsFilter>)
//  .id(java.lang.String)
//  .privateApplicationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.privateApplicationId">privateApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateApplicationId`<sup>Optional</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.privateApplicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId">resetPrivateApplicationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciServiceCatalogPrivateApplicationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateApplicationId` <a name="resetPrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId"></a>

```java
public void resetPrivateApplicationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplications;

DataOciServiceCatalogPrivateApplications.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplications;

DataOciServiceCatalogPrivateApplications.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplications;

DataOciServiceCatalogPrivateApplications.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplications;

DataOciServiceCatalogPrivateApplications.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceCatalogPrivateApplications.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceCatalogPrivateApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection">privateApplicationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput">privateApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId">privateApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter"></a>

```java
public DataOciServiceCatalogPrivateApplicationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a>

---

##### `privateApplicationCollection`<sup>Required</sup> <a name="privateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList getPrivateApplicationCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateApplicationIdInput`<sup>Optional</sup> <a name="privateApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput"></a>

```java
public java.lang.String getPrivateApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId"></a>

```java
public java.lang.String getPrivateApplicationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationsConfig <a name="DataOciServiceCatalogPrivateApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsConfig;

DataOciServiceCatalogPrivateApplicationsConfig.builder()
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
//  .filter(java.util.List<DataOciServiceCatalogPrivateApplicationsFilter>)
//  .id(java.lang.String)
//  .privateApplicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId">privateApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateApplicationId`<sup>Optional</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId"></a>

```java
public java.lang.String getPrivateApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}.

---

### DataOciServiceCatalogPrivateApplicationsFilter <a name="DataOciServiceCatalogPrivateApplicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsFilter;

DataOciServiceCatalogPrivateApplicationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}.

---

### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection;

DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection.builder()
    .build();
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems;

DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems.builder()
    .build();
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo;

DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo.builder()
    .build();
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails;

DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationsFilterList <a name="DataOciServiceCatalogPrivateApplicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsFilterList;

new DataOciServiceCatalogPrivateApplicationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get"></a>

```java
public DataOciServiceCatalogPrivateApplicationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>>

---


### DataOciServiceCatalogPrivateApplicationsFilterOutputReference <a name="DataOciServiceCatalogPrivateApplicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference;

new DataOciServiceCatalogPrivateApplicationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter">DataOciServiceCatalogPrivateApplicationsFilter</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl">contentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl"></a>

```java
public java.lang.String getContentUrl();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo">logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded">logoFileBase64Encoded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails">packageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList getLogo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a>

---

##### `logoFileBase64Encoded`<sup>Required</sup> <a name="logoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded"></a>

```java
public java.lang.String getLogoFileBase64Encoded();
```

- *Type:* java.lang.String

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

---

##### `packageDetails`<sup>Required</sup> <a name="packageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList getPackageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a>

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded">zipFileBase64Encoded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `zipFileBase64Encoded`<sup>Required</sup> <a name="zipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```java
public java.lang.String getZipFileBase64Encoded();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_catalog_private_applications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue"></a>

```java
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a>

---



