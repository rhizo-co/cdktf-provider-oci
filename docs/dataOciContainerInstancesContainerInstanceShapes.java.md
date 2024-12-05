# `dataOciContainerInstancesContainerInstanceShapes` Submodule <a name="`dataOciContainerInstancesContainerInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstanceShapes <a name="DataOciContainerInstancesContainerInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes oci_container_instances_container_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapes;

DataOciContainerInstancesContainerInstanceShapes.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciContainerInstancesContainerInstanceShapesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#filter DataOciContainerInstancesContainerInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciContainerInstancesContainerInstanceShapesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapes;

DataOciContainerInstancesContainerInstanceShapes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapes;

DataOciContainerInstancesContainerInstanceShapes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapes;

DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapes;

DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciContainerInstancesContainerInstanceShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciContainerInstancesContainerInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.containerInstanceShapeCollection">containerInstanceShapeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList">DataOciContainerInstancesContainerInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `containerInstanceShapeCollection`<sup>Required</sup> <a name="containerInstanceShapeCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.containerInstanceShapeCollection"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList getContainerInstanceShapeCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filter"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList">DataOciContainerInstancesContainerInstanceShapesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceShapesConfig <a name="DataOciContainerInstancesContainerInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesConfig;

DataOciContainerInstancesContainerInstanceShapesConfig.builder()
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
//  .filter(java.util.List<DataOciContainerInstancesContainerInstanceShapesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#compartment_id DataOciContainerInstancesContainerInstanceShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#availability_domain DataOciContainerInstancesContainerInstanceShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#filter DataOciContainerInstancesContainerInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#id DataOciContainerInstancesContainerInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection;

DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection.builder()
    .build();
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems;

DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems.builder()
    .build();
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions;

DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions.builder()
    .build();
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions;

DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions.builder()
    .build();
```


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions;

DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions.builder()
    .build();
```


### DataOciContainerInstancesContainerInstanceShapesFilter <a name="DataOciContainerInstancesContainerInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesFilter;

DataOciContainerInstancesContainerInstanceShapesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#name DataOciContainerInstancesContainerInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#values DataOciContainerInstancesContainerInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#regex DataOciContainerInstancesContainerInstanceShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#name DataOciContainerInstancesContainerInstanceShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#values DataOciContainerInstancesContainerInstanceShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shapes#regex DataOciContainerInstancesContainerInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">defaultPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxInGbs">maxInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs">maxPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minInGbs">minInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs">minPerOcpuInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpuInGbs`<sup>Required</sup> <a name="defaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```java
public java.lang.Number getDefaultPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `maxInGbs`<sup>Required</sup> <a name="maxInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxInGbs"></a>

```java
public java.lang.Number getMaxInGbs();
```

- *Type:* java.lang.Number

---

##### `maxPerOcpuInGbs`<sup>Required</sup> <a name="maxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```java
public java.lang.Number getMaxPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `minInGbs`<sup>Required</sup> <a name="minInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minInGbs"></a>

```java
public java.lang.Number getMinInGbs();
```

- *Type:* java.lang.Number

---

##### `minPerOcpuInGbs`<sup>Required</sup> <a name="minPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```java
public java.lang.Number getMinPerOcpuInGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsOutputReference.property.internalValue"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">defaultPerOcpuInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps">maxInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps">minInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPerOcpuInGbps`<sup>Required</sup> <a name="defaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```java
public java.lang.Number getDefaultPerOcpuInGbps();
```

- *Type:* java.lang.Number

---

##### `maxInGbps`<sup>Required</sup> <a name="maxInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```java
public java.lang.Number getMaxInGbps();
```

- *Type:* java.lang.Number

---

##### `minInGbps`<sup>Required</sup> <a name="minInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```java
public java.lang.Number getMinInGbps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsOutputReference.property.internalValue"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.memoryOptions">memoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.networkingBandwidthOptions">networkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.ocpuOptions">ocpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.processorDescription">processorDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryOptions`<sup>Required</sup> <a name="memoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.memoryOptions"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList getMemoryOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsMemoryOptionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkingBandwidthOptions`<sup>Required</sup> <a name="networkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.networkingBandwidthOptions"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList getNetworkingBandwidthOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsNetworkingBandwidthOptionsList</a>

---

##### `ocpuOptions`<sup>Required</sup> <a name="ocpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.ocpuOptions"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList getOcpuOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOcpuOptionsList</a>

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.processorDescription"></a>

```java
public java.lang.String getProcessorDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItems</a>

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference;

new DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.items"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollectionOutputReference.property.internalValue"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection">DataOciContainerInstancesContainerInstanceShapesContainerInstanceShapeCollection</a>

---


### DataOciContainerInstancesContainerInstanceShapesFilterList <a name="DataOciContainerInstancesContainerInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesFilterList;

new DataOciContainerInstancesContainerInstanceShapesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get"></a>

```java
public DataOciContainerInstancesContainerInstanceShapesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>>

---


### DataOciContainerInstancesContainerInstanceShapesFilterOutputReference <a name="DataOciContainerInstancesContainerInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_container_instances_container_instance_shapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference;

new DataOciContainerInstancesContainerInstanceShapesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShapes.DataOciContainerInstancesContainerInstanceShapesFilter">DataOciContainerInstancesContainerInstanceShapesFilter</a>

---



