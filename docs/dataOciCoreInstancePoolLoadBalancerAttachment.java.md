# `dataOciCoreInstancePoolLoadBalancerAttachment` Submodule <a name="`dataOciCoreInstancePoolLoadBalancerAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachment <a name="DataOciCoreInstancePoolLoadBalancerAttachment" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment oci_core_instance_pool_load_balancer_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_pool_load_balancer_attachment.DataOciCoreInstancePoolLoadBalancerAttachment;

DataOciCoreInstancePoolLoadBalancerAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .instancePoolId(java.lang.String)
    .instancePoolLoadBalancerAttachmentId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolLoadBalancerAttachmentId">instancePoolLoadBalancerAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}.

---

##### `instancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="instancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.instancePoolLoadBalancerAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_pool_load_balancer_attachment.DataOciCoreInstancePoolLoadBalancerAttachment;

DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_pool_load_balancer_attachment.DataOciCoreInstancePoolLoadBalancerAttachment;

DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_pool_load_balancer_attachment.DataOciCoreInstancePoolLoadBalancerAttachment;

DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_pool_load_balancer_attachment.DataOciCoreInstancePoolLoadBalancerAttachment;

DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreInstancePoolLoadBalancerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreInstancePoolLoadBalancerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstancePoolLoadBalancerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection">vnicSelection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput">instancePoolLoadBalancerAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId">instancePoolLoadBalancerAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vnicSelection`<sup>Required</sup> <a name="vnicSelection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection"></a>

```java
public java.lang.String getVnicSelection();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput"></a>

```java
public java.lang.String getInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `instancePoolLoadBalancerAttachmentIdInput`<sup>Optional</sup> <a name="instancePoolLoadBalancerAttachmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput"></a>

```java
public java.lang.String getInstancePoolLoadBalancerAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `instancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="instancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId"></a>

```java
public java.lang.String getInstancePoolLoadBalancerAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachmentConfig <a name="DataOciCoreInstancePoolLoadBalancerAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_instance_pool_load_balancer_attachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig;

DataOciCoreInstancePoolLoadBalancerAttachmentConfig.builder()
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
    .instancePoolId(java.lang.String)
    .instancePoolLoadBalancerAttachmentId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId">instancePoolLoadBalancerAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}.

---

##### `instancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="instancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId"></a>

```java
public java.lang.String getInstancePoolLoadBalancerAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



