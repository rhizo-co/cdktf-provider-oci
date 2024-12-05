# `serviceCatalogPrivateApplication` Submodule <a name="`serviceCatalogPrivateApplication` Submodule" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCatalogPrivateApplication <a name="ServiceCatalogPrivateApplication" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application oci_service_catalog_private_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplication;

ServiceCatalogPrivateApplication.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .packageDetails(ServiceCatalogPrivateApplicationPackageDetails)
    .shortDescription(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .logoFileBase64Encoded(java.lang.String)
//  .longDescription(java.lang.String)
//  .timeouts(ServiceCatalogPrivateApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.packageDetails">packageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.logoFileBase64Encoded">logoFileBase64Encoded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.longDescription">longDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}.

---

##### `packageDetails`<sup>Required</sup> <a name="packageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.packageDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.shortDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logoFileBase64Encoded`<sup>Optional</sup> <a name="logoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.logoFileBase64Encoded"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.longDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails">putPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded">resetLogoFileBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription">resetLongDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPackageDetails` <a name="putPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails"></a>

```java
public void putPackageDetails(ServiceCatalogPrivateApplicationPackageDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts"></a>

```java
public void putTimeouts(ServiceCatalogPrivateApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId"></a>

```java
public void resetId()
```

##### `resetLogoFileBase64Encoded` <a name="resetLogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded"></a>

```java
public void resetLogoFileBase64Encoded()
```

##### `resetLongDescription` <a name="resetLongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription"></a>

```java
public void resetLongDescription()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplication;

ServiceCatalogPrivateApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplication;

ServiceCatalogPrivateApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplication;

ServiceCatalogPrivateApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplication;

ServiceCatalogPrivateApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceCatalogPrivateApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceCatalogPrivateApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceCatalogPrivateApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCatalogPrivateApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo">logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails">packageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput">logoFileBase64EncodedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput">longDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput">packageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded">logoFileBase64Encoded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logo`<sup>Required</sup> <a name="logo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo"></a>

```java
public ServiceCatalogPrivateApplicationLogoList getLogo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a>

---

##### `packageDetails`<sup>Required</sup> <a name="packageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails"></a>

```java
public ServiceCatalogPrivateApplicationPackageDetailsOutputReference getPackageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a>

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts"></a>

```java
public ServiceCatalogPrivateApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logoFileBase64EncodedInput`<sup>Optional</sup> <a name="logoFileBase64EncodedInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput"></a>

```java
public java.lang.String getLogoFileBase64EncodedInput();
```

- *Type:* java.lang.String

---

##### `longDescriptionInput`<sup>Optional</sup> <a name="longDescriptionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput"></a>

```java
public java.lang.String getLongDescriptionInput();
```

- *Type:* java.lang.String

---

##### `packageDetailsInput`<sup>Optional</sup> <a name="packageDetailsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput"></a>

```java
public ServiceCatalogPrivateApplicationPackageDetails getPackageDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput"></a>

```java
public java.lang.String getShortDescriptionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logoFileBase64Encoded`<sup>Required</sup> <a name="logoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded"></a>

```java
public java.lang.String getLogoFileBase64Encoded();
```

- *Type:* java.lang.String

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCatalogPrivateApplicationConfig <a name="ServiceCatalogPrivateApplicationConfig" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationConfig;

ServiceCatalogPrivateApplicationConfig.builder()
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
    .displayName(java.lang.String)
    .packageDetails(ServiceCatalogPrivateApplicationPackageDetails)
    .shortDescription(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .logoFileBase64Encoded(java.lang.String)
//  .longDescription(java.lang.String)
//  .timeouts(ServiceCatalogPrivateApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails">packageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded">logoFileBase64Encoded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}.

---

##### `packageDetails`<sup>Required</sup> <a name="packageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails"></a>

```java
public ServiceCatalogPrivateApplicationPackageDetails getPackageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logoFileBase64Encoded`<sup>Optional</sup> <a name="logoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded"></a>

```java
public java.lang.String getLogoFileBase64Encoded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts"></a>

```java
public ServiceCatalogPrivateApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}

---

### ServiceCatalogPrivateApplicationLogo <a name="ServiceCatalogPrivateApplicationLogo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationLogo;

ServiceCatalogPrivateApplicationLogo.builder()
    .build();
```


### ServiceCatalogPrivateApplicationPackageDetails <a name="ServiceCatalogPrivateApplicationPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationPackageDetails;

ServiceCatalogPrivateApplicationPackageDetails.builder()
    .packageType(java.lang.String)
    .version(java.lang.String)
//  .zipFileBase64Encoded(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType">packageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded">zipFileBase64Encoded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}. |

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}.

---

##### `zipFileBase64Encoded`<sup>Optional</sup> <a name="zipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded"></a>

```java
public java.lang.String getZipFileBase64Encoded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}.

---

### ServiceCatalogPrivateApplicationTimeouts <a name="ServiceCatalogPrivateApplicationTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationTimeouts;

ServiceCatalogPrivateApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCatalogPrivateApplicationLogoList <a name="ServiceCatalogPrivateApplicationLogoList" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationLogoList;

new ServiceCatalogPrivateApplicationLogoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get"></a>

```java
public ServiceCatalogPrivateApplicationLogoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ServiceCatalogPrivateApplicationLogoOutputReference <a name="ServiceCatalogPrivateApplicationLogoOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationLogoOutputReference;

new ServiceCatalogPrivateApplicationLogoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl">contentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl"></a>

```java
public java.lang.String getContentUrl();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue"></a>

```java
public ServiceCatalogPrivateApplicationLogo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a>

---


### ServiceCatalogPrivateApplicationPackageDetailsOutputReference <a name="ServiceCatalogPrivateApplicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationPackageDetailsOutputReference;

new ServiceCatalogPrivateApplicationPackageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded">resetZipFileBase64Encoded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetZipFileBase64Encoded` <a name="resetZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded"></a>

```java
public void resetZipFileBase64Encoded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput">packageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput">zipFileBase64EncodedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType">packageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded">zipFileBase64Encoded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packageTypeInput`<sup>Optional</sup> <a name="packageTypeInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput"></a>

```java
public java.lang.String getPackageTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `zipFileBase64EncodedInput`<sup>Optional</sup> <a name="zipFileBase64EncodedInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput"></a>

```java
public java.lang.String getZipFileBase64EncodedInput();
```

- *Type:* java.lang.String

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType"></a>

```java
public java.lang.String getPackageType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `zipFileBase64Encoded`<sup>Required</sup> <a name="zipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```java
public java.lang.String getZipFileBase64Encoded();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue"></a>

```java
public ServiceCatalogPrivateApplicationPackageDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---


### ServiceCatalogPrivateApplicationTimeoutsOutputReference <a name="ServiceCatalogPrivateApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_catalog_private_application.ServiceCatalogPrivateApplicationTimeoutsOutputReference;

new ServiceCatalogPrivateApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

---



