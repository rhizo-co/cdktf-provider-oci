# `dataOciCoreShapes` Submodule <a name="`dataOciCoreShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreShapes <a name="DataOciCoreShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes oci_core_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapes;

DataOciCoreShapes.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityDomain(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreShapesFilter>)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId">resetImageId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreShapesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetId"></a>

```java
public void resetId()
```

##### `resetImageId` <a name="resetImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.resetImageId"></a>

```java
public void resetImageId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapes;

DataOciCoreShapes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapes;

DataOciCoreShapes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapes;

DataOciCoreShapes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapes;

DataOciCoreShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes">shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filter"></a>

```java
public DataOciCoreShapesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList">DataOciCoreShapesFilterList</a>

---

##### `shapes`<sup>Required</sup> <a name="shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.shapes"></a>

```java
public DataOciCoreShapesShapesList getShapes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList">DataOciCoreShapesShapesList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreShapesConfig <a name="DataOciCoreShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesConfig;

DataOciCoreShapesConfig.builder()
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
//  .availabilityDomain(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreShapesFilter>)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#compartment_id DataOciCoreShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#availability_domain DataOciCoreShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#filter DataOciCoreShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#id DataOciCoreShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#image_id DataOciCoreShapes#image_id}.

---

### DataOciCoreShapesFilter <a name="DataOciCoreShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesFilter;

DataOciCoreShapesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#name DataOciCoreShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#values DataOciCoreShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shapes#regex DataOciCoreShapes#regex}.

---

### DataOciCoreShapesShapes <a name="DataOciCoreShapesShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapes;

DataOciCoreShapesShapes.builder()
    .build();
```


### DataOciCoreShapesShapesMaxVnicAttachmentOptions <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions;

DataOciCoreShapesShapesMaxVnicAttachmentOptions.builder()
    .build();
```


### DataOciCoreShapesShapesMemoryOptions <a name="DataOciCoreShapesShapesMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesMemoryOptions;

DataOciCoreShapesShapesMemoryOptions.builder()
    .build();
```


### DataOciCoreShapesShapesNetworkingBandwidthOptions <a name="DataOciCoreShapesShapesNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesNetworkingBandwidthOptions;

DataOciCoreShapesShapesNetworkingBandwidthOptions.builder()
    .build();
```


### DataOciCoreShapesShapesOcpuOptions <a name="DataOciCoreShapesShapesOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesOcpuOptions;

DataOciCoreShapesShapesOcpuOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptions <a name="DataOciCoreShapesShapesPlatformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptions;

DataOciCoreShapesShapesPlatformConfigOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions;

DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions;

DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions;

DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions;

DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions;

DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions;

DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions;

DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions;

DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions;

DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions.builder()
    .build();
```


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions;

DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions.builder()
    .build();
```


### DataOciCoreShapesShapesRecommendedAlternatives <a name="DataOciCoreShapesShapesRecommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesRecommendedAlternatives;

DataOciCoreShapesShapesRecommendedAlternatives.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreShapesFilterList <a name="DataOciCoreShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesFilterList;

new DataOciCoreShapesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get"></a>

```java
public DataOciCoreShapesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>>

---


### DataOciCoreShapesFilterOutputReference <a name="DataOciCoreShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesFilterOutputReference;

new DataOciCoreShapesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesFilter">DataOciCoreShapesFilter</a>

---


### DataOciCoreShapesShapesList <a name="DataOciCoreShapesShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesList;

new DataOciCoreShapesShapesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get"></a>

```java
public DataOciCoreShapesShapesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsList <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList;

new DataOciCoreShapesShapesMaxVnicAttachmentOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get"></a>

```java
public DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference <a name="DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference;

new DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu">defaultPerOcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpu`<sup>Required</sup> <a name="defaultPerOcpu" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu"></a>

```java
public java.lang.Number getDefaultPerOcpu();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesMaxVnicAttachmentOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptions">DataOciCoreShapesShapesMaxVnicAttachmentOptions</a>

---


### DataOciCoreShapesShapesMemoryOptionsList <a name="DataOciCoreShapesShapesMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesMemoryOptionsList;

new DataOciCoreShapesShapesMemoryOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get"></a>

```java
public DataOciCoreShapesShapesMemoryOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesMemoryOptionsOutputReference <a name="DataOciCoreShapesShapesMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesMemoryOptionsOutputReference;

new DataOciCoreShapesShapesMemoryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">defaultPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs">maxInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs">maxPerNumaNodeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs">maxPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs">minInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs">minPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpuInGbs`<sup>Required</sup> <a name="defaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```java
public java.lang.Number getDefaultPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `maxInGbs`<sup>Required</sup> <a name="maxInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxInGbs"></a>

```java
public java.lang.Number getMaxInGbs();
```

- *Type:* java.lang.Number

---

##### `maxPerNumaNodeInGbs`<sup>Required</sup> <a name="maxPerNumaNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs"></a>

```java
public java.lang.Number getMaxPerNumaNodeInGbs();
```

- *Type:* java.lang.Number

---

##### `maxPerOcpuInGbs`<sup>Required</sup> <a name="maxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```java
public java.lang.Number getMaxPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `minInGbs`<sup>Required</sup> <a name="minInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minInGbs"></a>

```java
public java.lang.Number getMinInGbs();
```

- *Type:* java.lang.Number

---

##### `minPerOcpuInGbs`<sup>Required</sup> <a name="minPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```java
public java.lang.Number getMinPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesMemoryOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptions">DataOciCoreShapesShapesMemoryOptions</a>

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsList <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList;

new DataOciCoreShapesShapesNetworkingBandwidthOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get"></a>

```java
public DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference <a name="DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference;

new DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">defaultPerOcpuInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps">maxInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps">minInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpuInGbps`<sup>Required</sup> <a name="defaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```java
public java.lang.Number getDefaultPerOcpuInGbps();
```

- *Type:* java.lang.Number

---

##### `maxInGbps`<sup>Required</sup> <a name="maxInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```java
public java.lang.Number getMaxInGbps();
```

- *Type:* java.lang.Number

---

##### `minInGbps`<sup>Required</sup> <a name="minInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```java
public java.lang.Number getMinInGbps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesNetworkingBandwidthOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptions">DataOciCoreShapesShapesNetworkingBandwidthOptions</a>

---


### DataOciCoreShapesShapesOcpuOptionsList <a name="DataOciCoreShapesShapesOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesOcpuOptionsList;

new DataOciCoreShapesShapesOcpuOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get"></a>

```java
public DataOciCoreShapesShapesOcpuOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesOcpuOptionsOutputReference <a name="DataOciCoreShapesShapesOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesOcpuOptionsOutputReference;

new DataOciCoreShapesShapesOcpuOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode">maxPerNumaNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `maxPerNumaNode`<sup>Required</sup> <a name="maxPerNumaNode" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.maxPerNumaNode"></a>

```java
public java.lang.Number getMaxPerNumaNode();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesOcpuOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptions">DataOciCoreShapesShapesOcpuOptions</a>

---


### DataOciCoreShapesShapesOutputReference <a name="DataOciCoreShapesShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesOutputReference;

new DataOciCoreShapesShapesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations">baselineOcpuUtilizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType">billingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription">gpuDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus">gpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance">isBilledForStoppedInstance</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible">isFlexible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported">isLiveMigrationSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore">isSubcore</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription">localDiskDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks">localDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs">localDisksTotalSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions">maxVnicAttachmentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments">maxVnicAttachments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions">memoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired">minTotalBaselineOcpusRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions">networkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts">networkPorts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions">ocpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions">platformConfigOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription">processorDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames">quotaNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps">rdmaBandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts">rdmaPorts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives">recommendedAlternatives</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes">resizeCompatibleShapes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baselineOcpuUtilizations`<sup>Required</sup> <a name="baselineOcpuUtilizations" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.baselineOcpuUtilizations"></a>

```java
public java.util.List<java.lang.String> getBaselineOcpuUtilizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.billingType"></a>

```java
public java.lang.String getBillingType();
```

- *Type:* java.lang.String

---

##### `gpuDescription`<sup>Required</sup> <a name="gpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpuDescription"></a>

```java
public java.lang.String getGpuDescription();
```

- *Type:* java.lang.String

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.gpus"></a>

```java
public java.lang.Number getGpus();
```

- *Type:* java.lang.Number

---

##### `isBilledForStoppedInstance`<sup>Required</sup> <a name="isBilledForStoppedInstance" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isBilledForStoppedInstance"></a>

```java
public IResolvable getIsBilledForStoppedInstance();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isFlexible"></a>

```java
public IResolvable getIsFlexible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLiveMigrationSupported`<sup>Required</sup> <a name="isLiveMigrationSupported" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isLiveMigrationSupported"></a>

```java
public IResolvable getIsLiveMigrationSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSubcore`<sup>Required</sup> <a name="isSubcore" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.isSubcore"></a>

```java
public IResolvable getIsSubcore();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `localDiskDescription`<sup>Required</sup> <a name="localDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDiskDescription"></a>

```java
public java.lang.String getLocalDiskDescription();
```

- *Type:* java.lang.String

---

##### `localDisks`<sup>Required</sup> <a name="localDisks" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisks"></a>

```java
public java.lang.Number getLocalDisks();
```

- *Type:* java.lang.Number

---

##### `localDisksTotalSizeInGbs`<sup>Required</sup> <a name="localDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.localDisksTotalSizeInGbs"></a>

```java
public java.lang.Number getLocalDisksTotalSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `maxVnicAttachmentOptions`<sup>Required</sup> <a name="maxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachmentOptions"></a>

```java
public DataOciCoreShapesShapesMaxVnicAttachmentOptionsList getMaxVnicAttachmentOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMaxVnicAttachmentOptionsList">DataOciCoreShapesShapesMaxVnicAttachmentOptionsList</a>

---

##### `maxVnicAttachments`<sup>Required</sup> <a name="maxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.maxVnicAttachments"></a>

```java
public java.lang.Number getMaxVnicAttachments();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memoryOptions`<sup>Required</sup> <a name="memoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.memoryOptions"></a>

```java
public DataOciCoreShapesShapesMemoryOptionsList getMemoryOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesMemoryOptionsList">DataOciCoreShapesShapesMemoryOptionsList</a>

---

##### `minTotalBaselineOcpusRequired`<sup>Required</sup> <a name="minTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.minTotalBaselineOcpusRequired"></a>

```java
public java.lang.Number getMinTotalBaselineOcpusRequired();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthInGbps"></a>

```java
public java.lang.Number getNetworkingBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `networkingBandwidthOptions`<sup>Required</sup> <a name="networkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkingBandwidthOptions"></a>

```java
public DataOciCoreShapesShapesNetworkingBandwidthOptionsList getNetworkingBandwidthOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesNetworkingBandwidthOptionsList">DataOciCoreShapesShapesNetworkingBandwidthOptionsList</a>

---

##### `networkPorts`<sup>Required</sup> <a name="networkPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.networkPorts"></a>

```java
public java.lang.Number getNetworkPorts();
```

- *Type:* java.lang.Number

---

##### `ocpuOptions`<sup>Required</sup> <a name="ocpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpuOptions"></a>

```java
public DataOciCoreShapesShapesOcpuOptionsList getOcpuOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOcpuOptionsList">DataOciCoreShapesShapesOcpuOptionsList</a>

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `platformConfigOptions`<sup>Required</sup> <a name="platformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.platformConfigOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsList getPlatformConfigOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsList</a>

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.processorDescription"></a>

```java
public java.lang.String getProcessorDescription();
```

- *Type:* java.lang.String

---

##### `quotaNames`<sup>Required</sup> <a name="quotaNames" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.quotaNames"></a>

```java
public java.util.List<java.lang.String> getQuotaNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rdmaBandwidthInGbps`<sup>Required</sup> <a name="rdmaBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaBandwidthInGbps"></a>

```java
public java.lang.Number getRdmaBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `rdmaPorts`<sup>Required</sup> <a name="rdmaPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.rdmaPorts"></a>

```java
public java.lang.Number getRdmaPorts();
```

- *Type:* java.lang.Number

---

##### `recommendedAlternatives`<sup>Required</sup> <a name="recommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.recommendedAlternatives"></a>

```java
public DataOciCoreShapesShapesRecommendedAlternativesList getRecommendedAlternatives();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList">DataOciCoreShapesShapesRecommendedAlternativesList</a>

---

##### `resizeCompatibleShapes`<sup>Required</sup> <a name="resizeCompatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.resizeCompatibleShapes"></a>

```java
public java.util.List<java.lang.String> getResizeCompatibleShapes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapes">DataOciCoreShapesShapes</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions">accessControlServiceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions">inputOutputMemoryManagementUnitOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions">measuredBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions">memoryEncryptionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions">numaNodesPerSocketPlatformOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions">percentageOfCoresEnabledOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions">secureBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions">symmetricMultiThreadingOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions">trustedPlatformModuleOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions">virtualInstructionsOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessControlServiceOptions`<sup>Required</sup> <a name="accessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList getAccessControlServiceOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsAccessControlServiceOptionsList</a>

---

##### `inputOutputMemoryManagementUnitOptions`<sup>Required</sup> <a name="inputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList getInputOutputMemoryManagementUnitOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a>

---

##### `measuredBootOptions`<sup>Required</sup> <a name="measuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList getMeasuredBootOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMeasuredBootOptionsList</a>

---

##### `memoryEncryptionOptions`<sup>Required</sup> <a name="memoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList getMemoryEncryptionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a>

---

##### `numaNodesPerSocketPlatformOptions`<sup>Required</sup> <a name="numaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList getNumaNodesPerSocketPlatformOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a>

---

##### `percentageOfCoresEnabledOptions`<sup>Required</sup> <a name="percentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList getPercentageOfCoresEnabledOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a>

---

##### `secureBootOptions`<sup>Required</sup> <a name="secureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.secureBootOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList getSecureBootOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList</a>

---

##### `symmetricMultiThreadingOptions`<sup>Required</sup> <a name="symmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList getSymmetricMultiThreadingOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a>

---

##### `trustedPlatformModuleOptions`<sup>Required</sup> <a name="trustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList getTrustedPlatformModuleOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualInstructionsOptions`<sup>Required</sup> <a name="virtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList getVirtualInstructionsOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptions">DataOciCoreShapesShapesPlatformConfigOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue"></a>

```java
public java.lang.Number getDefaultValue();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapesShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapesShapesPlatformConfigOptionsSecureBootOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapesShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapesShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a>

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList;

new DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference <a name="DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference;

new DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapesShapesPlatformConfigOptionsVirtualInstructionsOptions</a>

---


### DataOciCoreShapesShapesRecommendedAlternativesList <a name="DataOciCoreShapesShapesRecommendedAlternativesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesRecommendedAlternativesList;

new DataOciCoreShapesShapesRecommendedAlternativesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get"></a>

```java
public DataOciCoreShapesShapesRecommendedAlternativesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapesShapesRecommendedAlternativesOutputReference <a name="DataOciCoreShapesShapesRecommendedAlternativesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference;

new DataOciCoreShapesShapesRecommendedAlternativesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternativesOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapesShapesRecommendedAlternatives getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShapes.DataOciCoreShapesShapesRecommendedAlternatives">DataOciCoreShapesShapesRecommendedAlternatives</a>

---



