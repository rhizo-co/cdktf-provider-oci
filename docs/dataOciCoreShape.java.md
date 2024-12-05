# `dataOciCoreShape` Submodule <a name="`dataOciCoreShape` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreShape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreShape <a name="DataOciCoreShape" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape oci_core_shape}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShape;

DataOciCoreShape.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciCoreShapeFilter>)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#compartment_id DataOciCoreShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#availability_domain DataOciCoreShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#id DataOciCoreShape#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#image_id DataOciCoreShape#image_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#compartment_id DataOciCoreShape#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#availability_domain DataOciCoreShape#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#filter DataOciCoreShape#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#id DataOciCoreShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#image_id DataOciCoreShape#image_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetImageId">resetImageId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreShapeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetId"></a>

```java
public void resetId()
```

##### `resetImageId` <a name="resetImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.resetImageId"></a>

```java
public void resetImageId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreShape resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShape;

DataOciCoreShape.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShape;

DataOciCoreShape.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShape;

DataOciCoreShape.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShape;

DataOciCoreShape.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreShape.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreShape resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreShape to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreShape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreShape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList">DataOciCoreShapeFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.shapes">shapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList">DataOciCoreShapeShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.filter"></a>

```java
public DataOciCoreShapeFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList">DataOciCoreShapeFilterList</a>

---

##### `shapes`<sup>Required</sup> <a name="shapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.shapes"></a>

```java
public DataOciCoreShapeShapesList getShapes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList">DataOciCoreShapeShapesList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShape.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreShapeConfig <a name="DataOciCoreShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeConfig;

DataOciCoreShapeConfig.builder()
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
//  .filter(java.util.List<DataOciCoreShapeFilter>)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#compartment_id DataOciCoreShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#availability_domain DataOciCoreShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#id DataOciCoreShape#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#image_id DataOciCoreShape#image_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#compartment_id DataOciCoreShape#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#availability_domain DataOciCoreShape#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#filter DataOciCoreShape#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#id DataOciCoreShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#image_id DataOciCoreShape#image_id}.

---

### DataOciCoreShapeFilter <a name="DataOciCoreShapeFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeFilter;

DataOciCoreShapeFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#name DataOciCoreShape#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#values DataOciCoreShape#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#regex DataOciCoreShape#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#name DataOciCoreShape#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#values DataOciCoreShape#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_shape#regex DataOciCoreShape#regex}.

---

### DataOciCoreShapeShapes <a name="DataOciCoreShapeShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapes;

DataOciCoreShapeShapes.builder()
    .build();
```


### DataOciCoreShapeShapesMaxVnicAttachmentOptions <a name="DataOciCoreShapeShapesMaxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesMaxVnicAttachmentOptions;

DataOciCoreShapeShapesMaxVnicAttachmentOptions.builder()
    .build();
```


### DataOciCoreShapeShapesMemoryOptions <a name="DataOciCoreShapeShapesMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesMemoryOptions;

DataOciCoreShapeShapesMemoryOptions.builder()
    .build();
```


### DataOciCoreShapeShapesNetworkingBandwidthOptions <a name="DataOciCoreShapeShapesNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesNetworkingBandwidthOptions;

DataOciCoreShapeShapesNetworkingBandwidthOptions.builder()
    .build();
```


### DataOciCoreShapeShapesOcpuOptions <a name="DataOciCoreShapeShapesOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesOcpuOptions;

DataOciCoreShapeShapesOcpuOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptions <a name="DataOciCoreShapeShapesPlatformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptions;

DataOciCoreShapeShapesPlatformConfigOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions;

DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions;

DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions;

DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions;

DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions;

DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions;

DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions;

DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions;

DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions;

DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions.builder()
    .build();
```


### DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions <a name="DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions;

DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions.builder()
    .build();
```


### DataOciCoreShapeShapesRecommendedAlternatives <a name="DataOciCoreShapeShapesRecommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternatives"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternatives.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesRecommendedAlternatives;

DataOciCoreShapeShapesRecommendedAlternatives.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreShapeFilterList <a name="DataOciCoreShapeFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeFilterList;

new DataOciCoreShapeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.get"></a>

```java
public DataOciCoreShapeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>>

---


### DataOciCoreShapeFilterOutputReference <a name="DataOciCoreShapeFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeFilterOutputReference;

new DataOciCoreShapeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeFilter">DataOciCoreShapeFilter</a>

---


### DataOciCoreShapeShapesList <a name="DataOciCoreShapeShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesList;

new DataOciCoreShapeShapesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.get"></a>

```java
public DataOciCoreShapeShapesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesMaxVnicAttachmentOptionsList <a name="DataOciCoreShapeShapesMaxVnicAttachmentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList;

new DataOciCoreShapeShapesMaxVnicAttachmentOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.get"></a>

```java
public DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference <a name="DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference;

new DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu">defaultPerOcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptions">DataOciCoreShapeShapesMaxVnicAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpu`<sup>Required</sup> <a name="defaultPerOcpu" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.defaultPerOcpu"></a>

```java
public java.lang.Number getDefaultPerOcpu();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesMaxVnicAttachmentOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptions">DataOciCoreShapeShapesMaxVnicAttachmentOptions</a>

---


### DataOciCoreShapeShapesMemoryOptionsList <a name="DataOciCoreShapeShapesMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesMemoryOptionsList;

new DataOciCoreShapeShapesMemoryOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.get"></a>

```java
public DataOciCoreShapeShapesMemoryOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesMemoryOptionsOutputReference <a name="DataOciCoreShapeShapesMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesMemoryOptionsOutputReference;

new DataOciCoreShapeShapesMemoryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">defaultPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.maxInGbs">maxInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs">maxPerNumaNodeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs">maxPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.minInGbs">minInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs">minPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptions">DataOciCoreShapeShapesMemoryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpuInGbs`<sup>Required</sup> <a name="defaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```java
public java.lang.Number getDefaultPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `maxInGbs`<sup>Required</sup> <a name="maxInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.maxInGbs"></a>

```java
public java.lang.Number getMaxInGbs();
```

- *Type:* java.lang.Number

---

##### `maxPerNumaNodeInGbs`<sup>Required</sup> <a name="maxPerNumaNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.maxPerNumaNodeInGbs"></a>

```java
public java.lang.Number getMaxPerNumaNodeInGbs();
```

- *Type:* java.lang.Number

---

##### `maxPerOcpuInGbs`<sup>Required</sup> <a name="maxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```java
public java.lang.Number getMaxPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `minInGbs`<sup>Required</sup> <a name="minInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.minInGbs"></a>

```java
public java.lang.Number getMinInGbs();
```

- *Type:* java.lang.Number

---

##### `minPerOcpuInGbs`<sup>Required</sup> <a name="minPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```java
public java.lang.Number getMinPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesMemoryOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptions">DataOciCoreShapeShapesMemoryOptions</a>

---


### DataOciCoreShapeShapesNetworkingBandwidthOptionsList <a name="DataOciCoreShapeShapesNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList;

new DataOciCoreShapeShapesNetworkingBandwidthOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.get"></a>

```java
public DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference <a name="DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference;

new DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">defaultPerOcpuInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps">maxInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps">minInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptions">DataOciCoreShapeShapesNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpuInGbps`<sup>Required</sup> <a name="defaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```java
public java.lang.Number getDefaultPerOcpuInGbps();
```

- *Type:* java.lang.Number

---

##### `maxInGbps`<sup>Required</sup> <a name="maxInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```java
public java.lang.Number getMaxInGbps();
```

- *Type:* java.lang.Number

---

##### `minInGbps`<sup>Required</sup> <a name="minInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```java
public java.lang.Number getMinInGbps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesNetworkingBandwidthOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptions">DataOciCoreShapeShapesNetworkingBandwidthOptions</a>

---


### DataOciCoreShapeShapesOcpuOptionsList <a name="DataOciCoreShapeShapesOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesOcpuOptionsList;

new DataOciCoreShapeShapesOcpuOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.get"></a>

```java
public DataOciCoreShapeShapesOcpuOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesOcpuOptionsOutputReference <a name="DataOciCoreShapeShapesOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesOcpuOptionsOutputReference;

new DataOciCoreShapeShapesOcpuOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.maxPerNumaNode">maxPerNumaNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptions">DataOciCoreShapeShapesOcpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `maxPerNumaNode`<sup>Required</sup> <a name="maxPerNumaNode" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.maxPerNumaNode"></a>

```java
public java.lang.Number getMaxPerNumaNode();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesOcpuOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptions">DataOciCoreShapeShapesOcpuOptions</a>

---


### DataOciCoreShapeShapesOutputReference <a name="DataOciCoreShapeShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesOutputReference;

new DataOciCoreShapeShapesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.baselineOcpuUtilizations">baselineOcpuUtilizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.billingType">billingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.gpuDescription">gpuDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.gpus">gpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isBilledForStoppedInstance">isBilledForStoppedInstance</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isFlexible">isFlexible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isLiveMigrationSupported">isLiveMigrationSupported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isSubcore">isSubcore</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.localDiskDescription">localDiskDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.localDisks">localDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.localDisksTotalSizeInGbs">localDisksTotalSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.maxVnicAttachmentOptions">maxVnicAttachmentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList">DataOciCoreShapeShapesMaxVnicAttachmentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.maxVnicAttachments">maxVnicAttachments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.memoryOptions">memoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList">DataOciCoreShapeShapesMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.minTotalBaselineOcpusRequired">minTotalBaselineOcpusRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.networkingBandwidthOptions">networkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList">DataOciCoreShapeShapesNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.networkPorts">networkPorts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.ocpuOptions">ocpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList">DataOciCoreShapeShapesOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.platformConfigOptions">platformConfigOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.processorDescription">processorDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.quotaNames">quotaNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.rdmaBandwidthInGbps">rdmaBandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.rdmaPorts">rdmaPorts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.recommendedAlternatives">recommendedAlternatives</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList">DataOciCoreShapeShapesRecommendedAlternativesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.resizeCompatibleShapes">resizeCompatibleShapes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapes">DataOciCoreShapeShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baselineOcpuUtilizations`<sup>Required</sup> <a name="baselineOcpuUtilizations" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.baselineOcpuUtilizations"></a>

```java
public java.util.List<java.lang.String> getBaselineOcpuUtilizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.billingType"></a>

```java
public java.lang.String getBillingType();
```

- *Type:* java.lang.String

---

##### `gpuDescription`<sup>Required</sup> <a name="gpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.gpuDescription"></a>

```java
public java.lang.String getGpuDescription();
```

- *Type:* java.lang.String

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.gpus"></a>

```java
public java.lang.Number getGpus();
```

- *Type:* java.lang.Number

---

##### `isBilledForStoppedInstance`<sup>Required</sup> <a name="isBilledForStoppedInstance" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isBilledForStoppedInstance"></a>

```java
public IResolvable getIsBilledForStoppedInstance();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isFlexible"></a>

```java
public IResolvable getIsFlexible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLiveMigrationSupported`<sup>Required</sup> <a name="isLiveMigrationSupported" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isLiveMigrationSupported"></a>

```java
public IResolvable getIsLiveMigrationSupported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSubcore`<sup>Required</sup> <a name="isSubcore" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.isSubcore"></a>

```java
public IResolvable getIsSubcore();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `localDiskDescription`<sup>Required</sup> <a name="localDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.localDiskDescription"></a>

```java
public java.lang.String getLocalDiskDescription();
```

- *Type:* java.lang.String

---

##### `localDisks`<sup>Required</sup> <a name="localDisks" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.localDisks"></a>

```java
public java.lang.Number getLocalDisks();
```

- *Type:* java.lang.Number

---

##### `localDisksTotalSizeInGbs`<sup>Required</sup> <a name="localDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.localDisksTotalSizeInGbs"></a>

```java
public java.lang.Number getLocalDisksTotalSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `maxVnicAttachmentOptions`<sup>Required</sup> <a name="maxVnicAttachmentOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.maxVnicAttachmentOptions"></a>

```java
public DataOciCoreShapeShapesMaxVnicAttachmentOptionsList getMaxVnicAttachmentOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMaxVnicAttachmentOptionsList">DataOciCoreShapeShapesMaxVnicAttachmentOptionsList</a>

---

##### `maxVnicAttachments`<sup>Required</sup> <a name="maxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.maxVnicAttachments"></a>

```java
public java.lang.Number getMaxVnicAttachments();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memoryOptions`<sup>Required</sup> <a name="memoryOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.memoryOptions"></a>

```java
public DataOciCoreShapeShapesMemoryOptionsList getMemoryOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesMemoryOptionsList">DataOciCoreShapeShapesMemoryOptionsList</a>

---

##### `minTotalBaselineOcpusRequired`<sup>Required</sup> <a name="minTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.minTotalBaselineOcpusRequired"></a>

```java
public java.lang.Number getMinTotalBaselineOcpusRequired();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.networkingBandwidthInGbps"></a>

```java
public java.lang.Number getNetworkingBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `networkingBandwidthOptions`<sup>Required</sup> <a name="networkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.networkingBandwidthOptions"></a>

```java
public DataOciCoreShapeShapesNetworkingBandwidthOptionsList getNetworkingBandwidthOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesNetworkingBandwidthOptionsList">DataOciCoreShapeShapesNetworkingBandwidthOptionsList</a>

---

##### `networkPorts`<sup>Required</sup> <a name="networkPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.networkPorts"></a>

```java
public java.lang.Number getNetworkPorts();
```

- *Type:* java.lang.Number

---

##### `ocpuOptions`<sup>Required</sup> <a name="ocpuOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.ocpuOptions"></a>

```java
public DataOciCoreShapeShapesOcpuOptionsList getOcpuOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOcpuOptionsList">DataOciCoreShapeShapesOcpuOptionsList</a>

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `platformConfigOptions`<sup>Required</sup> <a name="platformConfigOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.platformConfigOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsList getPlatformConfigOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsList</a>

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.processorDescription"></a>

```java
public java.lang.String getProcessorDescription();
```

- *Type:* java.lang.String

---

##### `quotaNames`<sup>Required</sup> <a name="quotaNames" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.quotaNames"></a>

```java
public java.util.List<java.lang.String> getQuotaNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rdmaBandwidthInGbps`<sup>Required</sup> <a name="rdmaBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.rdmaBandwidthInGbps"></a>

```java
public java.lang.Number getRdmaBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `rdmaPorts`<sup>Required</sup> <a name="rdmaPorts" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.rdmaPorts"></a>

```java
public java.lang.Number getRdmaPorts();
```

- *Type:* java.lang.Number

---

##### `recommendedAlternatives`<sup>Required</sup> <a name="recommendedAlternatives" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.recommendedAlternatives"></a>

```java
public DataOciCoreShapeShapesRecommendedAlternativesList getRecommendedAlternatives();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList">DataOciCoreShapeShapesRecommendedAlternativesList</a>

---

##### `resizeCompatibleShapes`<sup>Required</sup> <a name="resizeCompatibleShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.resizeCompatibleShapes"></a>

```java
public java.util.List<java.lang.String> getResizeCompatibleShapes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapes">DataOciCoreShapeShapes</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions">DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions">DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions">DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions">DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions">DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions">accessControlServiceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions">inputOutputMemoryManagementUnitOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions">measuredBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions">memoryEncryptionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions">numaNodesPerSocketPlatformOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions">percentageOfCoresEnabledOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.secureBootOptions">secureBootOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions">symmetricMultiThreadingOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions">trustedPlatformModuleOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions">virtualInstructionsOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptions">DataOciCoreShapeShapesPlatformConfigOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessControlServiceOptions`<sup>Required</sup> <a name="accessControlServiceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.accessControlServiceOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList getAccessControlServiceOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsAccessControlServiceOptionsList</a>

---

##### `inputOutputMemoryManagementUnitOptions`<sup>Required</sup> <a name="inputOutputMemoryManagementUnitOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.inputOutputMemoryManagementUnitOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList getInputOutputMemoryManagementUnitOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsInputOutputMemoryManagementUnitOptionsList</a>

---

##### `measuredBootOptions`<sup>Required</sup> <a name="measuredBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.measuredBootOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList getMeasuredBootOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsMeasuredBootOptionsList</a>

---

##### `memoryEncryptionOptions`<sup>Required</sup> <a name="memoryEncryptionOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.memoryEncryptionOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList getMemoryEncryptionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsMemoryEncryptionOptionsList</a>

---

##### `numaNodesPerSocketPlatformOptions`<sup>Required</sup> <a name="numaNodesPerSocketPlatformOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.numaNodesPerSocketPlatformOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList getNumaNodesPerSocketPlatformOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsNumaNodesPerSocketPlatformOptionsList</a>

---

##### `percentageOfCoresEnabledOptions`<sup>Required</sup> <a name="percentageOfCoresEnabledOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.percentageOfCoresEnabledOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList getPercentageOfCoresEnabledOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList</a>

---

##### `secureBootOptions`<sup>Required</sup> <a name="secureBootOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.secureBootOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList getSecureBootOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList</a>

---

##### `symmetricMultiThreadingOptions`<sup>Required</sup> <a name="symmetricMultiThreadingOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.symmetricMultiThreadingOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList getSymmetricMultiThreadingOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList</a>

---

##### `trustedPlatformModuleOptions`<sup>Required</sup> <a name="trustedPlatformModuleOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.trustedPlatformModuleOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList getTrustedPlatformModuleOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualInstructionsOptions`<sup>Required</sup> <a name="virtualInstructionsOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.virtualInstructionsOptions"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList getVirtualInstructionsOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList">DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptions">DataOciCoreShapeShapesPlatformConfigOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.defaultValue"></a>

```java
public java.lang.Number getDefaultValue();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions">DataOciCoreShapeShapesPlatformConfigOptionsPercentageOfCoresEnabledOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions">DataOciCoreShapeShapesPlatformConfigOptionsSecureBootOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions">DataOciCoreShapeShapesPlatformConfigOptionsSymmetricMultiThreadingOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions">DataOciCoreShapeShapesPlatformConfigOptionsTrustedPlatformModuleOptions</a>

---


### DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList <a name="DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList;

new DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference <a name="DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference;

new DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled">isDefaultEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.allowedValues"></a>

```java
public BooleanList getAllowedValues();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `isDefaultEnabled`<sup>Required</sup> <a name="isDefaultEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.isDefaultEnabled"></a>

```java
public IResolvable getIsDefaultEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions">DataOciCoreShapeShapesPlatformConfigOptionsVirtualInstructionsOptions</a>

---


### DataOciCoreShapeShapesRecommendedAlternativesList <a name="DataOciCoreShapeShapesRecommendedAlternativesList" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesRecommendedAlternativesList;

new DataOciCoreShapeShapesRecommendedAlternativesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.get"></a>

```java
public DataOciCoreShapeShapesRecommendedAlternativesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreShapeShapesRecommendedAlternativesOutputReference <a name="DataOciCoreShapeShapesRecommendedAlternativesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_shape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference;

new DataOciCoreShapeShapesRecommendedAlternativesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternatives">DataOciCoreShapeShapesRecommendedAlternatives</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternativesOutputReference.property.internalValue"></a>

```java
public DataOciCoreShapeShapesRecommendedAlternatives getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreShape.DataOciCoreShapeShapesRecommendedAlternatives">DataOciCoreShapeShapesRecommendedAlternatives</a>

---



