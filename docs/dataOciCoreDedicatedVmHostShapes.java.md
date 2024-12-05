# `dataOciCoreDedicatedVmHostShapes` Submodule <a name="`dataOciCoreDedicatedVmHostShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostShapes <a name="DataOciCoreDedicatedVmHostShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes oci_core_dedicated_vm_host_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapes;

DataOciCoreDedicatedVmHostShapes.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciCoreDedicatedVmHostShapesFilter>)
//  .id(java.lang.String)
//  .instanceShapeName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#compartment_id DataOciCoreDedicatedVmHostShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#availability_domain DataOciCoreDedicatedVmHostShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#id DataOciCoreDedicatedVmHostShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.instanceShapeName">instanceShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#instance_shape_name DataOciCoreDedicatedVmHostShapes#instance_shape_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#compartment_id DataOciCoreDedicatedVmHostShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#availability_domain DataOciCoreDedicatedVmHostShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#filter DataOciCoreDedicatedVmHostShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#id DataOciCoreDedicatedVmHostShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceShapeName`<sup>Optional</sup> <a name="instanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.Initializer.parameter.instanceShapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#instance_shape_name DataOciCoreDedicatedVmHostShapes#instance_shape_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetInstanceShapeName">resetInstanceShapeName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreDedicatedVmHostShapesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceShapeName` <a name="resetInstanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.resetInstanceShapeName"></a>

```java
public void resetInstanceShapeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapes;

DataOciCoreDedicatedVmHostShapes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapes;

DataOciCoreDedicatedVmHostShapes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapes;

DataOciCoreDedicatedVmHostShapes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapes;

DataOciCoreDedicatedVmHostShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreDedicatedVmHostShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreDedicatedVmHostShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreDedicatedVmHostShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.dedicatedVmHostShapes">dedicatedVmHostShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList">DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList">DataOciCoreDedicatedVmHostShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.instanceShapeNameInput">instanceShapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.instanceShapeName">instanceShapeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dedicatedVmHostShapes`<sup>Required</sup> <a name="dedicatedVmHostShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.dedicatedVmHostShapes"></a>

```java
public DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList getDedicatedVmHostShapes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList">DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.filter"></a>

```java
public DataOciCoreDedicatedVmHostShapesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList">DataOciCoreDedicatedVmHostShapesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceShapeNameInput`<sup>Optional</sup> <a name="instanceShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.instanceShapeNameInput"></a>

```java
public java.lang.String getInstanceShapeNameInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceShapeName`<sup>Required</sup> <a name="instanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.instanceShapeName"></a>

```java
public java.lang.String getInstanceShapeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostShapesConfig <a name="DataOciCoreDedicatedVmHostShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesConfig;

DataOciCoreDedicatedVmHostShapesConfig.builder()
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
//  .filter(java.util.List<DataOciCoreDedicatedVmHostShapesFilter>)
//  .id(java.lang.String)
//  .instanceShapeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#compartment_id DataOciCoreDedicatedVmHostShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#availability_domain DataOciCoreDedicatedVmHostShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#id DataOciCoreDedicatedVmHostShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.instanceShapeName">instanceShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#instance_shape_name DataOciCoreDedicatedVmHostShapes#instance_shape_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#compartment_id DataOciCoreDedicatedVmHostShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#availability_domain DataOciCoreDedicatedVmHostShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#filter DataOciCoreDedicatedVmHostShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#id DataOciCoreDedicatedVmHostShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceShapeName`<sup>Optional</sup> <a name="instanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesConfig.property.instanceShapeName"></a>

```java
public java.lang.String getInstanceShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#instance_shape_name DataOciCoreDedicatedVmHostShapes#instance_shape_name}.

---

### DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes <a name="DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes;

DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes.builder()
    .build();
```


### DataOciCoreDedicatedVmHostShapesFilter <a name="DataOciCoreDedicatedVmHostShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesFilter;

DataOciCoreDedicatedVmHostShapesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#name DataOciCoreDedicatedVmHostShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#values DataOciCoreDedicatedVmHostShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#regex DataOciCoreDedicatedVmHostShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#name DataOciCoreDedicatedVmHostShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#values DataOciCoreDedicatedVmHostShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_shapes#regex DataOciCoreDedicatedVmHostShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList <a name="DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList;

new DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.get"></a>

```java
public DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference <a name="DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference;

new DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.dedicatedVmHostShape">dedicatedVmHostShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes">DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `dedicatedVmHostShape`<sup>Required</sup> <a name="dedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.dedicatedVmHostShape"></a>

```java
public java.lang.String getDedicatedVmHostShape();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapesOutputReference.property.internalValue"></a>

```java
public DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes">DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes</a>

---


### DataOciCoreDedicatedVmHostShapesFilterList <a name="DataOciCoreDedicatedVmHostShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesFilterList;

new DataOciCoreDedicatedVmHostShapesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.get"></a>

```java
public DataOciCoreDedicatedVmHostShapesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>>

---


### DataOciCoreDedicatedVmHostShapesFilterOutputReference <a name="DataOciCoreDedicatedVmHostShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_dedicated_vm_host_shapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference;

new DataOciCoreDedicatedVmHostShapesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostShapes.DataOciCoreDedicatedVmHostShapesFilter">DataOciCoreDedicatedVmHostShapesFilter</a>

---



