# `dataOciDatabaseDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images oci_database_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImages;

DataOciDatabaseDatabaseSoftwareImages.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatabaseDatabaseSoftwareImagesFilter>)
//  .id(java.lang.String)
//  .imageShapeFamily(java.lang.String)
//  .imageType(java.lang.String)
//  .isUpgradeSupported(java.lang.Boolean)
//  .isUpgradeSupported(IResolvable)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.isUpgradeSupported">isUpgradeSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageShapeFamily`<sup>Optional</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.imageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `isUpgradeSupported`<sup>Optional</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.isUpgradeSupported"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily">resetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported">resetIsUpgradeSupported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDatabaseSoftwareImagesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId"></a>

```java
public void resetId()
```

##### `resetImageShapeFamily` <a name="resetImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily"></a>

```java
public void resetImageShapeFamily()
```

##### `resetImageType` <a name="resetImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType"></a>

```java
public void resetImageType()
```

##### `resetIsUpgradeSupported` <a name="resetIsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported"></a>

```java
public void resetIsUpgradeSupported()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImages;

DataOciDatabaseDatabaseSoftwareImages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImages;

DataOciDatabaseDatabaseSoftwareImages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImages;

DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImages;

DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDatabaseSoftwareImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages">databaseSoftwareImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput">imageShapeFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput">isUpgradeSupportedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `databaseSoftwareImages`<sup>Required</sup> <a name="databaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages"></a>

```java
public DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList getDatabaseSoftwareImages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter"></a>

```java
public DataOciDatabaseDatabaseSoftwareImagesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageShapeFamilyInput`<sup>Optional</sup> <a name="imageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```java
public java.lang.String getImageShapeFamilyInput();
```

- *Type:* java.lang.String

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `isUpgradeSupportedInput`<sup>Optional</sup> <a name="isUpgradeSupportedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput"></a>

```java
public java.lang.Object getIsUpgradeSupportedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported"></a>

```java
public java.lang.Object getIsUpgradeSupported();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseSoftwareImagesConfig <a name="DataOciDatabaseDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesConfig;

DataOciDatabaseDatabaseSoftwareImagesConfig.builder()
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
//  .filter(java.util.List<DataOciDatabaseDatabaseSoftwareImagesFilter>)
//  .id(java.lang.String)
//  .imageShapeFamily(java.lang.String)
//  .imageType(java.lang.String)
//  .isUpgradeSupported(java.lang.Boolean)
//  .isUpgradeSupported(IResolvable)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageShapeFamily`<sup>Optional</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `isUpgradeSupported`<sup>Optional</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported"></a>

```java
public java.lang.Object getIsUpgradeSupported();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages;

DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages.builder()
    .build();
```


### DataOciDatabaseDatabaseSoftwareImagesFilter <a name="DataOciDatabaseDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesFilter;

DataOciDatabaseDatabaseSoftwareImagesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList;

new DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get"></a>

```java
public DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference;

new DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches">databaseSoftwareImageIncludedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary">includedPatchesSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory">lsInventory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet">patchSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="databaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches"></a>

```java
public java.util.List<java.lang.String> getDatabaseSoftwareImageIncludedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches"></a>

```java
public java.util.List<java.lang.String> getDatabaseSoftwareImageOneOffPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `includedPatchesSummary`<sup>Required</sup> <a name="includedPatchesSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary"></a>

```java
public java.lang.String getIncludedPatchesSummary();
```

- *Type:* java.lang.String

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported"></a>

```java
public IResolvable getIsUpgradeSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lsInventory`<sup>Required</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory"></a>

```java
public java.lang.String getLsInventory();
```

- *Type:* java.lang.String

---

##### `patchSet`<sup>Required</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet"></a>

```java
public java.lang.String getPatchSet();
```

- *Type:* java.lang.String

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId"></a>

```java
public java.lang.String getSourceDbHomeId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a>

---


### DataOciDatabaseDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesFilterList;

new DataOciDatabaseDatabaseSoftwareImagesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get"></a>

```java
public DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>>

---


### DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_database_software_images.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference;

new DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter">DataOciDatabaseDatabaseSoftwareImagesFilter</a>

---



