# `dataOciDatabaseAutonomousDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseAutonomousDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImages <a name="DataOciDatabaseAutonomousDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images oci_database_autonomous_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImages;

DataOciDatabaseAutonomousDatabaseSoftwareImages.Builder.create(Construct scope, java.lang.String id)
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
    .imageShapeFamily(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}.

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.imageShapeFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#filter DataOciDatabaseAutonomousDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImages;

DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImages;

DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImages;

DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImages;

DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseSoftwareImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseAutonomousDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.autonomousDatabaseSoftwareImageCollection">autonomousDatabaseSoftwareImageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamilyInput">imageShapeFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autonomousDatabaseSoftwareImageCollection`<sup>Required</sup> <a name="autonomousDatabaseSoftwareImageCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.autonomousDatabaseSoftwareImageCollection"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList getAutonomousDatabaseSoftwareImageCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filter"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageShapeFamilyInput`<sup>Optional</sup> <a name="imageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```java
public java.lang.String getImageShapeFamilyInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection;

DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection.builder()
    .build();
```


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems;

DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems.builder()
    .build();
```


### DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig;

DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.builder()
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
    .imageShapeFamily(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#compartment_id DataOciDatabaseAutonomousDatabaseSoftwareImages#compartment_id}.

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#image_shape_family DataOciDatabaseAutonomousDatabaseSoftwareImages#image_shape_family}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#display_name DataOciDatabaseAutonomousDatabaseSoftwareImages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#filter DataOciDatabaseAutonomousDatabaseSoftwareImages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#id DataOciDatabaseAutonomousDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#state DataOciDatabaseAutonomousDatabaseSoftwareImages#state}.

---

### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter;

DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#name DataOciDatabaseAutonomousDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#values DataOciDatabaseAutonomousDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#regex DataOciDatabaseAutonomousDatabaseSoftwareImages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#name DataOciDatabaseAutonomousDatabaseSoftwareImages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#values DataOciDatabaseAutonomousDatabaseSoftwareImages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_images#regex DataOciDatabaseAutonomousDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.autonomousDsiOneOffPatches">autonomousDsiOneOffPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.imageShapeFamily">imageShapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.releaseUpdate">releaseUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.sourceCdbId">sourceCdbId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autonomousDsiOneOffPatches`<sup>Required</sup> <a name="autonomousDsiOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.autonomousDsiOneOffPatches"></a>

```java
public java.util.List<java.lang.String> getAutonomousDsiOneOffPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.imageShapeFamily"></a>

```java
public java.lang.String getImageShapeFamily();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `releaseUpdate`<sup>Required</sup> <a name="releaseUpdate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.releaseUpdate"></a>

```java
public java.lang.String getReleaseUpdate();
```

- *Type:* java.lang.String

---

##### `sourceCdbId`<sup>Required</sup> <a name="sourceCdbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.sourceCdbId"></a>

```java
public java.lang.String getSourceCdbId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItems</a>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection">DataOciDatabaseAutonomousDatabaseSoftwareImagesAutonomousDatabaseSoftwareImageCollection</a>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>>

---


### DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_software_images.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference;

new DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImages.DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter">DataOciDatabaseAutonomousDatabaseSoftwareImagesFilter</a>

---



